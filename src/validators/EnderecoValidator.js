const { celebrate, Segaments, Joi} = require("celebrate");

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            usuario_id: Joi.string().required(),
            rua: Joi.string().email().required(),
            numero: Joi.string().required(),
            bairro: Joi.string().required(),
            cidade: Joi.string().required(),
            estado: Joi.string().required(),
            pais: Joi.string().required(),
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
            endereco_id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            endereco_id: Joi.string().optional(),
            rua: Joi.string().email().optional(),
            numero: Joi.string().optional(),
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