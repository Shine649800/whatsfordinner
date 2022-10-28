const {Restaurant} = require('../models')
const categories = ['Japanese'];

module.exports.viewAll = async function(req, res, next) {
    const restaurants = await Restaurant.findAll();
    res.render('index', {restaurants});
}

module.exports.renderEditForm = async function(req, res, next) {
    const restaurant = await Restaurant.findByPk(
        req.params.id
    );
    res.render('edit', {restaurant, categories});
}

module.exports.updateRestaurant = async function(req, res) {
    await Restaurant.update(
        {
            name: req.body.name,
            category: req.body.category,
            rating: req.body.rating,
            image: req.body.image,
            description: req.body.description
        },
            {
                where:
                    {
                        id: req.params.id
                    }
            });
    res.redirect('/');
}