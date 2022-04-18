/*********************************************************************** 
Source LeetCode
155 Min Stack
(https://leetcode.com/problems/min-stack/)
1st 2022-04-17
2nd 2022-04-18

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
        if(min> node.data){
            min = node.data;
        }
         node=node.prev;
    }
    return min;
};

// 2nd Attempt
// LOGIC: consider as array
var MinStack = function() {
    this.stack=[];
};

// @param {number} val
// @return {void}
MinStack.prototype.push = function(val) {
    this.stack.push(val);
};

// @return {void}
MinStack.prototype.pop = function() {
    this.stack.pop();
};

// @return {number}
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

// @return {number}
MinStack.prototype.getMin = function() {
    let min = this.stack[0];
    for(let i=0; i < this.stack.length;i++) {
        if(min > this.stack[i]) {
            min = this.stack[i];
        }
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