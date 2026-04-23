import React, { useState } from 'react';

function Contador() {
  const [cuenta, setCuenta] = useState(0);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', margin: '10px 0' }}>
      <h2>Contador: {cuenta}</h2>
      <button onClick={() => setCuenta(cuenta + 1)}>Sumar</button>
      <button onClick={() => setCuenta(cuenta - 1)}>Restar</button>
      <button onClick={() => setCuenta(0)}>Reset</button>
    </div>
  );
}

export default Contador;