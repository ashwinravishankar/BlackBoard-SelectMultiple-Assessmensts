# BlackBoard-SelectMultiple-Assessmensts
A simple JavaScript module to select multiple student assignment submissions and download from blackboard.

## File Details
1. Blackboard_Bookmark.js --> BookMarklet conversion script
2. Blackboard_GetByName.js --> Script to run on Chrome Develper tool's console tab.

##  General Instructions
a. Goto assignment submission page, which lists the students submission status (Graded / Needs Grading / No Submission).
b. Click on "Show All" button at bottom of page, which lists ALL student submissions.
c. Run any script
d. Names should be formatted as "LastName, First Name"

## To get the Chrome Bookmarklet to work.
1. Link that converts JavaScript to bookmarklet - https://mrcoles.com/bookmarklet/
2. Goto the above link and paste your respective script into the text area for java script code, by replacing the default code already present.
3. Clear the Name text box. This field should be empty.
4. Click on button - Convert to bookmarklet.
5. Copy the contents of the bookmarklet text area field - generated code.
6. Create a new bookmark on your Google Chrome browser and paste this generated code into the URL (name can be whatever).
7. When at the BlackBoard downloads page, after clicking Show All - click on the bookmark. It should work. 

## To manually run on Google Chrome Developer Tool's Console tab
1. Goto “Download Assignment” page of the project or lab exercise you want to get.
2. Click on "SHOW ALL” button.
3. Open Developer Tools from settings (Shortcut is F12 key).
4. Click on Console tab, which opens the console with command line editor.
5. Copy & Paste the script (with your lab wise student names).
6. When you click Return key (Enter Key), you can see that the listed students are automatically selected.
7. You’ll be redirected to the download page.
