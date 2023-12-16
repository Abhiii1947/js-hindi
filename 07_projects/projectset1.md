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