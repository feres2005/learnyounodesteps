const fs=require ('fs');
const path=require ('path')
if(process.argv.length<4){
console.log("specify")
return;
}
fs.readFile(process.argv[2],( error,list)=>{
    console.log(list)
    if(error){
        console.error(error);
        return;
    }
    const fileContent = list.filter((file) => {
    return path.extname(file) === '.'+ process.argv[3];
});
fileContent.forEach((file) => {
    console.log(file);
});
});
