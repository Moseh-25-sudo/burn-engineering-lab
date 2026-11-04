const test = require("node:test");
const assert = require("node:assert");
const { getProductById } = require("../src/inventory");

test("returns the correct product for a valid ID", () => {
  const product = getProductById(2);

  assert.strictEqual(product.name, "Ecoa Blender");
});

test("returns undefined for an invalid ID", () => {
  const product = getProductById(99);

  assert.strictEqual(product, undefined);
});