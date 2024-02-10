import axios from 'axios';
import Swal from 'sweetalert2';

export const newsletter = (payload) => {
    return async function (dispatch) {
      try {
        console.log(payload);
        const response = await axios.post("https://rodando-back.vercel.app/users", payload);
        if (response.status === 200) {
          // Mostrar un SweetAlert2 de éxito
          Swal.fire({
            icon: 'success',
            title: 'Subscripción Exítosa',
            text: 'Recibiras todas las notificaciones de Rodando donde sea',
          });
        }
      } catch (error) {
        console.log(error);
        // Manejar el error si la solicitud falla
        Swal.fire({
          icon: 'error',
          title: 'Error al subscribirse',
          text: 'Ocurrió un error al intentar subscribirse.',
        });
      }
    };
  };
