str = prompt('convert alphabate case')
res = '';
for (var i = 0; i < str.length; ++i) {
    c = str[i];
  if (c === c.toUpperCase()) {
    res = res + c.toLowerCase() 
  } else if (c === c.toLowerCase()) {
    res = res + c.toUpperCase();
  } else {
    res = res + c ;
  }
}

console.log(res)
