const fs=require ('fs')
if(process.argv.length<3){
console.log("specify")
return;
}
const files=fs.readFileSync(process.argv[2]).toString();
const lines=files.split('\n').length -1;
console.log(lines)