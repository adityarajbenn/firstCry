document.getElementById("form2").addEventListener("submit",check);

function check(){
    
   
    var check1=document.getElementById("elogin").value;
    
   
    var em= localStorage .getItem("email");
    var num= localStorage .getItem("number");
   
    
  if(check1==em || check1==num){
    alert("login succesfully")
  }else{
    alert("Add account")
  
  }
}