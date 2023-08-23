var Kichthuoc= document.getElementsByClassName("slide-show")[0].clientWidth; var Chuyenslide=document.getElementsByClassName("list-images")[0];
var Img=Chuyenslide.getElementsByTagName("img");
var Max=Kichthuoc*Img.length;
Max-=Kichthuoc;
var Chuyen=0;

function Next(){
    
    if (Chuyen<Max) Chuyen+=Kichthuoc;
    else Chuyen=0;
    Chuyenslide.style.marginLeft='-'+Chuyen+'px'; 
}

