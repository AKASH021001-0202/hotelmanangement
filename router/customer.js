import express from 'express';
import { bookings, customers, rooms } from './local-variable.js'; 

const customerRouter= express.Router();

// GET ALL CUSTOMER
customerRouter.get('/', (req, res)=>{
    res.send(customers)
})

// FILTER BY USING BOOKING ID
customerRouter.get('/:id', (req, res)=>{
    const {id} = req.params;
    const index = rooms.findIndex((customer) => customer.id == id);
    res.send(customers[index])
})

// CREATE  A NEW    CUSTOMER
customerRouter.post('/', (req, res)=>{
    const {body} = req;
    const newCustomer =  { id: `cust${Date.now()}`, ...body };
    customers.push(newCustomer);
    res.send({msg: "Customer created"})
})

// UPDATE A CUSTOMER
customerRouter.put('/:id', (req, res)=>{
    const {id} = req.params;
    const {body} = req;
    const index = customers.findIndex((customer) => customer.id == id);
    customers[index] = {...customers[index],...body};
    res.send({msg: "Customer updated"})
})

// DELETE A CUSTOMER
customerRouter.delete("/:id", (req ,res)=>{
    const {id } =req.params;
    const index = customers.findIndex((customer) => customer.id == id);

if(index !==-1){
    customers.splice(index, 1);
    res.send({msg: "Customer deleted"})
}
 else{
     res.status(404).send({msg: "Customer not found"})
 }
})
export default  customerRouter;