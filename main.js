

// bam nut tai day
var taiday = document.getElementById('taiday')

if(taiday)
{
  taiday.addEventListener('click',()=>

  {
    window.location.href="./Login.html"
  }
)

}


//nut bar
//

var bar = document.querySelector('.bar')
var navMobile = document.querySelector('.inner-nav-mobile')
if(bar)
{
  bar.addEventListener('click',function(){
    navMobile.classList.toggle('active-menu')
    console.log("thanh cong")
  })
}
/// click logo quay ve trang chu 
document.querySelector('svg').addEventListener('click',()=>{
  window.location.href='./index.html'
})

// nut home load laij trang web
var homeFull = document.getElementById('home')
if(homeFull){
  homeFull.addEventListener('click',function(){
    window.location.href = './index.html'
  })
  
}
var homeMobile = document.querySelector('.home')
if(homeMobile)
{
  homeMobile.addEventListener('click',function(){
    window.location.href = './index.html'
  })
  
}
//// nút đăng nhập 
var dangNhap = document.querySelector('.button-login');
var modal =document.querySelector('#modal')
if(modal)
{
  
dangNhap.addEventListener('click',function(){
  modal.classList.toggle('active-menu')
})

}
var close = document.querySelector('#close')
if(close)
{
  close.addEventListener('click',()=>{
    modal.classList.toggle('active-menu')
  })
}

/// nut dat ngay
var datNgay = document.querySelector('.button-sec1');
if(datNgay)
{
  datNgay.addEventListener('click',()=>{
    window.location.href = './order.html'
  })
}

// nut xem menu 
var xemMenu = document.querySelector('.button-sec2');
if(xemMenu)
{
  xemMenu.addEventListener('click',()=>{
    window.location.href = "./menu.html"
  })
  
}
// menu cake
var menuCake = document.querySelector('.cake');
if(menuCake)
{
  menuCake.addEventListener('click',()=>{
    window.location.href = './menu.html'
  })
  
}
//contact 
var contact= document.querySelector('.contact')
var teleContact =document.querySelector('.section-ten')
if(contact)
{
  contact.addEventListener('click',function(){
    teleContact.scrollIntoView({behavior:"smooth"})
  })
  
}
// about
var aboutMobile= document.querySelector('.about')
var teleAboutMobile =document.querySelector('.footer')
if(aboutMobile)
{
  aboutMobile.addEventListener('click',function(){
    teleAboutMobile.scrollIntoView({behavior:"smooth"})
  })
}
// menu cake
var menuCakeMobiel = document.querySelector('#cake');
if(menuCakeMobiel)
{
  menuCakeMobiel.addEventListener('click',()=>{
    window.location.href = './menu.html'
  })
}

//contact 
var contactMobile= document.querySelector('#contact')
var teleContactMobile =document.querySelector('.section-ten')
if(contactMobile)
{
  contactMobile.addEventListener('click',function(){
    teleContactMobile.scrollIntoView({behavior:"smooth"})
  })
  
}
// about
var about= document.querySelector('#about')
var teleAbout =document.querySelector('.footer')
if(about)
{
  about.addEventListener('click',function(){
    teleAbout.scrollIntoView({behavior:"smooth"})
  })
  
}
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


// next page menu 


 