// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {

  if (key === 'f') {
    connection.write("Say: YAY");
  } 

  if (key === 'g') {
    connection.write("Say: I");
  }
  
  if (key === 'h') {
    connection.write("Say: WIN");
  } 

  if (key === 'w') {
    connection.write("Move: up");
  } 

  if (key === 'a') {
    connection.write("Move: left");
  } 

  if (key === 's') {
    connection.write("Move: down");
  } 

  if (key === 'd') {
    connection.write("Move: right");
  } 

  if (key === '\u0003') {
    process.exit();
  } 
};


module.exports = {setupInput};