import Message from '../../../interface/message/Message.js';

export default function(shard, payload) {
  shard.emit('messageCreate', new Message(payload.d));
}