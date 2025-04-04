module.exports = {
  apps: [
    {
      name: 'crce-website',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      exec_mode: 'cluster', // Runs on multiple CPU cores
      instances: 'max', // Uses all available CPU cores
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
}

