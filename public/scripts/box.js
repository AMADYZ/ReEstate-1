const title=document.querySelector(".example.title");
const content=document.querySelector(".example.content");
const title1=document.querySelector(".example1.title1");
const content1=document.querySelector(".example1.content1");
const title2=document.querySelector(".example2.title2");
const content2=document.querySelector(".example2.content2");
let image=document.getElementById("img1");
let img0="./images/accordion__1_.jpg";
let imgs="./images/DSC06832_3.webp";
let imgs1="./images/Creative_Life_Science_1.webp";
let imgs2="./images/insite_451_0117_1.webp";
let num1=0;
let num2=0;
let num3=0;
title.addEventListener("click",()=>{
     content.classList.toggle("toggle");
    if(num1%2==0)
    {
      image.src=imgs;  
    }
    else
    {
        image.src=img0;
    }
    num1++;
    
})
title1.addEventListener("click",()=>{
    content1.classList.toggle("toggle");
    if(num2%2==0)
    {
      image.src=imgs1;  
    }
    else
    {
        image.src=img0;
    }
    num2++;
})
title2.addEventListener("click",()=>{
    content2.classList.toggle("toggle");
    if(num2%2==0)
    {
      image.src=imgs2;  
    }
    else
    {
        image.src=img0;
    }
    num2++;
})