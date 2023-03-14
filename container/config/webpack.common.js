module.exports = {
  module: {
    rule: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "bable-loader",
          options: {
            preset: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
