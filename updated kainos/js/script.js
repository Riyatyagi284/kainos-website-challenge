


//   OWL CROUSEL SCRIPT
$('.owl-carousel').owlCarousel({
    nav: false,
    loop: true,
    slideBy: 1,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items:2,

        },
        500:{
            items:3,
        },
        800: {
            items:5,
        },
        1000: {
            items:8,
        }
    }
})


        const navbarToggle = document.getElementById('navbarToggle');
        const navbarMenu = document.getElementById('navbarMenu');
        const iconToggle = document.getElementById('iconToggle');
        const dropdownToggle = document.getElementById("dropdownToggle")
        //const itemschild = document.getElementsByClassName(".items-child")
        
      
        navbarToggle.addEventListener('click', () => {
          navbarMenu.classList.toggle('show');
          navbarMenu.classList.remove('disappear'); // Ensure the menu is not hidden when toggling
        });
      
        iconToggle.addEventListener('click', () => {
            navbarMenu.classList.toggle('disappear');
            navbarMenu.classList.remove('show'); // Ensure the menu is not visible when toggling
        });

        dropdownToggle.addEventListener('click', () => {
        // itemschild.classList.toggle('show');
        getElementsByClassName(".items-child").classList.toggle('show');
});



// ############informative videos section script
// let listVideo = document.querySelectorAll(".video-list");
// let vid = document.querySelector(".vid")
// let mainVideo = document.querySelector(".main-video .video");
// let title = document.querySelector(".main-video .title");

// listVideo.forEach(video=>{
//     video.addEventListener("click", ()=>{
//         listVideo.forEach(vid=> vid.classList.remove("active"));
//         video.classList.add("active"))
//         // if(video.classList.contains("active")){
//         //     let src = video.children[0].getAttribute("src");
//         //     mainVideo.src = src;

//         // }
//     }
// })

