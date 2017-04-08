var operators = [{a: 1, b: 3}, {a: 9, b: 0}];

function add(a,b) {
  return a + b;
}

console.log(add(1,3));
console.log(add(9,0));

// addStatement
var addStatement = ((operator) => {
  return operator.a + operator.b;
})

operators.forEach((operator) => {
  console.log(addStatement(operator));
});

// addExpression
var addExpression = ((operator) => operator.a + operator.b);

operators.forEach((operator) => console.log(addExpression(operator)));
