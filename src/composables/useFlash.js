import Swal from "sweetalert2"

export function useFlash() {
  function flash(label, text, level = 'error') {
    return Swal.fire(label, text, level)
  }
  function youtubeFlash(key) {
    return Swal.fire({
      html: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${key}" frameborder="0" allowfullscreen></iframe>`,
      customClass: "swal-wide",
      showConfirmButton: false,
      showCancelButton: false,
    })
  }

  return { flash, youtubeFlash };
}