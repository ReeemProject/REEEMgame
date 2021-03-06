import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const IndicatorHeader = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
`

const countryColorsCSS = countryColors =>
  countryColors.map(
    country => `
    #${country.code} {
      fill ${country.color};
      :hover {fill: #80b3c3;}
    }
    `
  )

export const StyledEurope = styled.div`
  ${props => countryColorsCSS(props.colors)}
  fill: #cccccc;
  stroke: gray;
  stroke-width: 10;
  stroke-miterlimit: 22.9256;
  position: relative;
`
