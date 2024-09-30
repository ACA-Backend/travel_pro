import { UnauthorizedError } from "../../lib/error-definitions.js";
import {permissions} from "../../lib/util.js";

export default function authorizationMiddleware (req, res, next)
{
    try
    {
        const user = req.user;

        //check the route the user is accessing
        const route = req.baseUrl.split('/')[3];
        
        // get the type of request the user is making
        const method = req.method.toLowerCase();

        //we get the role of the user
        const role = user.role;

        // check the route being accessed against the route the user can access
        let operation;
        switch (method)
        {
            case "post":
                operation = "create";
                break;
            case "get":
                operation = "read";
                break;
            case "put":
                operation = "update";
                break;
            case "delete":
                operation = "delete";
                break;
            default:
                operation = "read"
        }
        if(permissions[route][operation].includes(role)) {
            next();
        }

        throw new UnauthorizedError("you do not have permission to access the resource");

    } catch (error) 
    {
        next(error);
    }
}