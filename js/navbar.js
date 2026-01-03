function renderNavbar() {

  const navbarContainer = document.querySelector('#navbar');

  if (navbarContainer) {
    navbarContainer.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">web</a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="./index.html">首頁</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./schedule.html">課表查詢</a>
              </li>
               <li class="nav-item">
                <a class="nav-link" href="./rps-game.html">猜拳遊戲</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./quiz.html">猜謎挑戰</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      `;
  }
}

renderNavbar();