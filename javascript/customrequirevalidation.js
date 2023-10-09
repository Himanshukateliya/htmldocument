let requiredFileds = document.getElementsByClassName("required")
for (let index = 0; index < requiredFileds.length; index++) {
    requiredFileds[index].addEventListener("blur", function (event) {
        let div = document.getElementById("data")
        var closeSpan = document.createElement("span");
        closeSpan.setAttribute("id", "errorspn");
        closeSpan.textContent = "This field is required";
        if (this.value == "") {
            if (requiredFileds[index].nextSibling == null) {
                requiredFileds[index].parentElement.appendChild(closeSpan)
            }
        }
    })
}