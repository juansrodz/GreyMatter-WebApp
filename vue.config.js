module.exports = {
  "devServer": {
    "proxy": {
      "/api": {
        "target": "https://localhost:8080",
        "pathRewrite": {
          "^/api": ""
        },
        "changeOrigin": true,
        "secure": false
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}