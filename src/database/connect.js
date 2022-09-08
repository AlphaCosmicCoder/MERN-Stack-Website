const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-com-website', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DataBase Connected");
}).catch((err) => {
    console.log(err);
})