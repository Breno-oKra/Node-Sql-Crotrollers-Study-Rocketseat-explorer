
exports.up = knex => knex.schema.createTable("links", table => {
    table.increments("id");
    //não permito name nulo
    table.text("url").notNullable();
    //onDelete cascade, significa que se o id de note_id for apagado, a tag vinculada sera apagada 
    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");
    table.timestamp("created_at").default(knex.fn.now());
})

exports.down = knex => knex.schema.dropTable("links")
