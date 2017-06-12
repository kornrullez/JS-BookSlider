$(function(){

    var slider = $("#bookslider");
    var value;

    $(slider).on('mousemove change', function() {

        value = $(slider).val();
        var percentage = value * 10 + "%";
        $('#addedValue').html("<h1>"+ value + "</h1>");
        $('#addedValue').attr('data-value', value);
        $("#sliderimage, #sliderp").css("width", percentage);



    });


});