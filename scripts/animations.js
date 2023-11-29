var titleElement = document.getElementById("animated_Title");


function startAnimation() {

    document.getElementById('animated_Sub').classList.add('fadeInDelay');
 

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
            }, 3000); 
        }, 1000); 
    }, 3000); 
}




window.onload = startAnimation;