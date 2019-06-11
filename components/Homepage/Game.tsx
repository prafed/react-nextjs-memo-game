import React, { useState, useEffect } from 'react'
import GameGrid from './GameGrid'
import GameControls from './GameControls'
import useInterval from './helpers/useInterval'

export const GAME_STATUS = {
  WON: 1,
  LOST: 2,
  IN_PROGRESS: 3,
  MEMORIZING: 4
}

interface GameProps {
  xSize: string
  ySize: string
  targets: any
  memoTime: number
  startNewGame: () => void
  attempts: number
}

const Game: any = ({
  targets,
  xSize,
  ySize,
  memoTime,
  startNewGame,
  attempts
}: GameProps) => {
  const [targetsHit, setTargetsHit] = useState({}) as [any, any]
  const [timeLeft, setTimeLeft] = useState(memoTime)
  const [targetsLeft, setTargetsLeft] = useState(Object.keys(targets).length)
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.MEMORIZING)
  const [attemptsLeft, setAttemptsLeft] = useState(attempts)

  const onHitTarget = (event: any) => {
    let clickedTile = event.target.getAttribute('value')

    //If this target has already been hit do not do anything
    //If the game is not in progress do not do anything
    if (targetsHit[clickedTile] || gameStatus !== GAME_STATUS.IN_PROGRESS)
      return

    //Add the currently clicked tile to the "hit" list
    let newHitTiles: any = { ...targetsHit }
    newHitTiles[clickedTile] = true

    setTargetsHit(newHitTiles)

    if (targets[clickedTile]) {
      //If it was a hit - decrement the targetsLeft
      setTargetsLeft(targetsLeft - 1)
      if (targetsLeft - 1 === 0) {
        setGameStatus(GAME_STATUS.WON)
      }
    } else {
      //If it was a miss decrement the attemptsLeft
      setAttemptsLeft(attemptsLeft - 1)
      if (attemptsLeft - 1 === 0) {
        setGameStatus(GAME_STATUS.LOST)
      }
    }
  }

  useEffect(() => {
    setTargetsLeft(Object.keys(targets).length)
    setAttemptsLeft(attempts)
    setTimeLeft(memoTime)
    setGameStatus(GAME_STATUS.MEMORIZING)
  }, [targets, attempts, memoTime])

  const clearGame = () => {
    startNewGame()
    setTargetsHit({})
    setTimeLeft(memoTime)
    setTargetsLeft(Object.keys(targets).length)
    setGameStatus(GAME_STATUS.MEMORIZING)
    setAttemptsLeft(attempts)
  }

  useInterval(() => {
    if (timeLeft > 0) {
      setTimeLeft(timeLeft - 1)
    }

    //Set the game in progress as soon as the timer runs out
    if (timeLeft - 1 === 0 && gameStatus !== GAME_STATUS.IN_PROGRESS) {
      setGameStatus(GAME_STATUS.IN_PROGRESS)
    }
  }, 1000)

  return (
    <>
      <GameGrid
        xSize={xSize}
        ySize={ySize}
        targets={targets}
        targetsHit={targetsHit}
        showTargets={timeLeft > 0}
        onHitTarget={onHitTarget}
      />
      <GameControls
        startNewGame={clearGame}
        gameStatus={gameStatus}
        timeLeft={timeLeft}
        targetsLeft={targetsLeft}
        attemptsLeft={attemptsLeft}
      />
    </>
  )
}

export default Game
