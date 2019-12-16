const router = require('express').Router()
	, clients = require('../Models/Clients');

router.get('/:id', (req, res, next) => {
	clients
		.findById(req.params.id)
		.then(client => res.send(client))
		.catch(next);
});

router.get('/', (req, res, next) => {
	clients
		.find()
		.then(clients => res.send(clients))
		.catch(next);
});

router.post('/', (req, res, next) => {
	clients
		.create(req.body)
		.then(client => res.send(client))
		.catch(next);
});

router.put('/:id', (req, res, next) => {
	clients
		.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.then(client => res.send(client))
		.catch(next);
});

router.delete('/:id', (req, res, next) => {
	clients
		.findByIdAndDelete(req.params.id)
		.then(client => res.send(client))
		.catch(next);
})

module.exports = router;