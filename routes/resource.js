var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var donut_controller = require('../controllers/donut'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Donut.  
router.post('/donuts', donut_controller.donut_create_post); 
 
// DELETE request to delete Donut. 
router.delete('/donuts/:id', donut_controller.donut_delete); 
 
// PUT request to update Donut. 
router.put('/donuts/:id', donut_controller.donut_update_put); 
 
// GET request for one Donut. 
router.get('/donuts/:id', donut_controller.donut_detail); 
 
// GET request for list of all Donut items. 
router.get('/donuts', donut_controller.donut_list); 
 
module.exports = router; 