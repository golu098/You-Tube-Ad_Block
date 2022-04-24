/* created by shiv kant kumar
Follow on insta id:- real_warrrior_golu(For any query) 
*/
setInterval(function(){

    var skipButton =document.getElementsByClassName("ytp-ad-skip-button");
    if(skipButton !=undefined && skipButton.length >0){
        console.log("Ad detected");
        skipButton[0].click();
    }
},3000)