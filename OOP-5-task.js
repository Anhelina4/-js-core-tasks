class Validator{
    isEmail(str){
        if(str.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)){
            return true
        }
        return false
    }
    isDomain(str){
        if(str.match(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/i)){
            return true
        }
        return false
    }
    isDate(str){
        if(Date.parse(str)>0){
            return true
        }else{
            return false
        }
    }
    isPhone(str){
        if(str.match(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/)){
            return true
        }else{
            return false
        }
    }
}



var validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('googlecom'));
console.log(validator.isDate('12.052088.88'));
console.log(validator.isPhone('995 670 73 91')); //тут можете формат своей страны