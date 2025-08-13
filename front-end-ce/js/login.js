function login(event) {
  event.preventDefault();

  const user = document.getElementById('user').value.trim();
  const password = document.getElementById('password').value.trim();
  const role = 'Consejo Escolar'; // Rol fijo

  if (user === 'admin' && password === 'admin123') {
    alert('Bienvenido ' + role + ' - Usuario: ' + user);
    // Redirigir a index.html
    window.location.href = 'index.html';
    return true;
  } else {
    alert('Usuario o contraseña incorrectos.');
    return false;
  }
}
