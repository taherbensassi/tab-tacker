const joi = require ('joi')

module.exports = {
    register(req,res,nex) {
        const schema = {
            email: joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }

        const {error, value} = Joi.validate(req,body, schema)

        if(error){
            switch (error.detail[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provid a valid email adress'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `The password provided failed to much the following rules:
                                <br>
                                1. it must contain Only the following caracters ; lower case,
                                <br>
                                2. It must be at least 8 caracters in length and greather then 32 caracters`
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
                
            }
        }else{
            next()

        }
    }
}