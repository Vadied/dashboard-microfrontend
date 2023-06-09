const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");

const domain = process.env.PRODUCTION_DOMAIN;
const config = {
  mode: "production",
  output: { filename: "[name].[contenthash].js" },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        auth: `auth@${domain}/auth/remoteEntry.js`,
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
        dashboard: `dashboard@${domain}/dashboard/remoteEntry.js`,
      },
      shared: ["react", "react-dom"],
    }),
  ],
};

module.exports = merge(commonConfig, config);
