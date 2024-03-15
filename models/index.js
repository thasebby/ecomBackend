// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  // tried doing foreignKey: 'category.id' , but i forgot that we are referencing the way that it looks in the actual table 
  foreignKey: 'category_id',
  onDelete:'CASCADE',

});
// Categories have many Products
Category.hasMany(Product,{
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey:'product_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  //I had the product tag as a string 'ProductTag' but since I am importing it I have to use it like this
  through: ProductTag,
  foreignKey:'tag_id',
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
