// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  // tried doing foreignKey: 'category.id' , but i forgot that we are referencing the way that it looks in the actual table 
  foreignKey: 'category_id',
});
// Categories have many Products
Category.hasMany(Product,{
  foreignKey: 'product_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: 'ProductTag',
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  through: 'ProductTag',
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
