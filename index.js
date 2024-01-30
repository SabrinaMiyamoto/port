function clickMenu(){
if(nav.style.display == 'flex'){
    nav.style.display = 'none';
} else {
   nav.style.display='flex';
}
}
function itens(){
    if(nav.style.display == 'flex'){
        nav.style.display = 'none';
    } else {
       nav.style.display='flex';
    }
}
function updateTittle() {

  if (document.hidden) {

    document.title = "Come Back! " + String.fromCodePoint(128546, 128546);
  } else {
  
    document.title = "Sabrina Miyamoto";
  }
}
