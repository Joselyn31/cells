import { LitElement, html } from "lit";

import {styles} from './style.js';

export default class Login extends LitElement{
    constructor(){
        super();
        this.email = 'joselyn@gmail.com';
        this.password = 'pedrito123';
        this.nameUser = 'Joselyn Márquez';
        this.numeroCuenta = '1597532580';
        this.cuentaDominical = '12,000';
        this.tdc ="15,000";
        this.numTarjeta = '753697542304540426';
        this.access = false;
        this.saludo ='';
        this.currentPage = 'login';
        this.currentMov = 0;
        this.movimientos = [
          {nombre: 'Movimiento 1', detalle: 'Compra en nike'},
          {nombre: 'Movimiento 2', detalle: 'Compar de papitas'},
          {nombre: 'Movimiento 3', detalle: 'Compra de lavadora'}
        ];
    }

    static styles=styles;

    static properties={
        email: {
             type:String
            },
        password: {
             type:String
            
            },
            access:{
                type:Boolean
            },
            nameUser: {
              type:String
            },
            numeroCuenta:{
              type: String
            },
            cuentaDominical: {
              type:String
            },
            tdc:{
              type:String
            },
            numTarjeta:{
              type: String
            },
            movimientos:{
              type: Array
            }
    };

    handleEmailChange(e){
        this.email=e.target.value;
    }

    handlePasswordChange(e){
        this.password=e.target.value;
    }

    handleClick() {
        if (this.email === 'joselyn@gmail.com' && this.password === 'pedrito123') {
          this.access = true;
          alert('Puedes entrar yeii'); 
          this.saludar();
          this.currentPage = 'move-list';
          this.nameUser = 'Joselyn';
        } else {
          this.access = false;
          alert('Vuelve a intentarlo porfi'); 
        }
        this.requestUpdate();
      }
    
      saludar(){
        const time= new Date().getHours;
        
        if(time >= 6 && time < 12){
            this.saludo ='Buenos dias!';
        } else if(time >=12 && time < 18 ){
            this.saludo ='Buenas Tardes!';
        }else{
            this.saludo ='Buenas Noches!';
        }
      }

      handleMovimientoClick(numeroMovimiento) {
      
        console.log(`Movimiento ${numeroMovimiento} clickeado`);
        console.log(this.movimientos[numeroMovimiento])
        this.currentPage = 'page-movimientos'; 
        this.currentMov =numeroMovimiento;
        this.requestUpdate();
    }
    handleRegresarClick() {
      // Manejar el clic en el botón de regresar
      this.currentPage = 'move-list'; // Regresamos a move-list
      this.requestUpdate();
  }

     

    render(){
        return html `
        <div class="login-content" style=${this.access ? 'display:none;':'display:block;'}> 
            <img class="imageLogin" src="https://seguuros.com/wp-content/uploads/2021/04/logo_bbva_blanco.png">
            <input type="email" id="email" .value=${this.email} @input=${this.handleEmailChange} placeholder="Ingrese su correo electronico" required>
            <input type="password" id="password" .value=${this.password} @input=${this.handlePasswordChange} placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;">
            <button class="btn-login" type="submit" @click=${this.handleClick}>Iniciar Sesión</button> 
        </div>
        
    <!--  Comineza Segunda pagina-->
      
      <section class="move-list" style=${this.currentPage === 'move-list'? 'display: block;' : 'display: none;'}>
        <h3>${this.saludo}, ${this.nameUser}</h3>
        <div class="datos-cliente">
          <p> Nombre: ${ this.nameUser}</p>
          <p> Numero de cuenta:${this.numeroCuenta}</p>
          <p>Cuenta Nominal: ${this.cuentaDominical}</p>
          <p>Trajeta de Credito: ${this.tdc}</p>

        </div>
        <div class="card">
          <img  src="https://www.equipeweb.com.br/wp-content/uploads/2022/10/Tarjeta-BBVA-Visa-Platinum-3-1024x683.png">
          <p> ${this.numTarjeta}</p>
        </div>


        <div class="movimientos">
          <button  class="btn-mov" @click=${() => this.handleMovimientoClick(0)}>Movimiento 1</button>
          <button  class="btn-mov" @click=${() => this.handleMovimientoClick(1)}>Movimiento 2</button>
          <button  class="btn-mov" @click=${() => this.handleMovimientoClick(2)}>Movimiento 3</button>
        </div>


      </section>
      
       <section class="page-movimientos" style=${this.currentPage === 'page-movimientos' ? 'display: block;' : 'display: none;'}>
                    <h3>Detalles del movimiento</h3>
                    <p>Detalle de la compra: ${this.movimientos[this.currentMov].detalle} </p>
                   
                    <button class="btn-mov" @click=${this.handleRegresarClick}>Regresar </button>

                </section>
      



        `;

    }    
}

