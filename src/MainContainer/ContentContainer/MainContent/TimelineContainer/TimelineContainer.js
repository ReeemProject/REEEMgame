import React, { useContext } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Context from '../../../../Context/Context'
import { Container, Label, LabelContainer } from './TimelineContainer.style'

export const TimelineContainer = () => {
  const [state] = useContext(Context)

  const now = parseInt(state.currentDecision)
  const years = state.timeline
  var prevYear = 2010
  const progressInstance = (
    <Container>
      <LabelContainer>
        {years.map(function(year) {
          //Prevent labels too close to each other
          if (year - prevYear >= 5) {
            prevYear = year
            return (
              <Label year={year} min={2015} max={2050} key={'label' + year}>
                {year}
              </Label>
            )
          } else {
            return null
          }
        })}
      </LabelContainer>
      <ProgressBar now={now} label={`${now}`} min={2015} max={2050} />
    </Container>
  )
  return progressInstance
}