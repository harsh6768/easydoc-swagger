const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const app=express();

const swaggerDoc=require('./swaggerDoc');
const initEndPoints=require('./endPoints');


//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//swagger initialization for the documentation
swaggerDoc(app);
initEndPoints(app);

// connect mongoose
const mongoUri = 'mongodb://localhost:27017/swagger_test';
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(mongoUri,config).then((result)=>{

    console.log('DataBase Connected');

}).catch((err)=>{
        console.log(err);
});

const PORT=process.env.PORT||5000;
app.listen(PORT,(err)=>{

    if(err) throw err;
    console.log(`Server is up and running on post ${PORT}`);
    console.log('localhost:5000/documentation');

});
