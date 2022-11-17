            var express = require('express'); 
            const donut_controlers= require('../controllers/donut'); 
            var router = express.Router(); 
            
            /* GET donuts */ 
            router.get('/', donut_controlers.donut_view_all_Page ); 
            /* GET detail costume page */ 
            router.get('/detail', donut_controlers.donut_view_one_Page); 
            /* GET create costume page */ 
            router.get('/create', donut_controlers.donut_create_Page); 
            /* GET create update page */ 
            router.get('/update', donut_controlers.donut_update_Page); 
            /* GET delete costume page */ 
            router.get('/delete', donut_controlers.donut_delete_Page); 
            module.exports = router; 