const crypto = require("crypto");

const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it(`If input is 100, expecting corresponding hash value`, () => {
    const input = 100;
    const trivialKey = deterministicPartitionKey(input);
    const generatedHash = crypto.createHash('sha3-512').update(JSON.stringify(input)).digest('hex');
    expect(trivialKey).toBe(generatedHash);
  });

  it(`If input is '100', expecting corresponding hash value`, () => {
    const input = '100';
    const trivialKey = deterministicPartitionKey(input);
    const generatedHash = crypto.createHash('sha3-512').update(input).digest('hex');
    expect(trivialKey).toBe(generatedHash);
  });

  it(`If input is 'null', expecting corresponding hash value`, () => {
    const input = 'null';
    const trivialKey = deterministicPartitionKey(input);
    const generatedHash = crypto.createHash('sha3-512').update(input).digest('hex');
    expect(trivialKey).toBe(generatedHash);
  });

  it(`If input is { partitionKey: 100 }, expecting corresponding hash value`, () => {
    const input = { partitionKey: 100 };
    const trivialKey = deterministicPartitionKey(input);
    expect(trivialKey).toBe(input.partitionKey);
  });

  it(`If input is {partitionKey: {}}, expecting corresponding hash value`, () => {
    const input = {partitionKey: {}};
    const trivialKey = deterministicPartitionKey(input);
    expect(trivialKey).toBe(input.partitionKey);
  });
});
