import webpack from 'webpack';

module.exports = {
    entry: ["./app/index.js", "whatwg-fetch"],
    output: {
        filename: "./example/assets/js/dependencies/bundle.js",
        sourceMapFilename: "./example/assets/js/dependencies/bundle.map"
    },
    devtool: '#cheap-module-source-map',
    module: {
        loaders: [
            {
                loader: 'babel',
                exclude: /node_modules/
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        })
    ]
}
