str1 = "Hitesh"; str2 = " Miya";
str3 = str1 + str2;
console.log(str3);

console.log(+true); // 1
console.log("" + 1); //1
console.log(+""); // 0

//difference between % and /

console.log(6 %2); // -> result , Remainder
console.log(6/2); // -> result Quotient

console.log(2 ** 3); // -> act like math.pow

//*********** **************** String Operations ******************

console.log("1" + 2); // concatenate result  -> 12
console.log(1 + "2"); // Here also Conactenate -> 12
console.log("1" + 2 + 2); // concatenate -> 122
console.log(1+2+"2"); // result-> 32 [1st add 1,2  then result is concatenated with string "2"]

//********/ Post Increment, Pre Increment (x++ vs ++x)********

num1 = 4;
console.log(num1++);
console.log(++num1); // result -> 4,6  num1++ -> post increment 1st print the result 4 , then increased the value and store as 5 , After using preincrement -> 6, it increased the value then print 

//concept [ preincrement ++x -> 1st increase the value and then prnt the result, While PostIncrement 1st print the result then it increase the operand Value ]

num2 = 10;
console.log(++num2); // 11
console.log(num2++); // 11

console.log(num2); // 12
