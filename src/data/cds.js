// To add real cover art, set "cover" to an image path, e.g. cover: "covers/track-01.jpg"
// To add a song, set "song" to an audio file path, e.g. song: "songs/track-01.mp3"
// Paths are relative to the /public folder. Leave either as null to keep the placeholder behavior.
//
// SCRAPBOOK: each CD page is made of rows that alternate photo / text.
// Add a "scrapbook" list to a CD like the example on "ABOUT ME" below. Each row can have:
//   photo:   path to an image in /public/photos, e.g. "photos/about-1.jpg"
//            (use null for an empty frame, or leave the line out for a text-only row)
//   caption: handwritten text on the polaroid (optional)
//   heading: short title above the text (optional)
//   text:    the writing. Leave a blank line between paragraphs.
// CDs without a "scrapbook" list show placeholder rows until you add one.

export const cds = [
  {
    id: 1, title: "ABOUT ME", role: "A Couple Minutes - Olivia Dean", year: "[Year]", medium: "[Medium]", label: "TR-01",
    cover: "covers/track01.png", song: "songs/A-Couple-Minutes.mp3",
    scrapbook: [
      {
        photo: null,
        caption: "[caption]",
        heading: "[Heading]",
        text: "[Write a few sentences here. This row has the photo on the left.]"
      },
      {
        photo: null,
        caption: "[caption]",
        heading: "[Heading]",
        text: "[This row has the photo on the right.]\n\n[A blank line starts a new paragraph.]"
      },
      {
        photo: null,
        caption: "[caption]",
        heading: "[Heading]",
        text: "[Add as many rows as you like — they keep alternating.]"
      }
    ]
  },
  { id: 2, title: "Why I want to be Co-Pres", role: "Make Your Own Kind of Music - Cass Elliot", year: "[Year]", medium: "[Medium]", label: "TR-02", cover: "covers/track02.png", song: "songs/Make-Your-Own.mp3" },
  { id: 3, title: "2025 Subcommittee", role: "Saturn - SZA", year: "[Year]", medium: "[Medium]", label: "TR-03", cover: "covers/track03.png", song: "songs/saturn.mp3" },
  { id: 4, title: "2026 Director", role: "For One In My Life - Stevie Wonder", year: "[Year]", medium: "[Medium]", label: "TR-04", cover: "covers/track04.png", song: "songs/for-once-in-my-life.mp3" },
  { id: 5, title: "2026 Camp Leader", role: "Time of Our Lives - Pitbull", year: "[Year]", medium: "[Medium]", label: "TR-05", cover: "covers/track05.png", song: "songs/time-of-our-lives.mp3" },
  { id: 6, title: "Visions and Goals", role: "Blessed - Daniel Caesar", year: "[Year]", medium: "[Medium]", label: "TR-06", cover: "covers/track06.png", song: "songs/blessed.mp3" },
  { id: 7, title: "Contact", role: "Ring Ring Ring - Tyler the Creator", year: "[Year]", medium: "[Medium]", label: "TR-07", cover: "covers/track07.png", song: "songs/ring.mp3" },
  { id: 8, title: "Playlist", role: "Forrest Gump - Frank Ocean", year: "[Year]", medium: "[Medium]", label: "TR-08", cover: "covers/track08.png", song: "songs/forrest-gump.mp3" }
]

// Shown on any CD page that doesn't have its own "scrapbook" list yet
export const placeholderScrapbook = [
  { photo: null, heading: "", placeholder: true, text: "[Write the main description here — what this is, why it matters, and the story behind it.]" },
  { photo: null, heading: "", placeholder: true, text: "[Add more detail here — a specific moment, what you learned, or what you'd bring as Co-President.]" },
  { photo: null, heading: "", placeholder: true, text: "[One more story or photo to finish the page.]" }
]
