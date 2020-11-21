$(document).ready(function () {
    $("#cab").change(function () {       
        if ($(this).val() == 1) {
            $("#luggage").attr("disabled", "disabled")
           
        } else {
            $("#luggage").removeAttr("disabled");
            $("#luggage").focus();
        }
    });

$('.lug').keyup(function () { 
    this.value = this.value.replace(/[^0-9\.]/g,'');
});

    $("#btn2").click(function (e) {
       var p = $("#pickup").val();
       var d = $("#drop").val();
       var c=  $("#cab").val();
       var l = $("#luggage").val();
       if (p== d) {
        $("#book").css("display:block");
        $("#book").html("Pick Up and destination can not be same");
    } else{
        $.ajax({
            url: "calculation.php",
            type: 'POST',
            dataType: "text",
            data:{
                pick : p,
                dr : d,
                car : c,
                w : l

            },
            success: function (result) {

                
               $("#book").html("Total fare Is: " +result);
               $("#book").css("display:block");
            },
            error: function () {

                alert(error);
            }


        });
        
    }
    e.preventDefault();    

});
});