import jwt from 'jsonwebtoken';
import logger from '#config/logger.js';

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key_please_change_this_to_a_random_string';
const JWT_EXPIRES_IN = '1d';

export const jwtToken = {
    sign: (payload) => {
        try {
            return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        } catch (e) {
            logger.error('Error generating token', e);
            throw new Error('Failed to generate token');
        }
    },
    verify: (token) => {
        try {
            return jwt.verify(token, JWT_SECRET);
        } catch (e) {
            logger.error('Error verifying token', e);
            throw new Error('Failed to verify token');
        }
    },
    decode: (token) => {
        try {
            return jwt.verify(token, JWT_SECRET);
        } catch (e) {
            logger.error('Error decoding token', e);
            throw new Error('Failed to decode token');
        }
    }
};