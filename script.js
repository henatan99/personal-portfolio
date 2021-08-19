   
function displayWorkDetails(i) {
    document.getElementById(`show${i}`).addEventListener("click", function(){
        document.getElementById(`best-work-detail${i}`).style.display = "block";
    });
}

for (i=1; i<=5; i+=1) displayWorkDetails(i)

function hideWorkDetails(i) {
    document.getElementById(`hide${i}`).addEventListener("click", function(){
        document.getElementById(`best-work-detail${i}`).style.display = "none";
    });
}

for (i=1; i<=5; i+=1) hideWorkDetails(i)