var markInputs=document.getElementById("texts");
var finalMark=document.getElementById("Final mark");
var total=document.getElementById("subjects");
var numSubs=0;
var total1=0;


function addMarks(){
  
  for(var i=0;i<numSubs;i++){
    var input=document.getElementById(i);
    markInputs.removeChild(input);
  }
  
  numSubs=0;
  
  for(var i=0;i<total.value;i++){
    var input = document.createElement("input");
    input.type = "number";
    input.name="mark";
    input.id=numSubs;
    markInputs.appendChild(input);
    numSubs+=1;
  }


}
function calculate(){
  
  
  var final=document.getElementById('output')
  finalMark.removeChild(final);
  
  
  var flag=-1;
  
  for(var i=0;i<numSubs;i++){
    var texts=document.getElementById(i);
    total1+=parseFloat(texts.value);
    if(parseFloat(texts.value)>100 || parseFloat(texts.value)<0 ){
      flag=0;
    }
  }
  outOfTen=parseInt(total1/numSubs);
  var gpa;
  switch(parseInt((outOfTen/10))*10){
    case 100:
    case 90:
      gpa='S';
      break;
    case 80:
      gpa='A';
      break;
    case 70:
      gpa='B';
      break;
    case 60:
      gpa='C';
      break;
    case 50:
      gpa='D';
      break;
    case 40:
      gpa='E';
      break;
    case 30:
      gpa='F';
      break;
    default:
      gpa='N';
      break;
  }
  if (flag==0){
    gpa='invalid';
  }
  console.log(gpa);
  var final=document.createElement("P");
  final.innerText=gpa;
  final.id='output';
  finalMark.appendChild(final);
  total1=0;


}