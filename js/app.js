//nav

$("#hamburgerButton").on("click", function () {
    "use strict";
    $(this).height(300);
});

//services list
    //using jQuery 
    //show.bs.collapse is in the bootstrap documentation. This event fires immediately when the show instance method is called.
    //.collapse.in shows the content
    //.collapse('hide')Hides a collapsible element
$(".servicesList").on('show.bs.collapse', '.collapse', function () {
    "use strict";
    $(".servicesList").find('.collapse.in').collapse('hide');
});



//open first part of accordion when page comes open using vanilla JS.

var firstCategory = document.getElementById("collapseOne");
firstCategory.classList.add("in");


//footer

var today = new Date();
var year = today.getFullYear();

var footerDate = document.getElementById("date");
footerDate.innerHTML = "<p>&copy;" + year + " Made Man Salon.</p>";
