import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./data/schema";

const PORT = 9091;
const app = express();

app.get('/',(req,resp)=>{
resp.send("GraphQL is cool");
});

class Product{
    constructor(id, {name,desc,price,soldOut,store}){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.soldOut = soldOut;
        this.store = store;
    }
}

const productDataBase = {};

const root = {
    product:()=> {
    return productDataBase
    },
    createProduct:({input})=>{
        let id = require('crypto').randomBytes(10).toString('hex');
        productDataBase[id] = input;
        return new Product(id,input);
    },
    getProduct:({id})=>{
        return new Product(id,productDataBase[id])
    }
};
app.use('/graphql',graphqlHTTP(
    {
        schema,schema,
        rootValue:root,
        graphiql:true
    }
))
app.listen(PORT,()=>console.log('Running server on ${PORT}'));

