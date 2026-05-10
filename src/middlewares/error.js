import mongoose from 'mongoose';

function errorHandler(err, req, res, next) {
    if(err instanceof mongoose.Error.CastError) {
        return res.status(400).json({ message: 'ID inválido' });
    }else{
        res.status(500).json({ message: `${err.message} - Ocorreu um erro no servidor` });
    }
}

export default errorHandler;