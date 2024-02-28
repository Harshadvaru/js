/* javascript Execution Context
Step 1 Global Execution context execute on Head.
Js is singal threaded 

>three type of execution contex.
    Global Execution context
    Function Execution context
    Eval Execution context

>js creation Phase
    memeory creation Phase
    Execution creation Phase

    let val1 = 10
    let val2 = 5
    function addNum(num1,num2){
        let total = num1 + num2
        return total
    }
    let result1 = addNum(var1, var2)
    let result2 = addnum(10,2)

    explain givven the code.

    1>Global Execution -> this
    2>Memory Phase
        val1 --> underfined
        val2 --> underfined
        addNum --> defination
        result1 --> undefined
        result2 --> undefined
    3> Execution Phase
        val1 <-- 10
        val2 <-- 5
        addNum --> [new variable enviroment + Execution thread] After completing their work its delete the block. crate box and once again create  Memory Phase and Execution Phase execute the process and perform operation]