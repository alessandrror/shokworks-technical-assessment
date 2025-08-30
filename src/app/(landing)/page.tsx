import styles from "./page.module.css";
import Card from "../../components/card/card";
import Carousel from "../../components/carousel/carousel";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const articles = [
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "BBC News",
    title: "BBC reveals web of spammers profiting from AI Holocaust images",
    description:
      "The BBC has found an international network of content creators profiting from AI generated posts on Facebook.",
    url: "https://www.bbc.co.uk/news/articles/ckg4xjk1g1xo",
    urlToImage:
      "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/1d36/live/c057e440-8424-11f0-b4be-b58d78baadd0.jpg",
    publishedAt: "2025-08-29T00:52:23.4121868Z",
    content:
      "To understand why these networks are mass producing specific types of content, the BBC spoke with a Pakistani man Fazal Rahman, who is enrolled in several social media content monetisation schemes an… [+1604 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "BBC News",
    title: "The Druids Oak is 800 years old - can it help save forests?",
    description:
      "Scientists are decoding the DNA of Britain’s ancient oaks to crack the secrets of their superpowers.",
    url: "https://www.bbc.co.uk/news/articles/cx2xz8r7egpo",
    urlToImage:
      "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/364c/live/7243e380-8366-11f0-b3de-c13d348c14aa.jpg",
    publishedAt: "2025-08-29T00:52:21.5220318Z",
    content:
      'Dr Ed Pyne snips a leaf from the Druids Oak, an 800-year-old tree that has watched over this woodland in Buckinghamshire for centuries, enduring droughts, storms, heatwaves and more.\r\n"We know that t… [+808 chars]',
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "BBC News",
    title: "Children offered chickenpox vaccine on NHS",
    description:
      "All young children in England and Wales will be offered a free chickenpox vaccine by the NHS from January 2026.",
    url: "https://www.bbc.co.uk/news/articles/c860n445vyxo",
    urlToImage:
      "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/1cdd/live/0a171f00-8421-11f0-8920-cb71bf7274c6.jpg",
    publishedAt: "2025-08-29T00:22:15.7862428Z",
    content:
      "Chickenpox is generally mild but can be very severe for some people.\r\nPregnant women are particularly at risk as it can cause complications for both the mother and her baby.\r\nVery young infants and a… [+783 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "BBC News",
    title: "Ministers didn't do cost review of English council mergers",
    description:
      "The government relied on a report by a lobbyist group that now says reorganisation could make no savings.",
    url: "https://www.bbc.co.uk/news/articles/cj9wxnlnrxdo",
    urlToImage:
      "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/ae83/live/340ece50-8360-11f0-b3de-c13d348c14aa.jpg",
    publishedAt: "2025-08-29T00:07:22.8965852Z",
    content:
      'Ministers talked up the potential to save money as one of the main benefits of local government reorganisation.\r\nSpeaking to MPs in June, Rayner said: "Local government reorganisation will lead to be… [+1626 chars]',
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "BBC News",
    title:
      "George Clooney film Jay Kelly praised as 'midlife crisis masterpiece'",
    description:
      "Netflix’s Jay Kelly sees the actor portray an ageing movie star, drawing parallels with his own life.",
    url: "https://www.bbc.co.uk/news/articles/c4gzxvr7zzpo",
    urlToImage:
      "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/b128/live/dd14b0e0-8456-11f0-9cf6-cbf3e73ce2b9.jpg",
    publishedAt: "2025-08-28T23:37:23.209933Z",
    content:
      "The film sees its leading man suddenly down tools, a week before he's due to start shooting a movie, after a string of setbacks including the death of a close friend and a heated encounter with his f… [+1476 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "BBC News",
    title:
      "Minneapolis school attacker 'obsessed with idea of killing children', officials say",
    description:
      "Investigators say a specific motive remains unclear, though the attacker expressed hate towards many groups.",
    url: "https://www.bbc.co.uk/news/articles/c4g0lyny7ydo",
    urlToImage:
      "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/6f56/live/8d18c1c0-8452-11f0-b9ad-e5f9f0d91f43.jpg",
    publishedAt: "2025-08-28T22:37:23.0371923Z",
    content:
      "The suspect, identified as Robin Westman, is believed to have approached the side of the Annunciation Church, which also houses a school, and fired dozens of shots through the windows using three fir… [+3036 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "BBC News",
    title: "MSP locked out of parliament after secret toilet camera claims",
    description:
      "The Daily Record newspaper has reported that MSP Colin Smyth placed a secret camera in a toilet at Holyrood.",
    url: "https://www.bbc.co.uk/news/articles/c9wy40rxrvxo",
    urlToImage:
      "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/5a7f/live/0d34a750-8450-11f0-a3c1-59d14135dc1e.jpg",
    publishedAt: "2025-08-28T22:07:17.2410787Z",
    content:
      "In an email sent to Holyrood staff, the Scottish Parliament's chief Executive David McGill said: \"We recognise the nature of the criminal charges and the ongoing investigation may be upsetting for co… [+696 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "BBC Sport",
    title: "Manchester United: Ruben Amorim retains backing of the club",
    description:
      "Manchester United head coach Ruben Amorim is understood to retain the support of the club ownership despite last night's shock Carabao Cup defeat at League Two Grimsby.",
    url: "https://www.bbc.co.uk/sport/football/articles/c3v3470zl3lo",
    urlToImage:
      "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/69e2/live/a1ac4680-841f-11f0-84c8-99de564f0440.jpg",
    publishedAt: "2025-08-28T20:37:22.8660095Z",
    content:
      'The defeat at Grimsby was the first time United had lost to fourth-tier opposition, prompting club legend Wayne Rooney to say it was "clear for everyone to see that there\'s something not right" at th… [+3490 chars]',
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "BBC News",
    title:
      "European leaders outraged after Russian strikes kill 21 and damage EU's HQ",
    description:
      "The overnight attacks destroyed a block of flats and also caused damage to the EU's delegation offices.",
    url: "https://www.bbc.co.uk/news/articles/cvg3y7m2gz0o",
    urlToImage:
      "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/9641/live/e657edf0-83ef-11f0-ab3e-bd52082cd0ae.jpg",
    publishedAt: "2025-08-28T18:37:14.8951036Z",
    content:
      "The overnight attacks followed a US-led diplomatic offensive aimed at bringing an end to the war and infuriated the UK as well as the EU.\r\nUK Prime Minister Sir Keir Starmer accused Russia's Vladimir… [+938 chars]",
  },
  {
    source: {
      id: "bbc-news",
      name: "BBC News",
    },
    author: "BBC News",
    title: "Price of Mounjaro could be discounted in UK pharmacies",
    description:
      "The rebate allays fears of a 170% price rise but patients are warned the cost of the drug will still jump.",
    url: "https://www.bbc.co.uk/news/articles/cvg3ykg4jrro",
    urlToImage:
      "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/1a09/live/413ae630-8429-11f0-b3d9-83a6f59c5f86.jpg",
    publishedAt: "2025-08-28T17:37:26.3819621Z",
    content:
      "Eli Lilly originally said the UK price of Mounjaro had to increase to be more in line with higher prices in Europe and the US.\r\nUS President Donald Trump had previously complained about the high cost… [+1719 chars]",
  },
];

export default function LandingPage() {
  return (
    // Speciality Of Us Section
    <section className={styles.section}>
      <h1 className={`${montserrat.className} ${styles.title}`}>
        <span>What is the</span>
        <br />
        <span>Speciality Of Us?</span>
      </h1>
      <Carousel>
        {articles.map(article => {
          const {
            source: { id },
            title,
            description,
            urlToImage,
          } = article;

          const titleLength = title.split(" ");
          const slicedTitle = titleLength.slice(0, titleLength.length / 2).join(" ");
          const subtitle = titleLength.slice(titleLength.length / 2).join(" ");

          return (
            <Card
              key={id}
              image={urlToImage}
              title={slicedTitle}
              subtitle={subtitle}
              description={description}
            />
          );
        })}
      </Carousel>
    </section>
  );
}
