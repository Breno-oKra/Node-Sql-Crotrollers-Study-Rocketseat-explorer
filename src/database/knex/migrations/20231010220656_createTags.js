
exports.up = knex => knex.schema.createTable("tags", table => {
    table.increments("id");
    //não permito name nulo
    table.text("name").notNullable();
    //onDelete cascade, significa que se o id de note_id for apagado, a tag vinculada sera apagada 
    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");
    table.integer("user_id").references("id").inTable("users");
})

exports.down = knex => knex.schema.dropTable("tags")
