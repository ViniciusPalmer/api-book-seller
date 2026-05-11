import NotFound from "../errors/NotFound.js";

async function pagination(req, res, next) {
    try {
         let { page = 1, limit = 5, orderBy = "_id", order = -1} = req.query;

            page = parseInt(page);
            limit = parseInt(limit);
            order = parseInt(order);

            const result = req.results;

            if(page < 1 || limit < 1) {
                return next(new NotFound('Página ou limite inválidos'));
            }

            const searchResult = await result.find()
                .sort({ [orderBy]: order })
                .skip((page -1) * limit)
                .limit(limit)
                .populate("author")
                .exec()

            return res.status(200).json(searchResult);
    } catch (error) {
        next(error);
    }
}

export default pagination;
