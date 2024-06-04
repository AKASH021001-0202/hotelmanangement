import express from 'express';
import { customers } from './local-variable.js'; 

const customerRouter= express.Router();


customerRouter.get('/', (req, res)=>{
    res.send(customers)
})


customerRouter.post('/', (req, res)=>{
    const {body} = req;
    const newCustomer =  { id: `cust${Date.now()}`, ...body };
    customers.push(newCustomer);
    res.send({msg: "Customer created"})
})


customerRouter.put('/:id', (req, res)=>{
    const {id} = req.params;
    const {body} = req;
    const index = customers.findIndex((customer) => customer.id == id);
    customers[index] = {...customers[index],...body};
    res.send({msg: "Customer updated"})
})


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