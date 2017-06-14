/* Sets up the functionality for the review quiz and holds the user's answers. */

// Array to hold the answers the user provides. 
var userAnswers = [];
// Counter for how many questions answered.
var answered = 0;

/*
* First display the quiz questions and the answer options on the webpage.
*/
function quizSetup() {
	// Loop for however many questions have been included.
  for(i=0;i<questions.length;i++) {
	  // Write the questions to the document.
    document.writeln('<p class="question">' + questions[i] + ' <span id="result_' + i + '"></span></p>');
	// Loop for however many answer choices there are for the current question, 
    for(j=0;j<choices[i].length;j++) {
		// Write the answers to the document with radio buttons. 
      document.writeln('<input type="radio" name="answer_' + i + '" value="' + choices[i][j] + '" id="answer_' + i + '_' + j + '" class="question_' + i + '" onclick="submitAnswer(' + i + ', this, \'question_' + i + '\', \'label_' + i + '_' + j + '\')" /><label id="label_' + i + '_' + j + '" for="answer_' + i + '_' + j + '"> ' + choices[i][j] + '</label><br />');
    }
  }
  // Write the buttons for submitting answers and resetting the quiz into the document. 
  document.writeln('<p><input type="submit" value="Show Score" onclick="showScore()" /> <input type="submit" value="Reset Quiz" onclick="resetQuiz(true)" /></p><p style="display:none"></p>');
  
}

/* 
* Remove the user's answers and reload the page to start the quiz over on request.
*/
function resetQuiz(showConfirm) {
  if(showConfirm)
	  // Display an alert that requires confirmation as to whether the quiz should be reset. 
    if(!confirm("Are you sure you want to reset your answers and start from the beginning?"))
      return false; // If alert not confirmed, return false and don't do anything. 
  // Else refresh the review quiz page to start over. 
  document.location = document.location;
}

/*
* Store the answer selected by the user. 
*/
function submitAnswer(questionId, obj, classId, labelId) {
	// Store the answer chosen by the user in the array for their answers 
	// Index corresponds to the question number 
  userAnswers[questionId] = obj.value;
  // Bold the text of the chosen answer to indicate that it is the selected one. 
  document.getElementById(labelId).style.fontWeight = "bold";
  disableQuestion(classId);
  // Increment the number of questions that have been attempted. 
  answered++;
}

/*
* Calculate the user's total score and display it. 
*/
function showScore() {
	// If all of the questions haven't been answered
  if(answered != answers.length) {
    alert("You have not answered all of the questions yet!");
	// Break from the function so the score is not displayed if all the questions have not been answered. 
    return false;
  }
  // Else go on to calculating score 
  questionCount = answers.length;
  correct = 0;
  incorrect = 0;
  for(i=0;i<questionCount;i++) {
    if(userAnswers[i] == answers[i])
		// If the answer submitted by the user matches the stored answer, increment the correct total. 
      correct++;
    else
		// Else increment the incorrect total. 
      incorrect++;
  }
 
  // Display the calculated total. 
  document.getElementById('score').innerHTML = 'You got ' + correct + ' out of ' + answers.length + ' correct.';
  showAnswers();
}

/*
* Disable a question after an answer has been selected and prevent it from being changed.
*/
function disableQuestion(classId) {
  var alltags = document.all? document.all : document.getElementsByTagName("*")
  for (i=0; i<alltags.length; i++) {
    if (alltags[i].className == classId) {
      alltags[i].disabled = true;
    }
  }
}

