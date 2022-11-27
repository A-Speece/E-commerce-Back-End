const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: Product,
  }).then((products) => {
    res.json(products);
  });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, {
    include: Product,
  }).then((product) => {
    res.json(product);
  });
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create(req.body).then((product) => {
    res.json(product);
  });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    req.body,
    {
      where: {
        id: req.params.id,
      },
    },
    {
      new: true,
    }
  ).then((product) => {
    res.json(product);
  });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  }).then((product) => {
    res.json(product);
  });
});

module.exports = router;
