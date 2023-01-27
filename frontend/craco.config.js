
module.exports = {
    // ...
    webpack: {
      alias: { /* ... */ },
      plugins: {
        add: [ /* ... */ ],
        remove: [ /* ... */ ],
      },
      configure: { 
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            fallback: {
              "fs": false, "os": false, "path": false, "util": false, "url": false, "http": false, "stream": false, "https": false, "crypto": false, "zlib": false, "assert": false, "querystring": false, "constants": false,
              "net": false, "promisify": false, "tls": false, "child_process": false, "readline": false, "module": false
            },
            
          },
          externals: {
            'node:fs': '{}',
            'node:os': '{}',
            'node:url': '{}',
            'node:stream': '{}',
            'node:util': '{}',
            'node:promises': '{}',
            'node:path': '{}',
            'node:fs/promises': '{}'
           
          },
          module: {
            rules: [
              {
                test: /\.js$/,
                use: [{ loader: "unlazy-loader" }],
              },]
          },
        }
      }
  };