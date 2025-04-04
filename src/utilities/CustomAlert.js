import Swal from 'sweetalert2';

export const CustomAlert = ({
  title,
  text,
  icon = 'error',
  confirmButtonText = 'OK',
}) => {
  return Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
    confirmButtonColor: '#FF3D22',
    background: '#ffffff',
    color: '#000000',
  });
};