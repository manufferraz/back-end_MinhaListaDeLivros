const { celebrate , Segments , Joi} = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            username: Joi.string().required(),
            email: Joi.string().email().required(),
            senha: Joi.string().min(6).max(20).required(),
            frase: Joi.string().required(),
            // Colocar foreign endereço?
        }),
    }),
    getByID: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            usuario_id: Joi.string().required(),
        }),
    }),
    updateByID: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            usuario_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            username: Joi.string().optional(),
            email: Joi.string().email().optional(),
            senha: Joi.string().min(6).max(20).optional(),
            frase: Joi.string().optional(),
        }).min(1),
    }),
    deleteByID: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            usuario_id: Joi.string().required(),
        }),
    }),
};