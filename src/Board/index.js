import React from "react";
import { useMachine } from "@xstate/react";

import machine from "./machine";
import { Container, Scoreboard } from "./styles";

function Board() {
  const [current, send] = useMachine(machine);
  return (
    <div className="App">
      {current.value === "completed" && "GAME OVER"}
      <Scoreboard>
        <Scoreboard.Title>xxo</Scoreboard.Title>
        <Scoreboard.Players>
          <Scoreboard.Players.Player $active={current.context.marker === "X"}>
            X
          </Scoreboard.Players.Player>
          <Scoreboard.Players.Player $active={current.context.marker === "O"}>
            O
          </Scoreboard.Players.Player>
        </Scoreboard.Players>
      </Scoreboard>
      <Container>
        {current.context.board.map((row, rowIndex) =>
          row.map((val, colIndex) => (
            <Container.Tile
              onClick={() => {
                send("PLAY", { row: rowIndex, col: colIndex });
              }}
              key={`${rowIndex}-${colIndex}`}
              disabled={val}
            >
              {val}
            </Container.Tile>
          ))
        )}
      </Container>
    </div>
  );
}

export default Board;
