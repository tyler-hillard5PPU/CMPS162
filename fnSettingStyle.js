// Filename: fnSettingStyle.js
// Function to increase the size of text in the body 

//Homework
//Use Paragraph 5 time 
//Hello May name is ??
//Hello my favorite sport is
//Hello my favorite class is
//4 / 5.. you tell me something
//1 Heading 1, 1 Heading 2

function enlargeText(){
    document.getElementById('p1').style.fontSize = "5em";
    document.getElementById('p2').style.fontSize = "6em";
    document.getElementById('p3').style.fontSize = "7em";
    document.getElementById('p4').style.fontSize = "8em";
    document.getElementById('p5').style.fontSize = "9em";
    document.getElementById('h1').style.fontSize = "11em";
    document.getElementById('h2').style.fontSize = "12em";
}

function decreaseText(){
    document.getElementById('p1').style.fontSize = "1em";
    document.getElementById('p2').style.fontSize = "2em";
    document.getElementById('p3').style.fontSize = "3em";
    document.getElementById('p4').style.fontSize = "4em";
    document.getElementById('p5').style.fontSize = "5em";
    document.getElementById('h1').style.fontSize = "0.25em";
    document.getElementById('h2').style.fontSize = "0.5em";
}