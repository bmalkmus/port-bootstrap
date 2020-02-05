



$(".projects").click(function(){

    let proDiv = $("<div>");
    let title = $("<h2>").text(this.id);
    let screenshot = $('<img>').attr("src",this.dataset.screen);
    console.log(this.dataset.screen)
    let github = $('<a>').attr("href", this.dataset.deployed);
    $(github).html('Github Deployment')
    let repo = $('<a>').attr("href", this.dataset.repo);
    $(repo).html('GitHub Repository');
    let close = $('<span>').html("&times;");
    $(close).addClass("close");
    $(proDiv).append(close);
    $(proDiv).append(title);
    $(proDiv).append(screenshot);
    $(proDiv).append(github);
    $(proDiv).append(repo);
    $(".context").prepend(proDiv);
    proDiv.attr("display", "block")


})



