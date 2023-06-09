$(document).ready(() => {
    $('#wishlist-button').on('click',() => {
        const property_id = $('#id').val()
        const username = sessionStorage.getItem('username')
        $.ajax({
            url: '/wishlist',
            type: 'PUT',
            data: { userName: username,propertyWish: property_id },
            success: function (res) {
                let label=document.getElementById('prop-label')
                if (label) {
                    label.classList.remove('hidden');
                    setTimeout(function() {
                        label.classList.add('hidden'); 
                    }, 3000);
                  }
            },
            error: function (xhr, status, error) {
                //Error Handler
            }
        });
    })
})