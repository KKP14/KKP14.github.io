const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('usr');
const password = document.getElementById('pwd');
const Error = document.getElementById('error');
const Success = document.getElementById('success');


form.addEventListener('submit', e =>{
	if(name === ' ' || email === ' ' || password === ' '){
		e.preventDefault();
	}else{
		console.log("form submitted");
		Success.style.display = "block";
		setTimeout(() => {
            window.location.reload(); // Reload the page after a delay
        }, 50000); // Adjust the delay time as needed (in milliseconds)
	}	
	
});	

	
