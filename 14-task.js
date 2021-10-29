    function checkType(type){
        if(arguments.length<=0){
            return "Nothing"
        }if(type===undefined){
            return 'undefined'
        }if(type===null){
            return null
        }if(Array.isArray(type)){
            return "array"
        }if(typeof type === "object" && type.hasOwnProperty("length")){
            return "array-like"
        }else{
            return typeof type
        }
        
    }
    
    
    
    
    
    console.log("Ничего:", checkType());
    console.log("undefined:", checkType(undefined));
    console.log("boolean:", checkType(true));
    console.log("number:", checkType(33));
    console.log("string:", checkType("33"));
    console.log("function:", checkType(function(){}));
    console.log("null:", checkType(null));
    console.log("array:", checkType([]));
    console.log("object:", checkType({}));
    console.log("array-like:", checkType({length: 2, 0: "0", 1: "1"}));
    console.log("\n");