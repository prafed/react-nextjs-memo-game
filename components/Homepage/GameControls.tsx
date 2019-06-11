import React from 'react'
import { GAME_STATUS } from './Game'

const GameControls: any = (props: any) => {
  switch (props.gameStatus) {
    case GAME_STATUS.MEMORIZING:
      return <p>Memorise time: {props.timeLeft}</p>
      break
    case GAME_STATUS.IN_PROGRESS:
      return (
        <>
          <p>Targets Left: {props.targetsLeft}</p>
          <p>Misses Left: {props.attemptsLeft}</p>
        </>
      )
      break
    case GAME_STATUS.LOST:
      return (
        <>
          <h3>You Lost!</h3>
          <p>Targets Left: {props.targetsLeft}</p>
          <p>Misses Left: {props.attemptsLeft}</p>
          <button onClick={props.startNewGame}>Start New Game</button>
        </>
      )
      break
    case GAME_STATUS.WON:
      return (
        <>
          <h3>You Won!</h3>
          <p>Targets Left: {props.targetsLeft}</p>
          <p>Misses Left: {props.attemptsLeft}</p>
          <button onClick={props.startNewGame}>Start New Game</button>
        </>
      )
      break
    default:
      return
  }
}

export default GameControls
