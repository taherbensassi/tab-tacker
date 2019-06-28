module.exports={
    register  (req,res)  {
            res.send({
                message : `Hallo ${req.body.email} ! your user was registred ! `
            })

    }
}