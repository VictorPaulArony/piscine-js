function mult2(num){
    return function(num1){
        return num * num1
    }
}
function add3(num){
    return function(num1){
        return function(num2){
            return num + num1 + num2
        }
    }
}

function sub4(num){
    return function(num2){
        return function(num3){
            return function(num4){
                return num - num2 - num3 - num4
            }
        }
    }
}