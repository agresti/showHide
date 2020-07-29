// show elements on checkbox checked
    function showForm (element) {
        
        var elements = document.getElementsByClassName("elements");
        var visible = "none";
        for(var i=0; i<elements.length; i++) { 
            if(elements[i].checked){
             visible = "block";
                break;
            }
        }
        document.getElementById(element).style.display = visible;   
    }
