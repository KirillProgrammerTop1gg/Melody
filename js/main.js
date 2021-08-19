$(document).ready(function () {
    var floorPath = ".home-img path"
    var floor = 2;
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    $(floorPath).on("mouseover", function () {
        floor = $(this).attr('data-floor');
        $(".counter").text(floor);
        $(floorPath).removeClass("curFloor");
        floorOtf = floor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
        $(`[data-floor=${floorOtf}]`).toggleClass("curFloor");
    });
    counterUp.on("click", function () {
        if(floor != 18){
            floor++;
            floorOtf = floor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(floorOtf);
            $(floorPath).removeClass("curFloor");
            $(`[data-floor=${floorOtf}]`).toggleClass("curFloor");
        }
    });
    counterDown.on("click", function () {
        if(floor != 2){
            floor--;
            floorOtf = floor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(floorOtf);
            $(floorPath).removeClass("curFloor");
            $(`[data-floor=${floorOtf}]`).toggleClass("curFloor");
        }
    });
});