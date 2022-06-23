import { FC } from "react";
import styles from "~/styles/MainLayout.module.css";

type IMainLayoutProps  = {
    children: JSX.Element | JSX.Element[]
}

const MainLayout:FC<IMainLayoutProps> = ({children}) => {
    return (
        <div className={styles.main_layout}>
            {children}
        </div>
    );
}

export default MainLayout;