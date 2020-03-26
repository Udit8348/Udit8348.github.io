/**
	Sets current display mode for the content cards once the page loads
    Path: src="assets/scripts/contentController.js"
*/

// function getBody(content)
// {
//    var panel = document.getElementById('div1'); //add int concat as a param??
//    switch (content) {
//        case 1:
//             console.log( "Display Panel: " + content );
//             panel.style.visible = true;
//             break;
//        default:
//             console.log( "Display Panel Out Of Range. Please Try Again: " + content);
//             break;
//
//    }
// }

const titles = ["EE", "VEX", "BB"];
var details = [];
titles.forEach(title => details.push(title+"_det"));
var toggles  =[];
titles.forEach(title => toggles.push(title+"_toggleView"));


$( document ).ready(function() {
    console.log("External JS linking is working");

    //Display Only Main Cards with Titles
    titles.forEach(title => console.log(title));
    titles.forEach(title => document.getElementById(title).style.display='block');

    //Hide Details
    details.forEach(detail => console.log(detail));
    document.getElementById('EE_det').style.display='none';

    //Check Toggles
    toggles.forEach(toggle => console.log(toggle));

    //Add a "Click" Event Listener to Each Title
    titles.forEach(title => document.getElementById(title).addEventListener("click", toggleView) );

    //Might need to make new functions for each card titles??

    function toggleView() {

        //need a way to determine whice one was pressed
        //if there was a way to turn toggles into an event listener that could be powerful
        //still need to see if there is a way to get the id of the last pressed item.

        if(document.getElementById('EE').style.display == "block" && document.getElementById('EE_det').style.display =="none"){
            console.log("Open Details");
            document.getElementById('EE_det').style.display='block';
            document.getElementById('VEX').style.display='none';
            document.getElementById('BB').style.display='none';
        }else if(document.getElementById('EE').style.display=='block' && document.getElementById('EE_det').style.display=='block'){
            console.log("Close Details");
            document.getElementById('EE_det').style.display='none';
            document.getElementById('VEX').style.display='block';
            document.getElementById('BB').style.display='block';
        }

        // for (title in titles) {
        //     if(document.getElementById(title).style.display == "block" && document.getElementById(details[titles.indexOf(title)]).style.display =="none"){
        //         console.log("Open Details");
        //         document.getElementById('EE_det').style.display='block';
        //     }else if (document.getElementById(title).style.display == "block" && document.getElementById(details[titles.indexOf(title)]).style.display =="block") {
        //         console.log("Close Details");
        //         document.getElementById('EE_det').style.display='none';
        //     }
        // }


    }

    //need to add a close button, OR JUST DONT HIDE THE OTHER STUFF
    //Or you could add a tip bubble that tells them how to use the website
    //still need to check if this works with bottstraps

});
