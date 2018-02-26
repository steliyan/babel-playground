import ES6Class from "./../es6-class";

it("print() method", () => {
  const es6class = new ES6Class();
  expect(es6class.getValue()).toEqual("Hello from ES6Class! ");
});
