const buttons = document.querySelectorAll('.button');
const display = document.getElementById('display');
const enter = document.getElementById('num=');
let math = '';
for (let button of buttons) {
  button.addEventListener('click', function (event) {
    display.innerText += event.target.innerText;
    math += button.innerText;
  });
}

enter.addEventListener('click', function (event) {
  let answer = eval(math);
  display.textContent = answer;
});
