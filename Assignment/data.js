function change_Name(){
    //alert('Test Case 123')
  /*   let btnName=document.getElementById('btnTest').innerHTML
    alert(btnName) */
document.getElementById('btnTest').innerHTML="Good Morning"
}

function change_Color(){
    //alert('123')
    document.getElementById('dbl').style.backgroundColor = "green"
}


function change_Input_Color(){
    //alert('Test')
    document.getElementById('focusEx').style.backgroundColor = 'yellow'
}
function change_Case(){
    //alert('test')
    let name=document.getElementById('blurEx').value;
    //alert(name)
    //document.getElementById('blurEx').value="GM"
    document.getElementById('blurEx').value=name.toUpperCase();
}