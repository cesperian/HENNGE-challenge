const path = require('path');

module.exports = {
    mode: "production",
    output: {
        filename: "emailDemo.min.js"
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    externals: {
        'materialize-css': 'materialize-css',
    }
};
