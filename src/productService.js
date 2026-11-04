
const products = [
  { id: 1, name: "Ecoa Induction Cooker", quantity: 10 },
  { id: 2, name: "Ecoa Blender", quantity: 15 },
  { id: 3, name: "Ecoa Coffee Maker", quantity: 12 }
];

function fetchProduct(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(item => item.id === id);

      if (!product) {
        reject(new Error("Product not found"));
      } else {
        resolve(product);
      }
    }, 1000);
  });
}

module.exports = { fetchProduct };
