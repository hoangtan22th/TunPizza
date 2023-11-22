
var barButton = document.querySelector('.bar');
var openMenu = document.querySelector('.inner-wrap-bot');
barButton.addEventListener('click', function() {
  openMenu.classList.toggle('active-menu');
});

var homeButton = document.querySelector('.inner-nav #home');
homeButton.addEventListener('click', function()
{
    window.location.href ="./index.html"
})

var homeButton = document.querySelector('.inner-nav-mobile #home');
homeButton.addEventListener('click', function()
{
    window.location.href ="./index.html"
})
var cakeButton = document.querySelector('.inner-nav-mobile #cake');
var targetSection = document.querySelector(".section-six");
var navbar = document.querySelector('.inner-wrap-bot');
// Thêm sự kiện click cho nút "Cake"
cakeButton.addEventListener('click', function () {
    // Cuộn xuống phần có class là "targetSection"
    targetSection.scrollIntoView({ behavior: 'smooth' });
  
    // Kiểm tra xem có lớp active-menu hay không
    if (navbar.classList.contains('active-menu')) {
      // Nếu có, xoá lớp active-menu
      navbar.classList.remove('active-menu');
    }
  });
  var contactButton = document.querySelector('.inner-nav-mobile #contact');
var targetSection = document.querySelector(".section-ten .inner-sub-title");
var navbar = document.querySelector('.inner-wrap-bot');
  contactButton.addEventListener('click', function () {
    // Cuộn xuống phần có class là "targetSection"
    targetSection.scrollIntoView({ behavior: 'smooth' });
  
    // Kiểm tra xem có lớp active-menu hay không
    if (navbar.classList.contains('active-menu')) {
      // Nếu có, xoá lớp active-menu
      navbar.classList.remove('active-menu');
    }
  });
  var aboutButton = document.querySelector('.inner-nav-mobile #about');
var targetSection = document.querySelector(".footer");
var navbar = document.querySelector('.inner-wrap-bot');
  aboutButton.addEventListener('click', function () {
    // Cuộn xuống phần có class là "targetSection"
    targetSection.scrollIntoView({ behavior: 'smooth' });
  
    // Kiểm tra xem có lớp active-menu hay không
    if (navbar.classList.contains('active-menu')) {
      // Nếu có, xoá lớp active-menu
      navbar.classList.remove('active-menu');
    }
  });



try {
    var contactButton = document.querySelector('.inner-nav-mobile #contact');
    var targetContact = document.querySelector('.section-ten .inner-sub-title');
    contactButton.addEventListener('click', function () {
        if (targetContact) {
            targetContact.scrollIntoView({ behavior: "smooth" });
        }
    });

    var aboutButton = document.querySelector('.inner-nav-mobile #about');
    var targetAbout = document.querySelector('.footer');
    aboutButton.addEventListener('click', function () {
        targetAbout.scrollIntoView({ behavior: "smooth" });
    });
} catch (error) {
    console.error("Error:", error);
}
var xemMenu = document.querySelector('.button-sec2');
xemMenu.addEventListener('click', () => {
    window.location.href = "./menu.html";
});

var cakeButton = document.getElementById("cake");
var targetSection = document.querySelector(".section-six");

// Thêm sự kiện click cho nút "Cake"
cakeButton.addEventListener("click", function () {
  targetSection.scrollIntoView({ behavior: "smooth" });
});

try {
    var contactButton = document.getElementById('contact');
    var targetContact = document.querySelector('.section-ten .inner-sub-title');
    contactButton.addEventListener('click', function () {
        if (targetContact) {
            targetContact.scrollIntoView({ behavior: "smooth" });
        }
    });

    var aboutButton = document.getElementById('about');
    var targetAbout = document.querySelector('.footer');
    aboutButton.addEventListener('click', function () {
        targetAbout.scrollIntoView({ behavior: "smooth" });
    });
} catch (error) {
    console.error("Error:", error);
}


// login 


var btnOpen = document.querySelector(".button-login");
// var btnClose = document.querySelector(".close");
// var btnLogin = document.querySelector(".button-form");
function toggleModal() {
    window.location.href = './Login.html'
}

setInterval(function () {
  btnOpen.classList.toggle("button-toggle");
}, 1000);

btnOpen.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);
btnLogin.addEventListener("click", toggleModal);

var form = document.querySelector(".section-form-head");
var oderNow = document.querySelector(".inner-button .button-sec1");
var oderClose = document.querySelector(".section-form .close");
var bookTable = document.querySelector(".section-form .inner-btn");
function toggleForm() {
  form.classList.toggle("hide");
}

oderNow.addEventListener("click", toggleForm);
oderClose.addEventListener("click", toggleForm);
bookTable.addEventListener("click", toggleForm);

let thisPage = 1;
let limit = 6;
let list = document.querySelectorAll(".list .item");
function loadItem() {
  let beginGet = limit * (thisPage - 1);
  let endGet = limit * thisPage - 1;
  list.forEach((item, key) => {
    if (key >= beginGet && key <= endGet) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  listPage();
}
loadItem();
function listPage() {
    let count = Math.ceil(list.length / limit);
    document.querySelector(".listPage").innerHTML = "";
  
    if (thisPage > 1) {
      let prev = document.createElement("li");
      prev.innerText = "<";
      prev.setAttribute("onclick", "changPage(" + (thisPage - 1) + ")");
      document.querySelector(".listPage").appendChild(prev);
    }
  
    let newPage = document.createElement("li");
    newPage.innerHTML = thisPage;
    newPage.classList.add("active");
    document.querySelector(".listPage").appendChild(newPage);
  
    if (thisPage < count) {
      let next = document.createElement("li");
      next.innerText = ">";
      next.setAttribute("onclick", "changPage(" + (thisPage + 1) + ")");
      document.querySelector(".listPage").appendChild(next);
    }
  }
  

function changPage(i) {
  thisPage = i;
  loadItem();
  document.querySelector('.section-six .list').scrollIntoView({behavior : 'smooth'});
  
  
}
 