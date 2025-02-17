document.addEventListener('DOMContentLoaded', () => {
       new MouseParticleEffect();
});
document.addEventListener('DOMContentLoaded', () => {
       document.getElementById('instagram-logo').addEventListener('click', () => {
              window.open('https://www.instagram.com/the_jekeyy/', '_blank');
       });
       document.getElementById('x').addEventListener('click', () => {
              window.open('https://x.com/the_jekey', '_blank');
       });
       document.getElementById('linkdin').addEventListener('click', () => {
              window.open('https://www.linkedin.com/in/the-jekey/', '_blank');
       });

       new MouseParticleEffect();
});

document.addEventListener('DOMContentLoaded', () => {
       document.getElementById('instagramm-logo').addEventListener('click', () => {
              window.open('https://www.instagram.com/the_jekeyy/', '_blank');
       });
       document.getElementById('xx').addEventListener('click', () => {
              window.open('https://x.com/the_jekey', '_blank');
       });
       document.getElementById('linkdinn').addEventListener('click', () => {
              window.open('https://www.linkedin.com/in/the-jekey/', '_blank');
       });

       new MouseParticleEffect();
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".main .services-container", {
       opacity: 0,
       scale: 0,
       delay: 1,
       duration: 1,
       scrollTrigger: {
              trigger: ".main",
              start: "top 60%",
              end: "top 20%",
              scrub: 3,
       }
});
gsap.from(".main .service-box", {

       stagger: 1,
})


// jekey name animation //

function breaktext() {
       var h1 = document.querySelector(".h1")

       var h1t = document.querySelector(".h1").textContent

       var splittext = h1t.split("")

       var clutter = ""

       splittext.forEach(function (elem) {
              clutter += `<span>${elem}</span>`
       })

       h1.innerHTML = clutter

}
breaktext()
gsap.from(".h1 span", {
       y: 70,
       duration: 0.1,
       delay: 1,
       opacity: 0,
       stagger: 0.2,

})




const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
       if (input.value) {
              input.value = ''; // Clear the input field

       } else {
       }
});

const cursor = document.getElementById('diamondCursor');
const sparkle = document.getElementById('cursorSparkle');

document.addEventListener('mousemove', (e) => {
       const { clientX: x, clientY: y } = e;

       // Update cursor position
       cursor.style.left = `${x}px`;
       cursor.style.top = `${y}px`;

       // Update sparkle position
       sparkle.style.left = `${x}px`;
       sparkle.style.top = `${y}px`;

       // Add subtle animation
       cursor.style.transform = 'translate(-50%, -50%) scale(1)';
       sparkle.style.transform = 'translate(-50%, -50%) scale(1)';
});

document.addEventListener('mouseleave', () => {
       cursor.style.opacity = '0';
       sparkle.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
       cursor.style.opacity = '1';
       sparkle.style.opacity = '1';
});

document.querySelectorAll('.footer a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function (e) {
              e.preventDefault();
              const target = document.querySelector(this.getAttribute('href'));
              target.scrollIntoView({
                     behavior: 'smooth',
                     block: 'start'
              });
       });
});

