const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tags = await Tag.findAll({
      include:[Product],
    });
    res.status(200).json(tags);
  }
  catch(err){
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const singleTag = await Tag.findByPk(req.params.id, {
      include:[Product],
    });
    res.status(200).json(singleTag);
  }
  catch(err){
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try{
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  }
  catch(err){
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
    const updateId = await Tag.update(req.body, {
      where: {id:req.params.id}
    });

    if (updateId[0] === 0) {
      res.status(404).json({message: 'ID not found'});
    }
    else{
      res.status(200).json({message: 'ID updated'});
    }
  }
  catch(err){
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
    const deleteTag = await Tag.destroy({
      where:{id:req.params.id}
    });

    if(deleteTag === 0) {
      res.status(404).json({message: 'ID not found'});
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
