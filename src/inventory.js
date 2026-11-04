const products = [
  { id: 1, name: "Ecoa Induction Cooker", quantity: 10 },
  { id: 2, name: "Ecoa Blender", quantity: 15 },
  { id: 3, name: "Ecoa Coffee Maker", quantity: 12 }
];

function getProductById(id) {
  return products.find(product => product.id === id);
}

function getStockStatus(product) {
  if (product.quantity <= 0) {
    return "Out of stock";
  }

  if (product.quantity <= 5) {
    return "Low stock";
  }

  return "In stock";
}

module.exports = { getProductById, getStockStatus };
