import styled from "styled-components";
import {
  FaStream,
  FaRegCompass,
  FaRegBookmark,
  FaRegBell,
  FaRegSun,
  FaToggleOff,
} from "react-icons/fa";
import { FiPlay, FiLogOut } from "react-icons/fi";
import foto from "../../../assets/foto.jpeg";
import a from "../../../assets/a.jpg";
import b from "../../../assets/b.jpg";
import c from "../../../assets/c.jpg";
import d from "../../../assets/d.jpg";

const HeaderBox = styled.div`
  width: auto;
  height: auto;
  background-color: #111;


  .perfil {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      cursor: pointer;
      width: 60px;
      object-fit: scale-down;
      height: 60px;
      border-radius: 50px;
    }
  }

  .itensMenu {
    height: auto;
    width: 100%;
    font-size: 27px;
    color: white;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      
      

      a {
        margin-top: 30px;
        color: white;
        transition: 0.1s ease-in;
      }

      a:hover {
        color: #ffa41c;
      }
    }
  }

  .groupPerson {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
    margin-bottom: 10px;

    img {
      cursor: pointer;
      margin-top: 20px;
      width: 55px;
      height: 55px;
      object-fit: cover;
      border-radius: 50px;
    }
  }
  .menuToogle {
   
    background-color: #1c1c1c;
    width: 100%;
    height: auto;
    padding: 20px;
    font-size: 25px;
    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: center;

    a {
        color: white;
    }
    a:hover{
        color: #ffa41c;
    }
  }
`;

const HeaderLeft = () => {
  return (
    <HeaderBox>
      <div className="perfil">
        <img src={foto} alt="" />
      </div>
      <div className="itensMenu">
        <ul>
          <a href="#">
            <FaStream />
          </a>
          <a href="#">
            <FaRegCompass />
          </a>
          <a href="#">
            <FaRegBookmark />
          </a>
          <a href="#">
            <FaRegBell />
          </a>
          <a href="#">
            <FiPlay />
          </a>
          <a href="#">
            <FaRegSun />
          </a>
        </ul>
      </div>
      <div className="groupPerson">
        <img src={a} alt="" />
        <img src={b} alt="" />
        <img src={c} alt="" />
        <img src={d} alt="" />
      </div>
      <div className="menuToogle">
        <a href="#">
          <FaToggleOff />
        </a>
        <a href="#">
          <FiLogOut />
        </a>
      </div>
    </HeaderBox>
  );
};
export default HeaderLeft;
