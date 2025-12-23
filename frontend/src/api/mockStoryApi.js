// frontend/src/api/mockStoryApi.js

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  export async function startStory(theme) {
    await sleep(600);
  
    if (!theme || theme.trim().length < 3) {
      throw new Error("Please enter a theme (at least 3 characters).");
    }
  
    return {
      story_id: String(Date.now()),
      paragraph: `You enter a world of ${theme}. Neon lights flicker as danger lurks nearby.`,
      choices: ["Explore the city", "Hide in the shadows", "Call for backup"],
    };
  }
  
  export async function choose(storyId, choice) {
    await sleep(600);
  
    if (!storyId) throw new Error("Missing story id.");
    if (!choice) throw new Error("Missing choice.");
  
    return {
      paragraph: `You chose to "${choice}". The air shifts—something is following you...`,
      choices: ["Keep going", "Change direction", "End adventure"],
    };
  }
  