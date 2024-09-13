$(document).ready(function () {
            $(".imag").click(function () {
                $(".Outer").toggle("swing");
            });
            $(".correct").click(function (){
$(this).css("color", "green")();
});
$(".wrong").click(function (){
$(this).css("color", "red")();
});
        }); 
