/* 
* Sets up the functionality for the tabs used in the CSS selector demonstration.
* Adapted from W3C School's tutorial http://www.w3schools.com/howto/howto_js_tabs.asp
*/

/*
* Open a tab and display its contents inside when clicked. 
*/ 
function openTab(evt, selName) {
	// Prevent returning to the top of the page upon clicking a tab
	evt.preventDefault();
   
    var i, tabcontent, tablinks;

    // Hide all of the tabs and their contents by looping through them all. 
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Change the links used for the tabs currently being considered as active. 
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the selected tab's content and consider it active. 
    document.getElementById(selName).style.display = "block";
    evt.currentTarget.className += " active";
}