exports.up = function(knex) {
    return knex.schema.createTable('expenses', function(table) {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.integer('amount').notNullable();
      table.string('category').notNullable();
      table.date('date').defaultTo(knex.fn.now());
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('expenses');
  };
  