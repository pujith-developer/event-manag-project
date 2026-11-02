// service
function showServices() {

    let cards = document.querySelectorAll(".extra-card");

    let btn = document.getElementById("seeBtn");

    if (btn.innerHTML === "See All") {

        cards.forEach(function(card) {
            card.style.display = "block";
        });

        btn.innerHTML = "See Less";

    } 
    else {

        cards.forEach(function(card) {
            card.style.display = "none";
        });

        btn.innerHTML = "See All";

    }

}

// gallery
let track = document.getElementById("galleryTrack");

let images = document.querySelectorAll(".gallery-track img");

let index = 0;

function nextImage() {

    if (index < images.length - 3) {
        index++;
    }

    track.style.transform = "translateX(-" + index * (images[0].offsetWidth + 20) + "px)";

}

function prevImage() {

    if (index > 0) {
        index--;
    }

    track.style.transform = "translateX(-" + index * (images[0].offsetWidth + 20) + "px)";

}

 // contact

        function contact(event) {
            event.preventDefault();

            let cname = document.getElementById("cname").value;
            let cphone = document.getElementById("cphone").value;
            let cemail = document.getElementById("cemail").value;


            if (cname == "" || cphone == "" || cemail == "") {
                alert("Please enter your name , mobile number and email!");
                return;
            }

            localStorage.setItem("cname", cname);
            localStorage.setItem("cphone", cphone);
            localStorage.setItem("cemail", cemail);

            alert("Submitted Successfully! Thank You!");

            document.getElementById("success1Msg").innerHTML =
                "Submitted Successfully, Thank You!";
        }


