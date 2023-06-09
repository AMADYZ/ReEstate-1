
if(sessionStorage.getItem("username")==undefined)
{
    window.location.replace("/login");
}
function handleAccept(button){
    let id = button.parentElement.querySelector('.estate-id1').value;
    let card = button.closest('.popular__card');
    card.remove(); 
          $.ajax({
            url: '/pendingproperty',
            method: 'POST',
            data: {id:id,Pending:true},
            success: function (response) {
            },
            error: function (error) {
              console.error(error); // Log any errors that occurred
            },
          });
        }

        function handleCancel(button){
            let id = button.parentElement.querySelector('.estate-id1').value;
            let card = button.closest('.popular__card');
            card.remove(); 
                  $.ajax({
                    url: '/pendingproperty',
                    method: 'POST',
                    data: {id:id,Pending:false},
                    success: function (response) {
        
                    },
                    error: function (error) {
                      console.error(error); // Log any errors that occurred
                    },
                  });
                }
