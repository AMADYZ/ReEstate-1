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