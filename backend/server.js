import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

const PORT = process.env.PORT;
// console.log(process.env.MONGO_URI);

// DB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() =>    console.log('Database Connected'))
.catch( err => console.log('Error While Connecting to DB'));

// DB Schema
const userSchema = mongoose.Schema({
    name : {type : String , required : true},
    email : {type : String , required : true},
    phone : {type : Number , required : true},
    gender : {type : String , required : true},
});

const userModel = mongoose.model('users', userSchema);

// Middelwares
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello From Server');
});

app.post('/add-user', async (req, res) => {
    try {
        const { name, email, phone, gender } = req.body;

        const newUser =  new userModel({name, email, phone, gender});
        await newUser.save();
        res.json({success : true, message : 'User Data Saved'});
    } catch (error) {
        console.log('Error While Adding User')
        res.json({success : false, message : 'Error While Adding User'});
    }
})

app.get('/all-users', async (req, res) => {

    try {
        const userData = await userModel.find({});
        res.json({success : true, message : 'User Data Found', userData});

    } catch (error) {
        res.json({success : false, message : 'Error While Getting User Data'}); 
    }
});

app.delete('/remove-user/:id', async (req, res) => {

    try {
        const userId = req.params.id;
        console.log(userId);
        const deleteUser = await userModel.findByIdAndDelete(userId);
        res.json({success : true, message : 'User Deleted Successfully'});
    } catch (error) {
        res.json({success : false, message : 'Error While Delteing User Data'}); 
    }
})


app.listen(PORT, () => {
    console.log(`App Listenting on http://localhost:${PORT}`);
})
