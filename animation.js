const lenis = new Lenis();



function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// gsap.to("#sidebar-for-smallDevices",)
// navbar animatation
// navbar animatation

let timeLine1 = gsap.timeline();
timeLine1.from("#website-logo", {
  marginTop: -20,
  opacity: 0,
  duration: 0.9,
  stagger: 1,
});

timeLine1.from(".menus .menus-lists", {
  top: -20,
  opacity: 0,
  scale: 0.5,
  stagger: 0.1,
});
timeLine1.from(".searchBar", {
  top: -20,
  opacity: 0,
  stagger: 0.1,  
  scale: 0.8,
});
timeLine1.from(".icons", {
  marginTop: -20,
  opacity: 0,
  stagger: 0.1,
  scale: 0.5,
});

// one two three

gsap.from(".hero-section .section2 .count-3 .one,.two,.three", {
  duration: 0.8,
  opacity: 0,
  delay: 0.5,
  transform: "rotateX(75deg)",
  ease: "bounce",
});
gsap.from(".hero-section .section2 img", {
  x: "80%",
  y: -350,
  duration: 0.8,
  transform: "rotate(45deg)",
  transformOrigin: "center",
  ease: "bounce",
});

gsap.from(".here-section .section1 .page-title .title", {
  x: -120,
  opacity: 0,
  duration: 1,
});

// nike text slide animation

gsap.from(".card img",{
  // y:-10,
  duration:.5,
  delay:1,

  yoyo: true,
  stagger : .3,
  
  scale: 1.3,

  

})

gsap.from(".reviews li",{
  scale:2.5,
  duration:.3,
  delay:1,
  stagger:.1,
  yoyo:true,
  opacity:0
})

let animation = document.querySelector(".animation")

animation.addEventListener("click",()=>{
  gsap.from("#test",{
    x:250,
    duration:1,


  })
})




  

// 3d animaton
// 3D animation

// function dom() {
//   const canvas = document.querySelector("#animation canvas");
//   const context = canvas.getContext("2d");
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight - 60;

//   window.addEventListener("resize", function () {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     render();
//   });

