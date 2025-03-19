function upDate(previewPic){
    document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;
    document.getElementById('image').innerHTML = previewPic.alt;
}
   
function unDo(){
    document.getElementById("image").innerHTML = "Hover or Focus over an image below to display here.";
    document.getElementById('image').style.backgroundImage = "none";
}

function tab_images(){
   tab = document.querySelectorAll("img")
   for (i = 0; i < tab.length; i++){
      console.log("image " + i)
      tab[i].setAttribute("tabindex",'0')
   } 
}