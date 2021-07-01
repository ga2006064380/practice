// Audio Guide
var audio = document.getElementById('audio');
var audioIcon = document.getElementById('audio-icon');
var audioPause = document.getElementById('audio-pause');

function audioGuide(){
    if(audio.paused){
        audio.play();
        audioIcon.classList.remove('fa-play-circle')
        audioIcon.classList.add('fa-pause-circle');
    } else {
        audio.pause();
        audioIcon.classList.remove('fa-pause-circle')
        audioIcon.classList.add('fa-play-circle');
    }
}


// slide
// new Glide('.glide', { autoplay: 5000, type: 'carousel' }).mount()
if (document.querySelector('.mm-slideshow')){
    var heroglide = new Glide('.mm-slideshow', {
        type: 'carousel',
        autoplay: 5000,
    })
    
    heroglide.mount()
}

// selector
if (document.querySelector('.mm-selector')){
    new Glide('.mm-selector', { 
        type: 'carousel',
        perView: 13,
        gap: 8,
        focusAt: 'center',
        breakpoints: {
            768: {
                gap: 8,
                perView: 9
            },
            640: {
                gap: 4,
                perView: 5
            }
        }
    }).mount()
}




// carousel
if (document.querySelector('.mm-carousel')){
    var list = [];
    var carousels = document.querySelectorAll('.mm-carousel');
    for (var i = 0; i < carousels.length; i++) {
        var glide = new Glide(carousels[i], {
            type: 'carousel',
            perView: 4,
            gap: 32,
            breakpoints: {
            768: {
                gap: 16,
                perView: 2
            },
            640: {
                gap: 16,
                perView: 2
            }
            }
        })
        
        glide.mount()
        list[i] = glide;
    }
}

// lightbox
var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
            w: 964,
            h: 1024
        },
        {
            src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
            w: 1024,
            h: 683
        }
    ];
    
    // define options (if needed)
    var options = {     
      history: true,
      focus: true,
        showAnimationDuration: 0,
        hideAnimationDuration: 0
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};


// modal
if (document.querySelector('.modal')){
    var openmodal = document.querySelectorAll('.modal-open')
    for (var i = 0; i < openmodal.length; i++) {
    openmodal[i].addEventListener('click', function(event){
    event.preventDefault()
    toggleModal()
    })
    }

    const overlay = document.querySelector('.modal-overlay')
    overlay.addEventListener('click', toggleModal)

    var closemodal = document.querySelectorAll('.modal-close')
    for (var i = 0; i < closemodal.length; i++) {
    closemodal[i].addEventListener('click', toggleModal)
    }

    document.onkeydown = function(evt) {
    evt = evt || window.event
    var isEscape = false
    if ("key" in evt) {
    isEscape = (evt.key === "Escape" || evt.key === "Esc")
    } else {
    isEscape = (evt.keyCode === 27)
    }
    if (isEscape && document.body.classList.contains('modal-active')) {
    toggleModal()
    }
    };


    function toggleModal () {
    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
    body.classList.toggle('modal-active')
    }
}


// openPhotoSwipe();
if (document.getElementById('btn')){
    document.getElementById('btn').onclick = openPhotoSwipe;
}