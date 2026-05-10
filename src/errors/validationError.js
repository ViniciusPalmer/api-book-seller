import AppError from "./appError.js";

class ValidationError extends AppError {
    constructor(error) {
        const errorMessage = Object.values(error.errors).map(err => err.message).join('; ');
        super(`Os seguintes erros foram encontrados: ${errorMessage}`, 400);
    }
}

export default ValidationError