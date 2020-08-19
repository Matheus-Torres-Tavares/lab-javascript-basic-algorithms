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
//bonus 1:

let latinp = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate turpis in odio vulputate mollis in a sapien. Duis tincidunt maximus velit, id finibus est finibus at. Curabitur lobortis tempus risus, non scelerisque nibh sagittis a. Vivamus eget consectetur arcu. Phasellus in diam dui. Etiam eget ipsum sed turpis elementum condimentum et ac mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut id felis diam. Curabitur aliquam neque nec nulla mattis tempus. Integer vitae lorem ut nibh placerat faucibus eu et sem. Integer hendrerit massa vitae sem finibus vulputate. Fusce vitae felis nisl. Pellentesque eget quam eget massa auctor suscipit ac sed quam. Vestibulum congue mi id velit ullamcorper, eget pulvinar libero porttitor. Sed non mauris consectetur, aliquam neque eu, ultrices lacus. Duis varius viverra augue, ut blandit augue molestie id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse blandit tortor ac justo fringilla, nec pulvinar sapien ultricies. Nulla luctus dapibus enim non imperdiet. Nulla eleifend sem turpis, id tristique nulla facilisis et. Curabitur sit amet eros libero. Sed mattis congue tristique. Ut hendrerit semper ipsum et vehicula. In interdum et elit vitae lobortis. Quisque libero nulla, tempus non nunc id, sagittis sollicitudin felis. Proin sit amet nulla nisl. In faucibus eros at nunc scelerisque venenatis. Nullam sit amet lorem est. Aliquam id purus at augue aliquam dignissim. Curabitur finibus ante nisi, et aliquam nunc ultrices vel. Mauris posuere, erat consectetur placerat feugiat, erat massa mattis nisl, nec viverra eros erat quis odio. Phasellus vehicula tincidunt nisl vitae convallis. Fusce ac risus posuere, pulvinar elit egestas, auctor libero. Praesent sed elementum ante. Pellentesque ac lobortis metus, ac suscipit neque. Sed eleifend nisl at tortor iaculis sollicitudin. Aliquam quis sollicitudin magna, vitae faucibus urna. Pellentesque vehicula ultrices tempor."


  let wordsplit = latinp.split(" ").length
//}

console.log(wordsplit)

let etfind= latinp.split(" ").indexOf('et')

console.log(etfind)

//bonus 2: