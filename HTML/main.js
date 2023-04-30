
//https://www.youtube.com/watch?v=UAu7cMuu0BI - This is where the idea behind this code came from. Credit to 'Codify Academy'

//Here are the different logins for the participants of the study. Each will be given a username and password 
//Note, these are currently for testing and will be changed before deployment
var objPeople = [
	{
		username: "user1",
		password: "password1"



	},
	{
		username: "user2",
		password: "password2"
	},

	{

		username: "part1",
		password: "yeO2VD"

	},
	{

		username: "part2",
		password: "swHzpJ"
		
	},
	{
		username: "part3",
		password: "zuKKvc"
	},
	{
		username: "part4",
		password: "Y6DD2V"
	},
	{
		username: "part5",
		password: "5ysQRu"
	},
	{
		username: "part6",
		password: "BZTLXP"
	},
	{
		username: "part7",
		password: "wwbnWs"
	},
	{
		username: "part8",
		password: "Vzi78B"
	},
	{
		username: "part9",
		password: "kSD8Er"

	},
	{
		username: "part10",
		password: "n4t2sF"
	}
]



//This is the function that is called from the HTML file to check the user and then run the 'website.html' file if correct. 
function getInfo() {

	var username = document.getElementById("username").value
	var password = document.getElementById("password").value

	for (i = 0; 1<objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].
			password) {
			console.log(username +" is logged in")
			window.location.href = 'website.html';

			localStorage.setItem('name', username);


			return

		}

		}
		console.log("incorrect")
	}


//Code to display the users name. Adding personalisation
function getUser() {
	
	const name = localStorage.getItem('name');
    document.getElementById('Username').innerHTML = name;
    
}
