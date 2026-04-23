import React, { useState, useEffect } from 'react';

function ContadorPersistente() {
  const [cuenta, setCuenta] = useState(() => {
    const valorGuardado = localStorage.getItem('miContador');
    return valorGuardado !== null ? JSON.parse(valorGuardado) : 0;
  });

  useEffect(() => {
    localStorage.setItem('miContador', JSON.stringify(cuenta));
  }, [cuenta]);
  return (
    <div style={{ padding: '20px', border: '2px solid #646cff', borderRadius: '8px', marginTop: '10px' }}>
      <h3>Contador Persistente (F5 no me borra)</h3>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{cuenta}</p>
      <button onClick={() => setCuenta(cuenta + 1)}>Sumar</button>
      <button onClick={() => setCuenta(cuenta - 1)}>Restar</button>
      <button onClick={() => setCuenta(0)}>Reiniciar</button>
    </div>
  );
}

export default ContadorPersistente; 