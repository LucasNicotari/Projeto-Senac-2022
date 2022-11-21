
   

function logout() {
        firebase.auth().signOut().then(() => {
            window.location.href = "../register/register.html";
        }).catch(() => {
            alert('Erro ao fazer logout');
        })
    }
    
    function login() {
        firebase.auth().signOut().then(() => {
            window.location.href = "../../index.html";
        }).catch(() => {
            alert('Erro ao fazer logout');
        })
    }
    