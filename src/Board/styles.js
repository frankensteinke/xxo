import styled from "styled-components";

const Container = styled.div`
  background-color: #444;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 400px;
  margin: 25px auto 0;
  place-items: center;
  width: 400px;
`;

Container.Tile = styled.button`
  background-color: #fff;
  border: none;
  font-size: 40px;
  height: 100%;
  outline: none;
  width: 100%;
`;

const Scoreboard = styled.div`
  background-color: #555;
  box-sizing: border-box;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px 20px 5px;
  width: 400px;
  margin: auto;
`;

Scoreboard.Title = styled.div`
  justify-self: start;
`;

Scoreboard.Players = styled.div`
  justify-self: end;
`;

Scoreboard.Players.Player = styled.div`
  display: inline-block;
  font-size: 20px;
  font-weight: bold;

  ${(props) =>
    props.$active &&
    `
      color: yellow;
    `}

  & + & {
    margin-left: 8px;
  }
`;

export { Container, Scoreboard };
