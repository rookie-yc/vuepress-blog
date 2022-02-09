var isValid = function(s) {
    const stack = [], 
        map = {
            "(":")",
            "{":"}",
            "[":"]"
        };
    for(const x of s) {
        console.log(x);
        if(x in map) {
            stack.push(x);
            console.log('stack', stack);
            continue;
        };
        if(map[stack.pop()] !== x) return false;
    }
    return !stack.length;
};

s = "()[]{}"

isValid(s)