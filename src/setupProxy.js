const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        '/api',	//地址后的第一个路径
    	createProxyMiddleware({ 
                target: 'http://localhost:3000', //远程地址
                changeOrigin: true 
        	})
    	)
    
}