const db = require('../');

const Connection = db.Model.extend({
  tableName: 'connections',
  profile_id_1: function() {
    return this.belongsTo('Profile', 'profile_id', 'profile_id');
  },
  profile_id_2: function() {
    return this.belongsTo('Profile', 'profile_id', 'profile_id');
  },
});

module.exports = db.model('Connection', Connection);
