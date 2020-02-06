
$('document').ready(function(){

    let proDiv


    $(".projects").click(function(){
        $(proDiv).empty();
        proDiv = $("<div>");
        $(proDiv).addClass("popUp");
        let title = $("<h2>").text(this.p);
        let screenshot = $('<img>').attr({
            src: this.dataset.screen,
            width: '700px',
            height: '400px'
        });
        screenshot.css('border', '2px solid #109dac');
        let github = $('<a>').attr({href: this.dataset.deployed, target: "_blank"});
        $(github).html('GitHub Deployment')
        let gitHubP = $('<p>');
        let repoP = $("<p>");
        let repo = $('<a>').attr({href: this.dataset.repo, target: "_blank"});
        $(repo).html('GitHub Repository');
        let close = $('<span>').html("&times;");
        $(close).addClass("close");
        $(proDiv).append(close);
        $(proDiv).append(title);
        $(proDiv).append(screenshot);
        $(gitHubP).append(github);
        $(repoP).append(repo);
        $(proDiv).append(repoP);
        $(proDiv).append(gitHubP);
        proDiv.css({
            display: "inline-block",
            position: 'fixed',
            zIndex: '1',
            width: '800px',
            height: '80%',
            overflow: 'auto',
            border: 'solid 5px rgb(1,84,134)',
            backgroundColor: "#af9879",
        })
        $(".context").prepend(proDiv);
        $('.projects').css("visibility", "hidden");
        $('footer').css("display", "none");

        $(close).click(function() {
            $(proDiv).css('display', 'none');
            $('.projects').css('visibility', 'visible');
            $('footer').css("display", "block");
        })
    })

    $('#submitMail').click(function(event){
        console.log("click");
            event.preventDefault();
            let email = "benjamin.malkmus@outlook.com";
            var subject = $('#subjectName').label + "  " + $('#subjectAdd') ;
            var emailBody = $('#mailbody').label;
            window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;

    })

})




