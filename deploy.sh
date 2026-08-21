#!/usr/bin/env bash
# Deploiement BenRaff Studio — a executer SUR LE VPS, depuis /var/www/benraffstudio.
# Usage : ./deploy.sh
set -euo pipefail

APP_DIR="/var/www/benraffstudio"
PM2_APP="benraffstudio"

cd "$APP_DIR"

echo "==> git pull"
git pull origin main

echo "==> npm ci"
npm ci

echo "==> build"
npm run build

echo "==> copie des assets statiques vers standalone"
cp -r public .next/standalone/public
cp -r .next/static .next/standalone/.next/static

echo "==> restart pm2"
pm2 restart "$PM2_APP"

echo "==> deploiement termine"
pm2 logs "$PM2_APP" --lines 20 --nostream
