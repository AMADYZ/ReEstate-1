$(document).ready(function(){
    $('.next').click(function(){
        $('.ul-pagination').find('.pageNumber.active').next().addClass('active')
    })
})