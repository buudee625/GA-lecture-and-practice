console.log('JS!')

let testBtns = document.querySelectorAll('.unclicked')
console.log(testBtns);
for (const i of testBtns) {
  i.addEventListener('click', function(e){
    e.target.classList.replace('unclicked', 'clicked');
    testBtns = document.querySelectorAll('.unclicked');
    console.log(testBtns);
});
}