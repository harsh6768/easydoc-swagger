const User=require('./userModel');

let register=(req,res)=>{


    const {username,email,password}=req.body;

    const user=User({
        username,
        email,
        password
    })
    try{
        
       user.save()
       .then(user=>{
           res.status(200).send({
               status:200,
               body:user,
               message:'User Registered successfully!!!'
           })
       })
       .catch(err=>{
           res.status(500).send({
               status:500,
               body:err,
               message:'Error occured!!!'
           })
       })

    }catch(err){
        throw err;
    }

}

let login=(req,res)=>{


    const {email,password}=req.body;

    User.findOne({email,password})
    .then(user=>{

        res.send({
            status:200,
            data:user,
            message:'Login successful'
        })

    })
    .catch(err=>{

        res.send({
            status:500,
            data:err,
            message:'Error occured!!!' 
        })

    })

}

let getUsers=(req,res)=>{

    User.find()
        .then(users=>{

            res.send({
                status:200,
                body:users,
                message:'Successful Fetched the Users'
            })
        })
        .catch(err=>{

            res.send({
                status:200,
                body:err,
                message:'Error occured!'
            })
        })
}

module.exports={
    register,
    login,
    getUsers
}