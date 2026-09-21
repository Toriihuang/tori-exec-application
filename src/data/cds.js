// To add real cover art, set "cover" to an image path, e.g. cover: "covers/track-01.jpg"
// To add a song, set "song" to an audio file path, e.g. song: "songs/track-01.mp3"
// "artist" and "track" are what the CD player window shows while the song plays.
// Paths are relative to the /public folder. Leave either as null to keep the placeholder behavior.
//
// SCRAPBOOK: each CD page is made of rows that alternate photo / text.
// Add a "scrapbook" list to a CD like the example on "ABOUT ME" below. Each row can have:
//   photo:   path to an image in /public/photos, e.g. "photos/about-1.jpg"
//            (use null for an empty frame, or leave the line out for a text-only row)
//   caption: handwritten text on the polaroid (optional)
//   heading: short title above the text (optional)
//   text:    the writing. Leave a blank line between paragraphs.
//            Any link starting with https:// becomes clickable automatically.
// CDs without a "scrapbook" list show placeholder rows until you add one.
//
// SONG REQUESTS: a CD with a "request" block (like the last one) shows a
// song recommendation form and your Spotify playlist instead of a scrapbook.

export const cds = [
  {
    id: 1, title: "ABOUT ME", role: "A Couple Minutes - Olivia Dean", artist: "Olivia Dean", track: "A Couple Minutes", year: "2025", medium: "R&B/Soul", label: "TR-01",
    cover: "covers/track01.png", song: "songs/A-Couple-Minutes.mp3",
    scrapbook: [
      {
        photo: "used-photos/minion.JPG",
        caption: "bello!!",
        heading: "Fun facts about me",
        text: "- I've cosplayed as a minion and ran a 5k in said cosplay \n\n - I've walked into a crime scene where a police operation was happening \n\n - I lost my wallet in the city and a stranger found it and put it in my mailbox"
      },
      {
        photo: "used-photos/freo.jpg",
        caption: "toadette tori at internals",
        heading: "My hot take",
        text: "Freo is better than Yochi"
      },
      {
        photo: "used-photos/skewer.JPG",
        caption: "skewer!",
        heading: "Best advice I've heard",
        text: "'If there's one thing you shouldn't save your money on, it should be food' \n\n - my mum"
      }
    ]
  },
  { id: 2, title: "Why I want to be Co-Pres", role: "Make Your Own Kind of Music - Cass Elliot", artist: "Cass Elliot", track: "Make Your Own Kind of Music", year: "1969", medium: "Sunshine Pop", label: "TR-02", cover: "covers/track02.png", song: "songs/Make-Your-Own.mp3", 
    scrapbook: [
      {
        photo: "used-photos/hr.JPG",
        caption: "",
        text: "Throughout my time in CSESoc, I've met so many great people as a subbie, and then I met and got closer to even more amazing people as a director, and I want to take the next step and become an executive member because I believe there is always something you can learn from the people you encounter. During this time there are also so many people that I look up to and I want to give back what they've taught me."
      },
      {
        photo: "used-photos/driver.JPG",
        caption: "",
        heading: "",
        text: "I applied to CSESoc on a complete whim, with just the thought that it would be a bit of fun. The past two years most definitely have been that but it has become so much more. In my application to be an HR subbie, I remember I included this quote..."
      },
      {
        photo: "used-photos/little-life.jpg",
        text: "“...the only trick of friendship, I think, is to find people who are better than you are—not smarter, not cooler, but kinder, and more generous, and more forgiving—and then to appreciate them for what they can teach you.”"
      },
      {
        photo: "used-photos/ash.JPG",
        caption: "",
        text: "I’ve met all the kindest, most generous and forgiving people in CSE and I want to witness the next cohorts have the same or similar experience as me and in a sense make my own kind of music."
      }, 
      {
        photo: "used-photos/outduct.JPG",
        text: "Because of that, I'm running to be the 2027 Co-president of CSESoc!"

      }
    ]
   },
  { id: 3, title: "2025 Subcommittee", role: "Saturn - SZA", artist: "SZA", track: "Saturn", year: "2024", medium: "R&B", label: "TR-03", cover: "covers/track03.png", song: "songs/saturn.mp3", 
    scrapbook: [
      {
        photo: "used-photos/jane.jpg",
        caption: "matching jane street shirts!",
        text: "This was the year I met HR 2025 and was led by the best directors and co-subcom to plan events for CSE's internal subcom. Of course they must be named: Darien, Izzy, Jenny, Chris, Emma, Amy, Julia, CJ, and Phu. This was such a new experience to me that I felt like I was on Saturn"
      },
      {
        photo: "used-photos/last-meeting.JPG",
        caption: "our last meeting ever",
        heading: "",
        text: "By the end of the year, we ran socwide, beach day, movie night, badminton, laser tag, bounce, alumni pubcrawl and picnic day."
      },
      {
        photo: "used-photos/bringherback.png",
        caption: "Movie Night banner!",
        text: "But to me, none of it ever felt like work I had to do."
      },
      {
        photo: "used-photos/beachevent.png",
        caption: "Our subbie led event, beach day",
        text: "It was such a fulfilling experience to hear people enjoy the events that we planned ourselves that it made me want to apply to be a director."
      }
    ]
  },
  { id: 4, title: "2026 Director", role: "For Once In My Life - Stevie Wonder", artist: "Stevie Wonder", track: "For Once In My Life", year: "[Year]", medium: "[Medium]", label: "TR-04", cover: "covers/track04.png", song: "songs/for-once-in-my-life.mp3",
    scrapbook: [
      {
        photo: "used-photos/emma.JPG",
        caption: "me and emma at giveon",
        text: "Directorship hit and that's when I gained a new found respect for my directors from 2025. But of course I got to meet my lovely HR subcom and manifest my visions alongside my two codirectors, Emma and Chris. This included finding solutions to more sustainably fund the society wide roadtrips, transitioning our event promotion to instagram, and highlighting gratefulness within the society with birthday posts, stories and events like random acts of kindness"
      },
      {
        photo: "used-photos/handover.JPG",
        caption: "director handover",
        text: "I worked with the best co-directors I could ask for and created a port I’m proud to say I lead."
      },
      {
        photo: "used-photos/bounce.jpeg",
        caption: "our first event of the year",
        text: "So of course they have to be named too. Laura, Leo, Issy, Mahan, Michael, Sieun, and Lucas"
      },
      {
        photo: "used-photos/chris.JPG",
        caption: "me and chris at the gym",
        text: "This year I learnt a lot about leadership and for once in my life I felt that I was possible of leadership!"
      }
    ]

  },
  { id: 5, title: "2026 Camp Leader", role: "Time of Our Lives - Pitbull and Ne-Yo", artist: "Pitbull", track: "Time of Our Lives", year: "2014", medium: "Pop", label: "TR-05", cover: "covers/track05.png", song: "songs/time-of-our-lives.mp3",
    scrapbook: [
      {
        photo: "used-photos/pickle.jpeg",
        caption: "the pickle party leaders",
        text: "First Year Camp was my first ever taste of leadership in 2026 and the only way to describe it was that it was the time of our lives!"
      },
      {
        photo: "used-photos/camp.jpeg",
        caption: "Pickle Party!",
        text: "My pickle partiers made the experience just that more worth it with all the quirky things that happened. But I still left the camp feeling like I'd miss it and I definitely did."
      }
    ]
  },
  { id: 6, title: "Visions and Goals", role: "Blessed - Daniel Caesar", artist: "Daniel Caesar", track: "Blessed", year: "2017", medium: "R&B/Soul", label: "TR-06", cover: "covers/track06.png", song: "songs/blessed.mp3",
    scrapbook: [
      {
        photo: "used-photos/rock.JPG",
        caption: "",
        text: "I want to help maintain a society that evolves with its community, creates opportunities for everyone to grow, and builds a culture where people feel connected and valued."
      },
      {
        photo: "used-photos/sunet.JPG",
        caption: "",
        text: "CSESoc is constantly changing, whether that be the industry, the community and the technology we work with. I want CSESoc to be a society that responds to those changes with the initiatives that are available to the CSE community.\n\n - Regularly seek feedback from students to understand what they currently want and need.\n\n - Create opportunities for both technical and social growth through events \n\n - Make opportunities accessible to all students with a diverse focus on different interests."
      },
      {
        photo: "used-photos/2025soc.jpeg",
        caption: "",
        text: "Maintaining positive relationships with institutions, industry, other societies and the broader CSE community can help us understand what students need and create better opportunities for them.\n\n - Create clearer channels for communication to peers and counterparts.\n\n - Maintain strong relationships with relevant institutions and external organisations."
      }, 
      {
        photo: "used-photos/2026soc.JPG",
        caption: "",
        text: "CSESoc relies heavily on the people behind the scenes so I want CSESoc to be a place where people feel that their efforts genuinely matter. \n\n - Recognise and celebrate the work that happens behind the scenes. \n\n - Foster an environment where people feel comfortable sharing ideas and foster their skills"
      }
    ]
   },
  { id: 7, title: "Contact", role: "Ring Ring Ring - Tyler, the Creator", artist: "Tyler the Creator", track: "Ring Ring Ring", year: "2025", medium: "R&B/Hip Hop", label: "TR-07", cover: "covers/track07.png", song: "songs/ring.mp3",
    scrapbook: [
      {
        photo: "used-photos/cake.jpg",
        caption: "If you have any questions!",
        text: "facebook: https://www.facebook.com/tori.huang.2025/"
      },
      {
        photo: "used-photos/w4l.jpeg",
        text: "instagram: https://www.instagram.com/toriihuang_/"
      }
    ]
   },
  { id: 8, title: "Playlist", role: "Forrest Gump - Frank Ocean", artist: "Frank Ocean", track: "Forrest Gump", year: "2012", medium: "R&B/Soul", label: "TR-08", cover: "covers/track08.png", song: "songs/forrest-gump.mp3",
    request: {
      heading: "Recommend me a song!",
      text: "Add a song to my playlist. I'll listen to every one.",
      // Paste your Formspree form link here (see instructions)
      formEndpoint: "https://formspree.io/f/xzezrpqg",
      // Paste your public Spotify playlist link here
      playlistUrl: "https://open.spotify.com/playlist/1oNL7cp4KzVndeWmuR8ld8?si=154920184b8049ff"
    }
  }
]

// Shown on any CD page that doesn't have its own "scrapbook" list yet
export const placeholderScrapbook = [
  { photo: null, heading: "", placeholder: true, text: "[Write the main description here — what this is, why it matters, and the story behind it.]" },
  { photo: null, heading: "", placeholder: true, text: "[Add more detail here — a specific moment, what you learned, or what you'd bring as Co-President.]" },
  { photo: null, heading: "", placeholder: true, text: "[One more story or photo to finish the page.]" }
]
