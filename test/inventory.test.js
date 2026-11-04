const test = require("node:test");
const assert = require("node:assert");
const { getProductById, getStockStatus } = require("../src/inventory");

test("returns the correct product for a valid ID", () => {
  const product = getProductById(2);

  assert.strictEqual(product.name, "Ecoa Blender");
});

test("returns undefined for an invalid ID", () => {
  const product = getProductById(99);

  assert.strictEqual(product, undefined);
});

test("returns Out of stock when quantity is zero", () => {
  const product = { id: 4, name: "Test Product", quantity: 0 };

  assert.strictEqual(getStockStatus(product), "Out of stock");
});

test("returns Low stock when quantity is five", () => {
  const product = { id: 5, name: "Test Product", quantity: 5 };

  assert.strictEqual(getStockStatus(product), "Low stock");
});

test("returns In stock when quantity is above five", () => {
  const product = { id: 6, name: "Test Product", quantity: 10 };

  assert.strictEqual(getStockStatus(product), "In stock");
});
