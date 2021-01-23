const Joi = require('joi')
const constants = require('../../utils/constants')

const PersonCreate = joi.object().keys({
    name: Joi.string()
      .min(1)
      .max(255)
      .pattern(new RegExp(constants.regex.alphaNumSpecial))
      .required()
      .messages({
          "string.pattern.base": "name contains invalid characters"
      }),
    lastname : Joi.string()
      .min(1)
      .max(255)
      .pattern(new RegExp(constants.regex.alphaNumSpecial))
      .required()
      .messages({
          "string.pattern.base": "lastname contains invalid characters"
      }),
    age : Joi.number()
      .integer()
      .required(),
    address: Joi.string()
      .min(1)
      .max(255)
      .required(),
    pet_id: Joi.number()
      .integer(),
    ocupation_id:Joi.number()
      .integer()
      .required()
})

module.exports = {
    PersonCreate
}