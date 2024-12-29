
Alert = document.getElementById("Alert_Output")
text = document.getElementById("ot")
function Alert_kh(msg) {
    Alert.style.zIndex = 5;
    text.innerHTML = msg;
    setTimeout(close_alert, 3000);
}
function close_alert() {
    Alert.style.zIndex = -1;
    
}


function year(){
    var x=prompt("Enter Year");
    if(x%4==0 && x%100!=0 || x%400==0){
        Alert_kh("This is Leap Year");
    }else{
        Alert_kh("This is not Leap Year");
    }
       
}

function join_arr() {
    let MyColor = ["Red", "Green", "White", "Black"];
    let x= MyColor.join(",");
    Alert_kh(x);
    console.log(x);
}

function greet() {
    const d = new Date();
    let time = d.getHours();
    if (time < 12) {
        Alert_kh("Good Morning");
    } else if (time < 18) {
        Alert_kh("Good Afternoon");
    }
    else {
        Alert_kh("Good Evening");
    } 
}
function web() {
    window.open("enc.html","_blank");
}
let b = document.getElementById("copyt");
b.addEventListener("click", copy_to_clib);
function copy_to_clib() {
    // Get the text field
  var copyText = document.getElementById("outpute");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  Alert_kh("Copied the text: " + copyText.value);
}
function encrypt() {
    let q1 = document.getElementById("outpute");
    let txt = document.getElementById("textz").value;
    let shift = document.getElementById("shif").value;
    let output = [];
    for (i = 0; i < txt.length; i++) {
      let charn = txt.charCodeAt(i) + (shift - 0);
      let cha = String.fromCharCode(charn);
      output[i] = cha;
    }
    let n1 = output.join("");
    q1.value = n1;
    console.log(n1);
  }
  function dencrypt() {
    let q1 = document.getElementById("outpute");
    let txt = document.getElementById("textz").value;
    let shift = document.getElementById("shif").value;
    let output = [];
    for (i = 0; i < txt.length; i++) {
      let charn = txt.charCodeAt(i) - (shift - 0);
      let cha = String.fromCharCode(charn);
      output[i] = cha;
    }
    let n1 = output.join("");
    q1.value = n1;
    console.log(n1);
  }


