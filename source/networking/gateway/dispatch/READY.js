import User from '../../../interface/global/User.js';

export default function(shard, payload) {
  shard.user = new User(payload.d.user);

  shard.emit('ready');
}