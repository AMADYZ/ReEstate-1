let username = document.querySelector('#name');
let password = document.querySelector('#pass');
let btnClass = document.querySelector('#addUserButton');
let updates = document.querySelector('#update-list');
let ifadmin = document.querySelector('#cbtest-19');
btnClass.addEventListener('click', () => {
    if (ifadmin.checked) {
        let actualuser = username.value;
        let actualpass = password.value;
        if (actualuser.length != 0) {
            let createAnHTMLList = document.createElement('div')
            createAnHTMLList.classList.add('update')
            createAnHTMLList.innerHTML = `<div class="profile">
            <div class="profile-photo">
                <img src="assets/img-admin/profile-4.jpg" alt="">
            </div>
            <div class="message">
                <p><b> Username: ${actualuser} </b> <br> Password: ${actualpass}</p>
                <small class="text-muted">2 Minutes Ago - Admin</small>
            </div>
        </div>
        <div class="add-delete">
            <button class="remove" onclick="removeNameFromTheList(this)"><i class='bx bx-minus'></i></button>
        </div>`
            updates.appendChild(createAnHTMLList);
            let height = createAnHTMLList.parentElement.offsetHeight
            let newheight = height + 100
        }
    }else{
        let actualuser = username.value;
        let actualpass = password.value;
        if (actualuser.length != 0) {
            let createAnHTMLList = document.createElement('div')
            createAnHTMLList.classList.add('update')
            createAnHTMLList.innerHTML = `<div class="profile">
            <div class="profile-photo">
                <img src="assets/img-admin/profile-4.jpg" alt="">
            </div>
            <div class="message">
                <p><b> Username: ${actualuser} </b> <br> Password: ${actualpass}</p>
                <small class="text-muted">2 Minutes Ago</small>
            </div>
        </div>
        <div class="add-delete">
            <button class="remove" onclick="removeNameFromTheList(this)"><i class='bx bx-minus'></i></button>
        </div>`
            updates.appendChild(createAnHTMLList);
        }
    }
    username.value = ''
    password.value = ''
})
function removeNameFromTheList(e) {
    e.parentElement.parentElement.remove();
}