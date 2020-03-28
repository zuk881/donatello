$(document).ready(function () {

  function displayUserProjects() {

    var username = $("#github-user").val().trim()
    window.location.href = "/user/" + username

  }

  $("#user-form-input").on("click", displayUserProjects)

  var urlParams = window.location.href.split("/")
  var username = urlParams[urlParams.length - 1];
  // console.log(username);
  function getProjects() {
    $.get("/api/user/" + username, function(data) {
      displayProj(data)
    })
  }
getProjects();

  function displayProj(data) {
    // set variable to shorten result string
    $("#result-table").empty();
    // loop through results
    for (var i = 0; i < data.length; i++) {
      // set variables to results and append them to html
      var project = $("<div>");
      var photo = $("<img>");
      var projectCard;
      // var image = result[i].projectImage;
      photo.attr("src", data[i].projectImage);
      photo.addClass("project-photo");
      project.attr("data-id-1", data[i].projectName);
      project.attr("data-id-2", data[i].projectDescription);
      project.attr("data-id-3", data[i].projectLink);
      project.addClass("res-card");
      project.addClass("col-sm-2");
      project.append(projectCard);
      project.prepend(photo);
      $("#result-table").prepend(project);
    }
  }

});



