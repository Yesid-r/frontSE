import React, { useState } from 'react';

const FormInteres = () => {
    const [data, setData] = useState({
        interes_minas: '',
        interes_sistemas: '',
        interes_administracion: '',
        interes_industrial: '',
        interes_minas2: '',
        interes_sistemas2: '',
        interes_industrial2: '',
        interes_administracion2: '',
    });

    const [carreraRecomendada, setCarreraRecomendada] = useState(null);

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleButtonClick = async (e) => {
        e.preventDefault();
        console.log(data);
        try {
            const response = await fetch('http://localhost:8000/recomendar_carrera', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    interes_minas: data.interes_minas,
                    interes_sistemas: data.interes_sistemas,
                    interes_administracion: data.interes_administracion,
                    interes_industrial: data.interes_industrial,
                    interes_minas2: data.interes_minas2,
                    interes_sistemas2: data.interes_sistemas2,
                    interes_industrial2: data.interes_industrial2,
                    interes_administracion2: data.interes_administracion2,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            const { carrera_recomendada } = responseData;
            setCarreraRecomendada(carrera_recomendada);
        } catch (error) {
            console.error('Error al realizar la solicitud:', error.message);
            alert('Error al realizar la solicitud');
        }
    };

    return (
        <div>
            <div className="p-4 mx-auto w-1/2">
                <h1 className="text-2xl font-bold mb-2">Formulario de Intereses</h1>
                <h2 className="text-lg mb-4">Responde las preguntas con si o no</h2>
                <form onSubmit={handleButtonClick} className="space-y-4">
                    <label className="block">
                        ¿Te interesa trabajar con recursos naturales y geología?
                        <input type="text" name="interes_minas" onChange={handleChange} className="border p-2 w-full" />
                    </label>

                    <label className="block">
                        ¿Disfrutas de la programación y la tecnología informática?
                        <input type="text" name="interes_sistemas" onChange={handleChange} className="border p-2 w-full" />
                    </label>

                    <label className="block">
                        ¿Te atrae la toma de decisiones estratégicas y la gestión de empresas?
                        <input type="text" name="interes_administracion" onChange={handleChange} className="border p-2 w-full" />
                    </label>

                    <label className="block">
                        ¿Prefieres trabajar en la optimización de procesos y sistemas?
                        <input type="text" name="interes_industrial" onChange={handleChange} className="border p-2 w-full" />
                    </label>

                    <label className="block">
                        ¿Te interesa la exploración y explotación de recursos minerales?
                        <input type="text" name="interes_minas2" onChange={handleChange} className="border p-2 w-full" />
                    </label>

                    <label className="block">
                        ¿Te apasiona el diseño y la implementación de software?
                        <input type="text" name="interes_sistemas2" onChange={handleChange} className="border p-2 w-full" />
                    </label>

                    <label className="block">
                        ¿Te atrae la gestión eficiente de recursos y la mejora continua en procesos?
                        <input type="text" name="interes_industrial2" onChange={handleChange} className="border p-2 w-full" />
                    </label>

                    <label className="block">
                        ¿Te gusta planificar y supervisar proyectos desde su concepción hasta su implementación?
                        <input type="text" name="interes_administracion2" onChange={handleChange} className="border p-2 w-full" />
                    </label>

                    <button type='submit' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Hacer Test</button>
                </form>
                {carreraRecomendada && <h2 >La carrera recomendada es {carreraRecomendada}</h2>}
            </div>

            
        </div>
    );
};

export default FormInteres;
