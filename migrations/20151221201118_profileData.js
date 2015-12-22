
exports.up = function(knex, Promise) {
  return knex.schema.createTable('userInfo', function(table) {
  	table.increments();
  	table.json('profile');
  	table.json('gameClips');
  	table.json('rainbowSixSeigeData');
  	table.json('halo');
  	table.json('smite');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('userInfo');
};
