
$(document).ready(function(){
    $(".awards").waypoint(function(){
        $(".awards").addClass("animate__animated animate__fadeInUp animate__fadeIn");
    }, {offset:"80%"})
    $(".featured").waypoint(function(){
        $(".featured").addClass("animate__animated animate__fadeInUp animate__fadeIn");
    }, {offset:"80%"})
    $(".best-seller").waypoint(function(){
        $(".best-seller").addClass("animate__animated animate__fadeIn");
    }, {offset:"80%"})
    $(".quotep").waypoint(function(){
        $(".quotep").addClass("animate__animated animate__fadeIn");
    }, {offset:"80%"})
})
