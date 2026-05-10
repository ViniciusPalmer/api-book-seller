class AppError extends Error {
    constructor(message = "Erro interno do servidor", statusCode = 500) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }

    sendErrorResponse(res) {
        res.status(this.statusCode).send({
            message: this.message,
            status: this.statusCode
         });
    }
}

export default AppError;