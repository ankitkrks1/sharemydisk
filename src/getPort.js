
module.exports = getPort = (arg)=>{

   if(arg.indexOf('-p')!==-1){
       
       return parseInt(arg[arg.indexOf('-p')+1])
   }else{
    console.log('switching to default port :-  3000')
    return 3000
   }
}