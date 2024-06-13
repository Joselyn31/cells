class Navbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
    }
    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <style>

            .navbar {
                background-color: #f2f2f2;
                padding: 15px;
                display: flex;
                align-items: center;
            }

            .buttons {
                display: flex;
            }

            .close {
                background-color: #ff5f56;
            }

            .minimize {
                background-color: #ffbd2e;
            }

            .maximize {
                background-color: #27c93f;
            }

            .address-bar {
                display: flex;
                align-items: center;
                margin-left: auto;
            }

            .address-bar input[type="text"] {
                padding: 8px 0;
                border: 1px solid #ccc;
                border-radius: 3px;
                margin-right: 950px;
            }

            .address-bar button {
                padding: 5px 10px;
                border: 1px solid #ccc;
                border-radius: 3px;
                cursor: pointer;
            }
            .new-tab {
                background-color: #E7E4E4;
                color: black;
                padding: 5px 15px;
                margin-right: 5px;
                border-radius: 3px 3px 0 0;
                cursor: pointer;
                align-items: center;
                
            }

            </style>
            <div class="navbar">
                <div class="buttons">
                    <span class="material-symbols-outlined">arrow_back_ios</span>
                    <span class="material-symbols-outlined">arrow_forward_ios</span>
                   <span class="material-symbols-outlined">refresh</span>
                    <div class="new-tab">+</div>
                </div>
                <div class="address-bar">
                    <input type="text" placeholder="Introduce una URL">
                    
                </div>
                <div class="tab-content"></div>
            </div>
        `;
        this.shadowRoot.querySelector('.new-tab').addEventListener('click', this.abrirNuevaPestana.bind(this));
    }

    abrirNuevaPestana() {
        const tabContent = this.shadowRoot.querySelector('.tab-content');
        tabContent.innerHTML = '';

        const newTabImage = document.createElement("img");
        newTabImage.src = "https://i.pinimg.com/236x/36/41/cd/3641cd9e0e691a3d992d7db5bb726ac0.jpg"; // URL de la imagen placeholder
        tabContent.appendChild(newTabImage);

        alert("¡Se ha abierto una nueva pestaña!");
    }
}

customElements.define('my-navbar', Navbar);