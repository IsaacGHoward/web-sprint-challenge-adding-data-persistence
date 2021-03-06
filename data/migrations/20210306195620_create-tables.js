
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('project_id');
      tbl.text('project_name', 128)
        .notNullable();
      tbl.text('project_description');
      tbl.boolean('project_completed');
    })
    .createTable('resources', tbl => {
      tbl.increments('resource_id');
      tbl.text('resource_name', 128)
        .unique()
        .notNullable();
      tbl.text('resource_description');
    })
    .createTable('tasks', tbl => {
      tbl.increments('task_id');
      tbl.text('task_description', 128)
        .notNullable();
      tbl.text('task_notes');
      tbl.boolean('task_completed');
      tbl.integer('project_id')
        .notNullable()
        .references('project_id')
        .inTable('projects');
    })
    .createTable('project_resources', tbl => {
      tbl.increments('id');
      tbl.integer('resource_id')
        .notNullable()
        .references('resource_id')
        .inTable('resources');
      tbl.integer('project_id')
        .notNullable()
        .references('project_id')
        .inTable('projects');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('project_resources');
};