/*
* Create and display the accordion for the quiz's answers. 
* Accordion HTML structure adapted from W3C School's tutorial http://www.w3schools.com/howto/howto_js_accordion.asp
*/
function showAnswers(){
	// Display the answer accordion underneath the completed quiz on the page in the specified div. 
	document.getElementById('answers').innerHTML = '<p>The tabs below when expanded will show the answer to that question, along with an explanation.</p><button class="accordion">Which of these CSS variations is not a single specification?</button><div class="panel"><p>Correct answer: CSS 4.</p><p>There is no single specification for CSS 4 as it exists as a selection of modules.</p></div><button class="accordion">Which of these CSS style rules is the most specific?</button><div class="panel"><p>Correct answer: #thisBox ul.special</p><p>This style rule has the highest value when its specificity is calculated. The values for all the style rules can be seen below.</p><table><tr><th>Selector</th><th>IDs</th><th>Classes</th><th>Tags</th></tr><tr><td>#thisBox > ul</td><td>1</td><td>0</td><td>1</td></tr><tr><td>.content</td><td>0</td><td>1</td><td>0</td></tr><tr><td>#thisBox ul.special</td><td>1</td><td>1</td><td>1</td></tr><tr><td>div</td><td>0</td><td>0</td><td>1</td></tr></table><p></p></div><button class="accordion">A sibling selector will only apply the style rule to elements that are immediate siblings.</button><div class="panel"><p>Correct answer: false.</p><p>A sibling selector will apply the style rule to elements that are next to each in the HTML regardless of whether they are immediate siblings. It is an adjacent sibling selector that requires this.</p></div><button class="accordion">How are CSS style rules formatted?</button><div class="panel"><p>Correct answer: selector { style-property : value; }</p><p>This is the correct way to format CSS style rules. Option 3 looks similar, but has a semi-colon instead of a colon between the property and value. Option 4 has the value and style property the wrong way around. Option 2 is just completely incorrect.</p></div><button class="accordion">Which selector would you use to apply a style rule a class with the name \'main\'?</button><div class="panel"><p>Correct answer: .main</p><p>The dot prefix is the correct way to indicator a class selector. # is used for IDs, + for siblings, and no prefix for types.</p></div><button class="accordion">Which selector would you use to apply a style rule to an unordered list that is beside a paragraph in the HTML?</button><div class="panel"><p>Correct answer: p ~ ul</p><p>This is a sibling selector, and is indicated by a ~ between the two elements. p + ul would be the use of an adjacent sibling selector. If the list was not wrapped within another class, this could be used. p - ul and p * ul are not valid as selectors, though * by itself indicates the universal selector.</p></div><button class="accordion">Which of these types of styling is the most specific?</button><div class="panel"><p>Correct answer: Inline</p><p>While it is also true that keeping CSS more separate from HTML is neater, some styles are more specific than others. Inline is the most, and external the least.</p></div><button class="accordion">Style rule application: #thisBox > p { color: red; }</button><div class="panel"><p>Correct answer: The first paragraph only</p><p>The > selector indicates that the style rule will only be applied to paragraphs that are the direct descendant of #thisBox. While other paragraphs are contained within #thisBox, only the first immediately follows the ID and is not wrapped in another element or class.</p></div><button class="accordion">Style rule application: #a { color: red }</button><div class="panel"><p>Correct answer: The fourth paragraph only</p><p>While the button is included within the ID \'a\', the button requires a different type of selector to colour it, so only the paragraph is styled.</p></div><button class="accordion">Style rule application: #thisBox p { color:red; }</button><div class="panel"><p>Correct answer: Every paragraph</p><p>Combining selectors like this (written one after the other) is a descendant selector. Any of the descending selector included in the parent (the one listed before it) will be styled, so here, every paragraph within the #thisBox ID will be coloured.</p></div><button class="accordion">Which of the following supports was not included in CSS 1?</button><div class="panel"><p>Correct answer: Media types</p><p>Support for styling based on different media types was first added in CSS 2.</p></div><button class="accordion">Which type of styling has \'overriding other CSS unintentionally\' as a disadvantage?</button><div class="panel"><p>Correct answer: Inline</p><p>Due to it having the highest specificity of the style types, including an inline rule could override any rules defined a different way unintentionally.</p></div><button class="accordion">Which type of styling provides the quickest and easiest maintenance for styling many elements?</button><div class="panel"><p>Correct answer: External</p><p>External styling provides one sheet of style rules that can be applied to many pages, so changing the styling for a type of element across these many pages only requires one document to be edited. Internal styling would require each page to be edited, and inline would require the editing of every tag the rule was applied to across all.</p></div>'
	
	var acc = document.getElementsByClassName("accordion");
	var i;
	
	// Activate the function attached to each accordion bar so it shows its content if clicked. 
	for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
}


