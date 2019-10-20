## :heart: Star :heart: the repo to support the project or :smile:[Follow Me](https://github.com/harsh6768).Thanks!

# easydoc-swagger

1. clone repository

        git clone https://github.com/harsh6768/easydoc-swagger.git
        
2. install all npm modules

       npm install 
       
See Swagger Documentation:

    localhost:5000/documentation
    
Understand documentation of swagger:
   
    /**
     * @swagger
     * /user:                                                             // user is the route for the request
     *      post:                                                         // define the type of request
     *        tags:                                                       // tags will help to group the apis
     *        - user
     *        summary: create user
     *        description: This operation creates user
     *        consumes:                                                
     *        - application/json
     *        - application/xml
     *        produces:
     *        - application/json
     *        - application/xml
     *        parameters:                                                 //define parameters for post request
     *        - in: body
     *          name: body
     *          description: create new user to authenticate
     *          required: true
     *          schema:                                                  //define schema for post request
     *            $ref: "#/definitions/User"
     *        responses:                                                 //define responses 
     *            200:
     *              description: successful
     *            400:
     *              description: bad request
     *            500:
     *              description: internal server error
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

    
Visit [Swagger Documentation](https://editor.swagger.io/) to learn more

    
    
