function setup() {
  createCanvas (300,300); // canvas size
  background('#24AEBC'); // canvas color
}

function draw() {

//BODY
noStroke(); // no stroke for body parts
rect(126,119,47,53); //body
rect(153,172,20,38); //left leg
rect(126,172,20,38);  //right leg
fill('#D8D8D8'); // hand round color
ellipse(90, 132, 15, 15); // left hand
ellipse(208, 130, 15, 15); // right hand
fill('#FFFFFF'); // arms color
quad(173, 122, 173, 140, 203, 136, 203, 124); //right arm
quad(126, 140, 126, 122, 95, 126, 95, 138); //left arm


//head

fill('#FFFFFF'); 
rect(137,103,24,27); 
ellipse(149, 103, 24, 22); // head round (? how to make shapes like the head)
fill('#F24955'); 
rect(137,116,24,3);
fill('#D8D8D8'); 
rect(139,105,20,11); 
ellipse(149, 104, 20, 19); 
fill('#000000'); 
ellipse(146, 104, 4, 4); 
fill('#000000'); 
ellipse(153, 104, 4, 4); 
fill('#FFFFFF'); 
rect(161,103,3,10);
fill('#FFFFFF'); 
rect(164,105,3,6);
fill('#FFFFFF'); 
rect(134,103,3,10);
fill('#FFFFFF'); 
rect(131,105,3,6);


//legs elements
fill('#F24955'); // legs color red 
rect(126,200,20,1);  // left line
rect(153,200,20,1);  // right line
fill('#B5B5B5'); // legs color grey 
rect(126,201,20,6);  // left line
rect(153,201,20,6);  // right line
fill('#2458CE'); // round blue
ellipse(136, 204, 4, 4); // right hand

// background elements
fill('#FFFCC2'); // light round color
ellipse(139, 310, 464, 198); 
fill('#B5B4B0'); // dark round color 
ellipse(142, 220, 106, 11); 
fill('#FFFFFF'); // dark round color 
ellipse(250, 40, 55, 55); 
fill('#FFFFFF'); // dark round color 
ellipse(30, 80, 20, 20); 

//SHOES 
// right
fill('#3670CE'); // legs shoes top color
rect(153,210,20,4);  // right shoe
fill('#1446A8'); // legs shoes bottom color
rect(153,214,20,8);  // right shoe
// left
fill('#1446A8'); // legs shoes bottom 
rect(126,210,20,12);  // left shoe
quad(113, 222, 113, 216, 126, 211, 126, 222); //left shoe (?how to combine or make 5 parts shape)

//black body connectors
fill(51); // connectors color
rect(135,160,2,24);  // connector
rect(162,160,2,24);  // connector
rect(117,130,19,2);  // connector
rect(162,130,19,2);  // connector
//body parts seperators
stroke('#000000'); // seperator color
line(126,172,172,172); // seperator line
line(125,122,125,140); // seperator line
line(173,122,173,140); // seperator line

// body elements
//left round red
noFill();
strokeWeight(2.5);
stroke('#F24955');
ellipse(140, 140, 4, 4); // right hand
//right round red
noFill();
strokeWeight(2.5);
stroke('#F24955');
ellipse(158, 140, 4, 4); // right hand
//left round Blue
noFill();
strokeWeight(2.5);
stroke('#2458CE');
ellipse(140, 154, 4, 4); // right hand
//right round blue
noFill();
strokeWeight(2.5);
stroke('#2458CE');
ellipse(158, 154, 4, 4); // right hand
//belt
strokeWeight(1);
stroke('#C6C6C6');
rect (125,145,48,4);
rect (146,145,5,4);


//FLAG bottom
noStroke(); // no stroke for flag
fill('#2458CE'); // flag color blue
rect(132,191,3,2);  // Flag
fill('#F24955'); // flag color red
rect(136,191,4,0.5);  // Flag line #1
rect(136,192,4,0.5);  // Flag line #2
rect(136,193,4,0.5);  // Flag line #3
rect(132,194,8,0.5);  // Flag line #4
rect(132,195,8,0.5);  // Flag line #5
rect(132,196,8,0.5);  // Flag line #6

//FLAG bottom (? can I move/resize a full element like null in AE)
noStroke(); // no stroke for flag
fill('#2458CE'); // flag color blue
rect(155,122,3,2);  // Flag
fill('#F24955'); // flag color red
rect(159,122,4,0.5);  // Flag line #1
rect(159,123,4,0.5);  // Flag line #2
rect(159,124,4,0.5);  // Flag line #3
rect(155,125,8,0.5);  // Flag line #4
rect(155,126,8,0.5);  // Flag line #5
rect(155,127,8,0.5);  // Flag line #6


}
