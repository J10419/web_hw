function renderNavbar() {
    const navbarContainer = document.querySelector('#navbar-area');

    if (!navbarContainer) return;

    const currentPath = window.location.pathname;

    let rootPath = './';
    let htmlPath = 'html/';

    if (currentPath.includes('/html/')) {
        rootPath = '../';
        htmlPath = './';
    }

    const logoUrl = "img/logo.jpg";

    const schoolUrl = "https://www.pu.edu.tw/";

    navbarContainer.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">

          <a class="navbar-brand" href="${rootPath}index.html">
            <img src="${logoUrl}" alt="Logo" width="30" height="30" class="d-inline-block align-text-top rounded-circle">web
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

              <li class="nav-item">
                <a class="nav-link" href="${rootPath}index.html">首頁</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="${htmlPath}schedule.html">課表</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="${htmlPath}rps.html">猜拳</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="${htmlPath}quiz.html">猜謎</a>
              </li>
            </ul>

            <div class="d-flex">
                <a href="${schoolUrl}" target="_blank" class="btn btn-outline-light btn-sm">
                    靜宜大學
                </a>
            </div>

          </div>
        </div>
      </nav>
    `;
}

renderNavbar();