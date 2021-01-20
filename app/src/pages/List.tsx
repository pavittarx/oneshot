import React, { useState, useEffect } from "react";

const getDataKeys = (data: Array<object>) => {
  let keys: Array<String> = [];

  for (let i = 0; i < data.length; i++) {
    const newKeys = Object.keys(data[i]).filter((key) => !keys.includes(key));
    keys = [...keys, ...newKeys];
  }

  return keys;
};

const List = (listObject, setListObject) => {
  const [keys, setKeys] = useState(listObject);

  useEffect(() => {}, [listObject]);

  return (
    <section className="list-container">
      <header>{keys.toString()}</header>
      <main></main>
    </section>
  );
};

export default List;
