# Password Generator

## objective

The goal of this project was to create a we application that randomly generates a password for the user based off of the conditions that the user agrees or disagrees to include in their computer generated password.

The options that are prompted for the user to include in their password are: 
<ol>
<li>A number between 8-128 for the character count</li>
<li>Lowercase letters</li>
<li>Uppercase letters</li>
<li>Special characters</li>
<li>Numbers</li>
</ol>

in their comuter generated password. 

## Approach

The aproach taken for developing the password generator was to lay out a series of if else statements that listed all of the possible combinations determined by the choices the user made. 

An empty array was made to hold the values based off of the selections the user made, and then the variables holding the options are concatenated into the emtpy array. 

The was empty variables that now hold the values that were pulled from the array that included the options are then selected by randomizing them, and limited to the character count that was put in place by the user. 

If the user were to input an invalid character count or did not select any criteria to include in their password, the generatePassword function is run again for the user to start over, allowing said user to try again and input valid choices. 

The newly created password is then displayed in the text box of the web application for the user to see. 

[Password Generator](https://joyfullyx.github.io/password-generator/)

![valid number entry](https://raw.githubusercontent.com/joyfullyx/password-generator/main/images/Screen%20Shot%202021-03-25%20at%208.20.30%20PM.png)

![valid number confirm alert](https://raw.githubusercontent.com/joyfullyx/password-generator/main/images/Screen%20Shot%202021-03-25%20at%208.21.01%20PM.png)

![invalid number entry](https://raw.githubusercontent.com/joyfullyx/password-generator/main/images/Screen%20Shot%202021-03-25%20at%208.21.28%20PM.png)

![invalid number confirm alert](https://raw.githubusercontent.com/joyfullyx/password-generator/main/images/Screen%20Shot%202021-03-25%20at%208.21.40%20PM.png)

![character type conditional prompt example - 1 of 4](https://raw.githubusercontent.com/joyfullyx/password-generator/main/images/Screen%20Shot%202021-03-25%20at%208.21.59%20PM.png)

![generated password](https://raw.githubusercontent.com/joyfullyx/password-generator/main/images/Screen%20Shot%202021-03-25%20at%208.22.28%20PM.png)