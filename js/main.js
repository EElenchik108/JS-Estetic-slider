"use strict";

let imgsSmall = document.querySelectorAll('#slider>img.small');
let imgBig = document.getElementById("big");
let elemsP = document.querySelectorAll('#slider>div.inner>p');
let elemsDes = document.querySelectorAll('div.description');
for (let i=0; i<imgsSmall.length; i++)
{
    imgsSmall[i].addEventListener('mouseover', ()=> {
        for (let j=0; j<elemsP.length; j++) 
        {				
            elemsP[j].classList.add('hide');
            elemsDes[j].classList.add('hide');
        }
        imgBig.setAttribute('src', imgsSmall[i].dataset.srcBig);
        elemsP[i].classList.remove('hide');	
        elemsDes[i].classList.remove('hide');
        elemsDes[i].classList.add('show');		
    })
}

let as = document.getElementsByTagName('a');
for (let i=0; i<as.length; i++){
    as[i].addEventListener('mouseover', ()=>as[i].classList.toggle('bg2'));
    as[i].addEventListener('mouseout', ()=>as[i].classList.toggle('bg2')) 
    }