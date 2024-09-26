
const mongoose = require('mongoose')

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser : true,
      useUnifiedTopology : true
    })
    console.log('Tamo junto Bora rsrsr')
  }catch(error) {
     console.log(error)
  }

}

module.exports = {

  connect
}