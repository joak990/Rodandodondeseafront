import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Logo from './rodando.jpg';

function Admin() {
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enlace, setEnlace] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://rodando-back.vercel.app/sendmail", { asunto, mensaje, enlace });
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Correo enviado correctamente',
          text: 'El correo se ha enviado correctamente.',
        });
        // Limpiar los inputs
        setAsunto('');
        setMensaje('');
        setEnlace('');
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error al enviar el correo',
        text: 'Ocurrió un error al intentar enviar el correo.',
      });
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center">
      <img src={Logo} alt="Logo de Rodando Donde sea" className="w-24 h-42 mb-6" />
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Panel Administrador</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="asunto" className="block mb-2 text-sm">Asunto:</label>
          <input
            type="text"
            id="asunto"
            name="asunto"
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
            placeholder="Asunto del correo"
            required
            className="border rounded px-4 py-2 w-full mb-4"
          />
          <label htmlFor="mensaje" className="block mb-2 text-sm">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Mensaje del correo"
            required
            className="border rounded px-4 py-2 w-full h-32 mb-4"
          ></textarea>
          <label htmlFor="enlace" className="block mb-2 text-sm">Enlace:</label>
          <input
            type="text"
            id="enlace"
            name="enlace"
            value={enlace}
            onChange={(e) => setEnlace(e.target.value)}
            placeholder="Enlace o link"
            className="border rounded px-4 py-2 w-full mb-4"
          />
          <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full">Enviar Correo</button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
