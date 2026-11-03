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

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let message = document.getElementById("message").value;

    if (name === "" || phone === "" || email === "" || address === "") {
        alert("Please fill all the fields!");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email!");
        return;
    }

    if (phone.length !== 10) {
        alert("Please enter valid phone number!(10)");
        return;
    }

    localStorage.setItem("Name", name);
    localStorage.setItem("Phone", phone);
    localStorage.setItem("Email", email);
    localStorage.setItem("Address", address);
    localStorage.setItem("Message", message);

    alert(" Submitted Successfully!");
    document.getElementById("success1Msg").innerHTML =
"Submitted Successfully! Thank You ❤️";

    document.getElementById("contactForm").reset();

}

