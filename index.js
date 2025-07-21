// will need this file
function openTab(evt, tabName) {
    var i, allprojects, filterbuttons;

    // get the different category of projects
    allprojects = document.getElementsByClassName("allprojects");
    for (i = 0; i < allprojects.length; i++){
        allprojects[i].style.display = "none";
        allprojects[i].style.color = "black";
    }

    filterbuttons = document.getElementsByClassName("filterbutton");
    for (i = 0; i < filterbuttons.length; i++ ){
        filterbuttons[i].className = filterbuttons[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
    for (i = 0; i < allprojects.length; i++ ){
        if(filterbuttons[i].className === "filterbutton active"){
            filterbuttons[i].style.color = "green";
            continue;
        }
        filterbuttons[i].style.color = "black";
    }
}