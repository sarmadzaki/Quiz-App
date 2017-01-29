
var position = 0, test, status, question, choice, choices, choiceA, choiceB, choiceC, choiceD, correct = 0;
//Questions 
var questions = [
   //Q1
    [ "DOM stands for?", 
    
    "Document Object Models", 
    "Document Objective Model", 
    "Document Object Model",
    "C"],
	
    //Q2
    [ "Which function among the following lets to register a function to be invoked once?", 
    
    "setTimeout()", 
    "setTotaltime()", 
    "setInterval()", 
    "A"],

    //Q3
    [ "What are the three important manipulations done in a for loop on a loop variab?",
     " Updation, Incrementation, Initialization",
    " Initialization,Testing, Updation", 
      "Testing, Updation, Testing",
       "B" ] ,
    //Q4
    [ " One of the special feature of an interpreter in reference with the for loop is that ?", 
    "Before each iteration, the interpreter evaluates the variable expression and assigns the name of the property", 
    "The iterations can be infinite when an interpreter is used", 
    "The body of the loop is executed only once", 
    "A" ],
    //Q5
    [ "What will happen if the body of a for/in loop deletes a property that has not yet been enumerated?",
    "The property will be stored in a cache",
    "The loop will not run",
    "That property will not be enumerated",
    "C" ],
    //Q6
    ["Why so JavaScript and Java have similar name?",
        "JavaScript is a stripped-down version of Java",
        "JavaScript's syntax is loosely based on Java's",
        "They both originated on the island of Java",
        "B"],
    [" When a user views a page containing a JavaScript program, which machine actually executes the script?",
            "The User's machine running a Web browser",
            "The Web server",
            "A central machine deep within Netscape's corporate offices",
            "A"],
    [" ______ JavaScript is also called client-side JavaScript.",
            "Microsoft",
            "Navigator",
            "LiveWire",
            "B"],
    ["What are variables used for in JavaScript Programs?",
            "Storing numbers, dates, or other values",
            "Varying randomly",
            "Causing high-school algebra flashbacks",
            "A"],
    ["_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
    "Client-side",
    " Server-side",
    "Local",
    "A"],

    
];  

function _(x) {
    return document.getElementById(x);
}
function renderQuestion() {
    test = _("test");
    if (position >= questions.length) {
                var perc = (correct * 100) / questions.length;


        test.innerHTML = "<h2> You've got "+correct+ " of " +questions.length+ " Questions correct </h2> <br>"+"<h2> your percentage is "+perc+"% </h2>"+"<button type='button' class='btn btn-primary' onclick='renderQuestion();'>Start again</button>";
        //test.innerHTML = "";
        _('cardheader');
        
        _("status").innerHTML = "Test Completed";
        position = 0;
        correct = 0;
        return false;
    }


    _("status").innerHTML = "Question  "+(position+1)+" of "+questions.length; 
    question = questions [position][0];
    choiceA = questions [position][1];
    choiceB = questions [position][2];
    choiceC = questions [position][3]; 

    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+choiceA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+choiceB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+choiceC+"<br><br>";
    test.innerHTML += "<button class='btn btn-primary' onclick='checkAnswer()'>Submit Answer</button>";

}
function checkAnswer(){
    choices = document.getElementsByName("choices");
        for (var i = 0; i<choices.length; i++) {
            if (choices[i].checked) {
                choice = choices[i].value;
            }

        }

        if (choice === questions[position][4]) {
            correct++;
        }
            


        position++;
        renderQuestion();

} 
function btn () {
    _('navbar');
    navbar.innerHTML += "<button class='btn btn-outline-success' onclick='renderQuestion();'>Start Now</button>";
}

