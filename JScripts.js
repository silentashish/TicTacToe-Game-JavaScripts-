// Restart button code in here
var restart= document.querySelector("#restart");

//Grabs all the squres
var squares=document.querySelectorAll("td");

//clear all the square
function clearSquare(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent="";
  }
}

restart.addEventListener("click",clearSquare);
 var temp="";
function changeMarker(){
	if(temp=="" && this.textContent=="")
	{
		this.textContent="X";
    temp="X";
	}else if (temp=="X" && this.textContent=="" ) {
    this.textContent="O";
    temp=""
  }else if (this.textContent=="X" || this.textContent=="O") {
    this.textContent="";
  }
  check();
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click",changeMarker);
}

function check(){
  if(squares[0].textContent !="" && squares[1].textContent !="" && squares[3].textContent!="")
  {
    alert("Game Finish, Thanks for playing");
    alert(squares[0].textContent == squares[1].textContent )
    if(squares[0].textContent == squares[1].textContent == squares[2].textContent)
    {
      alert("Game finished");
    }

  }
}
