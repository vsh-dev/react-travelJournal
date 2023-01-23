import React from "react";
import icon from "../assets/geo-icon.svg";

export default function Card(props) {
  return (
    <div className="card--container">
      <img
        src={props.imageUrl}
        alt=""
        width={125}
        height={168}
        className="card--image"
      />
      <div className="card--wrapper">
        <div className="card--location-wrapper">
          <img
            src={icon}
            alt=""
            width={7}
            height={10}
            className="card--location-icon"
          />
          <span className="card--location">{props.location}</span>
          <a href={props.googleMapsUrl} className="card--location-link">
            View on Google Maps
          </a>
        </div>
        <h2 className="card--title">{props.title}</h2>
        <span className="card--date">
          {props.startDate} - {props.endDate}
        </span>
        <p className="card--text">{props.description}</p>
      </div>
    </div>
  );
}
