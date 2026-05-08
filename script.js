const verses = [
  "I can do all things through Christ who strengthens me. - Philippians 4:13",
  "The Lord is my shepherd; I shall not want. - Psalm 23:1",
  "Be strong and courageous. - Joshua 1:9",
  "Cast all your anxiety on Him because He cares for you. - 1 Peter 5:7",
  "For God so loved the world. - John 3:16"
];

function newVerse() {
  const random = Math.floor(Math.random() * verses.length);
  document.getElementById("verse").innerText = verses[random];
}