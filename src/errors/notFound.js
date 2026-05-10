import AppError from "./appError.js";

class NotFound extends AppError{
    constructor(message = "Página não encontrada", statusCode = 404) {
        super(message, statusCode);
    }
}

export default NotFound;