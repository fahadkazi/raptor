module.exports = {
    entry: "./js/app.js",
    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    output: {
        filename: 'app.bundle.js'
    }
}