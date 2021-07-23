//Use control flows to take care of all the possible entries from the user such as invalid dates, very early centuries. 
//Invalid months, invalid year figures
$(document).ready(function(){
  $('form#nameyou').submit(function(event){
    var date=parseInt($('input#ydate').val());
    while(date<=0 || date>31){
        alert("Enter a valid date!!");
        break;
    }
    var month=parseInt($('input#ymonth').val());
        while(month<=0 || month>12){
            alert("Enter a valid month!!");
            continue;
        }
    var century=parseInt($('input#ycentury').val());
        while(century<=12 || century>21){
            alert("Enter centuries between 12 and 21!");
            continue;
        }
    var year=parseInt($('input#yyear').val());
    event.preventDefault();
    //We call the function and pass in the user's inputs from the form
    var dayofTheWeek=parseInt(birthDay(date,month,century,year).toFixed(0));
    //We allow users to pick their gender
    var gender=$("input:radio[name=Gender]:checked").val();

    //The user should pick their gender..
//Contain male names
let maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
//Contain Female names.
let femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
//Naming female.

var yourName
function femaleNaming(){
    switch(dayofTheWeek){
        case 1:
            //Born on Sunday
            yourName=("Hello " +femaleNames[0]+", you were born on Sunday");
            break;
        case 2:
            //Born on Monday
            yourName=("Hello "+femaleNames[1]+", you were born on Monday");
            break;
        case 3:
            //Born on Tuesday
            yourName=("Hello "+femaleNames[2]+", you were born on Tuesday");
            break;
        case 4:
            //Born on Wednesday
            yourName=("Hello "+femaleNames[3]+", you were born on Wednesday");
            break;
        case 5:
            //Born on Thursday
            yourName=("Hello "+femaleNames[4]+", you were born on Thursday");
            break;
        case 6:
            //Born on Friday
            yourName=("Hello "+femaleNames[5]+", you were born on Friday");
            break;
        case 7:
            //Born on Saturday
            yourName=("Hello "+femaleNames[6]+", you were born on Saturday");
            break;
        default:
            yourName=("Maybe you entered a wrong date!!! Please try Again with the right details");
    }
}
//naming males.
function maleNaming(){
    switch(dayofTheWeek){
        case 1:
            //Born on Sunday
            yourName=("Hello "+maleNames[0]+", you were born on Sunday");
            break;
        case 2:
            //Born on Monday
            yourName=("Hello "+maleNames[1]+", you were born on Monday");
            break;
        case 3:
            //Born on Tuesday
            yourName=("Hello "+maleNames[2]+", you were born on Tuesday");
            break;
        case 4:
            //Born on Wednesday
            alert(maleNames[3]+", born on Wednesday");
            break;
        case 5:
            //Born on Thursday
            yourName=("Hello "+maleNames[4]+", you were born on Thursday");
            break;
        case 6:
            //Born on Friday
            yourName=("Hello "+maleNames[5]+", you were born on Friday");
            break;
        case 7:
            //Born on Saturday
            yourName=("Hello "+maleNames[6]+", you were born on Saturday");
            break;
            
        default:
          yourName=("Maybe you entered a wrong date!!! Please try Again with the right details");
    }
}


      //Use the gender to give a name.
    if(gender === "male"){
      maleNaming();
    
    }else if(gender === "female"){
      femaleNaming();
    
    }else{
      //Occurs when no gender is picked.
      yourName=("You forgot to pick your gender!");
    }


    //Print on the page for the user
    $('div#output').text(yourName);

  })
})


function birthDay(date,month,century,year) {
    return (((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+date)%7;
}

