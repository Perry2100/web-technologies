let lampOn = false;

const lamp = document.getElementById("lamp");
const spotlight = document.getElementById("spotlight");
const magician = document.getElementById("magician");
const hat = document.getElementById("hat");
const rabbit = document.getElementById("rabbit");
const pullBall = document.getElementById("pull-ball");
const sparkles = document.getElementById("sparkles");

lamp.onclick = () => {

    // animate the pull string
    pullBall.classList.remove("pull-anim");
    void pullBall.offsetWidth; // restart animation
    pullBall.classList.add("pull-anim");

    lampOn = !lampOn;

    if (lampOn) {
        spotlight.style.opacity = "1";
        magician.style.opacity = "1";
        hat.style.opacity = "1";

        // delay rabbit pop to sync with magic
        setTimeout(() => {
            rabbit.classList.add("rabbit-pop");

            // start hopping after pop
            setTimeout(() => {
                rabbit.classList.add("rabbit-hop");
            }, 1000);

            // sparkles
            sparkles.classList.add("sparkle-active");
            setTimeout(() => sparkles.classList.remove("sparkle-active"), 1500);

        }, 1200);

    } else {
        // Turn everything OFF
        spotlight.style.opacity = "0";
        magician.style.opacity = "0";
        hat.style.opacity = "0";

        rabbit.style.opacity = "0";
        rabbit.classList.remove("rabbit-pop", "rabbit-hop");
    }
};
const toggleRabbitBtn = document.getElementById("toggleRabbit");
let rabbitVisible = true;

toggleRabbitBtn.onclick = () => {
    if (!lampOn) return;  // Rabbit can only change when lamp is on

    rabbitVisible = !rabbitVisible;

    if (rabbitVisible) {
        // Show rabbit again
        rabbit.style.opacity = "1";

        // resume hopping animation
        rabbit.classList.add("rabbit-hop");
    } 
    else {
        // Hide rabbit
        rabbit.style.opacity = "0";

        // stop hopping animation
        rabbit.classList.remove("rabbit-hop");
    }
};
