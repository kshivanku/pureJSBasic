//Without waiting for document to be ready, if we do this, heading_js remains null as page is not loaded before var gets defined inside JS
// var heading_jQuery = $("#head");
// var heading_js = document.getElementById("head");
// console.log(heading_js);
// console.log(heading_jQuery);


//NOT USING JQUERY'S $(DOCUMENT).READY() FUNCTION, WINDOW.ONLOAD FUNCTION HAS TO BE USED
window.onload = runjs; //runjs is like a setup function now, like from p5

function runjs(){
  var heading_jQuery = $("#head");
  var heading_js = document.getElementById("head");
  console.log(heading_js); //heading_js is an html element
  console.log(heading_jQuery); //heading_jQuery is a jQuery object

  //Pure JS can be written on the html element
  heading_js.addEventListener("click", function(){
    console.log("clicked through JS");
  })

  //JQuery functions can be written on the jQuery object
  heading_jQuery.click(function(){
    console.log("clicked through jQuery");
  });
}


// //USING JQUERY'S DOCUMENT.READY FUNCTION
// $(document).ready(function(){
//   var heading_jQuery = $("#head");
//   var heading_js = document.getElementById("head");
//   console.log(heading_js); //heading_js is an html element
//   console.log(heading_jQuery); //heading_jQuery is a jQuery object
//
//   //Pure JS can be written on the html element
//   heading_js.addEventListener("click", function(){
//     console.log("clicked through JS");
//   })
//
//   //JQuery functions can be written on the jQuery object
//   heading_jQuery.click(function(){
//     console.log("clicked through jQuery");
//   });
// });
