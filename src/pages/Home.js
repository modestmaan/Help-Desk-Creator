import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = React.useState([]);
  const [author, setAuthor] = React.useState([]);

  useEffect(() => {
    axios
      .get("https://motivational-quote-api.herokuapp.com/quotes/random")
      .then((res) => {
        setData(res.data.quote);
        setAuthor(res.data.person);
      });
  }, []);

  return (
    <div>
      {/* <h1>Welcome to Help Desk</h1> */}
      <h1 className="quote">{data}</h1>
      <h3 className="author">~ {author}</h3>
      {/* <p>
        To get started, click on the NAV bar above to navigate to the Help Desk
      </p> */}
      <h2 className="navigate">
        To get started, click on the NAV menu above to navigate to the Help Desk
      </h2>
      {/* <h2>Second level heading</h2>
      <ul>
        <li>Item 1</li>
      </ul> */}
    </div>
  );
};

export default Home;
