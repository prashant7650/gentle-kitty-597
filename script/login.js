var userData =JSON.parse(localStorage.getItem("loginobj"))||[];

let mob=document.getElementById("mob");
let password=document.getElementById("pass");

var btn=document.getElementById("signup_button1");
btn.addEventListener("click", function login(){
    console.log(mob.value);
    userData.forEach((element)=>{
        console.log(element, mob.value);
        if(mob.value==element.mob && password.value==element.password){
            alert("login succesfull")
            window.location.href="./index.html";
        }else if(password.value== "" || mob.value==""){
            alert("Please fill in the empty fields");
        }else if(mob.value!==element.mob&&password.value!==element.password){
            window.location.href="./index.html"
        }
});
        
}
)



