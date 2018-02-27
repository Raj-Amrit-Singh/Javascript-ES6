function myReceiver(){
    var name = document.getElementById("name").value;
    var option = document.getElementById("select")
    option = option.options[option.selectedIndex].value;
    //console.log(option);
    if(option=="")
    option = undefined;
    stringConstruct(name,option);
}

function stringConstruct(name,option="male"){
    var label = document.getElementById("label");
    label.innerHTML = `${option=="male"?"Mr":"Mrs"} ${name} is awesome!!!!`;
    //console.log(option);
}