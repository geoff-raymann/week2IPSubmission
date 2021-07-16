//Use control flows to take care of all the possible entries from the user such as invalid dates, very early centuries. 
//Invalid months, invalid year figures
var date=parseInt(prompt("DD: "));
    if(date<=0 || date>31){
        alert("Enter a valid date!!");
    }
var month=parseInt(prompt("MM: "));
    if(month<=0 || month>12){
        alert("Enter a valid month!!");
    }
var century=parseInt(prompt("CC: "));
    if(century<=12){
        alert("Enter centuries between 12 and 21!");
    }
    if(century>21){
        alert("The latest century is 21st!");
    }
var year=parseInt(prompt("YY: "));


function birthDay(birthday) {
    var day_of_the_week=(((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+date)%7;
    birthday=parseInt(day_of_the_week.toFixed(0));
    return birthday;
}
//The user should pick their gender..
var gender=prompt("Gender: ");
//Use the gender to give a name.
let maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
function femaleNaming(){
    switch(birthDay()){
        case 1:
            //Born on Sunday
            alert(femaleNames[0]);
            break;
        case 2:
            //Born on Monday
            alert(femaleNames[1]);
            break;
        case 3:
            //Born on Tuesday
            alert(femaleNames[2]);
            break;
        case 4:
            //Born on Wednesday
            alert(femaleNames[3]);
            break;
        case 5:
            //Born on Thursday
            alert(femaleNames[4]);
            break;
        case 6:
            //Born on Friday
            alert(femaleNames[5]);
            break;
        case 7:
            //Born on Saturday
            alert(femaleNames[6]);
            break;
        default:
            alert("Maybe you entered a wrong date!!!");
    }
}
function maleNaming(){
    switch(birthDay()){
        case 1:
            //Born on Sunday
            alert(maleNames[0]);
            break;
        case 2:
            //Born on Monday
            alert(maleNames[1]);
            break;
        case 3:
            //Born on Tuesday
            alert(maleNames[2]);
            break;
        case 4:
            //Born on Wednesday
            alert(maleNames[3]);
            break;
        case 5:
            //Born on Thursday
            alert(maleNames[4]);
            break;
        case 6:
            //Born on Friday
            alert(maleNames[5]);
            break;
        case 7:
            //Born on Saturday
            alert(maleNames[6]);
            break;
            
        default:
            alert("Maybe you enter a wrong date!!!");
    }
}


if(gender==="male"){
    maleNaming()
   
}else if(gender==="female"){
    femaleNaming()
   
}else{
    alert("You forgot to pick your gender!");
}
