
exports.up = function(knex) {
    return knex.schema.createTable("endereco", function (table){
        table.string('endereco_id').primary().notNullable();
        table.string('usuario_id').notNullable();
        table.foreign('usuario_id').references('usuario_id').inTable("usuario").onDelete("cascade");
        table.string('rua').notNullable();
        table.int('numero').notNullable();
        table.string('bairro').notNullable();
        table.string('cidade').notNullable();
        table.string('estado').notNullable();
        table.string('pais').notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("endereco");  
};
