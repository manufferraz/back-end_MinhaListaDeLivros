const { celebrate, Segments, Joi} = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            username: Joi.string().required(),
            email: Joi.string().email().required(),
            senha: Joi.string().required(),
            frase: Joi.string().required(),
        }),
    }),
    getByID: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            usuario_id: Joi.string().required(),
        }),
        [Segments.QUERY]: Joi.object().keys({
            endereco_id: Joi.string().optional(),
        }),
    }),
    updateByID: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            usuario_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            usuario_id: Joi.string().optional(),
            username: Joi.string().email().optional(),
            email: Joi.string().optional(),
            senha: Joi.string().optional(),
            frase: Joi.string().optional(),
        }).min(1),
    }),
    deleteByID: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            usuarios_id: Joi.string().required(),
        }),
    }),
};