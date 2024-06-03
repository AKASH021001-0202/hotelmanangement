import express from "express";
import { rooms} from "./local-variable.js";

const roomsRouter =express.Router();

roomsRouter.get("/" ,(req , res) => {
   res.send(rooms)
})

// create a new room

roomsRouter.post("/" ,(req , res) => {
    const {body} = req;
    const newRoom = { id: Date.now(), ...body }; 
    rooms.push(newRoom); 
    res.send({ msg: "Room created"})
})


// update a room

roomsRouter.put("/:id", (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const index = rooms.findIndex((room) => room.id == id);
    if (index!== -1) {
      rooms[index] = {...rooms[index],...body };
      res.send({ msg: "Room updated" });
    } else {
      res.status(404).send({ msg: "Room not found" });
    }
  });

roomsRouter
export default  roomsRouter;
