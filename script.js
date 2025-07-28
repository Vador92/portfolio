const coords = { x: 0, y: 0 };
const trails = document.querySelectorAll(".trail");

const colors = [
  "#00ff00",
  "#33ff66",
  "#33ff99",
  "#33ffcc",
  "#33ffff", 
  "#33ccff",
  "#3399ff",
  "#3377ff",
  "#3366ff",
  "#3355ff",
  "#3344ff",
  "#3333ff", 
  "#3322ff",
  "#3311ff",
  "#3300ff", 
  "#2a00e6",
  "#2000cc",
  "#1600b3",
  "#0c0099",
  "#080080",
  "#050066",
  "#03004d"
];


trails.forEach(function (trail, index) {
  trail.x = 0;
  trail.y = 0;
  trail.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animatetrails() {
  
  let x = coords.x;
  let y = coords.y;
  
  trails.forEach(function (trail, index) {
    trail.style.left = x - 12 + "px";
    trail.style.top = y - 12 + "px";
    
    trail.style.scale = (trails.length - index) / trails.length;
    
    trail.x = x;
    trail.y = y;

    const nexttrail = trails[index + 1] || trails[0];
    x += (nexttrail.x - x) * 0.3;
    y += (nexttrail.y - y) * 0.3;
  });
 
  requestAnimationFrame(animatetrails);
}

animatetrails();