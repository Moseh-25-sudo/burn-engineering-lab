const products = [
  { id: 1, name: "Ecoa Induction Cooker", quantity: 10 },
  { id: 2, name: "Ecoa Blender", quantity: 15 },
  { id: 3, name: "Ecoa Coffee Maker", quantity: 12 }
];

function getProductById(id) {
  return products.find(product => product.id === id);
}

module.exports = { getProductById };