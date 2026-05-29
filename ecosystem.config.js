module.exports = {
  apps: [
    {
      name: 'benraffstudio',
      script: '.next/standalone/server.js',
      cwd: '/var/www/benraffstudio',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        HOSTNAME: '127.0.0.1',
      },
    },
  ],
}
