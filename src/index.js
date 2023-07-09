import mongoose, { mongo } from 'mongoose'
import app from './app.js'
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


(async() =>{
  //db connected
   await mongoose.connect('dbstring')
   console.log("DB connected successfully");

   app.on("error", (err)=>{
    console.log("ERROR :" , err);
    throw err
   })
   const onListening = () =>{
  console.log(`Listening on port ${port}`);  
  }
  app.listen(port , onListening)
   app.listen(port, () =>{

   })
  try{

  }catch (error){
    console.error("ERROR :" , err)
    throw err
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
