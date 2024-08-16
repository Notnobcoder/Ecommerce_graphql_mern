import mongoose from "mongoose"


export const databaseConnection = async () => {
  await mongoose.connect("mongodb://localhost:27017/graph_ecommerce").then(() => {
    console.log("Connection Succesfull")
  }).catch((error) => {
    console.log("error" + error)

  })
}

