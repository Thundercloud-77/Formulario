
import React, { useState } from 'react';

function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handleAdminLogin = () => {
    if (adminUsername === 'admin' && adminPassword === 'contrasena') {
      setIsAdmin(true);
    }
  };

  return (
    <div className="container">
      <h2>Modo Administrador</h2>
      {isAdmin ? (
        <div>
        </div>
      ) : (
        <div>
          <label htmlFor="adminUsername">Usuario:</label>
          <input
            type="text"
            placeholder="Usuario"
            value={adminUsername}
            onChange={(e) => setAdminUsername(e.target.value)}
          />
          <label htmlFor="adminPassword">Contraseña:</label>
          <input
            type="password"
            placeholder="Contraseña"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
          />
          <button type="button" onClick={handleAdminLogin}>Iniciar Sesión</button>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
