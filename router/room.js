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
//delete the room
roomsRouter.delete("/:roomId", (req, res) => {
    const { roomId } = req.params;
  
    const initialLength = rooms.length;
  
    rooms = rooms.filter((room) => room.id !== roomId); 
    if (rooms.length < initialLength) {
      console.log("Room deleted");
      res.send({ msg: "Room deleted" });
    } else {
      console.log("Room not found");
      res.status(404).send({ msg: "Room not found" });
    }
  });

export default  roomsRouter;
