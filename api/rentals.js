const { rentals } = require('../data/helpers');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const allRentals = await rentals.getAllRentals();

        res.status(200).json(allRentals);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;
