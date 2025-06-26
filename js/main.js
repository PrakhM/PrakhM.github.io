var r = document.querySelector(':root');
var toggle = 1;
function myFunction() 
{
    if(toggle == 1)
    {
        r.style.setProperty('--dark1', "#f2d4c9");
        r.style.setProperty('--dark2', "#ecae97");
        r.style.setProperty('--light1', "#071426");
        r.style.setProperty('--light2', "#024059");
        toggle = 0;
    }
    else if(toggle == 0)
    {
        r.style.setProperty('--dark1', "#071426");
        r.style.setProperty('--dark2', "#024059");
        r.style.setProperty('--light1', "#F28B66");
        r.style.setProperty('--light2', "#F25244");
        toggle = 1;
    }

}
