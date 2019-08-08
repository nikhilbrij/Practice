// alert("Page is Ok")
// document.title = "hello"
// console.log(document.getElementById('idone'))
// console.log(document.querySelectorAll('p'))
// const myElement = document.querySelectorAll('p')
// console.log(myElement[0])

// const myPElement = document.querySelector('p')

// myPElement.textContent = "I am being changed using JS"

// const myPElement = document.querySelectorAll('p')
//   myPElement.forEach((p) =>	p.textContent = "I am being changed using JS")

  // const myNewPara = document.createElement('p')
  // myNewPara.textContent = 'I was added using JS';
  // document.querySelector('body').appendChild(myNewPara)
  document.querySelector('button').addEventListener('click' , (event) => {
   event.target.textContent = "I was clicked"
  })

  document.querySelector('#myform').addEventListener('input', (event) => {
  	console.log(event.target.value)
  })