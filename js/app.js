//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p id='caption'></p>") ;
var $closeButton = $("<button id='closeButton'>X</button>") ;
var $windowDiv = $('<div id="windowDiv"></div>') ;
var $nextButton = $("<button id='nextButton'>Next</button>") ;
var $prevButton = $("<button id='prevButton'>Prev</button>") ;

//Add windowDiv to overlay
$overlay.append($windowDiv) ;

//Add close button to windowDiv
$windowDiv.append($closeButton) ;
//Add image to windowDiv
$windowDiv.append($image);
//Add captions to windowDiv
$windowDiv.append($caption) ;

//Add next and prev buttons
$windowDiv.append($nextButton) ;
$windowDiv.append($prevButton) ;

//image list array
var imageArray = [] ;
//caption list array
var captionArray = [] ;

//store all images and captions into designated arrays
var $lia = $('li a');
  $lia.each(function(index) {

    //image
    imageArray[index] = ( $(this).attr('href') ) ;
    //caption
    captionArray[index] = ( $(this).children().attr('alt')) ;
    
  });



//Add overlay
$("body").append($overlay);


//when you next, go to next image
//get the href of each link and store them in an array
$nextButton.click(function() {

  //get the current index
  var currentImage = $image.attr('src');
  var currentIndex = $.inArray(currentImage, imageArray)
  //if index > length
  if(currentIndex==(imageArray.length-1)){

    //set $image to first index
    $image.attr('src', imageArray[0]);
    //set caption to first index
    $caption.text(captionArray[0]);

  } else {

    //else, go to the next index
    var nextIndex = currentIndex + 1 ;
    //set image to next index
    $image.attr('src', imageArray[nextIndex]) ;
    //set caption to next index
    $caption.text(captionArray[nextIndex]) ;

  }
  
});

//when you prev, go to previous image
//get the href of each link and store them in an array
$prevButton.click(function() {

  //get the current index
  var currentImage = $image.attr('src');
  var currentIndex = $.inArray(currentImage, imageArray)
  //if index > length
  if(currentIndex==0){

    //set $image to first index
    $image.attr('src', imageArray[(imageArray.length-1)]);
    //set caption to first index
    $caption.text(captionArray[(imageArray.length-1)]);

  } else {

    //else, go to the prev index
    var prevIndex = currentIndex - 1 ;
    $image.attr('src', imageArray[prevIndex]) ;
    //set caption to next index
    $caption.text(captionArray[prevIndex]) ;

  }
  
});


//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  //Show the overlay.
  $overlay.show();
  
  //Get child's alt attribute and set caption
  var caption = $(this).children().attr('alt') ;
  $caption.text(caption) ;

});

//When overlay is clicked
$closeButton.click(function(){
  //Hide the overlay
  $overlay.hide();
});










