# Projects related to DOM

# Solution code

## project 1

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = 'grey';
    // }
    const color = e.target.id;
    switch (color) {
      case 'grey':
        body.style.backgroundColor = color;
        break;
      case 'white':
        body.style.backgroundColor = color;
        break;
      case 'blue':
        body.style.backgroundColor = color;
        break;
      case 'yellow':
        body.style.backgroundColor = color;
        break;
      case 'purple':
        body.style.backgroundColor = color;
        break;
      default:
        body.style.background = 'none';
        break;
    }
  });
});

```


## Project 2


```javascript

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || height < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    var ans = '';
    if (bmi < 18.6) {
      ans = 'Under Weight';
    } else if (bmi > 24.9) {
      ans = 'Over Weight';
    } else {
      ans = 'Normal Range';
    }
    results.innerHTML = `<span>${bmi} , ${ans}</span>`;
  }
});


```