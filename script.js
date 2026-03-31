function login(){
  auth.signInWithEmailAndPassword(email.value, password.value)
  .then(()=> window.location="dashboard.html")
  .catch(err=> alert(err.message));
}

function resetPassword(){
  auth.sendPasswordResetEmail(email.value)
  .then(()=> alert("Reset Email Sent"))
  .catch(err=> alert(err.message));
}