$(document).ready(function () {

    var envelope = $("#envelope");
    var heartsContainer = $(".hearts");
    var btn_open = $("#open");

    envelope.on("click touchstart", function () {
        envelope.toggleClass("open close");

        if (envelope.hasClass("open")) {
            launchHearts();
        }
    });

    btn_open.click(function () {
        window.location.href = "index2.html";
    });

    function launchHearts() {

        for (let i = 0; i < 100; i++) {

            let heart = $("<div class='heart'></div>");

            let envelopeWidth = $("#envelope").width();

            let randomLeft = Math.random() * (envelopeWidth - 30);
            let randomDuration = 3 + Math.random() * 3;
            let randomDelay = Math.random() * 0.5;
            let randomSize = 15 + Math.random() * 50;
            let colors = ["#ff2a22", "#ff4d6d", "#ff758f", "#ff1744"];
            let randomColor = colors[Math.floor(Math.random() * colors.length)];


            heart.css({
                left: randomLeft + "px",
                width: randomSize + "px",
                height: randomSize + "px",
                background: randomColor,
                animationDuration: randomDuration + "s",
                animationDelay: randomDelay + "s"
            });

            heartsContainer.append(heart);

        }
    }

});