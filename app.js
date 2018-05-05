// Code written by Jamie Adams
// https://github.com/ritbpw
// https://ritb.co

// Modules import

const express = require('express');
const axios = require('axios');
const net = require('net');
const app = express();
const readline = require('readline');

// Set up readline

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Set up variables

let start = undefined;

// Confirmation

rl.question('Ready to start? (Y/n) \n', (value) => {
    if (value.toLowerCase() == "y") {
      start = true;
      checkIfReady();
    } else if (value.toLowerCase() == "n") {
      start = false;
    } else {
      console.log("Abort.");
    }
    rl.close();
});

// Check if Ready

const checkIfReady = () => {

  if (start == true) {
    // Set up TCP server

    var server = net.createServer((socket) => {

    });

    let port = 5611;
    let ip = "0.0.0.0";

    server.listen(port, ip, () => {
      console.log(`Server online at port ${port} and IP ${ip}`);
    });
  }
}
