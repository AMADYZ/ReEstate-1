if(sessionStorage.getItem("username")==undefined)
{
    window.location.replace("/login");
}
$(document).ready(function () {
    $('.button').click(function () {
        const username = $(this).parent().siblings('.profile').children().eq(1).children().eq(0).children().eq(0).text();
        const element = $(this).parent().parent()
        var username_nospace = username.replace(/\s/g, "");
        $.ajax({
            url: '/pendadmins',
            type: 'PUT',
            data: { username: username_nospace, Pending: 'true' },
            success: function () {
                element.remove()
                console.log('Accepted!')
            },
            error: function (xhr, status, error) {
                //Error Handler
            }
        });
    });
    $('.button-1').click(function () {
        const username = $(this).parent().siblings('.profile').children().eq(1).children().eq(0).children().eq(0).text();
        const element = $(this).parent().parent()
        var username_nospace = username.replace(/\s/g, "");
        $.ajax({
            url: '/pendadmins',
            type: 'PUT',
            data: { username: username_nospace, Pending: 'false'},
            success: function () {
                element.remove()
                location.reload();
                console.log('Rejected!')
            },
            error: function (xhr, status, error) {
                //Error Handler
            }
        });
    });
  });