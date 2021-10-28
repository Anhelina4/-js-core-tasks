function determineType(arg){
    if(typeof(arg) === Object){
        if((arg.length && hasObj) || arg == arguments){
        console.log("array-like")
    }
    }
    if(arg===null){
        return null
    }if(arg===undefined){
        return undefined
    }
    let hasObj=false;
    Array.from(arg).map(item=>{
            if(item === Object){
                return hasObj = true;
            }
        })
        
    
return typeof(arg)
    
}
console.log(determineType(arguments))