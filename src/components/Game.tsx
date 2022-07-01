import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import useTimer from "../hooks/useTimer";

const GameBlock = styled.div`
  .game-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const GridWRapper = styled.div<{ amountOfBox: number }>`
  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(${Math.pow(props.amountOfBox, 0.5)} , 1fr)`};
  background: black;
  border: 2px solid black;
  gap: 2px;
  width: 500px;
  height: 500px;
`;

const GridItem = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const Game = () => {
  const [stage, setStage] = useState(1);
  const [score, setScore] = useState(0);
  const [isFail, setIsFail] = useState(false);
  const { remainTime, setRemainTime } = useTimer();

  const selectCorrect = useCallback(() => {
    setScore((prev) => prev + stage * 1000 * remainTime);
    setStage((prev) => prev + 1);
    setRemainTime(15);
  }, [stage, remainTime]);

  const selectWrong = useCallback(() => {
    setRemainTime((prev) => prev - 3);
  }, []);

  useEffect(() => {
    if (remainTime <= 0) {
      setIsFail(true);
    }
  }, [remainTime]);

  const getThreeOfDifference = useCallback((difference: number) => {
    const first = Math.floor(Math.random() * difference);
    const second = Math.floor(Math.random() * (difference - first));
    const third = difference - first - second;

    return {
      red: first,
      blue: second,
      green: third,
    };
  }, []);

  const amountOfBox = useMemo(
    () => Math.pow(Math.floor(2 + stage * 0.3), 2),
    [stage]
  );

  const getGridItems = useMemo(() => {
    const pickRandomColor = () => {
      return Math.floor(Math.random() * 256);
    };
    const red = pickRandomColor();
    const blue = pickRandomColor();
    const green = pickRandomColor();
    const collectColor = `rgb(${red},${blue},${green})`;
    const difference = 256 - stage * 5;
    const threeOfDifference = getThreeOfDifference(difference);
    const wrongColor = `rgb(${Math.abs(
      red - threeOfDifference["red"]
    )},${Math.abs(blue - threeOfDifference["blue"])},${Math.abs(
      green - threeOfDifference["green"]
    )})`;

    const result = new Array(amountOfBox).fill({
      color: collectColor,
      isWrong: false,
    });

    const randomTargetIndex = Math.floor(Math.random() * amountOfBox);
    result[randomTargetIndex] = { color: wrongColor, isWrong: true };
    return result;
  }, [stage, amountOfBox, getThreeOfDifference]);

  const restartGame = useCallback(() => {
    setIsFail(false);
    setStage(1);
    setScore(0);
    setRemainTime(15);
  }, []);

  return (
    <GameBlock>
      {isFail ? (
        <>
          <p>최종 스코어 :{score}</p>
          <button onClick={restartGame}>다시시작</button>
        </>
      ) : (
        <div className="game-wrapper">
          <p>현재 스테이지 : {stage}</p>
          <p>남은시간 : {remainTime}</p>
          <GridWRapper amountOfBox={amountOfBox}>
            {getGridItems.map((item, index) => (
              <GridItem
                key={index}
                color={item.color}
                onClick={() => {
                  if (item.isWrong) {
                    selectCorrect();
                    return;
                  }
                  selectWrong();
                }}
              />
            ))}
          </GridWRapper>
          <p>Score: {score}</p>
        </div>
      )}
    </GameBlock>
  );
};

export default Game;
