function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }


  console.log("app.js loaded ....");
function onSubmit(){
    
    const fname=document.getElementById("fnmae").value;
    const password=document.getElementById("password").value;
    const dob=document.getElementById("dob").value;
    
    const user=new User(fname,password,dob);
    if(typeof(Storage)!=="undefined"){
         
        localStorage.setItem(fname.password.toString());
        alert("user data saved successfully!")
    }else{
        alert("Storage not supported ! ");
    }
    console.log("fname "+fname);
    console.log("password "+password);
    console.log("dob "+dob);
    // return false;
}

// 1. creating Javascript object: overaloaded constructor for an object
function User(userName,email,dob){
    this.userName=userName;
    this.email=email;
    this.dob=dob;
    this.toString=function (){
        return userName+" "+email+" "+dob;
    }
}

// 2. storing it in local/session storage