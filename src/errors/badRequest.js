import AppError from "./appError.js";

class BadRequest extends AppError {
    constructor(message = "Requisição inválida", statusCode = 400) {
        super(message, statusCode);
    }
}

export default BadRequest;