import mongoose from "mongoose";
import userModel from "./models/user.model.js";

const uri = 'mongodb://localhost:27017'

try {
    await mongoose.connect(uri, {
        dbName: 'clase_16'
    })
    console.log('DB Connected!')
    const response = await userModel.find({ first_name: 'Celia' }).explain('executionStats')
    console.log(response)
} catch(err) {
    console.log(err.message)
}