let questions = [
    'Are you MALE or FEMALE',
    'Are you with a faceMask?',
    'How old are you?',
    'HAPPY SHOPPING!!! \
                        <a href="https://aimatit.netlify.app" target="blank">click here</a>'
    
];
let responses = [
  'You have been denied entry into Aim-At-It Shopping Mall *_*',
  'You must be 12years or older to enter Aim-At-It Shopping Mall *_*',
  'Welcome to Aim-At-It Shopping Mall :) '  
  ];
let num = 0;
var count1 = 0;
var count2 = 0;
let total = 0;
var mal = 0;
var femal = 0;
var nomask =0;
var underage=0;

let inputBox = document.querySelector("#ans");
let output = document.querySelector("#result");
output.innerHTML = questions[num];

function showResponse() {  
  
  let input = inputBox.value;
  if(inputBox.value == "") {
    
  }else {
  if(num == 0) {    
    inputBox.value = "";
    total +=1;
    if (input=="male"){
      num++
      mal++
      setTimeout(changeQuestion, 1000);
    }else if(input=="female"){
      num++;
      femal++;
      setTimeout(changeQuestion, 1000);
    }
  }
  if(num == 1) {    
    inputBox.value = "";
    if (input == "No" || input == "N" || input == "no" || input == "NO" || input == "n"){
        output.innerHTML = window.alert(responses [0]);
        inputBox.style.display = "none";
        count1++;    
        nomask++;    
        output.innerHTML = ("Acces Denied, GOODBYE!");
        inputBox.style.display = "none"; 
        setTimeout(reload, 2000);
           
      
    } else if (input == "Yes" || input == "yes" || input == "YES" || input == "y"|| input == "Y"){
      
      ++num;
    setTimeout(changeQuestion, 1000);
    }
    
  } else if(num == 2) {
    inputBox.value = "";
    if (input < 12){
        output.innerHTML = window.alert(responses [1]);
        inputBox.style.display = "none";
        count1++;
        underage++;
        output.innerHTML = ("Acces Denied, GOODBYE!")  
        inputBox.style.display = "none";
        num -=1;    
        setTimeout(reload, 2000)     ;
      
    } else if (input >= 12){
      output.innerHTML = window.alert(responses [2]);
        ++num;     
        count2++;       
        output.innerHTML = questions[3];
        inputBox.style.display = "none"; 
        setTimeout(reload, 3500);        
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
  document.getElementById("carrier4").innerHTML = mal;
  document.getElementById("carrier5").innerHTML = femal;
  document.getElementById("carrier6").innerHTML = underage;
  document.getElementById("carrier7").innerHTML = nomask;


}

function changeQuestion() {
  if (num<3)
  inputBox.setAttribute("placeholder", "Enter your response");
  output.innerHTML = questions[num];
  if(num >2) {
    inputBox.style.display = "none";
    
  }else if(num>3 ){
    inputBox.style.display = "block";
  }
  
}
function reload(){
  num = 0;
  setTimeout(changeQuestion, 1)
  inputBox.style.display = "block";
  
}



$(document).on("keypress", function(e) {
  if(e.which === 13) {
    showResponse();
  }
})

    
$( "#ans" ).focus();
