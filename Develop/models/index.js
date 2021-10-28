// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories have many Products
category.hasMany(Product, {
  foreignKey: 'category_id',
});
// Products belongToMany Tags (through ProductTag)
product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
  },
});
// Tags belongToMany Products (through ProductTag)
tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    foreignKey: 'tag_id'
  },
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
