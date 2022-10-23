function validate(){
    let username = document.getElementById('uname').value;
    let password = document.getElementById('pword').value;

    

    if(username === 'kali' && password === 'root'){
        window.location='resume.html';
    } 
    else{
        alert('login Failed');
    }
}