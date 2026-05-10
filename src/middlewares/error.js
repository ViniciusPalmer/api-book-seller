import mongoose from 'mongoose';
import AppError from '../errors/appError.js';
import BadRequest from '../errors/badRequest.js';
import ValidationError from '../errors/ValidationError.js';

function errorHandler(err, req, res, next) {
    if(err instanceof mongoose.Error.CastError) {
        new BadRequest().sendErrorResponse(res);
    }else if(err instanceof mongoose.Error.ValidationError) {
        new ValidationError(err).sendErrorResponse(res);
    }else{
        new AppError().sendErrorResponse(res);
    }
}

export default errorHandler;