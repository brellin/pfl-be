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

router.post('/new', async (req, res) => {
    const { name, link, scheduled, contacted, wanted } = req.body;

    try {
        const rental = await rentals.addRental({ name, link, scheduled, contacted, wanted });
        console.log(rental);
        res.status(201).json(rental);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, link, scheduled, contacted, wanted } = req.body;

    console.log(scheduled, contacted, wanted);

    try {
        const rental = await rentals.updateRental(id, { name, link, scheduled, contacted, wanted });
        console.log(rental);
        res.status(201).json(rental);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await rentals.deleteRental(id);

        res.status(200).json({ message: 'deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;
