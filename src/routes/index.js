const { Router } = require('express');
const router =  Router();

router.get('/test', (req, res) => {
    const data = {
        name: 'fastz',
        website: 'faztweb.com'
    };
    res.json(data);
});

module.exports = router;