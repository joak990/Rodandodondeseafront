import { useState } from 'react';
import Logo from './rodando.jpg';
import { newsletter } from '../Redux/Actions';
import { useDispatch } from 'react-redux';

function Home() {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch para enviar el correo electrónico al reducer
    dispatch(newsletter({ email }));
    // Limpiar el estado del formulario después de enviar
    setEmail('');
  };

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center">
      <div>
        <img src={Logo} alt="Logo de Rodando Donde sea" className="w-24 h-42 mb-6" />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Bienvenidos al Newsletter de Rodando Donde sea!</h1>
        <h2 className="text-center">¡Recibe las notificaciones de nuestros videos a tu email!</h2>
        <form className="mt-5 mb-5" onSubmit={handleSubmit}>
          <label htmlFor="newsletter" className="block mb-2 text-sm">Ingresa tu correo electrónico:</label>
          <input
            type="email"
            id="newsletter"
            name="newsletter"
            placeholder="Correo electrónico"
            required
            className="border rounded px-4 py-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full mt-4">Suscribirse</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
