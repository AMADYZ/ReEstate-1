let popup = document.getElementById("popup")
let traceBack = undefined;

function centerElement(button) {

  var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  var centerX = windowWidth / 2;
  var centerY = windowHeight / 2;

  popup.classList.add("open-popup")
  popup.style.position = "fixed";
  popup.style.top = centerY + "px";
  popup.style.left = centerX + "px";
  popup.style.transition = "top 0.5s, left 0.5s";

  traceBack = button
}


function closePopup(){
  popup.classList.remove("open-popup")
  popup.style.position = "relative";
  popup.style.top = "";
  popup.style.left = centerX + "";
  popup.style.transition = "";
  traceBack = undefined;
}



$(document).ready(function () {
  $('.remove-after').click(function () {
      const username = $(traceBack).parent().siblings('.profile').children().eq(1).children().eq(0).children().eq(0).text();
      const element = $(traceBack).parent().parent()
      var username_nospace = username.replace(/\s/g, "");
      $.ajax({
          url: '/users',
          type: 'DELETE',
          data: { username: username_nospace },
          success: function () {
              element.remove()
              closePopup()
          },
          error: function (xhr, status, error) {
              console.error('Error:', error);
          }
      });
  });
});