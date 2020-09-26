/* Goal: Capture the name of the user and present a customized welcome message */
/* Variables */
var js_name;
/* Data input */
js_name = window.prompt('Write your name:' , 'Write your name in this box');
/* Data output */
document.write('Welcome,' + js_name);

/* Variables */
var js_name;
var js_lastname;
var js_fullname;

function concatena(){
    /* Data input */
    js_name = document.FormConcatena.f_name.value;
    js_lastname = document.FormConcatena.f_lastname.value;

    /* Data processing */
    js_fullname = js_name + '' + js_lastname;

    /* Data output */
    window.alert('Welcome' + js_fullname);
}