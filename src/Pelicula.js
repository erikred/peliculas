import React, { Component } from "react";

export default function Pelicula(props) {

    const actorList = getActors(props);

    const directorList = getDirectors(props);

    return (
        <div className="movie-item-style-2">
            <img src={props.img} alt="" />
            <div className="mv-item-infor">
                <h6>
                    <a href="moviesingle.html">
                        {props.title} 
                        <span>  ({props.year})  </span>
                    </a>
                </h6>
                <p className="rate"><i className="ion-android-star"></i><span>{props.rate}</span> /10</p>
                <p className="describe">{props.children}</p>
                <p className="run-time"> Run Time: {props.runTime}    .     <span>MMPA: {props.mmpa} </span>    .     <span>Release: {props.release}</span></p>
                <p>Director: {directorList}</p>
                <p>Stars: {actorList}</p>
            </div>
        </div>
    )
}

function getActors(props){
    let count=1;
    return props.actors.map((actor) => {
        if(props.actors.length > count){
            count++;
            return React.createElement("a",{href:"#"},actor+', ');
        }else{
            return React.createElement("a",{href:"#"},actor);
        }  
      });
}

function getDirectors(props){
    let count=1;
    return props.directors.map((director) => {
        if(props.directors.length > count){
            count++;
            return React.createElement("a",{href:"#"},director+', ');
        }else{
            return React.createElement("a",{href:"#"},director);
        }  
      });
}