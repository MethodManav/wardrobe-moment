import mongoose from 'mongoose'
import { DatabaseError } from '../error/CustomErrors.js'
import { CustomEnv } from '../util/configENV.js'

class DatabaseConnection{
    constructor(){
        mongoose.connect(CustomEnv.db_url)
        .then((connected)=>{
            console.log("DB connected SuccessFully")
        })
        .catch((error)=>{
            console.error("Connection failed")
            throw new DatabaseError(`DB Connection failed -> ${error}`)
        })
    }
}

export default DatabaseConnection;