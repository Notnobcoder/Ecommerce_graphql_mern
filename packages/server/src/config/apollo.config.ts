
import { ApolloServer } from "apollo-server-express"
// import { ProductResolver } from "../graphql/resolvers/productResolver"
import { buildSchema } from "type-graphql"
// import { BrandResolver } from "../graphql/resolvers/brandResolver"
// import { MerchantResolver } from "../graphql/resolvers/merchantResolver"
import { AuthResolver } from "../graphql/resolvers/authResolver"
// import { UserResolver } from "../graphql/resolvers/userResolver"

export const apolloConfig = async (app: any) => {


  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [AuthResolver],
      validate: false
    }),
    context: ({ req, res }) => ({ req, res }),
  })

  await apolloServer.start()

  apolloServer.applyMiddleware({
    app,
    cors: false
  })

}
