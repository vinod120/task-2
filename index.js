var display = function(e) {
    var element = document.getElementById(e)
    if(element.style.zIndex == "" || element.style.zIndex == 0){
        element.style.zIndex = 10
    }
    else{
        element.style.zIndex = 0
    }
};

