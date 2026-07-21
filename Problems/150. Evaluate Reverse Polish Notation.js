var evalRPN = function(tokens) {
    let stack=[];
    for(const token of tokens)
    {
        if(token.length==1 && token.charCodeAt(0)<=47)
        {
            const int1=stack.pop();
            const int2=stack.pop();
            const ans=solve(int2,int1,token)
            stack.push(ans)
        }
        else{
            stack.push(parseInt(token,10))
        }
    }
    return stack.pop();
};


var solve=function(a,b,op){
    if(op==='+') return a+b;
    if(op==='-') return a-b;
    if(op==='*') return a*b;
    else return Math.trunc(a/b)
}


console.log(evalRPN(["2","1","+","3","*"])) //9