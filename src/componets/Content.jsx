import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const back = useNavigate();
  const [data, setData] = useState([]);

  const getAllEmployee = async () => {
    axios.get(`http://tutorials.smartsight.in :4201/api/`).then((res) => {
      const persons = res.data;
      setData({ persons });
    });
  };
  useEffect(() => {
    getAllEmployee();
  }, []);

  function handelback() {
    back("/");
  }
  return (
    <div>
      login done welcome to content page
      <button onClick={handelback}>click</button>
      <ul>
        {data.map((item) => {
          <li>{item.name}</li>;
        })}
      </ul>
      <button>add </button>
    </div>
  );
};

export default Content;
