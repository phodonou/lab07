function init(){
    //add your javascrip between these two lines of code
     
    var entrybutton = document.getElementById('entrybutton');
    var output = document.getElementById('textoutput');
    var input= document.getElementById('entryinput');

    entrybutton.addEventListener('click', buttonClicked);

    function buttonClicked(params) {
       output.innerHTML = input.value;
       alert("Prince Hodonou: " + input.value);
    }
       
}    
window.addEventListener('load', init);