

function validatephone(field) {
    if (field == '') {
        document.getElementById('phoneErr').innerHTML = 'You Must Enter a Phone Number.';
        return false;
    }
    else {
        document.getElementById('phoneErr').innerHTML = '';
        return true;
    }


}
function validateusername(field) {
    if (field == '') {
        document.getElementById('usernameErr').innerHTML = 'You Must Enter a UserName.';
        return false;
    }
    else {
        document.getElementById('usernameErr').innerHTML = '';
        return true;
    }
}
function validatepassword(field) {
    if (field == '') {
        document.getElementById('passwordErr').innerHTML = 'You Must Enter a Password.';
        return false;
    }
    else {
        document.getElementById('passwordErr').innerHTML = '';
        return true;
    }
}
function validateconfpassword(field) {
    if (field == '') {
        document.getElementById('confpasswordErr').innerHTML = 'You Must Enter Your Password Again.';
        return false;
    }
    else {
        document.getElementById('confpasswordErr').innerHTML = '';
        return true;
    }
}
function validateemail(field) {
    if (field == '') {
        document.getElementById('emailErr').innerHTML = 'You Must Enter an email.';
        return false;
    }
    else {
        document.getElementById('emailErr').innerHTML = '';
        return true;
    }
}
function validate() {
    let fail = '';
    let form = document.getElementById("userForm")
    fail &= validateusername(form.username.value);
    fail &= validatepassword(form.Password.value);
    fail &= validateconfpassword(form.confPassword.value);
    fail &= validateemail(form.email.value);
    fail &= validatephone(form.Phone.value);

    if (fail)
        return true;
    else {
        return false;
    }
}

$(document).ready(function () {
    $('#userForm').submit(function (event) {
        event.preventDefault()

        if (validate()) {
            return
        }

        const username = $('#username').val()
        const password = $('#Password').val()
        const email = $('#Email').val()
        const phone = $('#Phone').val()
        const checkBox = $('#cbtest-19').val()

        $.ajax({
            url: '/customers',
            type: 'POST',
            data: { username_inp: username, pass_inp: password, email_inp: email, phone_inp: phone, admin_check: checkBox },
            success: function (response) {
                if (response.errortype === 'Username') {
                    document.getElementById('usernameErr').innerHTML = `<span>${response.errorName}</span>`
                } else if (response.errortype === 'Email') {
                    document.getElementById('emailErr').innerHTML = `<span>${response.errorName}</span>`
                } else if (response.errortype === 'Both') {
                    document.getElementById('usernameErr').innerHTML = `<span>Username already Exists!</span>`
                    document.getElementById('emailErr').innerHTML = `<span>Email Already Exists!</span>`
                } else {
                    if (response.statusType === 'success') {
                        const countdownDuration = 5;
                        let countdown = countdownDuration
                        document.getElementById('success-message').innerHTML = `<span>Account Successfully Created, Redirecting in ${countdown}</span>`

                        const countdownInterval = setInterval(() => {
                            countdown--
                            document.getElementById('success-message').innerHTML = `<span>Account Successfully Created, Redirecting in ${countdown}</span>`

                            if (countdown <= 0) {
                                clearInterval(countdownInterval)
                                window.location.href = response.redirectUrl
                            }
                        }, 1000)
                    }
                }
            },
            error: function (xhr, status, error) {
                //Error Handling
            }
        });
    });
});