const mongoose = require('mongoose');
const db = 'mongodb+srv://Ayush:mongo1234@cluster0.gbiaesu.mongodb.net/e-com-website?retryWrites=true&w=majority';
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DataBase Connected");
}).catch((err) => {
    console.log(err);
})