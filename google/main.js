class GoogleHome extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});

    }
    connectedCallback(){
        this.render();
    }
    render(){
        
        this.shadowRoot.innerHTML=`

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

          <style>
       
        nav{
            background-color:transparent;
            color: #4b4b4b;
            padding: 3px;
            display: flex;
            position: absolute;
            top: -2px;
            left: 1.5%;
            align-items: center;
            width: 100%;
            height: 10%;
            
        }
        .icons{
            display: flex;
            position: absolute;
            gap: 2rem;
            right: 3%;
            align-items: center;
        }
            .user{
             width:35px;
            border-radius: 220px;
           
            }
           
            .googlesito{
                text-align: center;
                margin-top: 100px;

            }
                .imagegoogle{
                width:500px;
                }
          
            .iconsInput{
                
                position: relative;  
            }
            .iconsInput input[type="text"]{
                padding-left: 30px;
                padding: 10px;
                width: 500px;
                height: 30px;
                border-radius: 15px;
                border: 1px solid #E1E1E1;
                font-size: 17px;
            }
            #search{
                position: absolute;
                top: 12px;
            }
            #mic{
                position: absolute;
                right: 35%;
                top:12px;
            }
            #focus{
                position: absolute;
                right: 33%;
                top:12px;

            }
            .logos{
            
                width:30%;
                margin-top:20px;
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                text-align: center;
                float: calc(100%-60px);
                margin-left: auto;
                margin-right: auto;
            }
            .modal {
            display: none; 
            position: fixed; 
            z-index: 1; 
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;  
            background-color: rgb(0,0,0); 
            background-color: rgba(0,0,0,0.4); 
            }

                        
            .modal-content {
            background-color: #fefefe;
            margin: 15% auto; 
            padding: 20px;
            border: 1px solid #888;
            width: 80%; 
            }

            
            .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
            }

            .close:hover,
            .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
            }
   
    </style>
    
      <nav>
        <div class="icons">
        <a class="gmail">Gmail</a>
        <a class="images">Imagenes</a>
        <span class="material-symbols-outlined">experiment</span>
        <span class="material-symbols-outlined">apps</span>
        <img class="user" src="https://stickerly.pstatic.net/sticker_pack/M6DUfwweCC1PPhJ9HOcpw/DAS3U4/19/-869922692.png" alt="">
        </div>
    </nav>
    
    <section class="googlesito">
        <img class="imagegoogle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="Google">

        <div class="iconsInput">
        <span class="material-symbols-outlined"id="search">search</span><input type="text" id="buscar" placeholder="     Buscar en Google">
        <span class="material-symbols-outlined"id="mic" >mic</span>
        <span class="material-symbols-outlined" id="focus">center_focus_strong</span>
        </div>
    </section>
    <div class="logos">
    <span class="material-symbols-outlined">add_circle</span>
    <span class="material-symbols-outlined">add_circle</span>
    <span class="material-symbols-outlined">add_circle</span>
    <span class="material-symbols-outlined">add_circle</span>
    <span class="material-symbols-outlined">add_circle</span>
    <span class="material-symbols-outlined">add_circle</span>
    <span class="material-symbols-outlined">add_circle</span>
    <span class="material-symbols-outlined">add_circle</span>
    <span class="material-symbols-outlined">add_circle</span>
    <span class="material-symbols-outlined">add_circle</span>
    
    </div>

     <div id="myModal" class="modal">
   
    <div class="modal-content">
      <span class="close">&times;</span>
      <p id="text"></p>
    </div>
  </div>
    
        `;
        const busqueda = ['Perrear', 'MasPerreo', 'pedrito', 'feli'];
        
        function searchPalabra() {

        const input =document.getElementById('buscar').value;
        const palabraEncontrada = input.toLowerCase();
        const resultado = busqueda.filter(p => p.toLowerCase().includes(palabraEncontrada));

        if (resultado.length > 0) {
            const modal = document.getElementById('myModal');
            const modalText = document.getElementById('text');
            modalText.textContent = resultado[0]; 
            modal.style.display = 'block'; 
            
            
            const closeBtn = document.getElementsByClassName('close')[0];
            closeBtn.onclick = function() {
            modal.style.display = 'none'; 
            }
            
        }
        }

        document.getElementById('buscar').addEventListener('keyup', searchPalabra);


        }

    }
        
    customElements.define('google-home',GoogleHome);