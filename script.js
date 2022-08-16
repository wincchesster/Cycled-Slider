const gallery = document.querySelectorAll('.image-to-show')
const galleryWrapper = document.querySelector('.images-wrapper')
let imgIndex = 0;




function slider(index) {
    if( document.contains( document.body.querySelector('.btn') ) ) {
        console.log('first')
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
      console.log(imgIndex)
    });
    
    startBtn.addEventListener('click', function() {
      AutoSlide();
      startBtn.setAttribute('disabled', 'disabled')
      stopBtn.removeAttribute('disabled')
    })
    }
  
  for (let i = 0; i < gallery.length; i++) {
    gallery[i].style.display = "none";
  }
  gallery[index].style.display = "block";
};

slider(imgIndex);


function AutoSlide() {
    
  timeValue = setInterval(function() {
    if (imgIndex >= gallery.length - 1) {
        imgIndex = 0;
    } else {
        imgIndex++
    }
    
    slider(imgIndex);
    
  }, 500);
};

AutoSlide();

