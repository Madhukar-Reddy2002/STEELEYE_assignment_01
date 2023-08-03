import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows, data, text, oncluck}) => {
  const onCluck = () =>{
    oncluck("SE|20221104|179|9:1:NEWO");
    console.log('click tBody');
  }
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {data}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody onClick={onCluck}>
        {rows.filter((i) => i["&id"].includes(text)).map((row) => (
          <ListRow key={row.key}>
            <ListRowCell>
              {row["&id"]}
            </ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{row.OrderSubmitted}</ListRowCell>
            <ListRowCell>
              {data === "USD"
                ? row.bestExecutionData.orderVolume.USD
                : data === "EUR"
                ? row.bestExecutionData.orderVolume.EUR
                : data === "GBP"
                ? row.bestExecutionData.orderVolume.GBP
                : row.bestExecutionData.orderVolume.JPY}
            </ListRowCell>
          </ListRow>
        ))}
      </tbody>
      
    </table>
  );
};

export default List;
