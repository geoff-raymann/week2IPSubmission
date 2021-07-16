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
alert(birthDay());

//The user should pick their gender..
var gender=prompt("Gender: ");
//Use the gender to give a name.
let maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
if(gender==="male"){
    switch(birthday){
        case 1:
            maleNames.forEach(function(item,index,maleNames){
                alert(maleNames[0]);
            })
            break;
        case 2:
            maleNames.forEach(function(item,index,maleNames){
                alert(maleNames[1]);
            })
            break;
        case 3:
            maleNames.forEach(function(item,index,maleNames){
                alert(maleNames[2]);
            })
            break;
        case 4:
            maleNames.forEach(function(item,index,maleNames){
                alert(maleNames[3]);
            })
            break;
        case 5:
            maleNames.forEach(function(item,index,maleNames){
                alert(maleNames[4]);
            })
            break;
        case 6:
            maleNames.forEach(function(item,index,maleNames){
                alert(maleNames[5]);
            })
            break;
        case 7:
            maleNames.forEach(function(item,index,maleNames){
                alert(maleNames[6]);
            })
            break;
        default:
            alert("Maybe you enter a wrong date!!!");
    }
}else if(gender==="female"){
    alert("Give female name");
}else{
    alert("You forgot to pick your gender!");
}
