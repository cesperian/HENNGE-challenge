const path = require('path');

module.exports = {
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "emailDemo.min.js"
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    externals: {
        'materialize-css': 'materialize-css',
    }
};