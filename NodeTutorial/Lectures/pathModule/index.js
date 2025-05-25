import path from "path";

console.log(path.basename("c:\\nodejs\\app.html"));
console.log(path.basename("c:\\nodejs\\app.html",".js"));
console.log(path.dirname("c:\\nodejs\\courses\\app.html"));
console.log(path.extname("c:\\nodejs\\app.html"));
console.log(path.join("c:","sutapa","notes","react-js"));
console.log(path.join("c:","sutapa","notes","react-js",".."));
console.log(path.parse("c:\\nodejs\\app.html"));