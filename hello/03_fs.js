const fs = require('fs');
const path = require('path');

// 监听一个文件

// let watch = fs.watch(__dirname);

// watch.on('change',(eventType,fileName)=>{
//     console.log('change: ',eventType,fileName)
// })

// let watch = fs.watch(__dirname,(eventType,fileName)=>{
//     console.log('change: ',eventType,fileName)
// });

// setTimeout(()=>{
//     watch.close()
// },10000)

// 读取一个文件
    // 同步读取（小文件）
    //let tbRead = fs.readFileSync(__filename,{ encoding: 'utf8' })

    // console.log( tbRead )
    // 一部读取一个文件（小文件）

    // const fileNameUrl = path.join(__dirname,'hello.js');

    // fs.readFile(fileNameUrl,{ encoding: 'utf8'},(err,data)=>{
        
    //     console.log( '文件读取成功。。。' )
    //     if( err ){
    //         console.log( '文件读取错误' + err )
    //         return;
    //     }
    //     console.log( data );
    // })

    // console.log( '程序异步继续执行' )

    // 读取大文件（文件流）