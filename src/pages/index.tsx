import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const containerStyles = {
  position: "relative",
  textAlign: "center",
  color: "white",
}
const imageStyles = {
  width: "700px",
  height: "auto",
  maxWidth: "100%",
}
const textStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "10px",
  borderRadius: "5px",
  color: "#162545",
  fontSize: "40px",
  fontFamily: "Merriweather, serif",
  maxWidth: "450px",
}

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  textAlign: "center",
}
const paragraphStyles = {
  marginBottom: 48,
}

const quotes = [
  {
    text: "Nou breekt mijn klomp",
  },
  {
    text: "Je kan immers niet op een nat paard naar Duitsland rijden",
  },
  {
    text: "Wie een kuil graaft voor een ander, werkt meestal in loondienst",
  },
  {
    text: "Het leven is een frikandel. Je moet hem zelf speciaal maken.",
  },
  {
    text: "Van hard werken is nog nooit iemand rijk geworden, maar wel moe.",
  },
  {
    text: "Wat vandaag niet lukt, laten we morgen ook liggen.",
  },
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
      <main style={pageStyles}>
        <h1 style={headingStyles}>
          Wijsheid op tegels
        </h1>
        <div style={containerStyles}>
          <img src={randomImage.default} alt='Tegeltje van de dag' style={imageStyles}></img>
          <div style={textStyles}>{randomQuote}</div>
        </div>
      </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
    <>
      <title>Wijsheid op tegels</title>
      <link rel="icon" href="../images/favicon.ico" />
    </>
)