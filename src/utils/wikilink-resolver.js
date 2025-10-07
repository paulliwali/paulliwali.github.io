import { getCollection } from 'astro:content';

// Build a map of note titles to their slugs
let noteTitleMap = null;

async function buildNoteTitleMap() {
  if (noteTitleMap) return noteTitleMap;

  noteTitleMap = new Map();

  // Get all notes from all collections
  const notes = await getCollection('notes');
  const dailyNotes = await getCollection('daily-notes');

  // Map notes by their title
  notes.forEach(note => {
    const title = note.data.title || note.id.split('/').pop()?.replace('.md', '');
    if (title) {
      // Store the slug (which is the full id)
      noteTitleMap.set(title.toLowerCase(), note.id);
    }
  });

  // Map daily notes by their title
  dailyNotes.forEach(note => {
    const title = note.data.title || note.id.split('/').pop()?.replace('.md', '');
    if (title) {
      noteTitleMap.set(title.toLowerCase(), `daily-notes/${note.id}`);
    }
  });

  return noteTitleMap;
}

export async function resolveWikiLink(name) {
  const map = await buildNoteTitleMap();

  // Try exact match first
  const slug = map.get(name.toLowerCase());
  if (slug) {
    return slug;
  }

  // Fallback to converting the name to a slug format
  return name.replace(/ /g, '-').toLowerCase();
}
