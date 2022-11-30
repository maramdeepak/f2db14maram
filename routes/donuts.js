            var express = require('express'); 
            const donut_controlers= require('../controllers/donut'); 
            var router = express.Router(); 

            // A little function to check if we have an authorized user and continue on 
            //or 
            // redirect to login. 
            const secured = (req, res, next) => { 
                if (req.user){ 
                return next(); 
                } 
                req.session.returnTo = req.originalUrl; 
                res.redirect("/login"); 
            } 

 
            
            /* GET donuts */ 
            router.get('/', donut_controlers.donut_view_all_Page ); 
            /* GET detail costume page */ 
            router.get('/detail', donut_controlers.donut_view_one_Page); 
            /* GET create costume page */ 
            router.get('/create',secured, donut_controlers.donut_create_Page); 
            /* GET create update page */ 
            router.get('/update',secured, donut_controlers.donut_update_Page); 
            /* GET delete costume page */ 
            router.get('/delete',secured, donut_controlers.donut_delete_Page); 
            module.exports = router; 