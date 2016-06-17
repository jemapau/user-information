$(document).ready(function() {
	$('#form-login').on ({
		mouseover: function() {
			$(this).css("background-color", "#f3f1f1");
		},
			mouseleave: function() {
				$(this).css("background-color", "white");
			},
	});

	$('#btn-login').on ({
		click: function() {
			var username, password

			username = $('#username')
			password = $('#password')

			if ((username === undefined && password === undefined )) {
				console.log('Entrando a red')
				$('.validate').css("border-color","red");
			} else {
				console.log('Entrando a green')
				$('.validate').css("border-color","green");
			}
		}
	});

});

function greetings() {
  window.alert('Hi there, you want to log in !');
};

//function validate () {
  //var username, password

  //username = document.getElementById('username').value
  //password = document.getElementById('password').value

/*  if ((username === undefined || username === '')
                  || (password === undefined || password === '')) {
    document.getElementById('error').style.color = "red"
    document.getElementById('error').innerHTML = 'Username or Password are invalid !.'
  } else {
    document.getElementById('error').style.color = "green"
    document.getElementById('error').innerHTML = 'Username and Password are valid !.'
  };
};*/

function listarPeople() {
	var people = [{nombre: 'Carlos', apellido: 'Ruiz' + ' ' + 'Gómez', edad: '25 años'},
				{nombre: 'Maria', apellido: 'Perez' + ' ' + 'Atehortúa', edad: '28 años'}]

	var table = document.getElementById ('people-table')
	for(var i = 0; i < people.length; i++) {
		var row = table.insertRow(0)
		var cell0 = row.insertCell(0)
		var cell1 = row.insertCell(1)
		var cell2 = row.insertCell(2)
		cell0.innerHTML = people[i].nombre
		cell1.innerHTML = people[i].apellido
		cell2.innerHTML = people[i].edad
	}
}

function numeroPar(numero) {

	var result = false;

	if(numero % 2 === 0) {
		result	= true;
	} else {
		result = false ;
	}

	return result
}