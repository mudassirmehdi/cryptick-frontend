$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

 
function changeImg() {
    var image = document.getElementById('eye-icon');  

    if (image.src.match("images/icons/eye.svg")) {
        image.src = "images/icons/eye-spalsh.svg";
    }
    else {
        image.src = "images/icons/eye.svg";
    } 
}

$('#eye-icon').click(function() {
    $('.balance-show').toggleClass('d-none');
    $('.balance-hide').toggleClass('d-none');
});

 
 