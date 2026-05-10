import NotFound from "../errors/NotFound.js";

function handler404(req, res, next) {
    const error = new NotFound();
    next(error);
}

export default handler404;