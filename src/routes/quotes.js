const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const quotes = require('../sample.json');

//Get
router.get('/' , (req, res) => {
    res.json(quotes);
});

//Post
router.post('/' , (req, res) => {
    const { document, name, surname, dateofbirth, city, neighborhood, cellnumber} = req.body;
    if ( document && name && surname && dateofbirth && city && neighborhood && cellnumber) {
        const newQuote = {...req.body};
        quotes.push(newQuote);
        res.json(quotes);
    } else {
       res.send('Wrong Request');
    }
});

//Put
router.put('/:document', (req, res) => {
    const { document } = req.params;
    const {name, surname, dateofbirth, city, neighborhood, cellnumber} = req.body;
    if (name && surname && dateofbirth && city && neighborhood && cellnumber) {
        _.each(quotes, (quote, i) => {
            if (quote.document == document) {
                quote.name = name;
                quote.surname = surname;
                quote.dateofbirth = dateofbirth;
                quote.city = city;
                quote.neighborhood = neighborhood;
                quote.cellnumber = cellnumber;
            }
        });
        res.json(quotes);
    } else {
        res.status(500).json({error: 'There was an error'});
    }
});

//Delete
router.delete('/:document', (req, res) => {
      const { document } = req.params;
        _.each(quotes, (quote, i) => {
            if (quote.document == document) {
                quotes.splice(i, 1);
            }
    });
    res.send('deleted');
});

module.exports = router;