
const container = document.getElementById('content');
const shadowRoot = container.attachShadow({ mode: 'open' });


fetch('../../../pages/deltail/mainDetail.html')
    .then(response => response.text())
    .then(html => {
        const bootstrapLink = document.createElement('link');
        bootstrapLink.rel = 'stylesheet';
        bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
        bootstrapLink.integrity = 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH';
        bootstrapLink.crossOrigin = 'anonymous';

        // Thêm vào Shadow DOM
        shadowRoot.appendChild(bootstrapLink);

        // Thêm nội dung HTML vào Shadow DOM
        shadowRoot.innerHTML += html;
    });