document.querySelector("#currentDay").textContent = moment().format('LL');

$(".saveBtn").click(saveData);

var details= [{
    timeFrame :'',
    timeDetails :''}]
var currHour =   moment().format('H');


function saveData(event)
{
    // console.log("SaveD function is called ")
    //  console.log(event.target.parentElement.parentElement.children[1].value);
    details.timeDetails = ( event.target.parentElement.parentElement.children[1].value);
    details.timeFrame = (event.target.parentElement.parentElement.id) 

    // console.log(details.timeDetails)     
    //  console.log(details.timeFrame);
    
}

function past()
{
    for(i=0;i<9;i++)
    {
        
        var disableRow = (document.querySelector(".description").parentElement.parentElement.children[i].id);
        

        if(parseInt(disableRow)< parseInt(currHour))
        {
           document.querySelector(".description").parentElement.parentElement.children[i].classList.value = "row time-block past";
        //    console.log(disableRow);

        }
    }
}
function present()
{
    for(i=0;i<9;i++)
    {
        
        var presentRow = (document.querySelector(".description").parentElement.parentElement.children[i].id);

        if(parseInt(presentRow)== parseInt(currHour))
        {
            // console.log(presentRow);
            document.querySelector(".description").parentElement.parentElement.children[i].classList.value = "row time-block present";
        }
    }
}

function future()
{
    for(i=0;i<9;i++)
    {
        
        var FutureRow = (document.querySelector(".description").parentElement.parentElement.children[i].id);

        if(parseInt(FutureRow)> parseInt(currHour))
        {
           document.querySelector(".description").parentElement.parentElement.children[i].classList.value = "row time-block future";
        }
    }
}

past()
future()
present()