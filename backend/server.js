import express from "express";
import data from "./data.js";
const app=express();

app.get('/',(req,res)=>{
    res.send('server is running')
});

app.get('/api/products',(req,res)=>{
    res.send(data.products);
})

app.get('/api/products/:id',(req,res)=>{
    const product=data.products.find((x)=>x.id===req.params.id)
    if(product){
        res.send(product)
    }else{
        res.status(404).send({message:'Product Not Found'})
    }
})
const port=process.env.PORT || 3300;

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
});