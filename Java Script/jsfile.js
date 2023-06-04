let fileInput = document.getElementById("file-input");
let fileList = document.getElementById("files-list");
let numOfFiles = document.getElementById("num-of-files");
fileInput.addEventListener("change", () => {
  fileList.innerHTML = "";
  numOfFiles.textContent = `${fileInput.files.length} Files Selected`;
  for (i of fileInput.files) {
    let reader = new FileReader();
    let listItem = document.createElement("li");
    let fileName = i.name;
    let fileSize = (i.size / 1024).toFixed(1);
    listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}KB</p>`;
    if (fileSize >= 1024) {
      fileSize = (fileSize / 1024).toFixed(1);
      listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}MB</p>`;
    }
    fileList.appendChild(listItem);
  }
});


function validatetitle(field){
    if(field==''){
        document.getElementById('titleErr').innerHTML='You Must Enter a title.';
        return false;
    }
    else{
        document.getElementById('titleErr').innerHTML='';
        return true;
    }
}
function validatedescription(field){
    if(field==''){
        document.getElementById('descriptionErr').innerHTML='You Must Enter a Description.';
        return false;
    }
    else{
        document.getElementById('descriptionErr').innerHTML='';
        return true;
    }
}
function validatearea(field){
    if(field==''){
        document.getElementById('areaErr').innerHTML='You Must Enter an area.';
        return false;
    }
    else{
        document.getElementById('areaErr').innerHTML='';
        return true;
    }
}
function validateprice(field){
    if(field==''){
        document.getElementById('priceErr').innerHTML='You Must Enter a price.';
        return false;
    }
    else{
        document.getElementById('priceErr').innerHTML='';
        return true;
    }
}
function validatename(field){
    if(field==''){
        document.getElementById('nameErr').innerHTML='You Must Enter a name.';
        return false;
    }
    else{
        document.getElementById('nameErr').innerHTML='';
        return true;
    }
}
function validatephone(field){
    if(field==''){
        document.getElementById('phoneErr').innerHTML='You Must Enter a Phone Number.';
        return false;
    }
    else{
        document.getElementById('phoneErr').innerHTML='';
        return true;
    }
    
}
function validate(form){
    let fail='';
    fail&=validatetitle(form.title.value);
    fail&=validatedescription(form.description.value);
    fail&=validatearea(form.Area.value);
    fail&=validateprice(form.price.value);
    fail&=validatename(form.Name.value);
    fail&=validatephone(form.Phone.value);
    






    if(fail)
        return true;
    else{
        return false;
    }
}

let number1=0;
const arr = [];
let counter=0;

let ongo = sessionStorage.getItem('ongo');

if(ongo == 'admin'){
   document.getElementById("admin-dash").style = "display: inline";
   document.getElementById("Signupnav").style="display:none";
}
else if(ongo =='user')
{
    document.getElementById("searchnav").style="display:inline";
    document.getElementById("Signupnav").style="display:none";
}


if(sessionStorage.getItem("username")==undefined)
{
    window.location.replace("http://localhost:5000/login");
}

let intro=document.querySelector('.intro');
setTimeout(()=>
        {
            setTimeout(() => {
                intro.style.top='-300vh';
                
            }, 600);
        })

fileInput.addEventListener("change", () => {
 
  for (i of fileInput.files) {
    numOfFiles.textContent = `${fileInput.files.length} Files Selected`;
    number1=fileInput.files.length;
    let listItem = document.createElement("span");
    let fileName = i.name;
    counter++;
    let fileSize = (i.size / 1024).toFixed(1);
    listItem.innerHTML = `<span class="img1s">${fileName}</span><span class="filesize">${fileSize}KB</span> <div class="btnmarg"><button class="buton">Remove</button></div>`;
    if (fileSize >= 1024) {
      fileSize = (fileSize / 1024).toFixed(1);
      listItem.innerHTML = `<span class="img1s">${fileName}</span><span class="filesize">${fileSize}KB</span> <div class="btnmarg"><button class="buton">Remove</button></div>`;
      
    }
    fileList.appendChild(listItem);   
  }
  let button=document.getElementsByClassName("buton");
  for (j of button) {
    j.addEventListener("click", (event) => {
      // Access the parent element (the <span> containing the file information)
      let fileItem = event.target.parentElement.parentElement;
      // Remove the file item from the file list
      fileItem.remove();
      number1--;
      counter--;
      if(number1==0)
      {
        numOfFiles.textContent = `No Files Choosen`;
      }
      else
      numOfFiles.textContent = `${number1} Files Selected`;
    });
  }
});


