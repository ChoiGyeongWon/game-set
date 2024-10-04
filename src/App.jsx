import React from 'react';

import GameBoard from "./components/GameBoard.jsx";
import GameEnd from "./components/GameEnd.jsx";

export default function App() {
    return (
        <>
            <GameBoard />
            <GameEnd />
            <div>안녕</div>
        </>
    );
};