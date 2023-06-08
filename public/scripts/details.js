$(document).ready(function () {
  $('#myForm1').submit(function (event) {
    event.preventDefault(); // Prevent form submission
  
    const title = $('#review-title').val();
    const text = $('#review-text').val();
    const id=$('#id').val();

    // Send the AJAX request to the server
   
    $.ajax({
      url: '/details',
      method: 'POST',
      data: { title: title,text:text,id:id},
      success: function (response) {
      },
      error: function (error) {
        console.error(error); // Log any errors that occurred
      },
    });
  
  });
});

let prop_id = sessionStorage.getItem('prop1')
let prop_id1 = undefined

$('#but-comp').on('click', () => {
  if(prop_id === null){
    prop_id = $('#id_prop').val()
    sessionStorage.setItem('prop1', prop_id)
    var label = document.getElementById('myLabel');
if (label) {
label.classList.remove('hidden');
setTimeout(function() {
  label.classList.add('hidden');
}, 2000);
}
  } else {
    prop_id1 = $('#id_prop').val()
    console.log('second property set')
    $.ajax({
      url: '/compare',
      method: 'POST',
      data: {
        property_1: prop_id,
        property_2: prop_id1,
      },
      success: (response) => {
        let prop1_json = JSON.stringify(response.prop_1)
        let prop2_json = JSON.stringify(response.prop_2)
        sessionStorage.setItem('prop1', prop1_json)
        sessionStorage.setItem('prop2', prop2_json)

        window.location.replace(response.URI)
      },
      error: (xhr, status, error) => {
        console.error(error)
      }
    })
  }
})