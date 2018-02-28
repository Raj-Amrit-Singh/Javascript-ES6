function myReceiver(){
    var firstbox = document.getElementById("firstname").value;
    var lastbox = document.getElementById('lastname').value;
    if(firstbox == "")
    firstbox = undefined;
    if(lastbox == "")
    lastbox = undefined;
    concate(firstbox,lastbox);
    

}

function concate(firstName="Raj",lastName="Amrit"){
    var label = document.getElementById("output");
    label.innerHTML = `${firstName} ${lastName} is awesome`;
}