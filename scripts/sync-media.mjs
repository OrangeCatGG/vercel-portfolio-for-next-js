import fs from "fs";
import path from "path";

const IMAGE_DIR = "public/upload";
const VIDEO_DIR = "public/videos/featured";
const CONTENT_FILE = "src/resources/content.tsx";
const FILMS_FILE = "src/components/FeaturedFilms.tsx";

function getFiles(dir, extensions) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(file => 
    extensions.includes(path.extname(file).toLowerCase())
  );
}

// 📸 Sync Images safely
function syncImages() {
  if (!fs.existsSync(IMAGE_DIR)) return;
  const images = getFiles(IMAGE_DIR, [".jpg", ".jpeg", ".png", ".webp"]);
  
  let content = fs.readFileSync(CONTENT_FILE, "utf-8");

  // SPECIFIC REGEX for the Gallery Images array only
  // This looks for 'images: [' specifically within the gallery object context
  const galleryRegex = /(gallery: Gallery = \{[\s\S]*?images: \[)([\s\S]*?)(\],)/;
  const match = content.match(galleryRegex);

  if (match) {
    const prefix = match[1]; // "gallery: ... images: ["
    let currentItemsStr = match[2];
    const suffix = match[3]; // "],"

    const newItems = images.map(img => {
      const src = `/upload/${img}`;
      const nameWithoutExt = path.parse(img).name.replace(/_/g, " ");
      if (content.includes(src)) return null;

      return `    {
      src: "${src}",
      alt: "${nameWithoutExt}",
      orientation: "horizontal",
      category: "Others",
    },`;
    }).filter(Boolean);

    if (newItems.length > 0) {
      const updatedItems = currentItemsStr.trim() + (currentItemsStr.trim().endsWith(",") ? "" : ",") + "\n" + newItems.join("\n");
      const newBlock = prefix + "\n" + updatedItems.trim() + "\n  " + suffix;
      
      content = content.replace(match[0], newBlock);
      fs.writeFileSync(CONTENT_FILE, content);
      console.log(`✅ Added ${newItems.length} new photos to gallery.`);
    } else {
      console.log("No new photos found.");
    }
  } else {
    console.error("❌ Could not find the gallery images array in content.tsx. Check if the file structure has changed.");
  }
}

// 🎥 Sync Videos safely
function syncVideos() {
  if (!fs.existsSync(VIDEO_DIR)) return;
  const videos = getFiles(VIDEO_DIR, [".mp4", ".mov", ".webm"]);

  let filmsContent = fs.readFileSync(FILMS_FILE, "utf-8");

  const filmsRegex = /(const featuredFilms = \[)([\s\S]*?)(\];)/;
  const match = filmsContent.match(filmsRegex);

  if (match) {
    const prefix = match[1];
    let currentItemsStr = match[2];
    const suffix = match[3];

    const newFilms = videos.map((v, i) => {
      const src = `/videos/featured/${v}`;
      if (filmsContent.includes(src)) return null;

      const parts = path.parse(v).name.split("_");
      const date = parts[0] || new Date().toLocaleDateString("en-US");
      const title = (parts[1] || path.parse(v).name).replace(/-/g, " ");
      const location = parts[2] || "Event Location";

      return `  {
    id: "auto-${Date.now()}-${i}",
    title: "${title}",
    date: "${date}",
    location: "${location}",
    type: "Same Day Edit",
    videoSrc: "${src}",
  },`;
    }).filter(Boolean);

    if (newFilms.length > 0) {
      const updatedItems = currentItemsStr.trim() + (currentItemsStr.trim().endsWith(",") ? "" : ",") + "\n" + newFilms.join("\n");
      const newBlock = prefix + "\n" + updatedItems.trim() + "\n" + suffix;

      filmsContent = filmsContent.replace(match[0], newBlock);
      fs.writeFileSync(FILMS_FILE, filmsContent);
      console.log(`✅ Added ${newFilms.length} new videos to films.`);
    } else {
      console.log("No new videos found.");
    }
  } else {
    console.error("❌ Could not find the featuredFilms array in FeaturedFilms.tsx.");
  }
}

syncImages();
syncVideos();
