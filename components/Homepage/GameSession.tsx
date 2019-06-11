import React, { useState, useEffect } from 'react'
import Game from './Game'
import { getIntWithinRange, calculateTargets } from './helpers/sessionHelpers'

const X_RANGE = [4, 7]
const Y_RANGE = [4, 7]
const TARGETS_RANGE = [4, 6]
const MEMO_TIME = 4

const GameSession: any = () => {
  //Will be recalculated on mount
  const [xSize, setXSize] = useState(0)
  const [ySize, setYSize] = useState(0)
  const [targets, setTargets] = useState({})
  const [attempts, setAttempts] = useState(0)
  const [memoTime, setMemoTime] = useState(0)

  const setupNewGame = () => {
    let xSize = getIntWithinRange(X_RANGE[0], X_RANGE[1])
    let ySize = getIntWithinRange(Y_RANGE[0], Y_RANGE[1])
    let targetsCount = getIntWithinRange(TARGETS_RANGE[0], TARGETS_RANGE[1])
    let targets = calculateTargets(xSize, ySize, targetsCount)

    setAttempts(Math.floor(targetsCount / 2))
    setMemoTime(MEMO_TIME)
    setXSize(xSize)
    setYSize(ySize)
    setTargets(targets)
  }

  useEffect(() => {
    setupNewGame()
  }, [])

  const startNewGame = () => {
    setupNewGame()
  }

  return (
    <Game
      xSize={xSize}
      ySize={ySize}
      targets={targets}
      memoTime={memoTime}
      startNewGame={startNewGame}
      attempts={attempts}
    />
  )
}

export default GameSession
