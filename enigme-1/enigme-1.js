//  DEFINIT LE NOMBRE DE POINT ------------------------------
function DotGen() {
  const Dot = document.createElement("span");
  ran = Math.floor(Math.random() * 3) + 1;
  Dot.classList.add("dot");
  Dot.classList.add(`c${ran}`);
  document.querySelector(".dot-container").appendChild(Dot);
}
// ON MODIFIE ICI LA FREQUENCE DE POINTS EN AXE X ET Y
dotNumbXcap = 40;
dotNumbYcap = 20;

for (DotNumbY = 0; DotNumbY < dotNumbYcap; DotNumbY++) {
  DotGen();
  for (DotNumbX = 0; DotNumbX < dotNumbXcap; DotNumbX++) {
    DotGen();
  }
}

// DEFINIT LE RESPONSIVE DES POINTS ----------------------------------------
setInterval(() => {
  LastDot = document.body.lastElementChild;
  if (DotNumbX < dotNumbXcap) {
    DotGen();
    DotNumb++;
  }
  if (DotNumbY > dotNumbYcap) {
    document.body.removeChild(LastDot);
    DotNumb--;
  }
}, 1000);

// DEFINIT LA POSITION DE CHAQUE POINTS ---------------------------------------
const DotContainer = document.body;
const Dots = DotContainer.querySelectorAll(".dot");

dotDistX = window.innerWidth / dotNumbXcap;
dotDistY = window.innerHeight / dotNumbYcap;
NumberY = 0;
NumberX = 0;
Dots.forEach((dot) => {
  if (NumberX <= dotNumbXcap) {
    dotPosX = dotDistX * NumberX;
    dot.style.left = `${dotPosX - 15}px`;
    NumberX++;
  }
  if (NumberX == dotNumbXcap) {
    NumberX = 0;
    NumberY = NumberY + 1;
  }
  if (NumberY <= dotNumbYcap) {
    dotPosY = dotDistY * NumberY;
    dot.style.top = `${dotPosY - 15}px`;
  }
  if (NumberY == dotNumbYcap) {
    NumberY = dotNumbYcap;
  }
  const rect = dot.getBoundingClientRect();
  dot.initialLeft = dot.offsetLeft;
  dot.initialTop = dot.offsetTop;
});

// DEFINIT LE COMPORTEMENT DE CHAQUE POINTS A LA SOURIS -------------------------------
let animationFrameId;
DotContainer.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (!animationFrameId) {
    animationFrameId = requestAnimationFrame(() => {
      Dots.forEach((dot) => {
        const dotPosLocX = dot.getBoundingClientRect().x - 5;
        const dotPosLocY = dot.getBoundingClientRect().y - 5;
        const deltaX = mouseX - dotPosLocX;
        const deltaY = mouseY - dotPosLocY;

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        // ON MODIFIE ICI LA LARGEUR DU HALO DE POINTS
        const maxDistance = 60;

        if (distance < maxDistance) {
          const moveX = (deltaX / distance) * (maxDistance - distance);
          const moveY = (deltaY / distance) * (maxDistance - distance);
          dot.style.left = `${dot.initialLeft - moveX}px`;
          dot.style.top = `${dot.initialTop - moveY}px`;
        } else {
          dot.style.left = `${dot.initialLeft}px`;
          dot.style.top = `${dot.initialTop}px`;
        }
      });
    });
    animationFrameId = null;
  }
});

// LOGIQUE DE REVEAL DES MOTS ------------------------------------------

const piscineMot1 = document.getElementById("piscine-mot1");
const piscineMot2 = document.getElementById("piscine-mot2");
const piscineMot3 = document.getElementById("piscine-mot3");
