function replace() {
  var images = document.getElementsByTagName('img');
  var url = 'https://i.imgur.com/VPeRghx.png';
  for (var i = 0; i < images.length; i++) {
    images[i].src = url;
  }
}
document.addEventListener('DOMContentLoaded', replace);
replace();
