import {URL} from "url";
const myurl=new URL("https://www.example.com:8080/p/a/t/h?query=string#hash");
console.log(myurl.hash); //gives #hash
console.log(myurl.host); //gives hostname along with the the port 8080-> gives: www.example.com:8080
console.log(myurl.hostname); //gives the host name www.example.com
console.log(myurl.port); //gives the port no :8080
console.log(myurl.href); // gives the href of the url 
console.log(myurl.protocol); //protocol is: https here
console.log(myurl.search); // gives the query to search here ?query=string
console.log(myurl.searchParams); //here search parameter is 'query'=>'string'. holds the query on which it will search

//BOTH WORKS THE SAME
console.log(myurl.toString());  //url to string
console.log(myurl.toJSON());  //url to JSON

//setting in a url
const myURL = new URL('https://example.org');
myURL.password='abc@123';
myURL.pathname='/a/b/c';
myURL.search='?d=e';
myURL.hash='#fgh';
console.log(myURL.href);

//now on this newly constructed url
console.log(myURL.hash); //gives #fgh
console.log(myURL.host); //gives hostname along with the the port.
console.log(myURL.hostname); //gives the host name www.example.com
console.log(myURL.port); //gives the port no is null
console.log(myURL.password); // gives the password of the url 
console.log(myURL.protocol); //protocol is: https here
console.log(myURL.search); // gives the query to search here ?query=string
console.log(myURL.searchParams);

//updating
myurl.pathname='/a/b/c';
console.log(myurl.pathname);
console.log(myurl.href);