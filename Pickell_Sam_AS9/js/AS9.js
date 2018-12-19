/*
Copyright (C) 2018 Sam Pickell samuel_pickell@student.uml.edu
UMass Lowell CS Student, COMP 4610 GUI I
December 15, 2018
Assignment 9: Create a digital version of Scrabble
*/

//Globals
var my_score = 0;
var placed_tile_1 = "Blank", placed_tile_2 = "Blank", placed_tile_3 = "Blank", placed_tile_4 = "Blank";
var placed_tile_5 = "Blank", placed_tile_6 = "Blank", placed_tile_7 = "Blank";
var double_word = false;

//Associative array provided by Professor Heines
var ScrabbleTiles = [] ;
ScrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number_remaining" : 9  } ;
ScrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number_remaining" : 4  } ;
ScrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number_remaining" : 12 } ;
ScrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number_remaining" : 3  } ;
ScrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number_remaining" : 9  } ;
ScrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number_remaining" : 1  } ;
ScrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number_remaining" : 1  } ;
ScrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number_remaining" : 4  } ;
ScrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number_remaining" : 6  } ;
ScrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number_remaining" : 8  } ;
ScrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number_remaining" : 1  } ;
ScrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number_remaining" : 6  } ;
ScrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number_remaining" : 4  } ;
ScrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number_remaining" : 6  } ;
ScrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number_remaining" : 4  } ;
ScrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number_remaining" : 1  } ;
ScrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number_remaining" : 2  } ;
ScrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number_remaining" : 1  } ;
ScrabbleTiles["Blank"] = { "value" : 0,  "original-distribution" : 2,  "number_remaining" : 2  } ;

window.onload = function(){
    randomize_letters();
}

//This will generate a random letter based on it's availablity in the associative array
function make_random_letter(tile_name){

    var random_num = Math.random() * (27-0) + 0;
    random_num = Math.floor(random_num);

    //Assign letter to value
    if(random_num === 0)
    {
        tile_name = "A";
    }
    else if(random_num === 1)
    {
        tile_name = "B";
    }
    else if(random_num === 2)
    {
        tile_name = "C";
    }
    else if(random_num === 3)
    {
        tile_name = "D";
    }
    else if(random_num === 4)
    {
        tile_name = "E";
    }
    else if(random_num === 5)
    {
        tile_name = "F";
    }
    else if(random_num === 6)
    {
        tile_name = "G";
    }
    else if(random_num === 7)
    {
        tile_name = "H";
    }
    else if(random_num === 8)
    {
        tile_name = "I";
    }
    else if(random_num === 9)
    {
        tile_name = "J";
    }
    else if(random_num === 10)
    {
        tile_name = "K";
    }
    else if(random_num === 11)
    {
        tile_name = "L";
    }
    else if(random_num === 12)
    {
        tile_name = "M";
    }
    else if(random_num === 13)
    {
        tile_name = "N";
    }
    else if(random_num === 14)
    {
        tile_name = "O";
    }
    else if(random_num === 15)
    {
        tile_name = "P";
    }
    else if(random_num === 16)
    {
        tile_name = "Q";
    }
    else if(random_num === 17)
    {
        tile_name = "R";
    }
    else if(random_num === 18)
    {
        tile_name = "S";
    }
    else if(random_num === 19)
    {
        tile_name = "T";
    }
    else if(random_num === 20)
    {
        tile_name = "U";
    }
    else if(random_num === 21)
    {
        tile_name = "V";
    }
    else if(random_num === 22)
    {
        tile_name = "W";
    }
    else if(random_num === 23)
    {
        tile_name = "X";
    }
    else if(random_num === 24)
    {
        tile_name = "Y";
    }
    else if(random_num === 25)
    {
        tile_name = "Z";
    }
    else
    {
        tile_name = "Blank";
    }

    return tile_name;
}

