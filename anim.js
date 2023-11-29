var url = 'https://i.imgur.com/VPeRghx.png';

function replaceImg() {
  var images = document.getElementsByTagName('img');
  
  for (var i = 0; i < images.length; i++) {
    images[i].src = url;
  }
}
function replaceSvg() {
  var svgs = document.querySelectorAll('svg');
  svgs.forEach(function (svg) {
    var img = new Image(10,10);
    img.src = url;
    svg.parentNode.replaceChild(img, svg);
  });
}
function addRotationAnimation() {
  var styleElement = document.createElement('style');
var cssCode = `
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    img {
      animation: rotation 5s linear infinite;
    }
  `;
  styleElement.innerHTML = cssCode;
  document.head.appendChild(styleElement);
}
replaceImg();
replaceSvg();
addRotationAnimation();
