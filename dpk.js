const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

const OBJECT_TYPE = 'object';
const STRING_TYPE = 'string';

const HASH_ALGORITHM = 'sha3-512';
const HASH_FORMAT = 'hex';


const stringfyInput = (input) => typeof input === STRING_TYPE ? input : JSON.stringify(input);

exports.deterministicPartitionKey = (event) => {

  /** Handling corner case, when we have event as undefined */
  if(!event) return TRIVIAL_PARTITION_KEY;
  
  /** case - when we have event.partitionKey  */
  if(typeof event === OBJECT_TYPE && event.partitionKey) return event.partitionKey

  const generatedHash = stringfyInput(crypto.createHash(HASH_ALGORITHM).update(stringfyInput(event)).digest(HASH_FORMAT));

  if (generatedHash.length > MAX_PARTITION_KEY_LENGTH) {
    return crypto.createHash(HASH_ALGORITHM).update(generatedHash).digest(HASH_FORMAT);
  }

  return generatedHash;
};


