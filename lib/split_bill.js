const splitTheBill = (bill) => {
  const values = Object.values(bill)
  const sumValues = values.reduce((acc, val) => acc + val, 0)
  const averageValues = sumValues / 3
  let attributes = {};
  Object.keys(bill).forEach((key) => {
    attributes[key] = bill[key] - averageValues
  })
  return attributes
}

const group = {
  "john"  : 120,
  "paul"  :  30,
  "ringo" : 150,
}
console.log(splitTheBill(group))
