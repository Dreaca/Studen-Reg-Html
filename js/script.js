$(document).ready(function () {

    $("#submitBtn").on("click", function () {
        event.preventDefault()
        let nameF = $("#name").val();
        let cityF = $("#city").val();
        let emailF = $("#email").val();
        let levelF = $("#level").val();

        console.log(nameF);
        console.log(cityF);
        console.log(emailF);
        console.log(levelF);

        const studentData = {
            name : nameF,
            city : cityF,
            email : emailF,
            level : levelF
        }
        console.log(studentData);

        const studentJSON = JSON.stringify(studentData);
        console.log(studentJSON);
        const http = new XMLHttpRequest();
        http.onreadystatechange = ()=>{
            if (http.readyState === 4){
                if (http.status === 200){
                    var JsonTypeResponse = JSON.stringify(http.responseText);

                    console.log(JsonTypeResponse);
                    console.log("testing......")

                }else{
                    console.error("Failed");
                    console.error("Status Code : ",http.status);
                    console.error("ready state : ", http.readyState)
                }
            }else{
                console.error("Processing Stage : ", http.readyState.toString());
            }
        };
        http.open("POST","http://localhost:8080/StudentRegistration/student",true);
        http.setRequestHeader("content-type","application/json");
        http.send(studentJSON);
    })
    $("#resetBtn").on("click", function () {
        $("#name").val("");
        $("#city").val("");
        $("#email").val("");
        $("#level").val("");
    })
})