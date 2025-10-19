const userName = localStorage.getItem("loggedInUser");
const msg = localStorage.getItem("userMsg");
const music = localStorage.getItem("userMusic") || "default.mp3";

const audio = new Audio(music);
audio.loop = true;

if (!userName || !msg) {
  document.body.innerHTML = "<p>Không có thông tin đăng nhập! Mời bạn quay lại trang chính!</p>";
} else {
  const words = userName.trim().split(/\s+/);
  const lastTwo = words.slice(-2);

  const displayName = lastTwo
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  document.title = `Thư gửi ${displayName} 💌`;
  document.getElementById("title").textContent = `Gửi ${displayName},`;
  document.getElementById("msg").textContent = msg;

  localStorage.removeItem("loggedInUser");
  localStorage.removeItem("userMsg");

  const letter = document.querySelector(".letter");
  const openBtn = document.getElementById("openBtn");

  letter.classList.remove("show");

  openBtn.addEventListener("click", () => {
    letter.classList.add("show"); // blur tan ra nè
    audio.play().catch(err => console.log("Không phát được nhạc:", err));
    openBtn.style.display = "none"; // ẩn nút mở thư
  });
}
