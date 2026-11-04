
const test = require("node:test");
const assert = require("node:assert/strict");

const { fetchProduct } = require("../src/productService");

test("returns the correct product for a valid ID", async () => {
  const product = await fetchProduct(2);

  assert.deepStrictEqual(product, {
    id: 2,
    name: "Ecoa Blender",
    quantity: 15
  });
});

test("rejects with an error for an invalid product ID", async () => {
  await assert.rejects(
    fetchProduct(99),
    {
      message: "Product not found"
    }
  );
});
