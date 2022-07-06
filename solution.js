// 1:
let isDogBetter = true;
let isCatBetter = false;
console.log(isDogBetter && isCatBetter);
console.log(isDogBetter || isCatBetter);
console.log(!isDogBetter && isCatBetter);
// 2:
const atoms = 2;
const sandGrains = 4;
const starsInSky = 7;
// 3:
console.log(atoms > starsInSky && sandGrains);
console.log(atoms !== sandGrains);
console.log(starsInSky < sandGrains || starsInSky > atoms);
console.log(atoms == starsInSky || atoms !== sandGrains);
console.log(atoms >= 10 && sandGrains <= 10);
console.log(atoms * starsInSky < 100 || atoms * sandGrains > 100);
// 4:
console.log(starsInSky > atoms || atoms > sandGrain); // js count from left and if the first one is true the automatic console shows true and if it's false then it multiple to another up to end. If it couldn't find true then at end console shows false.
