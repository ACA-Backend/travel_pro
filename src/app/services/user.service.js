import {ConflictError} from '../../lib/error-definitions.js';
import {User} from '../schema/user.schema.js';

export const createUser = async (payload) =>
{
    //we check is a record already exists with the user details

    const user = await User.findOne({
        $or: [
            {email: payload.email},
            {username: payload.username}
        ]
    });

    //we check if the user exists, and if a user exists, we throw an error that the user record exists
    if(user) throw new ConflictError('a User with the provided details already exists');

    // create a new user record
    return (await User.create(payload))
}

export const getUser = async (id) =>
{
    return await User.findById(id);
}

export const getUserByEmail = async (email) =>
{
    return await User.findOne({email}); 
};