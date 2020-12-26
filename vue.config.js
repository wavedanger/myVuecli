module.exports = {
    devServer: {
        host: 'localhost',
        port: 8081,
        proxy: {
            '/saidiaoai': {
                target: 'http://api.qingyunke.com/api.php',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '/saidiaoai': ''
                  }
            },
            '/qqlevel': {
                target: 'https://api.66mz8.com/api/qq.level.php',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '/qqlevel': ''
                  }
            },
            '/eventHistory':{
                target: 'https://v1.alapi.cn/api/eventHitory',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '/eventHistory': ''
                  }
            }
        }
    }
}