var titleElement = document.getElementById("animated_Title");

// Function to start the animation
function startAnimation() {

    titleElement.style.opacity = 1;


    setTimeout(function () {
        titleElement.style.opacity = 0;

  
        setTimeout(function () {
            titleElement.innerHTML = "Advies van <br>experts?";
            titleElement.style.opacity = 1;

      
            setTimeout(function () {
                titleElement.style.opacity = 0;

             
                setTimeout(function () {
                    titleElement.innerHTML = "Zo snel mogelijk <br>subsidie regelen?";
                    titleElement.style.opacity = 1;
                }, 1000); 
            }, 4000); 
        }, 1000); 
    }, 4000); 
}

window.onload = startAnimation;