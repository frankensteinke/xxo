import { Machine, assign } from "xstate";

const hasWon = (context, _) => {
  const isHorizontalMatch = context.board.some((row) =>
    row.every((val) => val && val === row[0])
  );

  if (isHorizontalMatch) {
    return true;
  }

  for (let i = 0; i < context.board.length; i++) {
    const isVerticalMatch = context.board.every(
      (row) => row[0] && row[0] === row[i]
    );

    if (isVerticalMatch) {
      return true;
    }
  }

  return false;
};

const ticTacToeMachine = Machine(
  {
    id: "tictactoe",
    initial: "playing",
    context: {
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      marker: "X",
    },
    states: {
      playing: {
        on: {
          "": [{ target: "completed", cond: "hasWon" }],
          PLAY: {
            actions: ["placeMarker", "updateMarker"],
          },
        },
      },
      completed: {
        type: "final",
      },
    },
  },
  {
    actions: {
      placeMarker: assign({
        board: (context, event) => {
          return context.board.map((row, rowIndex) =>
            row.map((val, colIndex) =>
              rowIndex === event.row && colIndex === event.col
                ? context.marker
                : val
            )
          );
        },
      }),
      updateMarker: assign({
        marker: (context, _) => (context.marker === "X" ? "O" : "X"),
      }),
    },
    guards: {
      hasWon,
    },
  }
);

export default ticTacToeMachine;
