import {css} from 'lit';

export const styles =[
    css`
    
    .login-content {
        background: rgb(0,68,145);
        background: linear-gradient(317deg, rgba(0,68,145,1) 1%, rgba(85,147,196,1) 39%, rgba(0,68,145,1) 78%);
        width: 25%;
        height: 32.25rem;
        border: 1px solid #E7E4E4;
        align-items: center;
        justify-content: center;
        padding: 0 0.5rem;
        margin: 0 auto;
        }

        .imageLogin {
        width: 40%;
        margin: 30px auto;
        display: flex;
        justify-content: center;
        }

        input {
        border: none;
        border-radius: 3px;
        width: 42%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 8px;
        margin: 40px auto;
        gap: 10px;
        }

        .btn-login {
        padding: 10px 0;
        border: none;
        border-radius: 5px;
        font-weight: bold;
        letter-spacing: 5px;
        text-transform: uppercase;
        cursor: pointer;
        color: #2c9caf;
        transition: all 1000ms;
        font-size: 15px;
        display: flex;
        overflow: hidden;
        outline: 2px solid #558cff;
        margin: 0 auto;
        }

        .btn-login:hover {
        color: #ffffff;
        transform: scale(1.1);
        outline: 2px solid #70bdca;
        box-shadow: 4px 5px 17px -4px #268391;
        }

       .btn-login::before {
        content: "";
        position: absolute;
        left: -50px;
        top: 0;
        width: 0;
        height: 100%;
        background-color: #558cff;
        transform: skewX(45deg);
        z-index: -1;
        transition: width 1000ms;
        }

        .btn-login:hover::before {
        width: 250%;
        }
        
        /*COMIENZA SEGUNDA PAGINA */

        .move-list {
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        background: linear-gradient(0deg, rgba(253,253,255,1) 13%, rgba(0,68,145,1) 76%);
        display: none; 
        color: white;
        max-width: 300px; 
        margin: auto; 
        padding: 20px;
        display: none;         
    }
        .datos-cliente{
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 4px; 
        margin: 0 auto;
        width: 98%;
        height: 150px;
            p{
            margin-left: 0.5rem;
            margin-right: 0.3rem;
        }
        
    }
        .card{
            width: 320px;
            margin-top: 29px;
            
            img{
                width: 70%;
                display: flex;
                margin: 0 auto;
            }  
            p{
                position: fixed;
                top: 305px;
                left: 45%;
            }

        }
        .movimientos{
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 4px; 
            margin: 0 auto;
            width: 98%;
            height: 150px;
            margin-top: 29px;
        }
        .btn-mov{
            background-color: transparent;
            color:#666666;
            border:none;
            position:relative;
            height:50px;
            width: 98%;
            padding:0 2em;
            cursor:pointer;
            transition:800ms ease all;
            outline:none;
            }
       
        .btn-mov:before,btn-mv:after{
            content:'';
            position:absolute;
            top:0;
            right:0;
            height:2px;
            width:0;
            background: #004491;
            transition:400ms ease all;
            }
         .btn-mov:after{
            right:inherit;
            top:inherit;
            left:0;
            bottom:0;
            }
         .btn-mov:hover:before,btn-mv:hover:after{
            width:100%;
            transition:800ms ease all;
            }

            .page-movimientos{
                border: 1px solid #ccc;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                background: linear-gradient(0deg, rgba(253,253,255,1) 13%, rgba(0,68,145,1) 76%);
                display: none; 
                color: white;
                max-width: 300px; 
                margin: auto; 
                padding: 20px;
                display: none; 

            }

    `,

];