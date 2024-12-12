// ON APPEL LES MOTS ----------------------------------------------------
const piscine = document.getElementById("dot-container");
function wordGen() {
  piscine.innerHTML += `
        <span id="piscine-mot1" class="piscine-mot">La</span>
        <span id="piscine-mot2" class="piscine-mot">Page</span>
        <span id="piscine-mot3" class="piscine-mot">Suivante</span>
`;
}
wordGen();

//  DEFINIT LE NOMBRE DE POINT ------------------------------
function DotGen() {
  const Dot = document.createElement("span");
  ran = Math.floor(Math.random() * 3) + 1;
  Dot.classList.add("dot");
  Dot.classList.add(`c${ran}`);
  piscine.appendChild(Dot);
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
// setInterval(() => {
//   LastDot = document.body.lastElementChild;
//   if (DotNumbX < dotNumbXcap) {
//     DotGen();
//     DotNumb++;
//   }
//   if (DotNumbY > dotNumbYcap) {
//     document.body.removeChild(LastDot);
//     DotNumb--;
//   }
// }, 1000);

// DEFINIT LA POSITION DE CHAQUE POINTS ---------------------------------------
const DotContainer = document.getElementById("dot-container");
const Dots = DotContainer.querySelectorAll(".dot");

dotDistX = window.innerWidth / dotNumbXcap;
dotDistY = window.innerHeight / dotNumbYcap;
NumberY = 0;
NumberX = 0;
function scalePool() {
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
      dot.style.top = `${dotPosY - 80}px`;
    }
    if (NumberY == dotNumbYcap) {
      NumberY = dotNumbYcap;
    }
    dot.initialLeft = dot.offsetLeft;
    dot.initialTop = dot.offsetTop;
  });
}
scalePool();

// let windowsWidth = window.innerWidth;
// setInterval(() => {
//   if (window.innerWidth != windowsWidth) {
//     DotContainer.innerHTML = "";
//     wordGen();
//     DotGen();
//     scalePool();
//     windowsWidth = window.innerWidth;
//   }
// }, 1000);

// DEFINIT LE COMPORTEMENT DE CHAQUE POINTS A LA SOURIS -------------------------------
let animationFrameId;
DotContainer.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (!animationFrameId) {
    animationFrameId = requestAnimationFrame(() => {
      Dots.forEach((dot) => {
        const dotPosLocX = dot.getBoundingClientRect().x + 30;
        const dotPosLocY = dot.getBoundingClientRect().y + 40;
        const deltaX = mouseX - dotPosLocX;
        const deltaY = mouseY - dotPosLocY;

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        // ON MODIFIE ICI LA LARGEUR DU HALO DE POINTS
        let maxDistance = 60;

        if (window.innerWidth > 1920) {
          maxDistance = 60 * (window.innerWidth / 1800);
        } else {
          maxDistance = 60;
        }

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

const revealMot1 = document.getElementById("reveal-mot1");
const revealMot2 = document.getElementById("reveal-mot2");
const revealMot3 = document.getElementById("reveal-mot3");

const solutionInput = document.getElementById("solution");

solutionInput.addEventListener("input", () => {
  if (solutionInput.value == "la") {
    revealMot1.innerHTML = "la";
  }
  if (solutionInput.value == "page") {
    revealMot2.innerHTML = "page";
  }
  if (solutionInput.value == "suivante") {
    revealMot3.innerHTML = "suivante";
  }
});

// MOUVEMENTS DE LA LOUPE ---------------------------------------------------
