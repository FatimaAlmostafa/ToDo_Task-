const {Task}= require ('../db-mongo/db');

///creat or add task and save it 


exports.Creat =(req,res)=>{
    console.log('req body: ',req.body)
    var task =new Task({
    title:req.body.title,
    desc :req.body.describtion,
    isComplete: req.body.isComplete
})
// saving
return task.save()
    .then(data=>{
        return res.send(data);
    }).catch(err=>{
        return res.send(err);
    })


}
//retrive task  completed 
exports.getTasks=(req,res)=>{
    let filter = {}
   if(req.query.completed) filter.isComplete=true
   if(req.query.notCompleted) filter.isComplete=false
   
    Task.find(filter).then(data=>{
        return res.send({success:true,data})
    }).catch(err=>{
        return res.send({success:false,err})
    })
}
//update 
exports.update = (req, res) =>{
    Task.updateOne({_id:req.params.id},req.body).then(data=>{
        return res.send({success:true})
    }).catch(err=>{
        return res.send({success:false,err})
    })
}

//deleting
exports.remove = (req, res) => {
    Task.deleteOne({_id:req.params.id}).then(data=>{
        return res.send({success:true})
    }).catch(err=>{
        return res.send({success:false,err})
    })
};