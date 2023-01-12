let display = document.getElementById("display");

let buttons= Array.from(document.getElementsByClassName("button"));

// console.log(buttons);


buttons.map( button =>{
    button.addEventListener("click", (e) => {
        // console.log("clicked");
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText)
        switch(e.target.innerText){
//  all remove
            case "C":
                display.innerText="";
                break;
                //  last remove
                case "←":
                    if(display.innerText){
                        display.innerText= display.innerText.slice(0, -1);
                    }
                  
                    break;
                    // equal case
                    case "=":
                        try {
                            display.innerText=eval(display.innerText)
                        } catch (error) {
                            display.innerText="Error!"
                        }
                        
             break;
            default: 
            display.innerText += e.target.innerText
        }
    })
})