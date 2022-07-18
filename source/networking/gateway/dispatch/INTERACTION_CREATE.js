import ApplicationCommand from '../../../interface/interaction/ApplicationCommand.js';

export default function(shard, payload) {
  shard.emit('interactionCreate', new ApplicationCommand(payload.d));
}