const path = require('path');

module.exports = {
    mode: "development",
    devtool:'inline-source-map',
    entry: {
        index : './src/index.js',
        homepage: './src/homepage.js',
        menu: './src/menu.js',
    },
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                exclude: '/node-modules/',
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type:'asset/resource',
                exclude:'/node-modules/',
                use: 
                    {
                    loader: 'url-loader',
                    }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};