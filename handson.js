let questions = [
    'Are you with a faceMask?',
    'How old are you?',
    'HAPPY SHOPPING!!! \
                        <a href="https://aimatit.netlify.app">click here</a>'
    
];
let responses = [
  'You have been denied entry into Aim-At-It Shopping Mall *_*',
  'You must be 12years or older to enter Aim-At-It Shopping Mall *_*',
  'Welcome to Aim-At-It Shopping Mall :) '
  
  ];
let num = 0;
var count1 = 0;
var count2 = 0;
var total = 0;

let inputBox = document.querySelector("#ans");
let output = document.querySelector("#result");
output.innerHTML = questions[num];

function showResponse() {
  
  total++;
  let input = inputBox.value;
  if(inputBox.value == "") {
    
  }else {
  if(num == 0) {    
    inputBox.value = "";
    
    if (input == "No" || input == "N" || input == "no" || input == "NO" || input == "n"){
        output.innerHTML = window.alert(responses [0]);
        inputBox.style.display = "none";
        count1++;        
        output.innerHTML = ("Access Denied, GOODBYE!");
        inputBox.style.display = "none"; 
        setTimeout(reload, 2000);
           
      
    } else if (input == "Yes" || input == "yes" || input == "YES" || input == "y"|| input == "Y"){
      
      ++num;
    setTimeout(changeQuestion, 1000);
    }
    
  } else if(num == 1) {
    inputBox.value = "";
    if (input < 12){
        output.innerHTML = window.alert(responses [1]);
        inputBox.style.display = "none";
        count1++;
        output.innerHTML = ("Acces Denied, GOODBYE!")  
        inputBox.style.display = "none";
        num -=1;    
        setTimeout(reload, 2000)     ;
      
    } else if (input >= 12){
      output.innerHTML = window.alert(responses [2]);
        ++num;     
        count2++;       
        output.innerHTML = questions[2];
        inputBox.style.display = "none"; 
        setTimeout(reload, 3000);        
    }  
  } /*else if(num == 2) {
    output.innerHTML = window.alert(respnses[num])
    
    setTimeout(changeQuestion, 1);
    ++num;
    ++count2;      
    
      document.getElementById("carrier2").innerHTML = count2++;
    inputBox.style.display = "none";   
     
  
    }*/ 
  }
  document.getElementById("carrier1").innerHTML = count1;
  document.getElementById("carrier2").innerHTML = count2;
  document.getElementById("carrier3").innerHTML = total;



}

function changeQuestion() {
  if (num<2)
  inputBox.setAttribute("placeholder", "Enter your response");
  output.innerHTML = questions[num];
  if(num >1) {
    inputBox.style.display = "none";
    
  }else if(num>2 ){
    inputBox.style.display = "block";
  }
  
}

$(document).on("keypress", function(e) {
  if(e.which === 13) {
    showResponse();
  }
});
function reload(){
  let num = 0;
  setTimeout(changeQuestion, 1)
  inputBox.style.display = "block";
  
}
    
$( "#ans" ).focus();
