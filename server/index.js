const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;

const projectData = [
    {
        id: 1,
        name : "Artifial Intelligent Dinos" ,
        description : "Developed an Artificial Intelligence Machine Learning Dino training application in P5.js  using the algorithm NEAT (Neuro Evolution Augmented Topology)  and JavaScript. The game resembles Google’s famous Chrome Dino game, the twist is that the Dinosaurs are controlled by an AI that keeps learning to the point it “finishes” the game.",
        url : "https://github.com/nikossoftwaredev/Artificial-Intelligent-DInos",
        ref: "/Projects/Artificial-Intelligent-DInos/"
        
    },
    {
        id: 2,
        name : "Path finding Visualization" ,
        description : "Developed a visualization of the Path Finding algorithm of Dijkstra using JavaScript and P5.js a JavaScript library for creative coding. ",
        url : "www.google.com"
    },
    {
        id: 3,
        name : "Python scraper" ,
        description : "A web scraper made in Python 3.7  for fetching information from my University’s e-secretary to get notified when the teacher releases the grade of the subject.",
        url : "www.google.com"
    },
    {
        id: 4,
        name : "Android Riddle Game" ,
        description : "Developed a Riddle Game named “Riddle Up” using Unity and C#. It consists of 20 medium to hard levels and has currently 100+ downloads.",
        url : "www.google.com"
    },
    {
        id: 5,
        name : "REST API" ,
        description : "Developed a personal API I for fetching data about my Personal Projects using JavaScript node.js and MongoDB.",
        url : "www.google.com"
    }
    
];


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

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  // Answer API requests.
  app.get('/projects', function (req, res) {
    res.set('Content-Type', 'application/json');    
    res.send(projectData);
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
  });
}
