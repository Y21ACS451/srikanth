function out(a){
    
    function inner(b){
        return a*b;
    }
    return inner;
}

let get_fun_inner=out(10);
console.log(get_fun_inner(10));
console.log(get_fun_inner(100));
console.log(get_fun_inner(1000));