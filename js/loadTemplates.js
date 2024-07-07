// loadTemplates.js
async function loadTemplates() {
  const headerTemplate = document.getElementById("header-template");
  const footerTemplate = document.getElementById("footer-template");

  try {
    const headerResponse = await fetch(getCorrectPath("templates/header.html"));
    const footerResponse = await fetch(getCorrectPath("templates/footer.html"));

    if (headerResponse.ok && footerResponse.ok) {
      const headerContent = await headerResponse.text();
      const footerContent = await footerResponse.text();

      headerTemplate.innerHTML = headerContent;
      footerTemplate.innerHTML = footerContent;

      // ヘッダーとフッターが読み込まれた後にパスを更新
      updatePaths();
    } else {
      console.error("テンプレートの読み込みに失敗しました");
    }
  } catch (error) {
    console.error("テンプレートの読み込み中にエラーが発生しました:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadTemplates);
