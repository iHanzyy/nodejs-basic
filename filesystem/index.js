const fs = require('fs');

// const readFileCallback = (error, data) => {
//     if(error) {
//         console.log('Gagal membaca berkas');
//         return;
//     }
//     console.log(data);
// }

// fs.readFile('notes.txt', 'utf-8', readFileCallback);

// const readableStream = fs.createReadStream('notes.txt' , {
//     highWaterMark: 10
// });

// readableStream.on('readable', () => {
//     try {
//         process.stdout.write(`[${readableStream.read()}]`);
//     } catch(error) {
//         // catch the error when the chunk cannot be read
//     }
// });

// readableStream.on('end', () => {
//     console.log("DONE");
// });

const writeableStream = fs.createWriteStream('output.txt');

writeableStream.write('Hello World\n');
writeableStream.end('end');