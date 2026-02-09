function checkCode() {
  const code = document.getElementById("code").value;
  if (code === "1954") {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "Invalid invite code";
  }
}

function showTab(tab) {
  document.querySelectorAll(".tab").forEach(t => t.classList.add("hidden"));
  document.getElementById(tab).classList.remove("hidden");
}

function cloakTab(type) {
  if (type === "drive") {
    document.title = "My Drive - Google Drive";
    changeFavicon("https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png");
  }
  if (type === "classroom") {
    document.title = "Google Classroom";
    changeFavicon("https://ssl.gstatic.com/classroom/favicon.png");
  }
  if (type === "docs") {
    document.title = "Google Docs";
    changeFavicon("https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico");
  }
}

function changeFavicon(url) {
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = url;
}

function aboutBlank() {
  const win = window.open("about:blank", "_blank");
  win.document.write(`
    <iframe src="${location.href}"
      style="position:fixed;top:0;left:0;width:100%;height:100%;border:none;">
    </iframe>
  `);
}

