const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const coursesitem = document.getElementById("cousres-list")
    const product = document.querySelectorAll(".coures")
    const pname = document.getElementById("coures")

    for (var i = 0; i < pname.lenght; i++) {
        let match = product[i].getElementById('coures')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].getElementsByClassName.display = "";

            } else {
                product[i].getElementsByClassName.display = "none";
            }
        }
}
}