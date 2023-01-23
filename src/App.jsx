import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map(function (item) {
    return <Card {...item} />;
  });
  return (
    <>
      <Header />
      <section className="card">{cards}</section>
    </>
  );
}
export default App;
