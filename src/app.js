
const { fetchProduct } = require("./productService");

async function showProduct(id) {
  try {
    // Fetch the product
    const product = await fetchProduct(id);

    // Display the returned product
    console.log("Product found:", product);

  } catch (error) {
    // Handle errors
    console.error("Error:", error.message);
  }
}

// Test successful request
showProduct(2);

// Test unsuccessful request
showProduct(99);
