import React, { useState } from 'react';
import FormInteres from './components/FormInteres';

function App() {
  const [carreraRecomendada, setCarreraRecomendada] = useState(null);

  const handleButtonClick = async () => {
    try {
      const response = await fetch('http://localhost:8000/recomendar_carrera', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          interes_minas: 'si',
          interes_sistemas: 'no',
          interes_administracion: 'no',
          interes_industrial: 'no',
          interes_minas2: 'si',
          interes_sistemas2: 'no',
          interes_industrial2: 'no',
          interes_administracion2: 'no',
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const { carrera_recomendada } = data;
      setCarreraRecomendada(carrera_recomendada);
    } catch (error) {
      console.error('Error al realizar la solicitud:', error.message);
    }
  };

  return (
    <div>
      <FormInteres />
    </div>
  );
}

export default App;