//   function files(index) {
//     let data = `
//     https://i.postimg.cc/Wpgjz7mR/Image1.jpg
//     https://i.postimg.cc/yYKKZSnD/Image2.jpg
//     https://i.postimg.cc/BQC0cQwM/Image3.jpg
//     https://i.postimg.cc/9QFjx56V/Image4.jpg
//     https://i.postimg.cc/Z57z2smN/Image5.jpg
//     https://i.postimg.cc/W4dcvmpH/Image6.jpg
//     https://i.postimg.cc/cJPy4Kr4/Image7.jpg
//     https://i.postimg.cc/Hx5GJpy0/Image8.jpg
//     https://i.postimg.cc/HnCqXfwq/Image9.jpg
//     https://i.postimg.cc/Y0fJ3b8h/Image10.jpg
//     https://i.postimg.cc/MZ72qpxq/Image11.jpg
//     https://i.postimg.cc/kX7r4PX8/Image12.jpg
//     https://i.postimg.cc/zX7sH2VQ/Image13.jpg
//     https://i.postimg.cc/MpGh70Bp/Image14.jpg
//     https://i.postimg.cc/FHnwDfbg/Image15.jpg
//     https://i.postimg.cc/q7hSYkjf/Image16.jpg
//     https://i.postimg.cc/43DqRrSY/Image17.jpg
//     https://i.postimg.cc/hjVwDpkp/Image18.jpg
//     https://i.postimg.cc/ZnZQC6ZZ/Image19.jpg
//     https://i.postimg.cc/SRrv8jN9/Image20.jpg
//     https://i.postimg.cc/HW4KFv4L/Image21.jpg
//     https://i.postimg.cc/NfsVt8pk/Image22.jpg
//     https://i.postimg.cc/X7sPYZPS/Image23.jpg
//     https://i.postimg.cc/Gm958L0B/Image24.jpg
//     https://i.postimg.cc/rwbY5Bcf/Image25.jpg
//     https://i.postimg.cc/fL72nkdP/Image26.jpg
//     https://i.postimg.cc/JhkYxpzM/Image27.jpg
//     https://i.postimg.cc/vTQPQMLZ/Image28.jpg
//     https://i.postimg.cc/Twv74nKm/Image29.jpg
//     https://i.postimg.cc/SRDgR5D7/Image30.jpg
//     https://i.postimg.cc/660jM2t2/Image31.jpg
//     https://i.postimg.cc/X7120RZn/Image32.jpg
//     https://i.postimg.cc/jSWMqMNP/Image33.jpg
//     https://i.postimg.cc/8zqt7LB3/Image34.jpg
//     https://i.postimg.cc/KYBQB40Y/Image35.jpg
//     https://i.postimg.cc/NMtD4Ynk/Image36.jpg
//     https://i.postimg.cc/MTYD3N22/Image37.jpg
//     https://i.postimg.cc/Xq7gRL4Z/Image38.jpg
//     https://i.postimg.cc/WzW7TZ15/Image39.jpg
//     https://i.postimg.cc/bY3gQ791/Image40.jpg
//     https://i.postimg.cc/5Ny3pssT/Image41.jpg
//     https://i.postimg.cc/fTPvPYFL/Image42.jpg
//     https://i.postimg.cc/QdWqZHGq/Image43.jpg
//     https://i.postimg.cc/tgQNqp9G/Image44.jpg
//     https://i.postimg.cc/fyrY6h8F/Image45.jpg
//     https://i.postimg.cc/vBXrtnfG/Image46.jpg
//     https://i.postimg.cc/tg3t7wgZ/Image47.jpg
//     https://i.postimg.cc/cHd73hKD/Image48.jpg
//     https://i.postimg.cc/brJQCv9k/Image49.jpg
//     https://i.postimg.cc/gcSywvGD/Image50.jpg
//     https://i.postimg.cc/281QnV6f/Image51.jpg
//     https://i.postimg.cc/yY2Fjsg3/Image52.jpg
//     https://i.postimg.cc/qvn2ZSyb/Image53.jpg
//     https://i.postimg.cc/TP6n80cR/Image54.jpg
//     https://i.postimg.cc/W4wgsZ90/Image55.jpg
//     https://i.postimg.cc/76P7hLcd/Image56.jpg
//     https://i.postimg.cc/Kz9TM2hz/Image57.jpg
//     https://i.postimg.cc/zvVgwcqk/Image58.jpg
//     https://i.postimg.cc/HnR769x1/Image59.jpg
//     https://i.postimg.cc/MZFRZqY3/Image60.jpg
//     https://i.postimg.cc/02KSbFWk/Image61.jpg
//     https://i.postimg.cc/8z86W49h/Image62.jpg
//     https://i.postimg.cc/Dwqbcs3R/Image63.jpg
//     https://i.postimg.cc/3wY0fRKN/Image64.jpg
//     https://i.postimg.cc/W48FBv3n/Image65.jpg
//     https://i.postimg.cc/zBfb5cH1/Image66.jpg
//     https://i.postimg.cc/6317QfC4/Image67.jpg
//     https://i.postimg.cc/zvbyHHkt/Image68.jpg
//     https://i.postimg.cc/D098rfj2/Image69.jpg
//     https://i.postimg.cc/9XKR51Wv/Image70.jpg
//     https://i.postimg.cc/vHn1Q9TD/Image71.jpg
//     https://i.postimg.cc/Mp8nXTf5/Image72.jpg
//     https://i.postimg.cc/qvXzKT8T/Image73.jpg
//     https://i.postimg.cc/KYG4rHNg/Image74.jpg
//     https://i.postimg.cc/9fL0xY8g/Image75.jpg
//     https://i.postimg.cc/NMLMZ2Zs/Image76.jpg
//     https://i.postimg.cc/V6T6wLcj/Image77.jpg
//     https://i.postimg.cc/Wzk41L2x/Image78.jpg
//     https://i.postimg.cc/fkQR32yy/Image79.jpg
//     https://i.postimg.cc/QNH0hX7V/Image80.jpg
//     https://i.postimg.cc/qBSQ79cw/Image81.jpg
//     https://i.postimg.cc/15FBVJJQ/Image82.jpg
//     https://i.postimg.cc/Njw46mzr/Image83.jpg
//     https://i.postimg.cc/JzcQP0fY/Image84.jpg
//     https://i.postimg.cc/SKSf5qqS/Image85.jpg
//     https://i.postimg.cc/3wtFQ6Jg/Image86.jpg
//     https://i.postimg.cc/cH6MxmrP/Image87.jpg
//     https://i.postimg.cc/d1XRLyC3/Image88.jpg
//     https://i.postimg.cc/cCnRYL7m/Image89.jpg
//     https://i.postimg.cc/jqwQBMV7/Image90.jpg
//     https://i.postimg.cc/FFMgv0mn/Image91.jpg
//     https://i.postimg.cc/YqQNCjC2/Image92.jpg
//     https://i.postimg.cc/9QVdRVDd/Image93.jpg
//     https://i.postimg.cc/cLmQfj3V/Image94.jpg
//     https://i.postimg.cc/pdLKCZYy/Image95.jpg
//     https://i.postimg.cc/d0Nrxy46/Image96.jpg
//     https://i.postimg.cc/DZWLkwNT/Image97.jpg
//     https://i.postimg.cc/vBp9QdR6/Image98.jpg
//     https://i.postimg.cc/j2Pf2kK3/Image99.jpg
//     https://i.postimg.cc/7P20Kb71/Image100.jpg
//     https://i.postimg.cc/65xRgwLk/Image101.jpg
//     https://i.postimg.cc/htSm4rYM/Image102.jpg
//     https://i.postimg.cc/N0Frm0BH/Image103.jpg
//     https://i.postimg.cc/MGLfD8pr/Image104.jpg
//     https://i.postimg.cc/mDFzp6cZ/Image105.jpg
//     https://i.postimg.cc/C5TZ3HDG/Image106.jpg
//     https://i.postimg.cc/rs1dM0Cv/Image107.jpg
//     https://i.postimg.cc/1RwVp2hJ/Image108.jpg
//     https://i.postimg.cc/02vMZn9x/Image109.jpg
//     https://i.postimg.cc/Wb7DyZ4Z/Image110.jpg
//     https://i.postimg.cc/XY7Z6vZz/Image111.jpg
//     https://i.postimg.cc/P53CXkYr/Image112.jpg
//     https://i.postimg.cc/yNDkWryh/Image113.jpg
//     https://i.postimg.cc/tg876tBK/Image114.jpg
//     https://i.postimg.cc/bJbr9DMs/Image115.jpg
//     https://i.postimg.cc/d3Y1HQPn/Image116.jpg
//     https://i.postimg.cc/4yQ3rCXG/Image117.jpg
//     https://i.postimg.cc/c1R6K3wz/Image118.jpg
//     https://i.postimg.cc/BQJb2vCn/Image119.jpg
//     https://i.postimg.cc/ZKjRHhfF/Image120.jpg
//     https://i.postimg.cc/L8Xs00wd/Image121.jpg
//     https://i.postimg.cc/rwPp6N2D/Image122.jpg
//     https://i.postimg.cc/k5Rg7R7f/Image123.jpg
//     https://i.postimg.cc/3RMJNrR7/Image124.jpg
//     https://i.postimg.cc/4dz49C7c/Image125.jpg
//     https://i.postimg.cc/WzTNm9gH/Image126.jpg
//     https://i.postimg.cc/GtKcXkjh/Image127.jpg
//     https://i.postimg.cc/v8tH8sdF/Image128.jpg
//     https://i.postimg.cc/rFyyKP8d/Image129.jpg
//     https://i.postimg.cc/9FxmTYML/Image130.jpg
//     `;
//     return data.split("\n")[index];
//   }
//   const frameCount = 350;
//   const images = [];
//   const imageseq = {
//     frame: 0,
//   };

