// pathUtils.js
function getCorrectPath(path) {
  const currentPath = window.location.pathname;
  const isRoot =
    currentPath === "/my-website/" || currentPath === "/my-website/index.html";
  const depth = isRoot ? 0 : currentPath.split("/").length - 3;
  return "../".repeat(depth) + path;
}

function updatePaths() {
  const links = document.querySelectorAll("a[data-path]");
  links.forEach((link) => {
    link.href = getCorrectPath(link.getAttribute("data-path"));
  });

  const logo = document.querySelector("img[data-path]");
  if (logo) {
    logo.src = getCorrectPath(logo.getAttribute("data-path"));
  }
}

// DOMContentLoadedイベントリスナーを削除（loadTemplates.jsで処理するため）
