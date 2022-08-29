import React, { useEffect, useState } from "react";
import axios from "axios";

import "./random.css";

const RandomQuotes = () => {
  const [click, setClick] = useState(0);
  const [quote, setQuote] = useState([]);

  const getRandom = async () => {
    try {
      const res = await axios.get(
        "https://quote-garden.herokuapp.com/api/v3/quotes/random"
      );
      setQuote(res.data.data[0]);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getRandom();
  }, [click]);

  return (
    <>
      <div className="container">
        <div className="quotecontainer">
          <div className="quotetext">{quote.quoteText}</div>
          <div className="authorcontainer">
            <div className="quoteauthor">{quote.quoteAuthor}</div>
            <div className="quotegenre">{quote.quoteGenre}</div>
          </div>
          <div className="buttoncontainer" onClick={() => {
                setClick(click + 1);
              }}>Next Quote
          </div>
        </div>
      </div>
    </>
  );
};
export default RandomQuotes;
