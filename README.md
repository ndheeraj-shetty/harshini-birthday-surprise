# Our Little Universe • Birthday Surprise for Bujjamma (Harshini) ✨

A private digital universe created specifically for **Harshini** (“Bujjamma”). An interactive cinematic story, memory museum, playful mini-game, and personal time capsule built with **React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React**.

---

## 🚀 Quickstart — Run Locally

To launch the website on your local machine:

```bash
# 1. Install dependencies (already prepared)
npm install

# 2. Start local development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🎨 Content-Driven Personalization Guide (Phase 2)

The website is designed with a **strict plug-and-play architecture**. You can personalize every photo, video, audio track, letter, and memory **without rewriting any React components**.

---

### 1. 📸 How to Add Photos

Drop your photo files (`.jpg`, `.jpeg`, `.png`, `.webp`) into the matching folders in `public/media/photos/`:

```text
public/media/photos/
├── relationship/      <-- Photos of Aug 12, 2025 / relationship milestones
├── first-meeting/     <-- Photos from May 8, 2026 (arrival, hug, together)
├── her/               <-- Individual portraits and candids of Harshini
├── us/                <-- Couple photos or screenshot collages
├── calls/             <-- Call duration screenshots, late-night screenshots
├── chaos/             <-- Goofy faces, meme arguments, funny moments
└── little-things/     <-- Food pictures, sweet reminders, everyday care
```

Then open `src/data/mediaData.ts` and add the paths to the arrays:

```ts
export const mediaData: MediaConfig = {
  relationship: {
    images: ['/media/photos/relationship/our-day.jpg'],
  },
  firstMeeting: {
    images: [
      '/media/photos/first-meeting/arrival.jpg',
      '/media/photos/first-meeting/first-hug.jpg'
    ],
    videos: [],
  },
  her: {
    images: ['/media/photos/her/favorite-smile.jpg'],
  },
  us: {
    images: ['/media/photos/us/together-1.jpg'],
  },
  // ...
};
```

> **Note**: If any array is left empty `[]`, the website automatically displays an elegant, theme-matched placeholder frame with zero errors!

---

### 2. 🎥 How to Add Videos

1. Place your video files (`.mp4`, `.webm`) into `public/media/videos/`:
   ```text
   public/media/videos/
   ├── first-meeting/
   ├── memories/
   └── special/
   ```
2. Reference the video path in `src/data/mediaData.ts`:
   ```ts
   firstMeeting: {
     images: ['/media/photos/first-meeting/arrival.jpg'],
     videos: ['/media/videos/first-meeting/hug-moment.mp4'],
   }
   ```

---

### 3. 🎵 How to Add Audio & Music

1. Place your audio tracks (`.mp3`, `.wav`, `.ogg`) into `public/media/audio/`:
   ```text
   public/media/audio/
   ├── intro/         (e.g., intro.mp3)
   ├── emotional/     (e.g., emotional.mp3)
   ├── game/          (e.g., game.mp3)
   └── finale/        (e.g., finale.mp3)
   ```
2. Update the paths in `src/data/mediaData.ts`:
   ```ts
   audio: {
     intro: "/media/audio/intro/intro.mp3",
     emotional: "/media/audio/emotional/emotional.mp3",
     game: "/media/audio/game/game.mp3",
     finale: "/media/audio/finale/finale.mp3",
   }
   ```
> **Note**: If audio files are missing, the website never crashes. It automatically plays a procedural gentle ambient starlight tone via Web Audio synthesizer.

---

### 4. ✍️ How to Add Personal Memories & Text

Open **`src/data/personalData.ts`** and edit any of the fields marked with comments:

- **`beforeUs.message`**: How you two first crossed paths.
- **`relationshipStart.memoryNote`**: What August 12, 2025 meant to you.
- **`firstMeeting.memoryNote`**: The feeling of seeing her on May 8, 2026.
- **`herCare.cards`**: Personal anecdotes for each of the 5 care dimensions:
  - *DID YOU EAT?*
  - *DO YOU HAVE MONEY?*
  - *WHAT ARE YOU DOING?*
  - *WAKE UP.*
  - *ARE YOU OKAY?*
- **`memories.ts`**: Add or customize stars in the interactive star constellation.

---

### 5. 💌 How to Write Your Personal Birthday Letter

Open **`src/data/personalData.ts`** and locate the `letter` section:

```ts
letter: {
  title: "Something I wanted to tell you myself.",
  subtitle: "A private letter kept safe inside this digital envelope.",
  date: "On Your Special Day",
  greeting: "Dear Bujjamma,",
  content: `Replace this text with your real letter.
  
Write as many paragraphs as you want.
Line breaks and formatting are preserved automatically.
It renders in realistic handwriting script on parchment paper!`,
  closing: "Always yours,",
  signature: "Your Name",
},
```

---

### 6. 🎮 How to Customize Mini-Game Messages

Open **`src/data/gameData.ts`** to adjust:
- Reaction quotes for the 7 actions (*Beat, Kiss, Hug, Yell, Tease, Wake up, Love*)
- The stages of the wake-up sequence
- The boredom meter milestone reward message

---

### 7. 🌐 How to Deploy (Vercel / Netlify / GitHub Pages)

The project is 100% client-side with zero backend or database requirements.

#### Option A: Deploy to Vercel (Recommended — 2 minutes)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Click **Deploy** (Vercel automatically detects Vite + React).

#### Option B: Deploy to Netlify
1. Run `npm run build`.
2. Drag and drop the generated `dist/` folder into Netlify Drop, or connect your GitHub repository.

---

## 🎁 Easter Eggs Included

1. **✨ Hidden Star**: One of the stars in Chapter 9 (Our Universe) is an Easter egg containing a secret message.
2. **🚫 "DON'T CLICK" Button**: A forbidden button in Chapter 14 that playfully reacts when pressed.
3. **🏆 Boredom Zero Milestone**: Reducing boredom to 0% in Chapter 10 unlocks the "Master Bully Award".
4. **🔐 Vault Memory**: Exploring all 14 chapters unlocks the completion memory vault.
