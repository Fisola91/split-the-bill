const splitTheBill = (group) => {
  const values = Object.values(group);
  const sumValues = values.reduce((acc, val) => acc + val, 0);
  const averageValues = sumValues / values.length;
  let balance = {};

  Object.keys(group).forEach((key) => {
    balance[key] = group[key] - averageValues
  })
  return balance;
};

const group = {
  "john"  : 120,
  "paul"  :  30,
  "ringo" : 150,
  "sola"  : 200
}
console.log(splitTheBill(group))

module.exports = splitTheBill;
