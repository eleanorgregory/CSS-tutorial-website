/* The functionality for the navigational arrows that step through the page content */

/*
* Advance through the page content. 
*/
function moveRight(){
		// Test to see if the current content displayed is the very first section. 
		if (document.getElementById('l').src.match("Images/arrow-left-grey.png")){
		// If yes, 'activate' the left arrow by un-greying it out. 
		document.getElementById('l').src = "Images/arrow-left.png";
		}
		// Increment the counter for the content array's index.
		count++;
		// Test to see if the content to be displayed is the last section. 
		checkIfEnd();
		// Display the next content on the webpage. 
		document.getElementById("middle").innerHTML = content[count];
}

/*
* Go back over the page content.
*/
function moveLeft(){
		// Test to see if the current content displayed is the very last section. 
		if (document.getElementById('r').src.match("Images/arrow-right-grey.png")){
		// If yes, 'activate' the right arrow by un-greying it out.
		document.getElementById('r').src = "Images/arrow-right.png";
		}
		// Decrease the counter by one for the content array's index. 
		count--;
		// Test to see if the content to be displayed is the first section. 
		checkIfEnd();
		// Display the next content on the webpage
		document.getElementById("middle").innerHTML = content[count];
		
	
}

/*
* Display the first section of content when the page loads.
*/
function setup(){
		// Display the arrows as Javascript is enabled. 
		document.getElementById('footer').style.display='block';
		// Display the first section of content on the page.
		document.getElementById("middle").innerHTML = content[count];
		// Grey out the left arrow as cannot currently go backwards. 
		document.getElementById('l').src = "Images/arrow-left-grey.png";
}

/*
* Test if the content to be displayed is the very first or very last section. 
*/
function checkIfEnd(){
	// If the content to be displayed is the very last section (index counter will be one less than the array length).
	if (count>=content.length-1){
		// Grey out the right arrow as currently cannot go forwards.
		document.getElementById('r').src = "Images/arrow-right-grey.png";
		// Disable click event of the right arrow
		document.getElementById('r').onclick.disabled = true; 
		// Reset counter back to last valid number to prevent overshooting by clicking. 
		count = content.length - 1; 
	}
	
	// If the content to be displayed is the very first section (counter will be back to 0). 
	if (count<=0){
		// Grey out the left arrow as currently cannot go backwards.
		document.getElementById('l').src = "Images/arrow-left-grey.png";
		// Disable click event of the left arrow.
		document.getElementById('l').onclick.disabled = true;
		// Reset counter to the beginning to prevent overshooting by clicking.
		count = 0  
	}
	
}






