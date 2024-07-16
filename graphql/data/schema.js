import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Product{
    id: ID,
    name: String,
    desc: String,
    price: Float,
    soldOut: Boolean,
    store: [Store]!
    }
    
    type Store{
    store:String
    }
    type Query{
        getProduct(id:ID):Product
    }
    
    input StoreInput{
        store:String
    }
    input ProductInput{
        id: ID,
        name: String,
        desc: String,
        price: Float,
        soldOut: Boolean,
        store: [StoreInput]!
    }
    type Mutation{
        createProduct(input:ProductInput):Product
    }
`
)

export default schema;