
        
function showHome()
{
    /*
        loop through all creatures
        
        if creature lives on land, background color green
        if creature lives in water, blue
        if creature lives in air, yellow
        
    */
    document.querySelectorAll("div.creature").forEach(el => {
        switch(el.dataset.home){
            case "land":
                el.style.backgroundColor = "#a1fcad";
                break;
            
            case "air":
                el.style.backgroundColor = "#fcf1bd";
                break;
            
            case "water":
                el.style.backgroundColor = "#aeebfc";
                break;
        }
    });
    alert("showHome()"); 
}//end showHome()

function showType()
{
    /*
        loop through all creatures
        
        if creature is an animal, border color solid red
        if creature is an insect, border color is dashed orange
    */

    document.querySelectorAll("div.creature").forEach(el => {
        switch(el.dataset.creatureType){
            case "animal":
                el.style.border = "2px solid red";
                break;
            
            case "insect":
                el.style.border = "2px dashed orange";
                break;
        }
    });
    alert("showType()");
}//end showType()

function clearAll()
{
    /*
        loop through all creatures
        
        clear border back to 1px solid black
        clear background color to white
        
    */
    
    document.querySelectorAll("div.creature").forEach(el => {
        el.style.border = "2px solid black";
        el.style.backgroundColor = "white";
    });
    alert("clearAll()");
}//end clearAll()