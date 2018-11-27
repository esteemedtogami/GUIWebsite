/*
Copyright (C) 2018 Sam Pickell samuel_pickell@student.uml.edu
UMass Lowell CS Student, COMP 4610 GUI I
November 18, 2018
Assignment 7: Update AS6 to have jQuery validation
*/
int h_start, h_end, v_start, v_end;
var my_table;

//check form validity even when button is "button" and not "submit"
//Source: https://stackoverflow.com/questions/13671710/jquery-form-validation-on-button-click
$('#my_button').on('click', function() {
    $("#input_form").valid();
});

//Learned how to set up rules and messages from Prof. Jessie Heines' website:
//https://jesseheines.com/~heines/91.461/91.461-2012-13f/461-lecs/code/jmh-table-v5.html?xBegin=2&xEnd=5&yBegin=5&yEnd=7
$().ready(function(){
    $('#input_form').validate({
        //The rules tell the validator what to look out for
        rules: {
            horizontal_start:{
                //e.g. the field is required, only accepts digits, and only
                // accepts numbers within a certain range
                    required: true,
                    digits: true,
                    range:[1,14]
            },
            horizontal_end:{
                    required: true,
                    digits: true,
                    range:[2,15]
            },
            vertical_start:{
                    required: true,
                    digits: true,
                    range:[1,14]
            },
            vertical_end:{
                    required: true,
                    digits: true,
                    range:[2,15]
            }
        },

        //customized messages depending on the type of error
        messages: {
            horizontal_start:{
                    required: function(){
                        return "<em>You MUST indicate a horizontal start!</em><br></br>";
                    },
                    digits: function(){
                        return "<em>Digits are the only valid input.</em><br></br>";
                    },
                    range: function(){
                        return "<em>Must be a number in range 1-14.</em><br></br>";
                    }
            },
            horizontal_end:{
                    required: function(){
                        return "<em>You MUST indicate a horizontal end!</em><br></br>";
                    },
                    digits: function(){
                        return "<em>Digits are the only valid input.</em><br></br>";
                    },
                    range: function(){
                        return "<em>Must be a number in range 2-15.</em><br></br>";
                    }
            },
            vertical_start:{
                    required: function(){
                        return "<em>You MUST indicate a vertical start!</em><br></br>";
                    },
                    digits: function(){
                        return "<em>Digits are the only valid input.</em><br></br>";
                    },
                    range: function(){
                        return "<em>Must be a number in range 1-14.</em><br></br>";
                    }
            },
            vertical_end:{
                    required: function(){
                        return "<em>You MUST indicate a vertical end!</em><br></br>";
                    },
                    digits: function(){
                        return "<em>Digits are the only valid input.</em><br></br>";
                    },
                    range: function(){
                        return "<em>Must be a number in range 2-15.</em>";
                    }
            }
        }
    });
});

function get_numbers(){

    //Get the values from the forms, and check their validity
    h_start = parseInt(document.getElementById('horizontal_start').value, 10);
    h_end = parseInt(document.getElementById('horizontal_end').value, 10);
    v_start = parseInt(document.getElementById('vertical_start').value, 10);
    v_end = parseInt(document.getElementById('vertical_end').value, 10);


    generate_table();

}

function generate_table(){
    //create a variable that will hold the table information
    my_table = "<table>";

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
