/** This method sets the url to get fake data for testing.
 *  Ref: https://reqres.in/api/
 *  A hosted REST-API ready to respond to AJAX requests.
 *  It is used to test front-end against a real API.
 *  GET, POST, PUT & DELETE are supported.
 * 
 *  /////////////////////////////////////////
 *  /            JSON-Server                /
 *  /////////////////////////////////////////
 *  I have decided to use my own local json-server
 *  To do this, run the following commands
 * 
 *  1.) 'npm install -g json-server'
 *  2.) create a json file (e.g. 'assets/data/fakeDB.json' file structure) with some data in it
 *  3.) start the server with 'json-server --watch fakeDB.json' 
 */
export function fakeData(): any {
  // return 'https://reqres.in/api/';
  // return '../assets/data/';
  return 'http://localhost:3000/';
}
