// To add real cover art, set "cover" to an image path, e.g. cover: "covers/track-01.jpg"
// To add a song, set "song" to an audio file path, e.g. song: "songs/track-01.mp3"
// Paths are relative to the /public folder. Leave either as null to keep the placeholder behavior.

const base = import.meta.env.BASE_URL

export const cds = [
  { id: 1, title: "ABOUT ME", role: "A Couple Minutes - Olivia Dean", year: "[Year]", medium: "[Medium]", label: "TR-01", cover: "covers/track01.png", song: "songs/A-Couple-Minutes.mp3" },
  { id: 2, title: "Why I want to be Co-Pres", role: "Make Your Own Kind of Music - Cass Elliot", year: "[Year]", medium: "[Medium]", label: "TR-02", cover: `${base}covers/track02.png`, song: `${base}songs/Make-Your-Own.mp3` },
  { id: 3, title: "2025 Subcommittee", role: "Saturn - SZA", year: "[Year]", medium: "[Medium]", label: "TR-03", cover: `${base}covers/track03.png`, song: `${base}songs/saturn.mp3` },
  { id: 4, title: "2026 Director", role: "For One In My Life - Stevie Wonder", year: "[Year]", medium: "[Medium]", label: "TR-04", cover: `${base}covers/track04.png`, song: `${base}songs/for-once-in-my-life.mp3` },
  { id: 5, title: "2026 Camp Leader", role: "Time of Our Lives - Pitbull", year: "[Year]", medium: "[Medium]", label: "TR-05", cover: `${base}covers/track05.png`, song: `${base}songs/time-of-our-lives.mp3` },
  { id: 6, title: "Visions and Goals", role: "Blessed - Daniel Caesar", year: "[Year]", medium: "[Medium]", label: "TR-06", cover: `${base}covers/track06.png`, song: `${base}songs/blessed.mp3` },
  { id: 7, title: "Contact", role: "Ring Ring Ring - Tyler the Creator", year: "[Year]", medium: "[Medium]", label: "TR-07", cover: `${base}covers/track07.png`, song: `${base}songs/ring.mp3` },
  { id: 8, title: "Playlist", role: "Forrest Gump - Frank Ocean", year: "[Year]", medium: "[Medium]", label: "TR-08", cover: `${base}covers/track08.png`, song: `${base}songs/forrest-gump.mp3` }
]
