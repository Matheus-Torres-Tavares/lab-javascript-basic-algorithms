// Iteration 1: Names and Input
let hacker1 = 'Matheus' 
console.log("The driver's name is " + hacker1)
let hacker2 = 'Rebecca' 
console.log("The driver's name is " + hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
// 3.1 with slice
let result1 = ""
for (i=0; i<hacker1.length; i++) {
  result1 += hacker1.slice(i, i+1) + " "
}
result1 = result1.toUpperCase();
console.log(result1);
// 3.1 with charAt
let result2 = ""
for (i=0; i<hacker1.length; i++) {
  result2 += hacker1.charAt(i) + " "
}
result2 = result2.toUpperCase();
console.log(result2);

//3.2 
let result3 = ""
for (i=hacker2.length-1; i>=0; i--) {
  result3 += hacker2.charAt(i);
}
console.log(result3)

for(i=0; i<hacker1.length;i++){
  if(hacker1 == hacker2){
    console.log('What?! You both have the same name?')
    break;
  } else if(hacker1[i]<hacker2[i]){
    console.log("The driver's name goes first.")
    break;
  } else if(hacker2[i]<hacker1[i]){
    console.log("Yo, the navigator goes first definitely.")
    break;
  }
}
