function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
    document.getElementById("myDropdown-text1").classList.toggle("show-text");
}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
    document.getElementById("myDropdown-text2").classList.toggle("show-text");
}

function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
    document.getElementById("myDropdown-text3").classList.toggle("show-text");
}

function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
    document.getElementById("myDropdown-text4").classList.toggle("show-text");
}


function filterFunction() {
    var input, filter, div, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    
    var dropdowns = document.getElementsByClassName('dropdown-content');
    for (var j = 0; j < dropdowns.length; j++) {
        var a = dropdowns[j].getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
            if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            }
        }
    }
}