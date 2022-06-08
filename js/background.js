function randomBackground() {
    var number = Math.floor(Math.random() * 9) + 1;
    if (number.toString().length == 1) number = '0' + number;
    document.body.style.background = "url('img/bg" + number + ".webp')";
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
}