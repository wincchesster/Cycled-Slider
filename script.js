const gallery = document.querySelectorAll('.image-to-show')
const galleryWrapper = document.querySelector('.images-wrapper')
let imgIndex = 0;


function slider(i) {

    //Creating buttons and stop/start functions:
    if( document.contains(document.body.querySelector('.btn'))) {
        // continue    
    }
    else {
        galleryWrapper.insertAdjacentHTML('afterend', '<button type="button" class="btn stop-btn">Stop</button>');
        galleryWrapper.insertAdjacentHTML('afterend', '<button type="button" disabled class=" btn start-btn">Start</button>');
        const startBtn = document.querySelector('.start-btn');
        const stopBtn = document.querySelector('.stop-btn');
        
        stopBtn.addEventListener('click', function() {
        clearInterval(timeValue)
        startBtn.removeAttribute('disabled')
        stopBtn.setAttribute('disabled', 'disabled')
        });
        
        startBtn.addEventListener('click', function() {
        AutoSlide();
        startBtn.setAttribute('disabled', 'disabled')
        stopBtn.removeAttribute('disabled')
        });
    }
    //Leave only one img on screen:
    for (let i = 0; i < gallery.length; i++) {
        gallery[i].style.display = "none";
    }
    
    gallery[i].style.display = "block";
};

slider(imgIndex);


// Adding autoslide function:
function AutoSlide() {
    
  timeValue = setInterval(function() {
    if (imgIndex >= gallery.length - 1) {
        imgIndex = 0;
    } else {
        imgIndex++
    }
    
    slider(imgIndex);
    
  }, 1000);
};

AutoSlide();

