
var Login = document.getElementById('Login')

var flag

var signupButton = document.getElementById('SignUp')
var LoginEmail = document.getElementById('LoginEmail')
var LoginPass = document.getElementById('LoginPass')
if(Login)
{
  Login.addEventListener('click',(e)=>{
    e.preventDefault();
    var user = JSON.parse(localStorage.getItem(LoginEmail.value))
    if(LoginEmail.value==""||LoginPass=="")
    {
      alert('Nhập thông tin')
    }
    else{
      if(LoginEmail.value==user.taikhoan && LoginPass.value==user.matkhau)
    {
      alert("dang nhap thanh cong");
      flag = true;
    }
    else{
      alert("khong thanh cong")
      flag = false;
      
    }
    console.log(flag)
    if(flag==true)
    {
      document.querySelector('#modal').classList.toggle('active-menu')
      document.querySelector('#wrap-login').classList.toggle('hide')
      var DaDangNhap = document.querySelector('#wrap-login1');
      DaDangNhap.classList.toggle('hide');
      DaDangNhap.innerHTML = `<i class="fa-regular fa-user"></i>
      <span>Tên người dùng:`+LoginEmail.value+`</span>`
    }


    }
 
})

}


if(signupButton)
{
  signupButton.addEventListener('click',(e)=>{
    e.preventDefault();
    var signUpUser = document.getElementById('signUpUser')
    var passSignUp = document.getElementById('passSignUp')
    var passSignUpAgain = document.getElementById('passSignUpAgain')
    
    if(signUpUser.value==="" || passSignUp.value==="" || passSignUpAgain.value==="")
    {
      alert('Nhập dữ liệu')
    }
    else
    {
      var user = {
        taikhoan : signUpUser.value,
        matkhau:  passSignUp.value,
      }
      var json = JSON.stringify(user);
    
      localStorage.setItem(signUpUser.value,json);
    
      alert('Đăng ký thành công');
      window.location.href="./index.html"
  
    }
  })
}





