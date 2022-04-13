const {buildSchema} = require('graphql');

module.exports = buildSchema(`
type Order {
    _id: ID!
    name: String
    phoneNumber: String
    email: String
    cardInfo: Int
    orderNumber: Int 
    subtotal: Float
    tax: Float
    total: Float
}

input OrderInput {
    name: String
    phoneNumber: String
    email: String
    cardInfo: Int
    subtotal: Float
    tax: Float
    total: Float
}
type RootQuery {
    orders: [Order!]!
}

type RootMutation {
    createOrder (orderInput: OrderInput): Order
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`);
