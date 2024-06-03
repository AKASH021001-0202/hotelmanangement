import express from "express";
import roomsRouter from './router/room.js'; 

const server = express();
const port = 8000;

server.use(express.json());

server.get('/', (req, res) => {
  res.send('Hello World!');
});

server.use("/rooms", roomsRouter);

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
