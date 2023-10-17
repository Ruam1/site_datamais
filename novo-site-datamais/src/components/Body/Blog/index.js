/*
import React from 'react';
import { Link } from 'react-router-dom';
import styled from'styled-components';
import { ImSearch } from 'react-icons/im';
import ex from '../../../images/teste.png';
import banner1 from '../../../images/testedois.png';
import banner2 from '../../../images/testetres.png';
import banner3 from '../../../images/testequatro.png';


const StyledBodyBlog = styled.div`

.hrdouble{
    display:none;
}
    .body_blog{
        height:auto;
        margin:4% 10% 0px 10%;
        position:sticky;
    }
    .body_blog h1{
        font-size:2.5vw;
        margin-right: auto;
    }
    .h1Subli{
        background-color:#ff5019;
        width:5vw;
        height:5px;
        margin-top:-0.5%;
    }
    .divOne{
        display:flex;
        flex-direction:row;
        margin-top:3%;
    }
    .column_one{
        width:35%;
        height:auto;
        z-index:1;
        position:sticky;
    }
    h6{
        font-size:0.9vw;
        margin-left:5%;
        margin-bottom:1%;
    }
    h3{
        font-size:1.6vw;
        white-space: nowrap;
    }
    h2{
        margin: 0px 5% 2% 5%;
        cursor:pointer;
        font-size:1.5vw;
    }
    h2:hover{
    text-decoration: underline;
    }
    .column_one p{
        margin-left:5%;
    }
    .column_two p{
        margin-left:5%;
    }
    .img_article{
        width:100%;
        margin-bottom:2%;

    }
    .column_two{
        width:35%;
        height:auto;
    }
    .article_style{
        background-color:#f1f1f1;
        margin:0px 3% 10% 3%;
        overflow:hidden;
        width:85%;
        height:35vw;  
        border-radius: 5px;
         -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1),rgba(0,0,0,0)), linear-gradient(to bottom, white, rgba(0,0,0,0.5));
        -webkit-mask-size: 100% 100%;
        -webkit-mask-repeat: no-repeat;
    }
    .info_article{
        background-color:#f1f1f1;
        padding:3% 3% 0px 3%;
        text-overflow: clip;
    }
    .info_article p{
        color:dimgrey;
        font-weight:500;
        font-size:1.2vw;
    }
    .article_style:hover{
        -webkit-transform: scale(1.03);
        transition:all 0.3s linear;
    }
    .article_style:hover .info_article{
        transform: translateY(-30px);
        transition:all 0.3s linear;
    }
  
    .article_style:hover .img_article{
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        transition:all 0.3s linear;
        opacity: 0.9;
        filter: grayscale(50%);
        cursor: pointer;
    }
    .column_two p:hover{
        margin-left:5%;
    }
    
    .column_three{
        display:flex;
        flex-direction:column;
        width:29%;
        text-decoration: none;
        height:auto;
        padding-left:2%;
        color: #000;
    }
    hr{
        width:15.3vw;
    }
    .column_three input{
        height:2.5vw;
        margin-left:2%;
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
        width:12vw;
    }
    .div_input{
        display:flex;
        justify-content:space-between;
        box-shadow: 2px 0 1em #ff5019;
        width:15.8vw;
        height:auto;
        padding:1%;
        border-radius:15px;
        margin-bottom:10%;
    }
    .icon_input{
        width:1.8vw;
    
    }
    .buttom_bar{
        border-style:none;
        background-color: #fff;
        margin-right: 0.4vw;

    }
    
    .column_three li{
        font-size:1vw;
        list-style-type: none;
        margin:2% 0px 2% 0px;
        font-style: italic;
    }
    .column_three a{
        font-size:1vw;
        text-decoration: none;
        color:#000;
        margin:2% 0px 2% 7.1%;
    }

    @media only screen and (max-width: 800px) {
        .body_blog {
            margin-bottom:10px;
        }
        .body_blog h1{
            font-size:10vw;
        }
        .h1Subli{
            width:20vw;
            margin-top:-2%;
        }
        .divOne{
            flex-direction:column;
        }
        .column_one{
            width:110%;
        }
        h6{
            font-size:4vw;
        }
        h3{
            font-size:7vw;
        }
        h2{
            font-size:5vw;
        }
 
        .column_two{
            width:105%;
            height:auto;
        }
        .article_style{
            width:85%;
            height:100vw;  
        }
        .info_article{
            background-color:#f1f1f1;
            padding:3% 3% 0px 3%;
            text-overflow: clip;
        }
        .info_article p{
            font-weight:500;
            font-size:4vw;
        }
    
        .column_three{
            display:flex;
            flex-direction:column;
            width:100%;
            text-decoration: none;
            height:auto;
            padding-left:2%;
            color: #000;

        }
        hr{
            width:71vw;
        }
        .column_three input{
            height:10vw;
            width:50vw;
            font-size:6vw;
        }
        .div_input{
            margin-top:10%;
            display:flex;
            justify-content:space-between;
            box-shadow: 2px 0 1em #ff5019;
            width:65vw;
            height:auto;
            padding:1%;
            border-radius:15px;
            margin-bottom:10%;
            margin-left:3%;
        }
        .icon_input{
            width:5vw;
        
        }
        .buttom_bar{
            margin-right: 2vw;
        }
        
        .column_three li{
            font-size:5vw;
        }
        .column_three a{
            font-size:5vw;
            margin:2% 0px 5% 7.1%;
        }
        .hrdouble{
            width:100%;
            margin: 5px 0px 0px 0px;
            display:inline;
        }
    }
`;

const BodyBlog = () =>{
    return(
        <StyledBodyBlog>
            <div className='body_blog'>      
                <h1><i>Blog</i></h1>
                <div className='h1Subli' />
                <div className='divOne'>
                    <div className='column_one'>
                        <article className='article_style'>
                                <img src={ex}
                                className="img_article"
                                alt="First img article"
                                />
                            <div className='info_article'>
                                <h6>x de outubro de 2022.</h6>
                                <h2>Prorrogada a entrada em vigor do Bloco X em Santa Catarina</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ligula placerat, vestibulum tortor vitae, dapibus mi. Donec ultricies tellus quis purus volutpat tempus. Donec varius vehicula congue. Ut sed metus a quam tempor lobortis. Donec vitae orci sit amet diam fringilla pharetra id sed neque. Vivamus ac congue elit, sed ornare ligula. Duis convallis est ut imperdiet sagittis. Aliquam nec odio eget augue ornare dapibus. Praesent vitae ornare sem. Cras quam est, pretium eu turpis in, volutpat tempus sapien.</p>
                            </div>
                        </article>
                        <article className='article_style'>
                                <img src={banner2}
                                className="img_article"
                                alt="First img article"
                                />
                            <div className='info_article'>
                                <h6>x de outubro de 2022.</h6>
                                <h2>Bloco X: Lembrete para quem começa enviar em 1º outubro</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ligula placerat, vestibulum tortor vitae, dapibus mi. Donec ultricies tellus quis purus volutpat tempus. Donec varius vehicula congue. Ut sed metus a quam tempor lobortis. Donec vitae orci sit amet diam fringilla pharetra id sed neque. Vivamus ac congue elit, sed ornare ligula. Duis convallis est ut imperdiet sagittis. Aliquam nec odio eget augue ornare dapibus. Praesent vitae ornare sem. Cras quam est, pretium eu turpis in, volutpat tempus sapien.</p>
                            </div>
                        </article>
                    </div>
                    <div className='column_two'>
                        <article className='article_style'>
                        <img src={banner1}
                            className="img_article"
                            alt="First img article"
                            />
                            <div className='info_article'>
                                <h6>x de novembro de 2022.</h6>
                                <h2>Tendências em pagamentos para 2021</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ligula placerat, vestibulum tortor vitae, dapibus mi. Donec ultricies tellus quis purus volutpat tempus. Donec varius vehicula congue. Ut sed metus a quam tempor lobortis. Donec vitae orci sit amet diam fringilla pharetra id sed neque. Vivamus ac congue elit, sed ornare ligula. Duis convallis est ut imperdiet sagittis. Aliquam nec odio eget augue ornare dapibus. Praesent vitae ornare sem. Cras quam est, pretium eu turpis in, volutpat tempus sapien.</p>
                            </div>
                        </article>
                        <article className='article_style'>
                        <img src={banner3}
                            className="img_article"
                            alt="First img article"
                            />
                            <div className='info_article'>
                                <h6>x de novembro de 2022.</h6>
                                <h2>Cinco lições sobre educação financeira que a pandemia trouxe à tona</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ligula placerat, vestibulum tortor vitae, dapibus mi. Donec ultricies tellus quis purus volutpat tempus. Donec varius vehicula congue. Ut sed metus a quam tempor lobortis. Donec vitae orci sit amet diam fringilla pharetra id sed neque. Vivamus ac congue elit, sed ornare ligula. Duis convallis est ut imperdiet sagittis. Aliquam nec odio eget augue ornare dapibus. Praesent vitae ornare sem. Cras quam est, pretium eu turpis in, volutpat tempus sapien.</p>
                            </div>
                        </article>
                    </div>
                    <div className='column_three'>
                        <hr className='hrdouble' />
                        <hr className='hrdouble' />
                        <form>
                            <div className='div_input'>
                            <input  placeholder='Pesquisar por ...' />
                            <button className='buttom_bar' type="submit">
                                <ImSearch className='icon_input' size={20}/>         
                            </button>         
                                   
                            </div>
                        </form>
                        <h3><b>TÓPICOS RECENTES</b></h3>
                        <hr />
                        <ol>
                            <li>lorem ipsum dolor</li>
                            <li>lorem ipsum dolor</li>
                            <li>lorem ipsum dolor</li>
                            <li>lorem ipsum dolor</li>
                            <li>lorem ipsum dolor</li>
                        </ol>
                        <h3><b>DATAMAIS</b></h3>
                        <hr />
                        <Link to="/QuemSomos">Conheça a Datamais</Link>
                    </div>
                </div>
            </div>
        </StyledBodyBlog> 
    )
}
 
export default BodyBlog; 

*/