const { producto, isThere } = require("../04-Recursion/04-recursion");
let obj = {
  school: {
    hogwarts: {
      headmaster: {
        name: {
          first: "Albus",
          last: "Dumbledore",
        },
      },
    },
  },
  prop1:5,
  prop2:6
};
describe("producto(array)", function () {
  it("Should return the product of all numbers within the array", function () {
    expect(producto([7, 9, 3])).toBe(189);
    expect(producto([11, 22, 33])).toBe(7986);
    expect(producto([22, 9, 3])).toBe(594);
  });
});
describe("isThere(obj, value)", function () {
  it("Should return true or false", function () {
    expect(isThere(obj, 22)).toBe(false);
  });
  it("Should return true or false", function () {
    expect(isThere(obj, "Albus")).toBe(true);
  });
  it("Should return true or false", function () {
    expect(isThere(obj, "headmaster")).toBe(false);
  });
  it("Should return true or false", function () {
    expect(isThere(obj, "Dumbledore")).toBe(true);
  });
});