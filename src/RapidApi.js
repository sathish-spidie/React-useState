import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";

import unirest from "unirest";

export const RapidApi = () => {
  unirest
    .post(
      "https://GoogleMapsDistanceMatrixstefan-skliarovV1.p.rapidapi.com/getBicyclingDistanceMatrix"
    )
    .header(
      "X-RapidAPI-Host",
      "GoogleMapsDistanceMatrixstefan-skliarovV1.p.rapidapi.com"
    )
    .header(
      "X-RapidAPI-Key",
      "b4f782b7fcmshbee4a9e51f76657p1b6d5fjsn159ae27b9e92"
    )
    .header("Content-Type", "application/x-www-form-urlencoded")
    .end(function(result) {
      console.log(result.status, result.headers, result.body);
    });

  return (
    <div className="App">
      <div>
        <h3>RapidApi</h3>
        <div>{/* <img src={imageUrl} alt="avatar" /> */}</div>
      </div>
    </div>
  );
};
