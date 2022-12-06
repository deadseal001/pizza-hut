const router = require('express').Router();
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = ('../../controllers/pizza-controller');

//set up GET all and POST at /api/pizzas
router
    .router('/')
    .get(getAllPizza)
    .post(createPizza);

//Set up Get one, PUT, and DELETE at /api/pizzas/:id

router
    .router('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);


module.exports=router;