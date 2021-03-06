/** reuired express**/
const express = require ('express');
/** reuired process jsondata easyly**/
const bodyParser = require ('body-parser');
/** reuired cors**/
const cors = require ('cors');
/** reuired cors**/
const morgan = require ('morgan');
/** object **/
const {sequelize} = require ('./models')
const config = require ('./config/config')
/** web server build **/
const app = express ();

/** Enable packages **/
/**-_-_-_-_-_-_-_-__-_**/


/**  printout log  **/
/** log which meth and from what**/
app.use(morgan('combined'));
/** Bodyparser allow you to parse json data very easy **/
app.use(bodyParser.json());
/** any client to access **/
app.use(cors());



/*** routes require **/
require('./routes/routes')(app)

/** get our projet on squelzei **/
sequelize.sync()
    .then(()=> {
        app.listen(config.port);
        console.log(`server started on port ${config.port}` )

    })




