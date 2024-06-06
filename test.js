function dom() {
  const canvas = document.querySelector("#animation>canvas");
  const context = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    render();
  });

  function files(index) {
    let data = ``;
    return data.split("\n")[index];
  }
  const frameCount = 350;
  const images = [];
  const imageseq = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  gsap.to(imageseq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      scrub: 1.8,
      pin: true,
      trigger: "#anmation",
    },
    onUpdate: render,
  });
  images[0].onload = render;
  function render() {
    scaleImages(images[imageseq.frame], context);
  }
  function scaleImages(img, ctx) {
    let canvas = ctx.canvas;
    let hRatio = canvas.width / img.width;
    let vRatio = canvas.height / img.height;
    let ratio = Math.max(hRatio, vRatio);
    let centerShift_x = (canvas.width - img.width * ratio) / 2;
    let centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  gsap.to("#animation canvas", {
    scale: 0.8,
    scrollTrigger: {
      scrub: 1,
      trigger: "#animation",
      start: "buttom 100%",
      markers: true,
    },
  });
  ScrollTrigger.create({
    trigger: "#animation",
    pin: true,
    start: "bottom 100%",
  });
}

dom();
