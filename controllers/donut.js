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
 
 
// Handle Costume update form on PUT. 
exports.donut_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Donut.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.donut_Name)  toUpdate.donut_Name = req.body.donut_Name; 
        if(req.body.shop) toUpdate.shop = req.body.shop; 
        if(req.body.price) toUpdate.price = req.body.price; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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
// for a specific donut. 
exports.donut_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Donut.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
// Handle Donut delete on DELETE. 
exports.donut_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Donut.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
  
 // Handle a show one view with id specified by query 
exports.donut_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Donut.findById( req.query.id) 
        res.render('donutdetail', { title: 'donut Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a donut. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.donut_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('donutcreate', { title: 'Donut Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a costume. 
// query provides the id 
exports.donut_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Donut.findById(req.query.id) 
        res.render('donutupdate', { title: 'Donut Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.donut_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Donut.findById(req.query.id) 
        res.render('Donutdelete', { title: 'Donut Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 
 