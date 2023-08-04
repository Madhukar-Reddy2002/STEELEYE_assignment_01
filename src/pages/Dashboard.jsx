import { useState, useEffect} from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});
  const [fetchedId, setFetchedId] = useState("");
  const len = mockData.results.length;
  mockData.results.forEach(e => {
    timestamps.results.forEach(i =>{
      if (i["&id"] === e["&id"]){
        e.OrderSubmitted = i.timestamps.orderSubmitted;
       //console.log(e.OrderSubmitted);
      }
    })
  });
  useEffect(
    ()=>{
      if(fetchedId == "SE|20221104|179|9:1:NEWO"){
      setSelectedOrderDetails(mockData.results[0].executionDetails)
      setSelectedOrderTimeStamps(timestamps.results[0].timestamps)}
      if(fetchedId == "SE|202211454|179|9:1:NEWO"){
        setSelectedOrderDetails(mockData.results[5].executionDetails)
        setSelectedOrderTimeStamps(timestamps.results[5].timestamps)}
    }
  )

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle={len} />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
            key="Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
            key="time"
          />
        </div>
        <List rows={mockData.results} data={currency} text = {searchText} key={mockData.results.key} oncluck={(e) =>setFetchedId(e)}/>
      </div>
    </div>
  );
};

export default Dashboard;
