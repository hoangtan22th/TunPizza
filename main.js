// next page menu 

/// click logo quay ve trang chu 
document.querySelector('svg').addEventListener('click',()=>{
  window.location.href="./index.html"
})

// nut home load laij trang web
var home = document.querySelector('#home')
home.addEventListener('click',function(){
  window.location.href = './index.html'
})

//// nút đăng nhập 
var dangNhap = document.querySelector('.button-login');
dangNhap.addEventListener('click',function(){
  window.location.href = './Login.html'
})

/// nut dat ngay
var datNgay = document.querySelector('.button-sec1');
datNgay.addEventListener('click',()=>{
  window.location.href = './order.html'
})

// nut xem menu 
var xemMenu = document.querySelector('.button-sec2');
xemMenu.addEventListener('click',()=>{
  window.location.href = './menu.html'
})

// nut líst
let thisPage = 1;
let limit = 6;
let list = document.querySelectorAll(".list .item");

function loadItem() {
  try {
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
  } catch (error) {
    console.error('Đã xảy ra lỗi trong loadItem:', error.message);
  }
}

function listPage() {
  try {
    let count = Math.ceil(list.length / limit);
    let listPageContainer = document.querySelector(".listPage");
    listPageContainer.innerHTML = "";

    if (thisPage > 1) {
      listPageContainer.appendChild(createPageElement("<", thisPage - 1));
    }

    listPageContainer.appendChild(createPageElement(thisPage, thisPage, true));

    if (thisPage < count) {
      listPageContainer.appendChild(createPageElement(">", thisPage + 1));
    }
  } catch (error) {
    console.error('Đã xảy ra lỗi trong listPage:', error.message);
  }
}

function createPageElement(text, pageNumber, isActive = false) {
  let pageElement = document.createElement("li");
  pageElement.innerText = text;

  if (isActive) {
    pageElement.classList.add("active");
  }

  pageElement.addEventListener("click", function () {
    changPage(pageNumber);
  });

  return pageElement;
}

function changPage(i) {
  try {
    thisPage = i;
    loadItem();
    document.querySelector('.section-six .list').scrollIntoView({ behavior: 'smooth' });
  } catch (error) {
    console.error('Đã xảy ra lỗi trong changPage:', error.message);
  }
}

// Khởi tạo trang đầu tiên
loadItem();



 