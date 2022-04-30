function Celcius(){
    var name1 = window. prompt("Enter Number in Celcius: ", "77");
    var x = (name1*(9/5)) + 32;
        if (x!=null){
            document.getElementById("demo1").innerHTML = x;
        };
};

function Fahrenheit(){
    var name1 = window. prompt("Enter Number in Fahrenheit: ", "77");
    var x = (5/9) * (name1-32);
        if (x!=null){
            document.getElementById("demo2").innerHTML = x;
        };
};