let fileInput = document.getElementById("file-input");
let fileList = document.getElementById("files-list");
let numOfFiles = document.getElementById("num-of-files");
let number1=0;
const arr = [];
let counter=0;







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

  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('buton1')) {
      var parentElement = event.target.parentElement.parentElement;
      parentElement.remove();
    }
  });


let checkedforedit1=false;
  function enableEditing(name) {
    if(name.value==="Edit1")
    {
     checkedforedit1=true
     var input1 = document.getElementById("City");
     var input2 = document.getElementById("price");
     var input3 = document.getElementById("area");

     var input4 = document.getElementById("bedrooms");
     var input5 = document.getElementById("radio-input");
     var input51 = document.getElementById("value-1");
     var input52 = document.getElementById("value-2");
     var input53 = document.getElementById("value-3");
     var input54 = document.getElementById("value-4");
     var input55 = document.getElementById("value-5");
     switch (input4.innerHTML) {
        case "1":
          input51.checked = true;
          break;
        case "2":
          input52.checked = true;
          break;
        case "3":
          input53.checked = true;
          break;
        case "4":
          input54.checked = true;
          break;
        case "5+":
          input55.checked = true;
          break;
        default:
          // Set a default case here if needed
          break;
      }

     var input6 = document.getElementById("bathrooms");
     var input7 = document.getElementById("radio-input1");
     var input71 = document.getElementById("value-11");
     var input72 = document.getElementById("value-22");
     var input73 = document.getElementById("value-33");
     var input74 = document.getElementById("value-44");
     var input75 = document.getElementById("value-55");
     switch (input6.innerHTML) {
        case "1":
          input71.checked = true;
          break;
        case "2":
          input72.checked = true;
          break;
        case "3":
          input73.checked = true;
          break;
        case "4":
          input74.checked = true;
          break;
        case "5+":
          input75.checked = true;
          break;
        default:
          // Set a default case here if needed
          break;
      }
      var input8 = document.getElementById("type");
      var input9 = document.getElementById("radio-container");
      var input99 = document.getElementById("radio-container1");
      var input91 = document.getElementById("radio1");
      var input92 = document.getElementById("radio2");
      if(input8.innerHTML==="Villa")
      {
        input92.checked=true;
      }
      else
      {
        input91.checked=true;
      }
      var input10 = document.getElementById("condition");
      var input11= document.getElementById("radio-container11");
      var input111 = document.getElementById("radio-container12");
      var input112 = document.getElementById("radio11");
      var input113 = document.getElementById("radio22");

      if(input10.innerHTML==="sale")
      {
      
        input112.checked=true;
      }
      else
      {
        input113.checked=true;
      }
     input1.style.color="black";
     input2.style.color="black";
     input3.style.color="black";

     input1.removeAttribute("readonly");
     input2.removeAttribute("readonly");
     input3.removeAttribute("readonly");
     input4.style.display="none";
     input5.style.display="flex";
     input6.style.display="none";
     input7.style.display="flex";
     input8.style.display="none";
     input9.style.display="flex";
     input99.style.display="flex";
     input10.style.display="none";
     input11.style.display="flex";
     input111.style.display="flex";
     document.getElementById("subbut").style.display="block";
    }
    else if(name.value==="Edit2")
    {
     var input = document.getElementById("Description");
     input.style.color="black";
     input.removeAttribute("readonly");
     document.getElementById("subbut").style.display="block";
    }
    else{
      var input = document.getElementById("youcanedit");
      input.style.display='block'
      var input1 = document.getElementById("locationAddress");
      input1.style.display='block'
      var input2 = document.getElementById("calssflex");
      input2.style.display='flex'
      map.addListener('click', function(event) {
        placeMarker(event.latLng);
        });
        document.getElementById("subbut").style.display="block";
    }

   }

   var elements = document.querySelectorAll('.img11s');
   var myimgs = [];
   elements.forEach(function(element) {
   var img = element.innerHTML;
   myimgs.push(img);
   });    


   $(document).ready(function () {
    $('#myFrom21').submit(function (event) {
      event.preventDefault(); // Prevent form submission
  
      const description = $('#Description').val();
      const area = $('#area').val();
      const price = $('#price').val();
      const numericPrice = parseFloat(price.replace(/,/g, ""));
      const loc = $('#City').val();
      let locationgps=document.getElementById("locationAddress").innerHTML;
      let title=document.getElementById("title1").innerHTML;
      const username=sessionStorage.getItem('username');
      let type;
      let condition;
      let bedrooms;
      let bathrooms;
      if(checkedforedit1)
      {
       type = $('input[name="radio-group"]:checked').val();
       condition = $('input[name="radio-group1"]:checked').val();
       bedrooms = $('input[name="value-radio"]:checked').val(); 
       bathrooms = $('input[name="value-radio1"]:checked').val();
      }
      else
      {
        type = document.getElementById("type").innerHTML;
        condition =document.getElementById("condition").innerHTML;
        bedrooms =document.getElementById("bedrooms").innerHTML;
        bathrooms =document.getElementById("bathrooms").innerHTML;

      }

      

      var elementsonsubmit = document.querySelectorAll('.img11s');
      var myimgs1 = [];
      elementsonsubmit.forEach(function(element) {
      var img1 = element.innerHTML;
      myimgs1.push(img1);
      });



      var tobedeleted = myimgs.filter(function(img) {
        return !myimgs1.includes(img);
      });
      
      

            
      let fail=false;
      // fail&=validatetitle(title);
      // fail&=validateType(type);
      // fail&=validatecondition(condition);
      // fail&=validatedescription(description);
      // fail&=validatearea(area);
      // fail&=validateprice(price);
      // fail&=validateloc(loc);
      // fail&=validateURL(URL);
      // fail&=validateimg(counter);
      // fail&=validateaddressmaps(locationgps);
      
  
      const formData = new FormData();
      formData.append('type', type);
      formData.append('title', title);
      formData.append('condition', condition);
      formData.append('description', description);
      formData.append('area', area);
      formData.append('price', price);
      formData.append('loc', loc);
      formData.append('bathrooms', bathrooms);
      formData.append('bedrooms', bedrooms);
      formData.append('username',username);
      formData.append('locationgps',locationgps);
      if(counter>0)
      {
      for(let i=0;i<counter;i++)
      {
        formData.append('imageFile', $('#file-input')[0].files[i]);
      }
      }
      for (let i = 0; i < tobedeleted.length; i++) {
        formData.append('tobedeleted', tobedeleted[i]);
      }
      for (let i = 0; i < myimgs1.length; i++) {
        formData.append('myimgs', myimgs1[i]);
      }
      // for (const pair of formData.entries()) {
      //   console.log(pair[0] + ':', pair[1]);
      // }


  
      $.ajax({
        url: '/editdetails',
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
          let label=document.getElementById('prop-label')
          if (label) {
              label.classList.remove('hidden');
              setTimeout(function() {
                  label.classList.add('hidden');
                  
              }, 5000);
            }
            setTimeout(() => {
              window.location.replace(`/editdetails?id=${response}`);
            }, 6000);
        },
        error: function (error) {
          console.error(error); // Log any errors that occurred
        },
      });
    }
    );
  });

   

   