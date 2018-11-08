/*
 * Creation & Computation - Digital Futures, OCAD University
 * Kate Hartman / Nick Puckett
 * Experiment 3 - Example 03b. Arduino to P5.js - sending 3 switch value as a ASCII
 * 
 * Based on "Lab: Serial Input to P5.js" on ITP Physical Computing site
 * https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/
 * 
 * Circuit: 
 * switch connected to pin 2 and ground
 * switch connected to pin 3 and ground
 * switch connected to pin 4 and ground 
 */

int switch1val;
int switch2val;
int switch3val;
int switch4val;
int switch5val;
int switch6val;

void setup() {
  //start serial connection
  Serial.begin(9600);
  //configure pin 2 as an input and enable the internal pull-up resistor
  pinMode(2, INPUT_PULLUP);
  pinMode(3, INPUT_PULLUP);
  pinMode(4, INPUT_PULLUP);
  pinMode(5, INPUT_PULLUP);
  pinMode(6, INPUT_PULLUP);
  pinMode(7, INPUT_PULLUP);
  pinMode(12, OUTPUT);

}

void loop() {
  // read the switch value
  switch1val = digitalRead(2);
  // print out the switch value
  Serial.print(switch1val);
  // print a comma to separate the values
  Serial.print(",");

  // read the switch value
  switch2val = digitalRead(3);
  // print out the switch value
  Serial.print(switch2val);
  // print a comma to separate the values
  Serial.print(",");

  // read the switch value
  switch3val = digitalRead(4);
  // print out the switch value
  Serial.print(switch3val);
    // print a comma to separate the values
  Serial.print(",");

   // read the switch value
  switch4val = digitalRead(5);
  // print out the switch value
  Serial.print(switch4val);
    // print a comma to separate the values
  Serial.print(",");

   // read the switch value
  switch5val = digitalRead(6);
  // print out the switch value
  Serial.print(switch5val);
    // print a comma to separate the values
  Serial.print(",");

   // read the switch value
  switch6val = digitalRead(7);
  // print out the switch value and add a line break
  Serial.println(switch6val);


  delay(200); // the delay is necessary for the serial communication

  // Turn on the built in LED any time any of the switches are activated
  if (switch1val == LOW || switch2val == LOW || switch3val == LOW || switch4val == LOW || switch5val == LOW || switch6val == LOW) {
    digitalWrite(12, HIGH);
  } else {
    digitalWrite(12, LOW);
  }
}
