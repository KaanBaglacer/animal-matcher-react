import {useState} from "react";
import styles from "./NavDrawer.module.css";

const NavDrawer = (props) => {
   const [isOpen, setIsOpen] = useState(false);

   const handleToggle = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className={styles.drawer}>
         <button className={styles.toggleButton} onClick={handleToggle}>
            Open Drawer
         </button>
         {isOpen && (
            <div className={styles.drawerContent}>
               <button className={styles.closeButton} onClick={handleToggle}>
                  Close Drawer
               </button>
               <div>{props.children}</div>
            </div>
         )}
      </div>
   );
}

export default NavDrawer;
