document.getElementById('btn-submit').addEventListener('click' ,login);

function login(){





    const emailField = document.getElementById('user-email');
    const passField=document.getElementById('user-pass');
const pass=passField.value;
    const email = emailField.value;
   


    if(email==='sumondash51583@gmail.com' && pass==='sumon162sumon'){

window.location.href='bank.html'
      
    }

    else{

        alert('invalid user');
    }
    
}

