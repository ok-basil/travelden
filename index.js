function toggleContent() {
    var hiddenContent = document.getElementById("hiddenContent1");
    var button = document.querySelector("button");

    if (hiddenContent.style.display === "none") {
        hiddenContent.style.display = "block";
        button.textContent = "See less";
    } else {
        hiddenContent.style.display = "none";
        button.textContent = "See more";
    }
}


let page = document.getElementById("page");
function closepage(){
  page.classList.add("open-page");
}
function openpage(){
  page.classList.remove("open-page");
}

let popup = document.getElementById("popup");
function openPopup(){
  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("open-popup");
}


//// for first page= to  ////////







