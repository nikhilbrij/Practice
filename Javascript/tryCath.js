let convertTORs = (dollar) => {
if (typeof dollar === "number")
return 64 * dollar;

else
throw Error('Amount needs to be in number')

}
 try {
const myValue = convertTORs('Five')
console.log(myValue);
}
 catch (error) {
   console.log(error);
 }

 console.log('I will not run if program crashes');
