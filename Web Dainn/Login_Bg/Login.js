document.getElementById("StartButton").addEventListener("click", function() {
    document.getElementById("LoginForm").style.display = "block";
    document.getElementById("StartButton").style.display = "none";
});

function GuesgotoHome() {
    window.location.href = '/test/Home_Main/Home.html';
}

document.getElementById("LoginForm").addEventListener("submit", function(event) {
    // Ngăn chặn việc gửi form mặc định
    event.preventDefault();

    // Lấy giá trị của username và password
    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("password")[0].value;

    // Kiểm tra thông tin đăng nhập ở đây nếu cần

    // Sau khi xác thực, chuyển hướng đến trang Home.html
    window.location.href = "/test/Home_Main/Home.html";
});