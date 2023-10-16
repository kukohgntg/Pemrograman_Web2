function validateForm() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;


    if (nama === "") {
        alert("nama kosong")
        return false;
    }

    if (email === "") {
        alert("email kosong")
        return false;
    }

    if (alamat === "") {
        alert("alamat tidak boleh kosong")
        return false;
    }

    return true;
}
