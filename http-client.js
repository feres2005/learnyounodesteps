const http=require('http')

const two=process.argv[2]
 if(process.argv.length<3){
     console.log('specify')
     return;
 };
http.get(two,(response)=>{
response.setEncoding('utf8')   

response.on('error',(error)=>{
    console.error(error)

});
response.on('data',(data)=>{
    console.log(data)

});
});



