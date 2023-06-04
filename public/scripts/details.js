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