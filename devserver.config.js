module.exports = {
    proxy: {},
    publicPaths: {
        '/dist': 'dist'
    },
    mockPath:'mock',
    app: 'index.html', // this can also be an express app
    port: 8080 // 3000 by default
};