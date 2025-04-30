import Swal from 'sweetalert2';
import "../styles/utilities/CustomAlert.css";

export const CustomAlert = ({
  title,
  text,
  icon = 'error',
  confirmButtonText = 'OK',
  confirmButtonColor = '#FF3D22',
}) => {
  return Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
    confirmButtonColor,
    background: '#ffffff',
    color: '#000000',
    customClass: {
      icon: 'custom-alert-icon',
    },
  });
};