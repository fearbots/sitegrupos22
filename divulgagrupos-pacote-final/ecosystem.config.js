module.exports = {
  apps: [
    {
      name: "divulgagrupos",
      script: "./server.js",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
