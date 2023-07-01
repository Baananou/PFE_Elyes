import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Footer() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const weekdays = [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
    ];
    const formattedDate = `${weekdays[currentDate.getDay()]} ${currentDate.toLocaleDateString("fr-FR")}`;

    const currentTime = currentDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });

    return (
        <footer className="flex items-center justify-between px-2 py-3 bg-lime-50">
            <div className="container px-8 mx-auto flex flex-wrap items-center justify-between">
                <Image src={"/c2i.png"} alt="c2i" width={150} height={150} />
                <div className="font-bold uppercase">Elyess Haj Othmen</div>
                <div className="font-semibold">{formattedDate}</div>
                <div className="font-semibold">{currentTime}</div>
                <Image src={"/draxlmaier.png"} alt="draxlmaier" width={150} height={150} />
                <Image src={"/poly.png"} alt="poly" width={100} height={100} />
            </div>
        </footer>
    );
}
