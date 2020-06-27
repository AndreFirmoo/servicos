var checkbox = document.querySelector("#checkbox")
let master = document.querySelector("#price--master")
let pro = document.querySelector("#price--pro")
let basic = document.querySelector("#price--basic")

checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        master.innerHTML = "<b>$</b>139.99"
        pro.innerHTML = "<b>$</b>124.99"
        basic.innerHTML = "<b>$</b>119.99"
    }else{

        master.innerHTML = "<b>$</b>39.99"
        pro.innerHTML = "<b>$</b>24.99"
        basic.innerHTML = "<b>$</b>19.99"
    }
});