//   for (let i = 0; i < frameCount; i++) {
//     const img = new Image();
//     img.src = files(i);
//     images.push(img);
//   }
//   gsap.to(imageseq, {
//     frame: frameCount - 1,
//     snap: "frame",
//     ease: "none",
//     scrollTrigger: {
//       trigger: "#animation",
//       scrub: 5,
//       markers: true,

//       end: "100% 50%",
//       pin: true,
//     },
//     onUpdate: render,
//   });
//   images[0].onload = render;
//   function render() {
//     scaleImages(images[imageseq.frame], context);
//   }
//   function scaleImages(img, ctx) {
//     let canvas = ctx.canvas;
//     let hRatio = canvas.width / img.width;
//     let vRatio = canvas.height / img.height;
//     let ratio = Math.max(hRatio, vRatio);
//     let centerShift_x = (canvas.width - img.width * ratio) / 2;
//     let centerShift_y = (canvas.height - img.height * ratio) / 2;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(
//       img,
//       0,
//       0,
//       img.width,
//       img.height,
//       centerShift_x,
//       centerShift_y,
//       img.width * ratio,
//       img.height * ratio
//     );
//   }
//   gsap.to("#animation canvas", {
//     scrollTrigger: {
//       trigger: "#animation",
//       // start: "bottom 100%",
//     },
//   });
//   ScrollTrigger.create({
//     trigger: "#animation",
//   });
// }

// dom();
