const name = "Suyansu"
const repoCount = 50
// console.log("Helo my name "+name + "my repo count" + repoCount ); insted of using this syntax use backtick `` 


// String Interpolation -> backtick ``

console.log(`My name is ${name} and My Repo Count is ${repoCount}`);

const gameName = new String('Hiteshhhc')
console.log(gameName) //[String: 'Hiteshhhc']
console.log(gameName.length); // return  9 -> Length of string



console.log(gameName.anchor("hitesh")) // Depricated method -> <a name="hitesh">Hiteshhhc</a>

console.log(gameName[2]) // t

console.log(gameName.blink()) // Depricated method -> return <blink>Hiteshhhc</blink>

console.log(`sum of ${num1} and ${num2} is ${num1}+${num2}`); // Sum of 10 and 20 is 1020
console.log(`Sum of ${num1} and ${num2} is ${num1+num2}`);// Sum of 10 and 20 is 30
console.log(`Sum of ${num1} and ${num2} is (${num1}+${num2})`);// Sum of 10 and 20 is (10+20)