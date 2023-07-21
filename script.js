const selectBtn = document.querySelector(".select-btn"),
      items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");

        let checked = document.querySelectorAll(".checked"),
            btnText = document.querySelector(".btn-text");

            if(checked && checked.length > 0){
                btnText.innerText = `${checked.length} Selected`;
            }else{
                btnText.innerText = "Select Sports";
            }
            console.log(checked);
    });
})


const signup = document.getElementById("signup-btn");
signup.addEventListener("click", function printdata(event) {
  console.log(
    "Submitted"
  )
  event.preventDefault();
  var gender;
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var phone_number = document.getElementById("phone_number").value;
  var ele = document.getElementsByName("gender");
 

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked){
      gender = ele[i].value;
    }
  }
            
    console.log("Username : " + username);
    console.log("Email : " +email);
    console.log("Password : " + password);
    console.log("Phone : " + phone_number);
    console.log("Gender : " + gender);
})