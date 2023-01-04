import Swal from "sweetalert2"

export function useFlash() {
  function flash(label, message, level = 'error') {
    return Swal.fire(label, message, level)
  }

  return { flash };
}