import express from "express";
const router = express.Router();

let products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
];

// GET all products
router.get("/", (req, res) => {
  res.json(products);
});

// GET product by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// POST a new product
router.post("/", (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update product by ID
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) return res.status(404).json({ message: "Product not found" });

  const { name, price } = req.body;
  product.name = name ?? product.name;
  product.price = price ?? product.price;
  res.json(product);
});

// DELETE product by ID
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex((p) => p.id === id);
  if (index === -1)
    return res.status(404).json({ message: "Product not found" });

  const deletedProduct = products.splice(index, 1);
  res.json(deletedProduct[0]);
});

export default router;
