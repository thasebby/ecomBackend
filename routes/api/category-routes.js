const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const categories = await Category.findAll({
      include: [Product],
    });
    res.status(200).json(categories);
  }
  catch(err){
    res.status(500).json(err);
  }
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const singleCategory = await Category.findByPk(req.params.id, {
      include:[{model:Product}],
    });
    res.status(200).json(singleCategory);
  }
  catch(err){
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const newCat = await Category.create(req.body);
    res.status(200).json(newCat);
  }
  catch(err){
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const updateId = await Category.update(req.body,{
      where:{id:req.params.id}
    });

    if (updateId[0] === 0) {
      res.status(404).json({message: 'ID not found'});
    }
    else{
      res.status(200).json({message: 'ID Updated'});

    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const deleteId = await Category.destroy({
      where:{id:req.params.id}
    });

    // can't be (deleteId[0] === 0) like I did above with the put statement because the destroy method returns the number of rows deleted directly
    //The update method returns an array indicating the number of rows affected
    if (deleteId === 0) {
      res.status(404).json({message:'ID not found'});
      console.log(deleteId);
    }
    else{
      res.status(200).json({message: 'ID deleted'});
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;
