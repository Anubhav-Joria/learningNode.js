const fs = require('fs');

//1. READING FILE
// const text = fs.readFile("./demo.txt",(error, data) =>{
//     if(error){
//         console.log(`error: ${error}`)
//     }
//     else{
//         console.log(data.toString());
//     }
// });
// console.log("reading file")

//2. WRITING FILE
// const content = "Writing text to another file in Node.js";
// fs.writeFile("write_file.txt", content, error =>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log("saved successfully");
//     }
// });

//3. APPEND FILE
// const appendContent = "Appending data to the previous file";
// fs.appendFile("./demo.txt", appendContent, error =>{
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log("data appended successfully")
//     }
// })

// 4.DELETE
// fs.unlink("./del.txt" , err =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("deleted file successfully")
//     }
// })