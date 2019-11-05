const path = require("path");

module.exports = env => {
    return {
        stats: 'errors-only',
        entry: path.join(__dirname, "./src/index.js"),
        output: {
            path: path.join(__dirname, "build"),
            filename: env.prod ? "phaser2-flump-plugin.min.js" : "phaser2-flump-plugin.js",
            library: "phaser-flump-plugin",
            libraryTarget: "umd"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        mode: env.prod ? "production" : "development",
        optimization: {
            minimize: env.prod
        },
        performance: { hints: false },
        devtool: env.debug ? 'source-map' : undefined
    };
};