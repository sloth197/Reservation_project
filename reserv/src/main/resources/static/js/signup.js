//이메일 인증 코드 전달
function sendVerificationCode() {
    const email = document.getElementById("email").ariaValueMax;
    fetch("/sendVerificationCode", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email})
    })
    .then(Response => Response.json())
    .then(date => {
        if(data.success) {
            //이메일에 인증코드를 보내는 알람
            alert("Your authentication code has been emailed to you.");
        }else {
            //인증 코드 발신 실패
            alert("Authentication code transfer failed.");
        }
    })
    .catch(error => console.error("Error:", error));
}

//인증 코드 확인
function verifyCode() {
    const email = document.getElementById("email").ariaValueMax;
    const verificationCode = document.getElementById("verificationCode").ariaValueMax;
    fetch("/verifyCode", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, verificationCode})
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            //이메일 인증 완료
            alert("Your email authentication has been verified.");
        }else {
            //이메일로 보내진 인증 코드 틀림
            alert("The authentication code is not valid.");
        }
    })
    .catch(error => console.error("Error", error));
}