function validatetitle(field){
    if(field==''){
        document.getElementById('titleErr').innerHTML='You Must Enter a title.';
        return false;
    }
    else{
        document.getElementById('titleErr').innerHTML='';
        return true;
    }
}
function validatedescription(field){
    if(field==''){
        document.getElementById('descriptionErr').innerHTML='You Must Enter a Description.';
        return false;
    }
    else{
        document.getElementById('descriptionErr').innerHTML='';
        return true;
    }
}
function validatearea(field){
    var num=field.match(/\d+/g);
    if(field==''){
        document.getElementById('areaErr').innerHTML='You Must Enter an area.';
        return false;
    }
    else{
        document.getElementById('areaErr').innerHTML='';
        return true;

    }
}
function validateprice(field){
    if(field==''){
        document.getElementById('priceErr').innerHTML='You Must Enter a price.';
        return false;
    }
    else{
        document.getElementById('priceErr').innerHTML='';
        return true;
    }
}

function validateURL(field){
    if(field==''){
        document.getElementById('URLerr').innerHTML='You Must Enter a URL.';
        return false;
    }
   
    else{
        document.getElementById('URLerr').innerHTML='';
        return true;
    }
}
function validateloc(field){
    if(field==''){
        document.getElementById('locerr').innerHTML='You Must Choose a location';
        return false;
    }
   
    else{
        document.getElementById('locerr').innerHTML='';
        return true;
    }
}
function validateType(field){
    if(field==undefined){
        document.getElementById('typeerr').innerHTML='You Must Choose the Type';
        return false;
    }
   
    else{
        document.getElementById('typeerr').innerHTML='';
        return true;
    }
}
function validatecondition(field){
    if(field==undefined){
        document.getElementById('conditionerr').innerHTML='You Must Choose the Condition';
        return false;
    }
   
    else{
        document.getElementById('conditionerr').innerHTML='';
        return true;
    }
}

function validateimg(field){
    if(field<3){
        document.getElementById('imgerr').innerHTML='You must attach atleast 3 pictures!!';
        return false;
    }
   
    else{
        document.getElementById('imgerr').innerHTML='';
        return true;
    }
}

function validateaddressmaps(field){
    if(field==''){
        document.getElementById('addressmaperr').innerHTML='You must enter and choose a place.';
        return false;
    }
   
    else{
        document.getElementById('addressmaperr').innerHTML='';
        return true;
    }
}
$(document).ready(function () {
    $('#myFrom21').submit(function (event) {
      event.preventDefault(); // Prevent form submission
  
      const title = $('#title').val();
      const type = $('input[name="Type"]:checked').val();
      const condition = $('input[name="Condition"]:checked').val();
      const description = $('#description1').val();
      const area = $('#Area').val();
      const price = $('#price1').val();
      const loc = $('#loc').val();
      const URL = $('#URL').val(); 
      let locationgps=document.getElementById("locationAddress").innerHTML; 
      const bathrooms = $('input[name="value-radio"]:checked').val();
      const bedrooms = $('input[name="value2-radio"]:checked').val();
      const username=sessionStorage.getItem('username');
      let fail=true;
      fail&=validatetitle(title);
      fail&=validateType(type);
      fail&=validatecondition(condition);
      fail&=validatedescription(description);
      fail&=validatearea(area);
      fail&=validateprice(price);
      fail&=validateloc(loc);
      fail&=validateURL(URL);
      fail&=validateimg(counter);
      fail&=validateaddressmaps(locationgps);
      
  
      const formData = new FormData();
      formData.append('title', title);
      formData.append('type', type);
      formData.append('condition', condition);
      formData.append('description', description);
      formData.append('area', area);
      formData.append('price', price);
      formData.append('loc', loc);
      formData.append('URL', URL);
      formData.append('bathrooms', bathrooms);
      formData.append('bedrooms', bedrooms);
      formData.append('username',username);
      formData.append('locationgps',locationgps);
      for(let i=0;i<counter;i++)
      {
        formData.append('imageFile', $('#file-input')[0].files[i]);
      }


  
      $.ajax({
        url: '/addproduct',
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {

        },
        error: function (error) {
          console.error(error); // Log any errors that occurred
        },
      });
    });
  });
  









