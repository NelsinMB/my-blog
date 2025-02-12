"use client";
import TicTacToe from "../../components/Tictactoe";

export default function Page() {
  return (
    <div className = "container"
      style={{
        display: "flex",
        justifyContent: "center", // centers horizontally
        alignItems: "center",     // centers vertically
        height: "100vh"           // makes the div full viewport height
      }}
    >
      <TicTacToe />
    </div>
  );
}
