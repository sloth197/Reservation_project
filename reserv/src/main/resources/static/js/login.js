
function signin() {
    const user_id = document.getElementById("sideRemoteId").value;
    const user_password = document.getElementById("sideRemotePW").value;
    const maindataLoadInVO = {
        "user_id": user_id,
        "user_password": user_password
    }
    $.ajax({
        type: 'POST', //post 방식으로 전송
        url: 'http://localhost:9283/signin', //데이터를 주고받을 파일 주소
        data: JSON.stringify(maindataLoadInVO), //위의 변수에 담긴 데이터를 전송
        dataType: 'JSON', 
        async: false,
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
    		setSession(data);
    		callNavBar();
    		setLoginedRemoteCtrl();
        },
        error: function () {
            alert('통신실패!!');
        }
    });
}
//data에 대한 클래스 없음 -> 만들어야 함
success: function (data) {
    setSession(data);
    callNavBar();
    setLoginedRemoteCtrl();
}
