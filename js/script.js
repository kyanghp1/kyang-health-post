/* =====================================
   Kyang Health Post Website JavaScript
===================================== */


// ===============================
// Current Year Auto Update
// ===============================

document.addEventListener("DOMContentLoaded", function(){

    let year = new Date().getFullYear();

    let footer = document.querySelector("footer p");

    if(footer){

        footer.innerHTML =
        "© " + year +
        " Kyang Health Post <br>" +
        "क्यांग स्वास्थ्य चौकी, मोदी गाउँपालिका, पर्वत";

    }


});




// ===============================
// Smooth Scroll Navigation
// ===============================


const menuLinks = document.querySelectorAll("nav a");


menuLinks.forEach(function(link){


    link.addEventListener("click",function(e){


        let target =
        document.querySelector(
            this.getAttribute("href")
        );


        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});





// ===============================
// Image Loading Animation
// ===============================


const images =
document.querySelectorAll("img");


images.forEach(function(image){


    image.addEventListener(
        "load",
        function(){

            image.style.opacity="1";

        }

    );


});





// ===============================
// Simple Notice Highlight
// ===============================


let notices =
document.querySelectorAll(".notice li");


notices.forEach(function(item){


    item.addEventListener(
        "mouseover",
        function(){

            item.style.fontWeight="bold";

        }
    );


    item.addEventListener(
        "mouseout",
        function(){

            item.style.fontWeight="normal";

        }
    );


});





// ===============================
// Future Google Sheet Connection
// ===============================


// यहाँ पछि Google Sheet API जोडिनेछ

/*
Example:

fetch("YOUR_GOOGLE_SCRIPT_URL")
.then(response=>response.json())
.then(data=>{

 console.log(data);

});


*/





console.log(
"Welcome to Kyang Health Post Website"
);
