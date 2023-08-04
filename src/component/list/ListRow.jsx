import styles from "./ListRow.module.css";

const ListCell = ({ children, fetchid }) => {
  return <tr className={styles.cell} onClick={()=>{ fetchid(children[0].props.children)}}>{children}</tr>;
};

export default ListCell;
