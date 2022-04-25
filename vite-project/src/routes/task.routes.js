const express = require('express');
const router = express.Router();

router.get('/tasks', (req, res)=>{
    res.json({
       status: "Apis WORKs" 
    });
});

module.exports = router;