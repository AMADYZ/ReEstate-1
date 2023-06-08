const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const book = document.getElementById("book")

const paper1 = document.querySelector("#p1")
const paper2 = document.querySelector("#p2")
const paper3 = document.querySelector("#p3")
const paper4 = document.querySelector("#p4")

prevBtn.addEventListener("click", goPrevPage)
nextBtn.addEventListener("click", goNextPage)


let currentLocation = 1
let numOfPapers = 4
let maxLocation = numOfPapers + 1


function openBook() {
    book.style.transform = "translateX(50%)"
    prevBtn.style.transform = "translateX(-290px)"
    nextBtn.style.transform = "translateX(290px)"
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)"
    } else {
        book.style.transform = "translateX(100%)"
    }
    prevBtn.style.transform = "translateX(0px)"
    nextBtn.style.transform = "translateX(0px)"
}

function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook()
                paper1.classList.add("flipped")
                paper1.style.zIndex = 1
                break
            case 2:
                paper2.classList.add("flipped")
                paper2.style.zIndex = 2
                break
            case 3:
                paper3.classList.add("flipped")
                paper3.style.zIndex = 3
                break
            case 4:
                paper4.classList.add("flipped")
                paper4.style.zIndex = 4
                closeBook()
                break
            default:
                throw new Error("unknown state")
        }
        currentLocation++
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                closeBook(true)
                paper1.classList.remove("flipped")
                paper1.style.zIndex = 4
                break
            case 3:
                paper2.classList.remove("flipped")
                paper2.style.zIndex = 3
                break
            case 4:
                paper3.classList.remove("flipped")
                paper3.style.zIndex = 2
                break
            case 5:
                openBook()
                paper4.classList.remove("flipped")
                paper4.style.zIndex = 1
                break
            default:
                throw new Error("unknown state")
        }
        currentLocation--
    }
}


// const form = document.querySelector("form"),
//     fileInput = document.querySelector(".file-input"),
//     progressArea = document.querySelector(".progress-area"),
//     uploadedArea = document.querySelector(".uploaded-area");
// form.addEventListener("click", () => {
//     fileInput.click();
// });
// fileInput.onchange = ({ target }) => {
//     let file = target.files[0];
//     if (file) {
//         let fileName = file.name;
//         if (fileName.length >= 12) {
//             let splitName = fileName.split('.');
//             fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
//         }
//         uploadFile(fileName);
//     }
// }
// function uploadFile(name) {
//     let xhr = new XMLHttpRequest();
//     xhr.open("POST", "php/upload.php");
//     xhr.upload.addEventListener("progress", ({ loaded, total }) => {
//         let fileLoaded = Math.floor((loaded / total) * 100);
//         let fileTotal = Math.floor(total / 1000);
//         let fileSize;
//         (fileTotal < 1024) ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024 * 1024)).toFixed(2) + " MB";
//         let progressHTML = `<li class="row">
//                           <i class="fas fa-file-alt"></i>
//                           <div class="content">
//                             <div class="details">
//                               <span class="name">${name} • Uploading</span>
//                               <span class="percent">${fileLoaded}%</span>
//                             </div>
//                             <div class="progress-bar">
//                               <div class="progress" style="width: ${fileLoaded}%"></div>
//                             </div>
//                           </div>
//                         </li>`;
//         uploadedArea.classList.add("onprogress");
//         progressArea.innerHTML = progressHTML;
//         if (loaded == total) {
//             progressArea.innerHTML = "";
//             let uploadedHTML = `<li class="row">
//                             <div class="content upload">
//                               <i class="fas fa-file-alt"></i>
//                               <div class="details">
//                                 <span class="name">${name} • Uploaded</span>
//                                 <span class="size">${fileSize}</span>
//                               </div>
//                             </div>
//                             <i class="fas fa-check"></i>
//                           </li>`;
//             uploadedArea.classList.remove("onprogress");
//             uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
//         }
//     });
//     let data = new FormData(form);
//     xhr.send(data);
// }

window.addEventListener("load", () => {
    const input = document.getElementById("upload")
    const filewrapper = document.getElementById("filewrapper")
    let counter = 0

    input.addEventListener("change", (e) => {
        if(counter === 3) filewrapper.style.overflowY = "auto"
        let fileName = e.target.files[0].name
        let filetype = e.target.value.split(".")[1]
        console.log(counter)
        counter++
        fileshow(fileName, filetype)
    })

    const fileshow = (fileName, filetype) => {
        const showfileboxElem = document.createElement("div")
        showfileboxElem.classList.add("showfilebox")
        const leftElem = document.createElement("div")
        leftElem.classList.add("left-files")
        const fileTypeElem = document.createElement("span")
        fileTypeElem.classList.add("filetype")
        fileTypeElem.innerHTML = filetype
        leftElem.append(fileTypeElem)
        const filetitleElem = document.createElement("h3")
        filetitleElem.innerHTML = fileName
        leftElem.append(filetitleElem)
        showfileboxElem.append(leftElem)
        const rightElem = document.createElement("div")
        rightElem.classList.add("right-files")
        showfileboxElem.append(rightElem)
        const crossElem = document.createElement("span")
        crossElem.innerHTML = "&#215;"
        rightElem.append(crossElem)
        filewrapper.append(showfileboxElem)

        crossElem.addEventListener("click", () => {
            filewrapper.removeChild(showfileboxElem)
        })
    }
})
