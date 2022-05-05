import apple from '../../../assets/app.png'
import disney from '../../../assets/ds.png'
import hbo from '../../../assets/hbo.png'
import hulu from '../../../assets/hu.png'
import netflix from '../../../assets/netflix.png'
import prime from '../../../assets/prime.png'

import styled from 'styled-components'

const MediaBox = styled.div`
width: 300px;
height:auto;
background-color: #111;
padding: 20px;


.title{
    width: 100%;
    height: auto;
    
    color: white;
    font-size: 10px;
    text-align: center;
}

.corporations{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;

    a{
        display: flex;
        text-decoration: none;
        align-items: center;
        justify-content: center;
        color: white;
        margin-top: 15px;
        gap: 10px;
        transition: 0.2s ease-in;
        
        
        img{
           
            padding: 2px;
            width: 55px;
            height: 55px;
            object-fit: contain;
        }

        p{
            font-size: 13px;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            font-weight: bold;
        }
    }
    a:hover{
            color: #ffa41c;
        }
}

.genere{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    padding: 20px;
    padding-bottom: 47px;
    flex-direction: column;
    align-items: center;
    h2{
        color: white;
    }
    ul{

        li{
            list-style: none;
            margin-top: 15px;
            padding: 2px;


           
            a{
                text-decoration: none;
                color: white;
                transition: 0.2s ease-in;
                                
            }
            a:hover{
                color: #ffa41c;
            }
        }
    }
}
.active{
     background-color: #ffa41c;
     border-radius: 5px;
 }

`
const MediaService = () => {
    return ( 
        <MediaBox>
            <div className='title'>
                <h1>Media Services</h1>
            </div>
            <div className="corporations">
                <a href="#">
                    <img src={apple}/>
                    <p>Apple Tv</p>
                </a>
                <a href="#">
                    <img src={disney}/>
                    <p>Disney Tv</p>
                </a>
                <a href="#">
                    <img src={hbo}/>
                    <p>HBO Max</p>
                </a>
                <a href="#">
                    <img src={hulu}/>
                    <p>Hulu</p>
                </a>
                <a href="#">
                    <img src={netflix}/>
                    <p>Netflix</p>
                </a>
                <a href="#">
                    <img src={prime}/>
                    <p>Prime</p>
                </a>
            </div>
            <div className="genere">
                <h2>Genre</h2>
                <ul>
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Comedy</a></li>
                    <li><a href="#">Drama</a></li>
                    <li><a href="#">Sci-fi</a></li>
                    <li className='active'><a  href="#">Thriller</a></li>
                    <li><a href="#">Western</a></li>
                </ul>
            </div>
        </MediaBox>
     );
}
 
export default MediaService;