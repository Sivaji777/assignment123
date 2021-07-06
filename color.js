

function color1()
{
    x=document.getElementById("colordiv").style="background-color:red; width:700px;height:500px"
    console.log(x);

}

function color2()
{
    x=document.getElementById("colordiv").style="background-color:green; width:700px;height:500px"
    console.log(x);

}
function color3()
{
    x=document.getElementById("colordiv").style="background-color:blue; width:700px;height:500px"
    console.log(x);
    
}
function color4()
{
    x=document.getElementById("colordiv").style="background-color:yellow; width:700px;height:500px"
    console.log(x);

}
function color5()
{
    x=document.getElementById("colordiv").style="background-color:pink; width:700px;height:500px"
    console.log(x);
   
}
// assignment 2


function increment()
{
   var element= document.getElementById("root");
   var value=element.innerHTML;
   ++value;
   console.log(value);
   document.getElementById("root").innerHTML=value;
}
function decrement()
{
   var element= document.getElementById("root");
   var value=element.innerHTML;
   --value;
   console.log(value);
   document.getElementById("root").innerHTML=value;
}
function reset()
{
  var element=document.getElementById("root").innerHTML="0"
  console.log(element);
}
// assignment-3
function html()
{
   var element= document.getElementById("html");
   var value=element.innerHTML;
   ++value;
   console.log(value);
   document.getElementById("html").innerHTML=value;
}
function css()
{
   var element= document.getElementById("css");
   var value=element.innerHTML;
   ++value;
   console.log(value);
   document.getElementById("css").innerHTML=value;
}
function boot()
{
   var element= document.getElementById("bootstrap");
   var value=element.innerHTML;
   ++value;
   console.log(value);
   document.getElementById("bootstrap").innerHTML=value;
}
function javascript()
{
   var element= document.getElementById("javascript");
   var value=element.innerHTML;
   ++value;
   console.log(value);
   document.getElementById("javascript").innerHTML=value;
}
function angular()
{
   var element= document.getElementById("angular");
   var value=element.innerHTML;
   ++value;
   console.log(value);
   document.getElementById("angular").innerHTML=value;
}
function react()
{
   var element= document.getElementById("react");
   var value=element.innerHTML;
   ++value;
   console.log(value);
   document.getElementById("react").innerHTML=value;
}