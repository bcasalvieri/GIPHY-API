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

  // Loop through array of topics
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
      .appendTo("#buttons");
  };
};

// displayGIFsInfo function re-renders to HTML to display appropriate content
function displayGIFsInfo() {

  // Create variable reation and get from attribute data-reaction
  var topic = $(this).attr("data-topic");

  // Create queryURL
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&limit=10&api_key=ibdYlpIAmQD4O4AICfuKUURluf9HMssh"

  // Create AJAX call for specific gif button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(topic)
    console.log(queryURL)
    console.log(response)
    var results = response.data;

    for (var i = 0; i < results.length; i++) {

      // Add div with class that sets size
      var $gifDiv = $("<div>").addClass("col-12 col-sm-6 col-xl-4 mb-1 d-flex align-items-stretch justify-content-center");
      
      // Create a div to hold GIF with a class of "card"
      var $cardDiv = $("<div>").addClass("card");
  
      // Create an image tag
      // Add src of still url
      // Add attribute "data-still" = still url
      // Add attribute "data-animate" = animate url
      // Add attribute "data-state" = "still"
      // Add class of "gif card-img-top"
      // Append to GIF div
      var $gifImage = $("<img>")
        .attr("src", results[i].images.fixed_height_still.url)
        .attr("data-still", results[i].images.fixed_height_still.url)
        .attr("data-animate", results[i].images.fixed_height.url)
        .addClass("gif card-img-top")
        .appendTo($cardDiv);
  
      // Create a rating div with class of "card-body"
      var $ratingDiv = $("<div>").addClass("card-body d-flex flex-column py-1 px-0");
  
      // Create a p tag
      // Add text of Rating from response
      var $ratingP = $("<p>")
        .addClass("text-center mb-0 mt-auto")
        .text("Rating: " + results[i].rating)
        .appendTo($ratingDiv);
  
      // Append $ratingDiv to GIF div
      $cardDiv.append($ratingDiv);

      // Append $cardDiv to $gifDiv
      $gifDiv.append($cardDiv);
  
      // Prepend $gifDiv to #gifs-appear-here on page
      $("#gifs-appear-here").prepend($gifDiv);

    };
  });
};


// Add event listener for when a add-gif button is clicked
$("#add-gif").on("click", function(event) {

  // Add event.preventDefault()
  event.preventDefault();

  // Grab val() of #gif-input and store in variable
  var topic = $("#gif-input").val().trim();

  // Push to topics array
  topics.push(topic);

  // Call renderButtons()
  renderButtons();

});

// Add event listener for when a gif is clicked
$(document).on("click", ".gif", function() {

  // Grab val of "data-state" attribute of gif clicked
  var state = $(this).attr("data-state");

  // If state = "still"
  if (state === "still") {
    // change "src" to animate url
    $(this).attr("src", $(this).attr("data-animate"))
    // change "data-state" to "animate"
    $(this).attr("data-state", "animate")
  }
  // Else
  else {
    // change "src" to still url
    $(this).attr("src", $(this).attr("data-still"))
    // change "data-state" to "still"
    $(this).attr("data-state", "still")
  };

});

// Add event listener when #clear button is clicked
$("#clear").on("click", function() {
  
  // Clear gifs off page
  $("#gifs-appear-here").empty();

  // Clear search field
  $("#gif-input").val("");

});


// Add click event listeners to all elements with class of "gif-button"
$(document).on("click", ".gif-button", displayGIFsInfo)

// Call renderButtons function to display the initial buttons
renderButtons();