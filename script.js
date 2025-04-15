//  <!-- for responsive navbar -->
 const menuBtn = document.getElementById('menu-btn');
 const mobileMenu = document.getElementById('mobile-menu');

 menuBtn.addEventListener('click', () => {
   mobileMenu.classList.toggle('hidden');
 });



 onclick="window.open('https://www.youtube.com/watch?v=DzJGafjFQec', '_blank');"


//  counter
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const options = { threshold: 0.6 };

    function startCounter(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let counter = entry.target;
                let target = +counter.getAttribute("data-target");
                let speed = Math.ceil(target / 500);
                let current = 0;

                // Reset counter when it enters view again
                counter.innerText = "0+";

                let updateCount = () => {
                    if (current < target) {
                        current += speed;
                        counter.innerText = Math.min(current, target) + "+";
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.innerText = target + "+";
                    }
                };

                updateCount();
            }
        });
    }

    const observer = new IntersectionObserver(startCounter, options);
    
    counters.forEach(counter => {
        observer.observe(counter); // Keep observing
    });
});


// playable video
document.querySelectorAll(".video-container").forEach(container => {
    container.addEventListener("click", function () {
        let video = this.nextElementSibling; // Selects the video right after the container
        let thumbnail = this.querySelector(".thumbnail");
        let playButton = this.querySelector(".play-button");

        video.classList.remove("hidden");
        thumbnail.classList.add("hidden");
        playButton.classList.add("hidden");
        video.play();
    });
});
