function getInput(number){
    var result = document.getElementById("getinput")
    result.value+=number

}

function clearData(){
    var result = document.getElementById("getinput")
    result.value = ""
    
}

function Result(){
    var result = document.getElementById("getinput")
    result.value = eval(result.value)

}
