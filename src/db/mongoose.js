const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_CONNECT_LINK, {
    useNewUrlParser: true,
    useCreateIndex: true
})
