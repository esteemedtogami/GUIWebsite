/*
  Sam Pickell
  samuel_pickell@student.uml.edu
  UMass Lowell CS Student, COMP 4610 GUI I
  November 1, 2018
  Assignment 6: First JavaScript Program
  Using JavaScript to make a multiplication table.
  This is the JavaScript file.
*/
var h_start, h_end, v_start, v_end;

function get_numbers(){

    //Get the values from the forms, and check their validity
    h_start = parseInt(document.getElementById('horizontal_start').value, 10);
    if(err_handle(h_start, "Horizontal Start", 1, 14) == 0) return;
    h_end = parseInt(document.getElementById('horizontal_end').value, 10);
    if(err_handle(h_end, "Horizontal End", 2, 15) == 0) return;
    v_start = parseInt(document.getElementById('vertical_start').value, 10);
    if (err_handle(v_start, "Vertical Start", 1, 14) == 0) return;
    v_end = parseInt(document.getElementById('vertical_end').value, 10);
    if (err_handle(v_end, "Veritcal End", 2, 15) == 0) return;

    //make sure the starting value is smaller than the ending value
    if(size_comp(h_start, h_end, "horizontal") == 0) return;
    if(size_comp(v_start, v_end, "vertical") == 0) return;

    //Call the function that will build the table
    generate_table();
}

function generate_table(){
    //create a variable that will hold the table information
    var my_table = "<table>";

    //double for loop to track the vertical and horizontal coordinates
    //   of the table
    for(var i = v_start - 1; i <= v_end; i++)
    {
        //create a new row
        my_table+="<tr>";
        for(var j = h_start - 1; j <= h_end; j++)
        {
            //leave top left element blank
            if(j == h_start-1 && i == v_start-1)
            {
                my_table+="<td></td>";
            }
            //populate the top row with the horizontal range
            else if(i == v_start-1 && (j >= v_start-1 || j <= v_end))
            {
                my_table+="<td id=\"my_heading\">" + j + "</td>";
            }
            //populate the leftmost column with the vertical range
            else if(j == h_start-1 && (i >= h_start-1 || i <= h_end))
            {
                my_table+="<td id=\"my_heading\">" + i + "</td>";
            }
            //fill an element with the appropriate multiplication
            else
            {
                    my_table+="<td>" + i*j + "</td>";
            }
        }
        my_table+="</tr>";
    }
    my_table+="</table>";
    //send the table data to the div in the HTML doc
    document.getElementById('mult_tab').innerHTML = my_table;
}

//Checks validity of parameters, takes in the value, the variable name,
// and the upper and lower bounds of the range
function err_handle(val, name, little, big){
    if((val < little) || (val > big) || !(val === parseInt(val, 10)))
    {
        alert("Error. " + name + " must be a number in the range from " + little + " to " + big + ".");
        return 0;
    }
    return 1;
}

//Checks that the value entered in the "smaller" section is in fact smaller
function size_comp(the_start, the_end, name){
    if(the_start > the_end)
    {
        alert("Error. The " + name + " starting value must be smaller than the ending value.");
        return 0;
    }
    return 1;
}
