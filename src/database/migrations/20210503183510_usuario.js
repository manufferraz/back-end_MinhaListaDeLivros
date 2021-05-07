
exports.up = function(knex) {
  return knex.schema.createTable("usuario", function (table){
    table.string('usuario_id').primary().notNullable();
    table.string('username').notNullable();
    table.string('senha').notNullable();
    table.string('email').notNullable();
    table.string('frase').notNullable();
    table.string('firebase_id').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("usuario");
};
