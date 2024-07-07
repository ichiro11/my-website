// scripts.js
// 既存の関数を維持
function toggleMenu() {
  var menuContent = document.getElementById("menu-content");
  if (menuContent.style.display === "block") {
    menuContent.style.display = "none";
  } else {
    menuContent.style.display = "block";
  }
}

function closeMenu(event) {
  var menuContent = document.getElementById("menu-content");
  if (
    menuContent.style.display === "block" &&
    !event.target.closest(".menu-content") &&
    !event.target.closest(".menu-icon")
  ) {
    menuContent.style.display = "none";
  }
}

document.addEventListener("click", closeMenu);

// プロジェクトスライダーの機能を追加
const projects = [
  { id: 1, name: "Tokyo Tower Renovation", image: "/api/placeholder/400/300" },
  { id: 2, name: "Kyoto Garden Design", image: "/api/placeholder/400/300" },
  {
    id: 3,
    name: "Osaka Smart City Initiative",
    image: "/api/placeholder/400/300",
  },
];

let currentProject = 0;

function updateProjectSlider() {
  const projectItem = document.querySelector(".project-item");
  projectItem.innerHTML = `
    <img src="${projects[currentProject].image}" alt="${projects[currentProject].name}" />
    <p>${projects[currentProject].name}</p>
  `;
}

function nextProject() {
  currentProject = (currentProject + 1) % projects.length;
  updateProjectSlider();
}

function prevProject() {
  currentProject = (currentProject - 1 + projects.length) % projects.length;
  updateProjectSlider();
}

// ページ読み込み時に初期プロジェクトを表示
document.addEventListener("DOMContentLoaded", function () {
  //スライダー
  updateProjectSlider();

  // 桜の花びらを生成
  var numSakura = 50; // 花びらの数
  var body = document.body;

  for (var i = 0; i < numSakura; i++) {
    var sakura = document.createElement("div");
    sakura.className = "sakura";
    sakura.style.left = Math.random() * 100 + "vw"; // ランダムな横位置
    sakura.style.animationDuration = Math.random() * 3 + 2 + "s"; // ランダムなアニメーション時間
    sakura.style.animationDelay = Math.random() * 5 + "s"; // ランダムな遅延
    body.appendChild(sakura);
  }
  // 5秒ごとにプロジェクトを切り替え
  setInterval(nextProject, 5000);
});

// スクロール時のヘッダー背景変更（オプション）
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
