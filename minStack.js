/*********************************************************************** 
Source LeetCode
155 Min Stack
(https://leetcode.com/problems/min-stack/)
1st 2022-04-17

Design a stack that supports push, pop, top, and retrieving the minimum 
element in constant time.
Implement the MinStack class:

    MinStack() initializes the stack object.
    void push(int val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.
************************************************************************/

// 1st Attempt
// LOGIC: consider as linked list
var MinStack = function() {
    this.up=null;
    this.size=0;
};
var Node = function(data){
    this.data=data;
    this.prev=null;
};

//@param {number} val
//@return {void}

MinStack.prototype.push = function(val) {
    let node = new Node(val);
    
    node.prev = this.up;
    this.up = node;
    this.size++;
};

//@return {void}
MinStack.prototype.pop = function() {
  // let temp = new Node(val);
  // temp=this.top;
    this.up=this.up.prev;
    this.size--;
};
//@return {number}
MinStack.prototype.top = function() {
    //let topVal=this.top.data;
    let node = new Node();
    node= this.up;
    return node.data;
};

//@return {number}
MinStack.prototype.getMin = function() {
    let node = new Node();
    let min = new Node();
    min = this.up.data;
    node=this.up;
    while(node!==null){
        //console.log(this);
        if(min> node.data){
            min=node.data;
            //his.pop();
        }
         node=node.prev;
    }
    return min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */