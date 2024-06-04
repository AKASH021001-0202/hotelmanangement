import express from "express";
import { bookings, customers, rooms } from "./local-variable.js";
const bookingRouter = express.Router();

bookingRouter.get("/", (req, res) => {
  res.send(bookings);
});

bookingRouter.post("/", (req, res) => {
  const { body } = req;
  const newBooking = { id: `booking${Date.now()}`, ...body };
  bookings.push(newBooking);
  res.send({ msg: "Booking created" });
});

bookingRouter.put("/:id", (req, res) => {
  const { body } = req;
  const { id } = req.params;

  const index = bookings.findIndex((booking) => booking.id == id);

  bookings[index] = { ...bookings[index], ...body };

  res.send({ msg: "Booking updated" });
});

bookingRouter.delete("/:id", (req, res) => {
    const { id } = req.params;
    const index = bookings.findIndex((booking) => booking.id == id);
    if (index!== -1) {
      bookings.splice(index, 1);
      res.send({ msg: "Booking deleted" });
    } else {
      res.status(404).send({ msg: "Booking not found" });
    }
  });

  bookingRouter.patch("/assign-booking/:id", (req, res) => {
    const { body } = req;
    const { customerId, roomId } = body;
    const bookingId = req.params.id;

    // Log received data for debugging
    console.log("Received Data:");
    console.log("Request Body:", body);
    console.log("Booking ID:", bookingId);
    console.log("Customer ID:", customerId);
    console.log("Room ID:", roomId);

    // Find the booking, customer, and room objects in the arrays
    const bookingObj = bookings.find((booking) => booking.id === bookingId);
    const customerObj = customers.find((customer) => customer.id === customerId);
    const roomObj = rooms.find((room) => room.id === roomId);

    // Log found objects for debugging
    console.log("Found Objects:");
    console.log("Booking Object:", bookingObj);
    console.log("Customer Object:", customerObj);
    console.log("Room Object:", roomObj);

    // Check if all required objects exist
    if (bookingObj && customerObj && roomObj) {
        // Update the booking with customer and room information
        bookingObj.customerId = customerId;
        bookingObj.roomId = roomId;

        // Update room's bookings
        if (roomObj.id === roomId) {
            roomObj.bookings.push(bookingObj);
        } else {
            roomObj.bookings = roomObj.bookings.filter(booking => booking.id !== bookingId);
        }

        // Log success message and send response
        console.log("Booking Assignment Success!");
        res.send({ msg: "Booking Assignment Success!" });
    } else {
        // Log error message and send response
        console.log("Booking, customer, or room not found");
        res.status(400).send({ msg: "Please check booking, customer, and room ids" });
    }
});


export default bookingRouter;
