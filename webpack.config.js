module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js?$/, 
            loaders: ['babel'], 
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
};