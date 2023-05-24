let subMenu=document.getElementById("subMenu");
        function toggleMenu(){
            document.getElementById("nameofuser").innerHTML=sessionStorage.getItem('username')
            subMenu.classList.toggle("open-menu");
        }