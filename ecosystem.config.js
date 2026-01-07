module.exports = {
  apps: [
    {
      name: 'scalable-api',
      script: 'src/app.js',
      instances: 'max',
      exec_mode: 'cluster',
    },
  ],
};
