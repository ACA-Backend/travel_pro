import jwt from 'jsonwebtoken';
import config from '../../config/app.config.js';



export const generateAuthenticationToken = (payload) =>
{
    return jwt.sign(payload, config.JWT.secret, {
        expiresIn: `${config.JWT.expiration}s`,
    });
};

export const verifyAuthenticationToken = (token) => {
    return jwt.verify(token, config.JWT.secret);
};  