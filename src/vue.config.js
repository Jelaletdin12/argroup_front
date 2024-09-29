module.exports = {
  devServer: {
    proxy: {
      "^/banners": {
        target: "https://argroup.com.tm",
        changeOrigin: true,
      },
    },
  },
};
