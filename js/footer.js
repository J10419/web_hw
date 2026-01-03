function renderFooter() {

    const footerContainer = document.querySelector('#footer');

    if (!footerContainer) return;

    footerContainer.innerHTML = `
        <div class="container">
            <p class="mb-1 text-secondary fw-bold">
                謝宇軒 | 資工二A
            </p>
        </div>
    `;
}

renderFooter();