const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const fs = require('fs')

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;
let projectData;


fs.readFile(path.resolve(__dirname, './projects.json'), (err, data) => {
    if (err) throw err;
    projectData = JSON.parse(data);

});



// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
    console.error(`Node cluster master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
    });

} else {
    const app = express();

    app.use('/projects/dino', express.static(path.resolve(__dirname, './Projects/Dino.js')));
    app.use('/projects/pi', express.static(path.resolve(__dirname, './Projects/PI')));
    app.use('/projects/dijkstra', express.static(path.resolve(__dirname, './Projects/Dijkstra')));

    app.get('/Portfolio', function(req, res) {
        res.sendFile(path.join(__dirname, '../react-ui/build/index.html'), function(err) {
          if (err) {
            res.status(500).send(err)
          }
        })
      })

      app.get('/About', function(req, res) {
        res.sendFile(path.join(__dirname, '../react-ui/build/index.html'), function(err) {
          if (err) {
            res.status(500).send(err)
          }
        })
      })


      app.get('/Resume', function(req, res) {
        res.sendFile(path.join(__dirname, '../react-ui/build/index.html'), function(err) {
          if (err) {
            res.status(500).send(err)
          }
        })
      })

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/projects', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send(projectData);
});

//   // All remaining requests return the React app, so it can handle routing.
//   app.get('*', function(request, response) {
//     response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
//   });

app.listen(PORT, function () {
    console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
});



}