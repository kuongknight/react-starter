const _ = require("lodash")
const rewireReactHotLoader = require("react-app-rewire-hot-loader")

/* config-overrides.js */
module.exports = {
  webpack: function(config, env) {
    const oneOf = config.module.rules.find(rule => rule.oneOf !== undefined).oneOf
    const jsRule = _.find(oneOf, o => String(o.test) === String(/\.(js|jsx|mjs)$/))
    //add decorator
    jsRule.options.plugins = ["transform-runtime", "transform-decorators-legacy", "transform-export-extensions"]
    //add sass
    oneOf.splice(oneOf.length - 1, 0, {
      test: /\.scss$/,
      include: jsRule.include,
      use: [
        require.resolve("style-loader"),
        {
          loader: require.resolve("css-loader"),
          options: {
            sourceMap: env === "production",
            importLoaders: 1,
            localIdentName: env === "production" ? "[hash:base64:5]" : "[path][name]__[local]--[hash:base64:5]"
          }
        },
        require.resolve("sass-loader")
      ]
    })
    return rewireReactHotLoader(config, env)
  }
}
