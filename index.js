const {deterministicPartitionKey} = require("./dpk");

console.log(deterministicPartitionKey());
console.log(deterministicPartitionKey(100));
console.log(deterministicPartitionKey('100'));
console.log(deterministicPartitionKey('null'));

console.log(deterministicPartitionKey({partitionKey: 100}));
console.log(deterministicPartitionKey({partitionKey: null}));
console.log(deterministicPartitionKey({partitionKey: {}}));


// 0
// 3a3d69a6f739376238a968bbf88c4714860e319637c84d83cc03a1f74720b1fac6734078cf1fa25d67c8c84a8e8288b197a3164b46d42d81b01631d07d5d313f
// 134cf7fa6b76f2db5187a265c83fa0954d7673a7311814fe68f596c62dea86f37f06a9184e372d8028937c7cbdfd9b7f7a431d3920697d12c269614063cb3ca1
// aabb8dad8ea13faaac3ccc48f8a5290c0bcdeb2e8f9f89cc0a0bd75c6015da7fda5f33b63a237003f1ff121d442158e015fd311ea454c860bfca6b9dab65ebb6
// 100
// 58540d4d440df8c6c6da0d79cfce715bc92953c6cde8be9f749790004ef2d5a7322d0fd5170eac9a37d57ee0cc975cfca068a60b01622529d9e0fd657f71b8e2
// {}