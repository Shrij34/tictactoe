console.log('connected!');
// restart game button
var restart = document.querySelector("#b");



//grab all the square

var squares= document.querySelectorAll('td');


//clear all the square

function clearboard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click',clearboard);

//check all sqauremarker

function changemarker() {

  if (this.textContent === '') {
    this.textContent ='X';
  }else if (this.textContent === 'X') {
    this.textContent = 'O';
  }else {
    this.textContent = '';
  }

  }

//for loop to ad events listener to all the square

for (var i = 0; i <squares.length; i++) {
  squares[i].addEventListener('click',changemarker)
}
