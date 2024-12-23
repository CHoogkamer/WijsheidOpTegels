import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  text-align: center;
  color: white;
`

const Image = styled.img`
  width: 600px;
  height: auto;
  max-width: 100%;

  @media (max-width: 600px) {
    width: 100%;
  }
`

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 5px;
  color: #162545;
  font-size: 40px;
  font-family: Merriweather, serif;
  max-width: 400px;
    word-wrap: break-word;

  @media (max-width: 600px) {
    font-size: 20px;
    padding: 5px;
  }
`

const Page = styled.main`
  color: #232129;
  padding: 16px 80px;
  font-family: -apple-system, Roboto, sans-serif, serif;
  max-width: 85vw;

  @media (max-width: 600px) {
    padding: 20px;
  }
`

const Heading = styled.h1`
  text-align: center;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`

const quotes = [
  { text: "Nou breekt mijn klomp" },
  { text: "Je kan immers niet op een nat paard naar Duitsland rijden" },
  { text: "Wie een kuil graaft voor een ander, werkt meestal in loondienst" },
  { text: "Het leven is een frikandel. Je moet hem zelf speciaal maken." },
  { text: "Van hard werken is nog nooit iemand rijk geworden, maar wel moe." },
  { text: "Wat vandaag niet lukt, laten we morgen ook liggen." },
]

const images = [
  require('../images/tegeltjes/tegel1.svg'),
  require('../images/tegeltjes/tegel2.svg'),
  require('../images/tegeltjes/tegel3.svg'),
  require('../images/tegeltjes/tegel4.svg'),
  require('../images/tegeltjes/tegel5.svg')
]

const IndexPage: React.FC<PageProps> = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)].text;
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
      <Page>
        <Heading>Wijsheid op tegels</Heading>
        <Container>
          <Image src={randomImage.default} alt='Tegeltje van de dag' />
          <Text>{randomQuote}</Text>
        </Container>
      </Page>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
    <>
        <title>Wijsheid op tegels</title>
    </>
)