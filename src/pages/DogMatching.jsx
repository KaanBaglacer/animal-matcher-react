import styles from "./DogMatching.module.css";
import React from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Logo = styled.img`
  height: 250px;
  width: 300px;
`;

const DogMatching = () => {

   const dispatch = useDispatch();
   const navigate = useNavigate();


   return (
      <div className={styles.layout}>
         <div className={styles.panel}>
            <Logo src="/Logo.png" alt="Dog Matcher Logo"/>
         </div>
         <div className={styles.panel}>
            <div>
               <p>Results</p>
            </div>
         </div>


      </div>
   );
}

export default DogMatching;
