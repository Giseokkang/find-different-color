import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import Game from "../components/Game";

const GameContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Main: NextPage = () => {
  const [isGameOn, setIsGameOn] = useState(false);

  return (
    <GameContainer>
      {isGameOn ? (
        <Game />
      ) : (
        <button
          onClick={() => {
            setIsGameOn(true);
          }}
        >
          게임 시작
        </button>
      )}
    </GameContainer>
  );
};

export default Main;
