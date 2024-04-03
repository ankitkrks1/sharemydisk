const path = require('path')

module.exports = getDirectory = (arg) =>{
  
    if(arg.indexOf('-d')>0){
       console.log('serving ',arg[arg.indexOf('-d')+1])
        return arg[arg.indexOf('-d')+1]
    }else{
     console.log('switching to default path :-  ',path.resolve(__dirname,'../'))
     return path.resolve(__dirname,'../')
    }
}