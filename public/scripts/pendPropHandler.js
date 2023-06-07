$(document).ready(() => {
    $('#button-accept').on('click',() => {
        const card = $('#button-accept').parent().parent()
        const property_id = $('#button-accept').siblings('#prop_id').val()
        console.log(property_id)
        $.ajax({
            url: '/pendingproperty',
            type: 'PUT',
            data: { PropertyID: property_id, Pending: 'true' },
            success: function () {
                card.remove()
                console.log('Accepted!')
            },
            error: function (xhr, status, error) {
                //Error Handler
            }
        });
    })

    $('#button-decline').click(() => {
        const card = $('#button-decline').parent().parent()
        const property_id = $('#button-decline').siblings('#prop_id').val()
        $.ajax({
            url: '/pendingproperty',
            type: 'PUT',
            data: { PropertyID: property_id, Pending: 'false' },
            success: function () {
                card.remove()
                console.log('Declined!')
            },
            error: function (xhr, status, error) {
                //Error Handler
            }
        });
    })
})