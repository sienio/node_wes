const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const wes = {
    name: 'Michał',
    wiek: 31,
    cool: true
  };
  // res.send('Hey! It works!');
  // res.json(wes)
  res.json(wes)
});

router.get('/reverse/:name', (req,res)=>{
  const reverse = [...req.params.name].reverse().join('')
  res.send(reverse);
})

module.exports = router;