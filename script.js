const users = {
    "Minh Tâm": {
        pass: "19012008",
        msg: "Ha💸Ha💸Ha💸Ha💸Ha💸, such honor to catch ur attention Ha💸Ha💸Ha💸Ha💸Ha Okela thì Minh Tâm biết ròi đó😽, hôm nay là ngày 20/10 - Ngày Phụ nữ Việt Nam😻😻😼Tập thể mấy thằng đực rựa lớp 12CH chúc may` có một ngày thật là tuyệt vời, tuyệt hảo, hảo hán, xinh đẹp, lung linh, sập xình,...💖💗 Ngoài ra thì hi vọng m sẽ survive được tất cả các môn trong đợt này (đặc biệt là môn của anh Q), và nếu hôm nay còn chưa làm được điều minh muốn thì đi làm ngay đi nha vì hnay là ngày của cọu đó vậy là r hjhj🐦‍🔥",
        music: "MTam.mp3"
    },
    "Mai Khanh": {
        pass: "11072008",
        msg: "",
        music: "MKhanh.mp3"
    },
    "Minh Anh": {
        pass: "05072008",
        msg: "",
        music: "MAnh.mp3"
    },
    "Trâm Anh": {
        pass: "13062008",
        msg: "Chúc Trâm Anh ngày ngày dzui dzẻ iu đời, đời đời xinh đẹp rạng ngời, mỗi ngày thêm một vấn đề, mỗi ngày thêm một niềm vui, cho cuộc đời thêm vị, cho cuộc sống thêm mùi. Chúc người mãi đẹp, mãi khỏe, mãi giàu sang cho đời đỡ khổ. (Ký tên) Quý bà sì meo.",
        music: "TrAnh.mp3"
    },
    "Hà Minh": {
        pass: "15072008",
        msg: "",
        music: "HMinh.mp3"
    },
    "Việt Hà": {
        pass: "27022008",
        msg: "Hallo hallo wassup tiến sĩ dược học tương lai, 20/10 là ngày gì nhỉ? 🌹🌹🌹 6 tháng 23 ngày kể từ sinh nhật của bạn? 🎂🎂🎂 Anyways, nhân “ngày mà ai cũng biết” (Ngày phụ nữ Việt Nam, HP ref btw), tụi mình chúc bạn sẽ có 1 ngày thật vui vẻ và trọn vẹn. 🥳🥳🥳 Chúc Hà sẽ ngày càng xinh đẹp, thông minh, và tỏa sáng chíu chíu. 🌟💫👀✨ Hi vọng bạn sẽ đạt dược những ước mơ của mình trong tương lai, vào được trường đại học mình mong muốn, và cook cháy 4 năm đại học như cách mà 12CH tụi mình đã quậy trong những năm vừa qua. 🔥🎆🎇 Tóm lại, hãy luôn là chính mình và tỏa sáng như cách bạn vẫn hay làm nhá nhá 🥰🥰🥰",
        music: "VHa.mp3"
    },
    "Thị Tòng": {
        pass: "0",
        msg: "",
        music: ""
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
        localStorage.setItem("userMusic", user.music || "default.mp3");

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