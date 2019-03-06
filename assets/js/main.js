// Thinking of renaming this file... 'main' sounds bad?

// var short_description = "";
var normal_description = "Howdy! I'm James Vanderburg, a Computer Science student at Texas A&M University looking for opportunities to solve new problems frequently, gain experience with various technologies quickly, and change the world for the better for clients.";

$(window).resize(function () {
  if ($( window ).width() < 720) {
    // Change this to something decently descriptive 
    $(".project-tagline").html("James Vanderburg")
  } else {
    $(".project-tagline").html(normal_description)
  }
});
