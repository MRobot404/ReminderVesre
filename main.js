var countDownDate = new Date("Apr 8, 2024 00:00:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = "Quedan " + days + " días, " + hours + " horas, "
        + minutes + " minutos, y " + seconds + " segundos para otro hermoso cumpleaños a tu lado.";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "¡Ha llegado la fecha deseada!";
    }
}, 1000);