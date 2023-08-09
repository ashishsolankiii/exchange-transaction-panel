import Swal from "sweetalert2";

const showAlert = (id, callback) => {
    Swal.fire({
        title: "Alert",
        icon: "info",
        allowOutsideClick: false,
        confirmButtonText: "Yes",
        showCancelButton: "true",
        cancelButtonText: "No",
        cancelButtonColor: "#f82649",
        text: "Are you sure you want to delete this ?",
    }).then((result) => {
        if (result.isConfirmed) {
            callback(id);
        }
    });
};

export { showAlert };