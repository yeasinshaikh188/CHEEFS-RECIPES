import { useState } from "react";

const Calori = ({calori}) => {
    const {header, calories, minute, id} = calori; 

    return (
        <div>
            <div>
            <div className="flex justify-around my-3">
                <span>name</span>
                <span>Time</span>
                <span>calories</span>
            </div>
            <div className="flex justify-around bg-slate-400 p-2 rounded-2xl">
            <p className="text-xs font-bold w-20">{header}</p>
            <p className="text-xs font-bold">{minute} <br /> minute</p>
            <p className="text-xs font-bold">{calories}<br /> calories </p>
            </div>
            </div>
            
        </div>
    );
};

export default Calori;