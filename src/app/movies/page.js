import React from "react";

const Movie = async () => {
  const url = process.env.RAPID_URL;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": process.env.RAPID_KEY,
      "X-RapidAPI-Host": process.env.RAPID_HOST,
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  return <div>Movie Page</div>;
};

export default Movie;
