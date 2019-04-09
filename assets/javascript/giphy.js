// Create variables


// Create topics array
var topics = [
  "eye roll",
  "face palm",
  "happy",
  "high five",
  "lol",
  "sad face",
  "shrug",
  "thumbs up",
  "wink",
  "hair flip",
  "applause",
  "agree",
  "confused",
  "hello",
  "mic drop",
  "crying",
  "disgusted",
  "embarrassed",
  "sigh",
  "slow clap",
  "thumbs down",
  "smh",
  "fist bump",
  "lol",
  "you got this"
]

// Create renderButtons function
function renderButtons() {

  // Empty #buttons div
  $("#buttons").empty();

  // Loop through array of gifs
  for (var i = 0; i < topics.length; i++) {

    // Create a button tag
    // Add class of "btn btn-secondary gif-button"
    // Add attribute "data-topic" = topic[i]
    // Add text = topic[i]
    // Append to #buttons div
    var $button = $("<button>")
      .addClass("btn btn-secondary gif-button m-1")
      .attr("data-topic", topics[i])
      .text(topics[i])
      .appendTo("#buttons")
  };
};

renderButtons();


// displayGIFsInfo function re-renders to HTML to display appropriate content
function displayGIFsInfo() {
  // Create variable reation and get from attribute data-reaction

  // Create queryURL

  // Create AJAX call for specific gif button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }), then(function(response) {
    // Create a div to hold GIF with a class of "card"



    // Create an image tag
    // Add src of still url
    // Add attribute "data-still" = still url
    // Add attribute "data-animate" = animate url
    // Add attribute "data-state" = "still"
    // Add class of "gif card-img-top"
    // Append to GIF div

    // Create a ratings div with class of "card-body"
    // Create a p tag
    // Add text of Rating from response
    

    // Append image tag and p tag to GIF div


    // Prepend $gifDiv to #gifs-appear-here on page


  });
};


// Add event listener for when a add-gif button is clicked
  // Add event.preventDefault()
  // Grab val() of #gif-input and store in variable
  // Push to topics array
  // Call renderButtons()

// Add event listener for when a gif is clicked
  // Grab val of "data-state" attribute of gif clicked
  // If state = "still"
    // change "src" to animate url
    // change "data-state" to "animate"
  // Else
    // change "src" to still url
    // change "data-state" to "still"