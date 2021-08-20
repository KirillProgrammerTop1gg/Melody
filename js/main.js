$(document).ready(function () {
    var floorPath   = $(".home-img path");
    var apartPath   = $(".flats path");
    var apartLink    = $(".flat-link")
    var floor       = 2;
    var counterUp   = $(".counter-up");
    var counterDown = $(".counter-down");
    var buttonOpen  = $('.button-primary');
    var buttonClose = $('.modal-close-button');
    var modal       = $('.modal');
    floorPath.on("mouseover", function () {
        floor = $(this).attr('data-floor');
        $(".counter").text(floor);
        floorPath.removeClass("curFloor");
        floorOtf = floor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
        $(`[data-floor=${floorOtf}]`).toggleClass("curFloor");
    });
    counterUp.on("click", function () {
        if(floor != 18){
            floor++;
            floorOtf = floor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(floorOtf);
            floorPath.removeClass("curFloor");
            $(`[data-floor=${floorOtf}]`).toggleClass("curFloor");
        }
    });
    counterDown.on("click", function () {
        if(floor != 2){
            floor--;
            floorOtf = floor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(floorOtf);
            floorPath.removeClass("curFloor");
            $(`[data-floor=${floorOtf}]`).toggleClass("curFloor");
        }
    });
    floorPath.on('click', toggleModal);
    $(buttonOpen).on('click', toggleModal);
    $(buttonClose).on('click', toggleModal);
    apartPath.on('mouseover', function(){
        apartament = $(this).attr('data-apartament');
        apartPath.removeClass("curFloor");
        apartLink.removeClass("flh");
        $(`[data-apartament=${apartament}]`).toggleClass('curFloor');
        $(`[data-apartament-link=${apartament}]`).toggleClass('flh');
    });
    apartLink.on('mouseover', function(){
        apartament = $(this).attr('data-apartament-link');
        apartPath.removeClass("curFloor");
        apartLink.removeClass("flh");
        $(`[data-apartament=${apartament}]`).toggleClass('curFloor');
        $(`[data-apartament-link=${apartament}]`).toggleClass('flh');
    });
    function toggleModal(){
        modal.toggleClass("is-open");
    }
});
