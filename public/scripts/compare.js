let property1 = JSON.parse(sessionStorage.getItem("prop1"));
let property2 = JSON.parse(sessionStorage.getItem("prop2"));
document.getElementById("title-prop1").innerText = property1.title;
document.getElementById("title-prop2").innerText = property2.title;
document.getElementById("location1").innerText=property1.location
document.getElementById("location2").innerText=property2.location
let price1 = (property1.price * 1).toLocaleString(); 
let price2 = (property2.price * 1).toLocaleString(); 
document.getElementById("price1").innerText = price1;
document.getElementById("price2").innerText = price2;
document.getElementById("area1").innerText=property1.area
document.getElementById("area2").innerText=property2.area
document.getElementById("bedroom1").innerText=property1.bedrooms
document.getElementById("bedroom2").innerText=property2.bedrooms
document.getElementById("bathroom1").innerText=property1.bathrooms
document.getElementById("bathroom2").innerText=property2.bathrooms
document.getElementById("type1").innerText=property1.type
document.getElementById("type2").innerText=property2.type
document.getElementById("cond1").innerText=property1.condition
document.getElementById("cond2").innerText=property2.condition
let product1Cell = document.getElementById("img1");
let product1Image = document.createElement("img");
  product1Image.src = `./images/uploaded/${property1.images[3]}`;
  product1Image.alt = "Property 1";
  product1Cell.appendChild(product1Image);
  product1Image.classList.add("img"); 
  product1Cell.appendChild(product1Image);
  let product2Cell = document.getElementById("img2");
  let product2Image = document.createElement("img");
  product2Image.src = `./images/uploaded/${property2.images[0]}`;
  product2Image.alt = "Product 2";
  product2Cell.appendChild(product2Image);
  product2Image.classList.add("img"); 
  product2Cell.appendChild(product2Image);
if (parseInt(property1.price) > parseInt(property2.price)) {
document.getElementById("price1").classList.add("highlight");
document.getElementById("price2").classList.add("highlight1");
} else if (parseInt(property2.price) > parseInt(property1.price)) {
document.getElementById("price2").classList.add("highlight");
document.getElementById("price1").classList.add("highlight1");
}
if (parseFloat(property1.area) > parseFloat(property2.area)) {
document.getElementById("area1").classList.add("highlight");
document.getElementById("area2").classList.add("highlight1");
} else if (parseFloat(property2.area) > parseFloat(property1.area)) {
document.getElementById("area2").classList.add("highlight");
document.getElementById("area1").classList.add("highlight1");
}
if (parseInt(property1.bedrooms) > parseInt(property2.bedrooms)) {
document.getElementById("bedroom1").classList.add("highlight");
document.getElementById("bedroom2").classList.add("highlight1");
} else if (parseInt(property2.bedrooms) > parseInt(property1.bedrooms)) {
document.getElementById("bedroom2").classList.add("highlight");
document.getElementById("bedroom1").classList.add("highlight1");
}
if (parseInt(property1.bathrooms) > parseInt(property2.bathrooms)) {
document.getElementById("bathroom1").classList.add("highlight");
document.getElementById("bathroom2").classList.add("highlight1");
} else if (parseInt(property2.bathrooms) > parseInt(property1.bathrooms)) {
document.getElementById("bathroom2").classList.add("highlight");
document.getElementById("bathroom1").classList.add("highlight1");
}
sessionStorage.removeItem('prop1');
sessionStorage.removeItem('prop2');
$(document).ready(() => {
  $(".firstProperty").on("click", () => {
    window.location.replace(
      `/details?id=${property1._id}`
    );
  });

  $(".secProperty").on("click", () => {
    window.location.replace(
      `/details?id=${property2._id}`
    );
  });
});