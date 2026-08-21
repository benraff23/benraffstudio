#!/usr/bin/env bash
# Deploiement BenRaff Studio — a executer SUR LE VPS, depuis /var/www/benraffstudio.
# Usage : ./deploy.sh
set -euo pipefail

APP_DIR="/var/www/benraffstudio"
PM2_APP="benraffstudio"
PM2_BIN="/root/.nvm/versions/node/v20.20.2/bin/pm2"

cd "$APP_DIR"

# reset --hard : ce checkout ne doit jamais porter d'edition locale, il est
# cense refleter origin/main a l'identique. Ca evite qu'un mode de fichier
# ou un artefact local ne bloque un futur deploiement.
echo "==> sync sur origin/main"
git fetch origin main
git reset --hard origin/main

echo "==> npm ci"
npm ci

echo "==> build"
npm run build

echo "==> copie des assets statiques vers standalone"
cp -r public .next/standalone/public
cp -r .next/static .next/standalone/.next/static

echo "==> restart pm2"
"$PM2_BIN" restart "$PM2_APP"

echo "==> deploiement termine"
"$PM2_BIN" logs "$PM2_APP" --lines 20 --nostream
