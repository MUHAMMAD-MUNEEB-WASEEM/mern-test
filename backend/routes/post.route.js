const router = require("express").Router();

const Post =  require('../models/Post.model')

router.post("/creator", (req, res) => {
    const newPost = new Post({
      title: req.body.title,
      description: req.body.description
    });
  
    //Password encryption using crypto-js
    newPost
      .save()
      .then((user) => res.json(user))
      .catch((err) => res.status(400).json({ message: "Could not send post" }));
  });


  router.get("/", (req, res) => {

    Post
    .find()
    .exec()
    .then(result=>{
         res.status(200).json(result)//reverse array to get latest movies
    })
    .catch(err => {
        res.status(500).json({
            error:err
         })
    })
  });

  router.put('/:id', (req, res)=>{
        
    Post.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true})
        .exec()
        .then(result=>{
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({
                error:err
            })
        })
})

//Delete
router.delete('/:id', (req, res)=>{

    Post.findByIdAndDelete({_id:req.params.id})
        .exec()
        .then(()=>{
            res.status(200).json({
                message: "Post has been deleted"
            })
        })
        .catch(err => {
            res.status(500).json({
                error:err
            })
        })
})
  module.exports = router;