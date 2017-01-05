module.exports = {
    entry: "./client/index.js",
    output: {
        path: __dirname,
        filename: "./client/bundled/bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js?$/, 
            loader: 'babel', 
            exclude: '/node_modules/ | /server/',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
};