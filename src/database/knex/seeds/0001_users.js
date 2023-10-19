
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('notes').del()
  await knex('notes').insert([
    {title: 'rowValue1',description:'testes',user_id:27},

  ]);
};
