var express = require("express");
var app =express();
var bodyParser = require("body-parser");
var fs = require("fs");

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
	console.log("Server starting at localhost:3000");
});

app.get("/", function(req,res){
  // res.send("I am working and online abby");
  res.render("photo");
  }
);

app.get("/dashboard", function(req,res){
  res.render("dashboard");
  }
);



// app.get("/", function(req, res){
//     res.render("home");
// });





//show all the campgrounds
// app.get("/campGrounds", function(req,res){
//   res.render("campGrounds", {campGrounds: campGrounds});
// });
//
// //show the form that sends to a post route
// app.get("/campGrounds/new", function(req,res){
//   res.render('new');
// });
//
// //the req incoming is from a form and so we get the values within the form
// //makes a new camp grounds
// app.post("/campGrounds", function(req,res){
//   //get data from form and add to campgrounds array and redirect to campgrounds page
//   var name = req.body.name; //import is to get the name of the inout types within the form
//   var image = req.body.image;
//   var newCampground = {name: name, image:image};
//   campGrounds.push(newCampground);
//   res.redirect("/campGrounds");
// });
//we have a form and send post request somewhere and then we have the form data



//
// var imageCapture;
//
// function onGetUserMediaButtonClick() {
//   navigator.mediaDevices.getUserMedia({video: true})
//   .then(mediaStream => {
//     document.querySelector('video').srcObject = mediaStream;
//
//     const track = mediaStream.getVideoTracks()[0];
//     imageCapture = new ImageCapture(track);
//   })
//   .catch(error => console.log(error));
// }
//
// function onGrabFrameButtonClick() {
//   imageCapture.grabFrame()
//   .then(imageBitmap => {
//     const canvas = document.querySelector('#grabFrameCanvas');
//     drawCanvas(canvas, imageBitmap);
//   })
//   .catch(error => console.log(error));
// }
//
// function onTakePhotoButtonClick() {
//   imageCapture.takePhoto()
//   .then(blob => createImageBitmap(blob))
//   .then(imageBitmap => {
//     const canvas = document.querySelector('#takePhotoCanvas');
//     drawCanvas(canvas, imageBitmap);
//   })
//   .catch(error => console.log(error));
// }
