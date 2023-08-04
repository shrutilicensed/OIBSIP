import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <img
        src="https://i.ibb.co/2dWsz2k/Group-2.png"
        alt="Group-2"
        border="0"
        className="header-image"
      />
      <h1 className="special-heading">
        {" "}
        A Tribute to the Japanese Volleyball Manga
      </h1>
      <div className="about-section">
        <img
          src="https://i.ibb.co/XZQFBbt/20220712-001230.jpg"
          alt="20220712-001230"
          border="0"
          className="image-about-section"
        />
        <div className="about-text">
          <p>
            Haikyu !! is a popular Japanese Volleyball Manga series created by
            manga artist, <strong>Haruichi Furudate</strong> . This series was
            released in order to boost the popularity of volleyball sports among
            the Japanese people. Ten years later, this series has inspired many
            young people all across the world and brought them closer to
            volleyball.{" "}
          </p>
          <p>
            {" "}
            Haikyu!! is finished with 43 manga volumes. It also has an ongoing
            anime and screen-play adaptation.
          </p>
          <p>
            The appeal of Haikyuu lies in the fact that each and every character
            is a protagonist of their own. The immaculate storytelling, the
            details of the sport, the different perspectives of many players on
            and off the court, the humorous dialogue exchanges and not to
            mention the engaging drawing style, all these thingsand many more
            features come together to make this series so great.{" "}
          </p>
          <p>
            As typical for many sports series to promote “team spirit” as their
            major lesson, Haikyu!! takes it one step further and puts
            “self-improvement” over the same pedestal. Character growth,
            mindset, rivalry, friendship, personal and work habits are taken
            into account which gives the characters a more dimensional view.
            There are many things that one can relate to, be they from sports
            background or not.{" "}
          </p>
        </div>
      </div>
      <FeaturedQuotes />
    </div>
  );
}

// export default App;

function FeaturedQuotes() {
  const featuredQuoteList = [
    {
      quote:
        "In terms of physique and ability, I know I'm just a normal person. When I was little, I definitely thought I was a genius, I sometimes think I am one even now. But I'll never be 180 cm tall, and while I have faith in my physical abilities, in this volleyball club, I'm not the best at anything. But that's never been an excuse for me to give up. Usually I don't think about this stuff, but every once in a while, my positivity crumbles. And I end up thinking that I'm nothing but average..... But to my average self I ask, Do you really have time to be looking down like that ?",
      character: "Ryunosuke Tanaka",
      id: 0,
      image: "https://i.ibb.co/QMd3JJV/tanaka.png",
    },
    {
      quote:
        "Every so often there will be someone who thinks that people like Atsumu were good from the get-go. If I practiced something from 1 to 10 every day, people like him would have done it 1 to 20. Or, they would have done the same 10 but in a more efficient or concentrated manner. They might also ask, instead of 1-10, how about I tried from A-Z? What would happen then? Now doesn't it sounds interesting? They're the kind of people who think about stuff like that. Even if they fail, even if they are hated and get ostracised by others, no matter if they're right or wrong, even if they subvert something the rest of us hold in high regard, they're the kind of people who can't sit still without giving it a go. Even if they start coughing up blood from their lungs, they're the kind of people who want to keep running, no matter what. There's going to be a lot of people in this world who make you go, wow, I will never be able to defeat them and it is only natural that you think they are amazing people. I think that to be able to keep charging ahead is a talent in itself. You can call people like them whatever you like, the term genius is not exactly an insult. That said, to think they were good from the get go is to condemn yourself to a predetermined defeat without even playing against them and I think it is very rude.",
      character: "Kita Shinsuke",
      id: 1,
      image: "https://i.ibb.co/QpBLH9y/kita.png",
    },
    {
      quote:
        "When you dedicate yourself to pushing higher, you’re going to have to expect the hard times to outweigh the fun. It gets to the point where you begin to believe that if it isn’t hard, if it isn’t rough, then you aren’t giving everything you can. Yet, without any rhyme or reason, from time to time, something fun will just hit… out of nowhere. It’s that fun that keeps pulling me onward. Volleyball is fun. Every time I forget that, it comes back to remind me.",
      character: "Oikawa Tooru",
      id: 2,
      image: "https://i.ibb.co/hC0c1b1/oikawa.png",
    },
    {
      quote:
        "Losing does not means you are weak, Losing means there's room for growth",
      character: "Takeda Ittetsu",
      id: 3,
      image: "https://i.ibb.co/mNXSqHd/takeda.png",
    },
    {
      quote:
        "One who cannot see the enemy in front of them, cannot defeat the enemy that lies beyond",
      character: "Hajime Iwaizumi",
      id: 4,
      image: "https://i.ibb.co/0sLm006/iwaizumi.png",
    },
  ];

  const [openId, setOpenId] = useState(0);
  return <div className="featured-quotes-container"></div>;
}
