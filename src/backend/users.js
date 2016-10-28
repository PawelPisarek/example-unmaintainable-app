const router = require('express').Router();

router.get('/users', (req, res) => {
    req.app.get('DatabaseConnector').promiseMeTheListing()
        .then(results => {
            res.json(results);
        });

});

router.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    req.app.get('DatabaseConnector').promiseMeTheOne(userId, (result, err) => {
        if (err) {
            res.status(500).json({
                error: err.message
            });
        } else {
            res.json(result);
        }
    })

});

module.exports = router;