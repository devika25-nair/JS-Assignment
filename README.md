# JS-Assignment: Fundamentals of Web Design (CSE 106)
## Project Description
This repository contains the solutions for Assignment 4, focusing on JavaScript logic, loops, and conditional statements.

##Live Website Link:
**Click here to view the live site:**https://devika25-nair.github.io/JS-Assignment/

## Approach & Complexity

### Question 1: Digit Gatekeeper
- **Approach**: Used a `for` loop to iterate from L to R. Inside, I converted numbers to strings to check for '0' and calculate the digit sum, followed by a primality test.
- **Complexity**: O(N*log10(x))

### Question 2: Roll-Seed Lock
- **Approach**: Implemented a fixed 3-iteration loop to transform the number based on whether it is even or odd, then used floor division and modulo to isolate the middle digit.
- **Complexity**: O(1) 

### Question 3: Mirror Corridor
-**Approach**: Iterated through a range of X from 0 to 10,00. For each values, I checked if (N+X) was divisible by K and compared the string version of the number to its reverse.
-**Complexity**: O(10,000*log10(N))

### Question 4: Fare Calculator
-**Approach**: Followed a step-by-step conditional logic to calculate the base fare, late fees, and distance surcharges, finally using `Math.ceil` to round to the nearest 5.
-**Complexity**: O(1)

### Question 5: Skipping Numbers
-**Approach**: Used a `while` loop that increments a counter m and adds it to a running sum only if it's not divisible by (seed+2), until the sum reaches N.
-**Complexity**: O(m), where m is the value found.

### Question 6: Contest Score Judge
-**Approach**: Calculated the score using the formula 3a+b-2c, applied negative score and submisssion volume rules, and used a ternary operator for the final status.
-**Complexity**: O(1)