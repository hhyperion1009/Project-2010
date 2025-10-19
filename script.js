const users = {
    "Minh Tâm": {
        pass: "19012008",
        msg: "Hello"
    },
    "Mai Khanh": {
        pass: "0",
        msg: ""
    },
    "Minh Anh": {
        pass: "0",
        msg: ""
    },
    "Trâm Anh": {
        pass: "0",
        msg: ""
    },
    "Hà Minh": {
        pass: "0",
        msg: ""
    },
    "Việt Hà": {
        pass: "0",
        msg: ""
    },
    "Thị Tòng": {
        pass: "0",
        msg: ""
    }
}

function normalizeName(str) {
    str = str.trim();
    const words = str.split(/\s+/);
    const lastTwo = words.slice(-2);
    const normalized = lastTwo
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

    return normalized;
}

document.getElementById("loginBtn").addEventListener("click", function() {
    const name = normalizeName(document.getElementById("name").value || "");
    const pass = document.getElementById("pass").value || "";
    const output = document.getElementById("output");

    if (!name || !pass) {
        output.style.display = "block";
        output.innerHTML = "Vui lòng nhập đầy đủ tên và mật khẩu.";
        return;
    }

    const user = users[name];

    if (user && user.pass === pass) {
        localStorage.setItem("loggedInUser", name);
        localStorage.setItem("userMsg", user.msg);

        window.location.href = "letter.html";
    } else {
        output.style.display = "block";
        output.innerHTML = "Sai tên hoặc mật khẩu rồi nha! Nhập thử lại đi.";
    }

});

["name", "pass"].forEach(id => {
    document.getElementById(id).addEventListener("keydown", e => {
        if (e.key === "Enter") {
            document.getElementById("loginBtn").click();
        }
    });
});