// Thinking of renaming this file... 'main' sounds bad?

// var short_description = "";
var normal_description = "Howdy! I'm James Vanderburg, a software developer at \
USAA in Plano, Texas.";

function checkSize() {
  if ($( window ).width() <= 720) {
    // Change this to something decently descriptive
    $(".project-tagline").html("James Vanderburg")
  } else {
    $(".project-tagline").html(normal_description)
  }
}

// run once to check on load
checkSize();
// do this for resizing
$(window).resize(function () {
  checkSize();
});
