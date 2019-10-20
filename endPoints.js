const routes=require('./routes');

const initEndPoint=(app)=>{

   
    /**
     * @swagger
     * /user:
     *      post:
     *        tags:
     *        - user
     *        summary: create user
     *        description: This operation creates user
     *        consumes:
     *        - application/json
     *        - application/xml
     *        produces:
     *        - application/json
     *        - application/xml
     *        parameters:
     *        - in: body
     *          name: body
     *          description: create new user to authenticate
     *          required: true
     *          schema:
     *            $ref: "#/definitions/User"
     *        responses:
     *            200:
     *              description: successful
     *            400:
     *              description: bad request
     *            500:
     *              description: internal server error
     *       
     *      get:
     *          tags:
     *          - user
     *          summary: get all users
     *          description: This operation fetched all the users
     *          consumes:
     *          - application/json
     *          - application/xml
     *          produces:
     *          - application/json
     *          - application/xml
     *          parameters: []
     *          responses:
     *              200:
     *                  descriptoin:successful 
     *              400:
     *                  description: bad request
     *              500:
     *                  description: internal server error
     * 
     * 
     * definitions:
     *      User:
     *         type: object
     *         properties:
     *              username:
     *                  type: string
     *              email:
     *                  type: string
     *              password:
     *                  type: string
     * 
     *      
     *       
     */

     app.use('/',routes);

}

module.exports=initEndPoint;