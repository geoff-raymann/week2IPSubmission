# AKAN NAMING APP
## This project takes the date of birth of a person and the gender, It then calculates the day of the week he/she was born and then output the name of the person depending on the day and gender.
## Written by Geoff Ray Mann as project undertaking at Moringa School
### Setup Instructions
* The project begins by decomposing the problem in question
* I recognized that the problem could be subdivided into portions.
* Then the pseudocodes for each portion to be used on the script.js
* Then we implemented the algorithm on the .js file.
* We then linked the custom css and bootstrap to help with the styling.
* I linked the script.js file to help with scripting.
* Then added to my local repository then pushed to the remote repo for global access

## Decompsition process
This yielded three parts:
* The user inputing their birthday
* Getting the day of the week the user was born
* Outputting the User's Ghanaian Names depending on the gender the user selects
## Pattern Recognition
* I would need data input from the user inform of a form
* I used the formular below to get the day of the week in which the user was born

### (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7

* Then the output is suppose to be given to the webpage upon submit.

## The Pseudocodes
* check if users input meets the conditions needed. then proceed accordingly
* create a function to calculate the day of the week (Remember the inputs must be converted to Integer)
* Then prompt the user to input their gender. The result of the function above is also in string so should be converted to Int using parseInt() method.
* Some two 1D arrays would be helpful to hold the data about names, one for male and one for female,
* Two more functions, one that returns a male name whenever the day_of_the_week function is called, and that returns a female name whenever the day of the week function is called.

## The Algorithm
* I then implemented the codes above into JavaScript file.
* See the script.js file for implementation

## The BDD we possibly used are,
* If the user enters a date less than or equals to zero then the program returns false
* A date more than 31st is false
* A date betweeb 1 and 31 is true
* A  month value less than 1 or more than 112 returnas false
* Century beyond 21st- gives, The latest century is 21st is returned
* A year cannot enter a year beyond 2021
* The user picks one gender at a time otherwise a false is returned.
* Gender not picked also returns a false
* If Gender is male, give male name, if female must give female name.

## Technologies Used
* The project was majorly built on the HTML5, CCS3 and JavaScript.
## Contact Information
* Reach me through email: odiwuorgeoff50@gmail.com
## License and copyright information
* This project is licensed under the MIT License, copyright &copy; 2021. All rights reserved

