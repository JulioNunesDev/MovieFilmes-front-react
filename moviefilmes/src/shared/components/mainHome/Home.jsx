import styled from 'styled-components'
import {RiListSettingsLine} from 'react-icons/ri'
import lacasa from '../../../assets/lacasa.svg'
import duna from '../../../assets/duna.svg'
import sherek from '../../../assets/sh.svg'
import riverdale from '../../../assets/rv.svg'
import tau from '../../../assets/tl.svg'

const HomeBox = styled.div`
width: 100%;
height: auto;
background-color: #111;


.search{
   
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-top: 55px;


    .title{
        width: 100%;
        font-size: 10px;
        color: white;
        font-weight: 200;
    }

    .box--input{
        background-color: #12b30f;
        width: 50%;
        height: 30px;
        border-radius: 10px;

        input{
            padding-left: 15px;
            font-size: 14px;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            outline: none;
            border: 0;
        }
    }

    .settings{
        font-size: 30px;
        margin: 0px 15px;
        width: 55px;
        display: flex;
        justify-content: center;
        color: white;
        background-color: #ffa41c;
        cursor: pointer;
    }
}

.pageTopMovies{

width: 100%;
display: flex;
height: auto;
margin-top: 25px;
padding: 10px;
gap: 45px;
justify-content: space-between;

img{
    object-fit: contain;
    width: 100%;
}

}
.wacth{
width: 100%;
height: auto;

.titles{
    display: flex;
    align-items: center;
   gap: 25px;
   margin-top: 25px;
   padding: 10px;
   margin-bottom: -25px;

    h2{
        color: white;
    }
    p{
        color: white;
    }
    a{
        color: #ffa41c;
        text-decoration: none;

    }
}

    .movies{
    display: flex;
    height: auto;
    margin-top: 25px;
    padding: 10px;
    gap: 15px;
  
  


    img{
        object-fit: fill;
    width: 300px;
    height: auto;
   
    transition: 0.1s ease-in;

    
    }
  }
  img:hover{
      transform: scale(0.9);
      cursor: pointer;
  }
}


`

const Home = () => {
    return ( 
<HomeBox>
    <div className="search">
       <div className='title'> 
       <h2>Discover your favourites</h2>
       </div>
        <div className="box--input">
            <input type="text" placeholder='Search here...' />
        </div>
        <div className='settings'>
            <RiListSettingsLine/>
        </div>
    </div>
    <div className="pageTopMovies">
        <div>
            <img src={lacasa} alt="" />
        </div>
        <div>
            <img src={duna} alt="" />
        </div>
    </div>
    <div className="wacth">
        <div className="titles">
            <h2>Continue watching </h2> <p>(3 Movies Remaining)</p> <a href="">see more</a>
        </div>
        <div className="movies">
            <img src={sherek} alt="sherek movie" />
            <img src={riverdale} alt="riverdale serie" />
            <img src={tau} alt="tau ge movie" />
        </div>
    </div>
</HomeBox>
     );
}
 
export default Home;