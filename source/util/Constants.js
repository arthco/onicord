export const IDENTIFICATION = 'onicord';
export const VERSION = '10';
export const REPOSITORY = 'https://github.com/arthco/onicord';

export const OPCODES = {
  DISPATCH: 0,
  HEARTBEAT: 1,
  IDENTIFY: 2,
  STATUS_UPDATE: 3,
  VOICE_STATE_UPDATE: 4,
  VOICE_GUILD_PING: 5,
  RESUME: 6,
  RECONNECT: 7,
  REQUEST_GUILD_MEMBERS: 8,
  INVALID_SESSION: 9,
  HELLO: 10,
  HEARTBEAT_ACK: 11
};