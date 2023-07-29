import Joi from 'joi';


const MovieSchema = Joi.object({
    name: Joi.
        string().
        min(3).
        required(),
    budget: Joi.
        number().
        precision(2).
        min(1).
        required(),
    date: Joi.
        date().
        required(),
    duration: Joi.
        number().
        integer().
        min(1).
        max(240).
        required(),
}).options({ allowUnknown: false });


export default MovieSchema;