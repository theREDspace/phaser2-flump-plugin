const path = require("path");

module.exports = env => {
    return {
        stats: 'errors-only',
        entry: path.join(__dirname, "./src/index.js"),
        output: {
            path: path.join(__dirname, "dist"),
            filename: env.dist ? "phaser2-flump-plugin.min.js" : "phaser2-flump-plugin.js"
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
        mode: env.dist ? "production" : "development",
        optimization: {
            minimize: env.dist
        },
        performance: { hints: false },
        devtool: env.debug ? 'source-map' : undefined
    };
};