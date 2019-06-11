import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const Container = styled.div`
  position: relative;
  width: 25vw;
  height: 25vw;
  min-width: 300px;
  min-height: 300px;
  overflow: hidden;
  border: 12px solid #6d5720;
  border-radius: 12px;
  float: left;
  margin-right: 20px;
`

const Grid: any = styled.div`
  display: grid;
  ${({ xSize, ySize }: any) => css`
    grid-template-columns: repeat(${xSize}, ${100 / xSize}%);
    grid-template-rows: repeat(${ySize}, ${100 / ySize}%);
  `}
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const GridItem: any = styled.div`
  z-index: 50;
  cursor: pointer;
  background: none;
  box-shadow: inset 2px 2px 0 rgba(255, 255, 255, 0.05),
    inset -2px -2px 0 #665235;
  ${({ showTarget }: any) =>
    showTarget && 'background-color: #2eaeae !important;'}
  ${({ isMiss }: any) => isMiss && 'background-color: #ee97cd !important;'}
`

const GameGrid: any = ({
  xSize,
  ySize,
  targets,
  showTargets,
  onHitTarget,
  targetsHit
}: any) => {
  const gridItems = []

  for (let x = 1; x <= xSize; x++) {
    for (let y = 1; y <= ySize; y++) {
      const key = `${x}-${y}`
      const isTarget = targets[key] ? true : false
      const isHit = targetsHit[key] ? true : false
      gridItems.push(
        <GridItem
          key={key}
          value={key}
          showTarget={(isTarget && showTargets) || isHit}
          onClick={onHitTarget}
          isMiss={!isTarget && isHit}
        />
      )
    }
  }

  return (
    <Container>
      <Grid xSize={xSize} ySize={ySize}>
        {gridItems}
      </Grid>
    </Container>
  )
}

export default GameGrid