//This function randomizes the tiles in the scrabble tray
function randomize_letters(){
    //console.log("Test");

    var pseudo_html = "", tile_name, i = 1, can_advance;

    for(i = 1; i <= 7; i++)
    {
        can_advance = false;
        while(can_advance === false)
        {
            tile_name = make_random_letter(tile_name);
            if(ScrabbleTiles[tile_name].number_remaining === 0)
            {
                can_advance = false;
            }
            else
            {
                ScrabbleTiles[tile_name].number_remaining -= 1;
                can_advance = true;
            }
        }

        //Generate tile based on random number
        pseudo_html = pseudo_html + "<div id=\"tile" + i + "\" class=\"draggable ui-draggable ui-draggable-handle\" name= \"" + tile_name + "\">";
        pseudo_html = pseudo_html + "<img id=\"" + tile_name + "\" src=\"images/Scrabble_Tiles/Scrabble_Tile_" + tile_name + ".jpg\"";
        pseudo_html = pseudo_html + "width = \"50\"/></div>";
    }



    //Fill tile div
    document.getElementById('tiles').innerHTML = pseudo_html;

    //Makes objects "draggable", found on the jquery ui website
    $( function() {
        var my_drag_object;
        $( ".draggable" ).draggable({
            start: function (event, ui) {
            my_drag_object = $(this).closest('div').attr('name');
        }
    });
        $( "#droppable1" ).droppable({
          drop: function( event, ui ) {
            placed_tile_1 = my_drag_object; //sets the tile letter
            //console.log(placed_tile_1);
            $( this )
              .find( "p" )
                .html(my_drag_object);
          }
        });
        $( "#droppable2" ).droppable({
          drop: function( event, ui ) {
              placed_tile_2 = my_drag_object;
              double_word = true; //Double word space
            $( this )
              .find( "p" )
                .html(my_drag_object);
          }
        });
        $( "#droppable3" ).droppable({
          drop: function( event, ui ) {
              placed_tile_3 = my_drag_object;
            $( this )
              .find( "p" )
                .html(my_drag_object);
          }
        });
        $( "#droppable4" ).droppable({
          drop: function( event, ui ) {
              placed_tile_4 = my_drag_object;
            $( this )
              .find( "p" )
                .html(my_drag_object);
          }
        });
        $( "#droppable5" ).droppable({
          drop: function( event, ui ) {
              placed_tile_5 = my_drag_object;
            $( this )
              .find( "p" )
                .html(my_drag_object);
          }
        });
        $( "#droppable6" ).droppable({
          drop: function( event, ui ) {
              placed_tile_6 = my_drag_object;
              double_word = true; //Double word space
            $( this )
              .find( "p" )
                .html(my_drag_object);
          }
        });
        $( "#droppable7" ).droppable({
          drop: function( event, ui ) {
              placed_tile_7 = my_drag_object;
            $( this )
              .find( "p" )
                .html(my_drag_object);
          }
        });
      } );

}

//Calculate score and generate a new hand
function submit_hand(){

    var local_score = 0;

    local_score = local_score + (ScrabbleTiles[placed_tile_1].value);
    local_score = local_score + (ScrabbleTiles[placed_tile_2].value);
    local_score = local_score + (ScrabbleTiles[placed_tile_3].value);
    local_score = local_score + (ScrabbleTiles[placed_tile_4].value);
    local_score = local_score + (ScrabbleTiles[placed_tile_5].value);
    local_score = local_score + (ScrabbleTiles[placed_tile_6].value);
    local_score = local_score + (ScrabbleTiles[placed_tile_7].value);

    if(double_word === true)
    {
        local_score = local_score*2;
    }

    //Update the score
    my_score = my_score + local_score;
    document.getElementById('score_val').innerHTML ="<p>"+my_score+"</p>";

    placed_tile_1 = "Blank";
    placed_tile_2 = "Blank";
    placed_tile_3 = "Blank";
    placed_tile_4 = "Blank";
    placed_tile_5 = "Blank";
    placed_tile_6 = "Blank";
    placed_tile_7 = "Blank";

    double_word = false;

    randomize_letters();
}
