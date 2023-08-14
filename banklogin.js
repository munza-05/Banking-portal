document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    localStorage.setItem(username, password);
    alert('Sign up successful!');
  });
  
  document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const savedPassword = localStorage.getItem(username);
    
    if (savedPassword === password) {
      alert('Sign in successful!');
      window.location.href= "mybankingportal.html";
    } else {
      alert('Incorrect username or password.');
    }
    function auth(){
        const email = document.getElementById("email").value;
        const password = document.getElementById('password').value;
        if(email==='munaza@gmail.com' && password==='12345'){
            alert('login successful!');
        }
            else{
                ("invalid credentail");
            }
        }
     }
);