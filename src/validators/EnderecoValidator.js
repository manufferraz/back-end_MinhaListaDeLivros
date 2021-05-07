const { celebrate , Segments , Joi} = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            usuario_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            rua: Joi.string().required(),
            numero: Joi.number().integer().positive().required(),
            bairro: Joi.string().required(),
            cidade: Joi.string().required(),
            estado: Joi.string().required(),
            pais: Joi.string().required(),
        }),
    }),
    getByID: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            endereco_id: Joi.string().optional(),
        }),
    }),
    updateByID: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            endereco_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            rua: Joi.string().optional(),
            numero: Joi.number().integer().positive().optional(),
            bairro: Joi.string().optional(),
            cidade: Joi.string().optional(),
            estado: Joi.string().optional(),
            pais: Joi.string().optional(),
        }).min(1),
    }),
    deleteByID: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            endereco_id: Joi.string().required(),
        }),
    }),
};