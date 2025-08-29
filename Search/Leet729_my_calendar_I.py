"""
Source LeetCode
729. My Calendar I
Date: 2025-08-28
https://leetcode.com/problems/my-calendar-i/

You are implementing a program to use as your calendar. We can add a new event if adding 
the event will not cause a double booking.

A double booking happens when two events have some non-empty intersection (i.e., some moment 
is common to both events.).

The event can be represented as a pair of integers startTime and endTime that represents a 
booking on the half-open interval [startTime, endTime), the range of real numbers x such that 
startTime <= x < endTime.

Implement the MyCalendar class:

    MyCalendar() Initializes the calendar object.
    boolean book(int startTime, int endTime) Returns true if the event can be added to the 
    calendar successfully without causing a double booking. Otherwise, return false and 
    do not add the event to the calendar.

Example 1:
Input
["MyCalendar", "book", "book", "book"]
[[], [10, 20], [15, 25], [20, 30]]
Output
[null, true, false, true]

Constraints:
    0 <= start < end <= 109
    At most 1000 calls will be made to book.

# Your MyCalendar object will be instantiated and called as such:
# obj = MyCalendar()
# param_1 = obj.book(startTime,endTime)
"""

# 1st Attempt
# LOGIC: Using binary search, find the position to add the new event considering overlap
# Time : O(n)  |  Space: O(n)
class MyCalendar:
    def __init__(self):
        self.calendar = []

    def binarySearch(self, startTime: int) -> int:
        left = 0
        right = len(self.calendar) -1

        while (left <= right):
            mid = (left+right) // 2
            if self.calendar[mid][0] == startTime:
                return mid
            elif self.calendar[mid][0] < startTime:
                left = mid +1
            else:
                right = mid - 1
        return left

    def book(self, startTime: int, endTime: int) -> bool:
        pos = self.binarySearch(startTime)
 
        if pos > 0 and self.calendar[pos-1][1] > startTime:
            return False
        if pos < len(self.calendar) and self.calendar[pos][0] < endTime:
            return False
        
        self.calendar.insert(pos, [startTime, endTime])
        return True