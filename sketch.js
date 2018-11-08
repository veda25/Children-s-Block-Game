/*
 * Creation & Computation - Digital Futures, OCAD University
 * Kate Hartman / Nick Puckett
 * Experiment 3 - Example 03b. Arduino to P5.js - sending 3 switch value as a ASCII
 * 
 * Based on "Lab: Serial Input to P5.js" on ITP Physical Computing site
 * https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/
 * 
 */

  var serial; // variable to hold an instance of the serialport library
  var portName = '/dev/cu.usbmodem1421';  // fill in your serial
  var inData;                             // for incoming serial
  var switch1;
  var switch2;
  var switch3;
  var switch4;
  var switch5;
  var switch6;

  var song;
  var img1; 
  var img2;
  var img3;
  var img4;
  var img5;
  var img6;

function preload() {
song = loadSound('Yay.mp3');
img1 = loadImage('redz.png');
img2 = loadImage('lightblue.png');
img3 = loadImage('green.png');
img4 = loadImage('maroon.png');
img5 = loadImage('turquoise.png');
img6 = loadImage('lime.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing
 
 serial.list(); // list the serial ports
 serial.open(portName);              // open a serial port
	
}

function draw() {
  background(255);
  

    if(switch1==1){ 
	rect(0, 0, width/3, height/2);
	fill(253, 78, 179);

    }else{
	  	image(img1, 0, 0);
	  
    }

    if(switch2==1){
	rect(0, height/2, width/3, height/2);
	fill(253, 78, 179);
		 
    }else{
	image(img2, 0, height/2);
      
    }


    if(switch3==1){
	  rect(width/3, 0, width/3, height/2);
	  fill(253, 78, 179);

	}else{
    image(img3, width/3, 0);

    }
	

	
	
    if(switch4==1){
	rect(width/3, height/2, width/3, height/2);
    fill(253, 78, 179);
		
    }else{
     image(img4, width/3, height/2); 
    }


   
    if(switch5==1){
	rect((width*2)/3, 0, width/3, height/2);
	fill(253, 78, 179);
     
    }else{
     image(img5, (width*2)/3, 0);  
    }

      

    if(switch6==1){
    rect((width*2)/3, height/2, width/3, height/2);
	fill(253, 78, 179);


    }else{
    image(img6, (width*2)/3, height/2);  
    }


   
}

 
 function serverConnected() {
  console.log('connected to server.');
}
 
function portOpen() {
  console.log('the serial port opened.')
}

function serialEvent() {
  // read a string from the serial port
  // until you get carriage return and newline:
  var inString = serial.readStringUntil('\r\n');
	 console.log(inString);
 
  //check to see that there's actually a string there:
  if (inString.length > 0 ) {
    var sensors = split(inString, ',');            // split the string on the commas
    if (sensors.length > 5) {                      // if there are three elements
      switch1 = sensors[0];  
      switch2 = sensors[1]; 
      switch3 = sensors[2];   
	  switch4 = sensors[3]; 
      switch5 = sensors[4];  
	  switch6 = sensors[5]; 
    }
  }
	
	
}
 
function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}
 
function portClose() {
  console.log('The serial port closed.');
}


// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 console.log(i + " " + portList[i]);
 }
}
