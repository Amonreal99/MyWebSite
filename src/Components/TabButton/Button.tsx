import styles from './Button.module.css';
// import menuBar from '../../Pictures/menuBar.jpg';




type ButtonProps={
    label:React.ReactNode;
    onClick?:()=>void;

};

function Button({label, onClick}:ButtonProps){
    return(
        <button className={styles.Container} onClick={onClick}>
            {label}
        </button>
    )
}
export default Button;