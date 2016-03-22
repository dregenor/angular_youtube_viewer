module.exports = {
    proxy: {},
    publicPaths: {
        '/src': 'src',
        '/dist': 'dist',
        '/node_modules': 'node_modules',
        '/angular_youtube_viewer/dist':'dist'
    },
    mockPath:'mock',
    app: 'index.html', // this can also be an express app
    port: 8080 // 3000 by default
};