import Image from "next/image";
import React from "react";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 pt-8 pb-6 bg-lime-50">
            <div className="text-center font-bold text-xl">Automatisation d'un magasin vertical de stockage smart et connecté</div>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright ©
                            <span id="get-current-year">{new Date().getFullYear()}</span>
                            <a
                                className="text-blueGray-500 hover:text-gray-800"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {" "}
                                Elyess Haj Othmen
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
