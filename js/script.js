var count = 0;

$(document).ready(function () {
	"use strict";
    var TVTitles = $(".TVContent h2");
    var TVDiv = $("<div class = 'TVLinks'>");
    TVTitles.each(function(){
        $(this).html("<a name='TVLink" + count + "'></a>" + $(this).html());
        TVDiv.append($("<div class='align-center navs col-md-2 col-sm-2 col-xs-2'><a class='col-md-12 col-sm-12 col-xs-12' href='#TVLink" + count++ + "'>" + $(this).text() + "</a></div>"));
    });
    $(".container h1").after(TVDiv);
});