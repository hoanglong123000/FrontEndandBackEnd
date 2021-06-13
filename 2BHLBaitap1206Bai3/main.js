//Bài 1
function clickHereToChangeColorSize(){
    //cách 1: sử dụng ngôn ngữ Javascript thuần để code
    //b1 get value color, font size from input
    // var color = document.getElementById("color").value;
    // var size = document.getElementById("size").value;
    // //b2 assign value from b1
    // document.getElementById("text").style.color = color;
    // document.getElementById("demo").style.fontSize = size;
    //cách 2: sử dụng thư viện jquery của javascript để thực hiện
    var color = $("#color").val();
    var size = $("#size").val();
    $('#text').css('font-size',size);
    $('#text').css('color',color);
}


//Bài 2
function showInfo(){
    //cách 1
    // var fistName = document.getElementById("fname").value;
    // var lastName = document.getElementById("lname").value;
    // var fullName = fistName + " " + lastName;
    // alert("Họ và teenL " + fullName);
    //cách 2
    var firstName = $("#fname").val();
    var lastName = $("#lname").val();
    var fullName = firstName + " " +lastName;
    $("#dia").html("<h1>" + fullName + "</h1>");
    $("#dia").dialog();
    
}


// Bài 3
function clickHereToChangeColorBarkgroud(){
    //cách 1:
    // var button1 = document.getElementById("btn1");
    // var button2 = document.getElementById("btn2");
    // var div = document.getElementById('content');
    // //Thiết lập click cho btn1
    // button1.onclick = function(){
    //     div.style.background = "red";
    // };
    // //Thiết lập click cho btn2
    // button2.onclick = function () {
    //     div.style.background = "blue";
    // };
    //cách 2:
    var button1 = $("#btn1").val();
    var button2 = $("#btn2").val();
    var div = $("content").val();
    $(document).ready(function(){
        $("body").on({
            mouseenter: function(){
                $(this).css("background-color", "Pink");
            },  
           
            mouseleave: function(){
                $(this).css("background-color", "Orange");
            },
           
            dblclick: function(){
                $(this).css("background-color", "Green");
            }
        });
    });
}


//Bài 4
function getAttributes()
{
    // Cách 1:
   // var getlink = document.getElementById("somelink").href;   
   // alert( "link: " +getlink);
    
   // Cách 2:
   var getlink = $('#somelink').attr('href');
   $("#dialog").html("<h1>"+getlink+"</h1>");
   $("#dialog").dialog();
}


//Bài 5
function insert_Row()
{
    // Cách 1:
    // var table = document.getElementById("sampleTable");
    // var insrow = table.insertRow(0);
    // var inscell1 = insrow.insertCell(0);
    // var inscell2 = insrow.insertCell(1);
    // inscell1.innerHTML = "Row Cell";
    // inscell2.innerHTML = "Row Cell";




    // Cách 2:
    var i = 3;
    $("#sampleTable").find('tbody').append("<tr><td>Row"+i+" cell"+i+"</td><td>Row"+i+" cell "+i+"</td></tr>");
    i++;
}

//Bài 6
function change_Content()
{
    // Cách 1:
    var x=document.getElementById('myTable').rows;
    var y=x[0].cells;
    var z=x[1].cells;
    y[0].innerHTML="Row in Table";
    y[1].innerHTML="Row in Table";
    z[0].innerHTML="Row in Table";
    z[1].innerHTML="Row in Table";

}



// Bài 7
function createTable(m, n)
{
    // Cách 1:
    var table = document.getElementById("myTable1");
     var insrow = table.insertRow(m);
     var inscell1 = insrow.insertCell(n);
   
     inscell1.innerHTML = "Row Cell";
   

}





//Bài 8
function RemoveColor()
{
    // // Cách 1:
    // var selectvar = document.getElementById("ColorSelect");
    // value = selectvar.selectedIndex;
    // selectvar.removeChild(selectvar[value]);
    
    // Cách 2:
    $("#ColorSelect option:selected").remove();

}



