var Donut = require('../models/donut'); 
 
// List of all Donuts 
exports.donut_list = async function(req, res) { 
    try{ 
        theDonut = await Donut.find(); 
        res.send(theDonut); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Donut. 
exports.donut_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Donut detail: ' + req.params.id); 
}; 
 
// Handle Donut create on POST. 
exports.donut_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Donut(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"donut_type":"goat", "cost":12, "size":"large"} 
    document.donut_Name = req.body.donut_Name; 
    document.shop = req.body.shop; 
    document.price = req.body.price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Donut delete form on DELETE. 
exports.donut_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Donut delete DELETE ' + req.params.id); 
}; 
 
// Handle Donut update form on PUT. 
exports.donut_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Donut update PUT' + req.params.id); 
}; 
exports.donut_view_all_Page = async function(req, res) { 
    try{ 
        theDonuts = await Donut.find(); 
        res.render('donuts', { title: 'Donut Search Results', results: theDonuts }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 