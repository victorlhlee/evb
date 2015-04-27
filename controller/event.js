var express =require('express');
var router = express.Router();
var Event = require('../models/event');
var moment = require('moment');


// router.list = function (req, res) {
//   Event.find(function(err, eventsFromDB){
//     res.render('/', {
//       events : eventsFromDB
//     });
//   });
// };

router.get('/', function (req, res){
  Event.find(function (err, eventsFromDB){
    if(err) throw err;
    res.render("event", {
      events : eventsFromDB
  });
 });    
});

router.get('/new', function (req, res){
  res.render ('new');
});

// router.get('/new', function (req, res){
//   res.render('events/new');
// });

// router.get('/:id/edit', function (req, res){
//   var event_id = req.params.id;
// });

//get edit event page
router.get('/events/:id', function (req, res){
  var event_id = req.params.id;

  Event.findById(event_id, function (err, event){
    res.render('edit_event', {
      event : event
    });
  });
});
//
//get event page
// router.get('/:id', function (req, res){
//   var event_id = req.params.id;
//   Event.findById(event_id, function (err, event){
//     res.render('events/event', {
//       event : event
//     });
//   });
// });

//post event data
router.post('/new_event', function (req, res){
  var newEvent = new Event({
    title: req.body.title,
    date: req.body.date,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
    comments: req.body.comments,
    street: req.body.street,
    district: req.body.district,
    city: req.body.city,
    postal_code: req.body.postal_code,
    contact: req.body.contact,
    phone: req.body.phone
});
//   //save data to db (mongodb via mongoose)
  newEvent.save(function (err){
    if(err) throw err;
    res.redirect('/');
  });
});

router.put('/:id', function (req, res){
  var event_id = req.params.id;
  Event.findById(event_id, function(err, eventsFromDB){
    eventsFromDB.title = req.body.title;
    eventsFromDB.date = req.body.date;
    eventsFromDB.start_time = req.body.start_time;
    eventsFromDB.end_time = req.body.end_time;
    eventsFromDB.comments = req.body.comments;
    eventsFromDB.street = req.body.street;
    eventsFromDB.district = req.body.district;
    eventsFromDB.city = req.body.city;
    eventsFromDB.postal_code = req.body.postal_code;
    eventsFromDB.contact = req.body.contact;
    eventsFromDB.phone = req.contact.phone;
    eventsFromDB.save(function (err){
      if(err) throw err;
      res.redirect('/');
    });
  });
});

// //delete event in events list
router.delete('/events/:id', function (req, res){
  var event_id = req.params.id; 
  Event.findById(event_id, function (err, event){ // find event item by id
    Event.remove(event, function (){ //remove event item
      res.redirect('/'); //redirect to list page
    });
  });
});

module.exports = router;