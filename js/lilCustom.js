function dropdownOn(){
    let aboutMeDropdown = document.getElementById('aboutMeDropdown');
    let refGenDropdown = document.getElementById('refGenDropdown');
    let memGenDropdown = document.getElementById('memGenDropdown');
    let NavDropdown = document.getElementById("NavDropdown");

    aboutMeDropdown.classList.remove("dimas-dropdownOff");
    aboutMeDropdown.classList.add("dimas-dropdownOn");
    refGenDropdown.classList.remove("dimas-dropdownOff");
    refGenDropdown.classList.add("dimas-dropdownOn");
    memGenDropdown.classList.remove("dimas-dropdownOff");
    memGenDropdown.classList.add("dimas-dropdownOn");

    NavDropdown.setAttribute("onclick", "dropdownOff()");
}

function dropdownOff(){
    let aboutMeDropdown = document.getElementById('aboutMeDropdown');
    let refGenDropdown = document.getElementById('refGenDropdown');
    let memGenDropdown = document.getElementById('memGenDropdown');
    let NavDropdown = document.getElementById("NavDropdown");

    aboutMeDropdown.classList.remove("dimas-dropdownOn");
    aboutMeDropdown.classList.add("dimas-dropdownOff");
    refGenDropdown.classList.remove("dimas-dropdownOn");
    refGenDropdown.classList.add("dimas-dropdownOff");
    memGenDropdown.classList.remove("dimas-dropdownOn");
    memGenDropdown.classList.add("dimas-dropdownOff");

    NavDropdown.setAttribute("onclick", "dropdownOn()");
}