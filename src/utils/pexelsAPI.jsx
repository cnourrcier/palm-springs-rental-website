export const fetchPexelsVideo = async (query = 'palm springs') => {
  try {
    const response = await fetch(`https://api.pexels.com/videos/search?query=${query}&per_page=1`, {
      headers: {
        Authorization: import.meta.env.VITE_PEXELS_API_KEY
      }
    });
    const data = await response.json();
    // console.log(data.videos[0].video_files.find(file => file.quality === 'hd' && file.width < 1500).link);
    const videoFile = data.videos[0].video_files.find(file => file.quality === 'hd' && file.width < 1500);

    if (!videoFile) {
      console.warn('No HD video file with width < 1000 found. Returning the first available video file.');
      return data.videos[0].video_files[0].link; // Fallback to the first available video file
    }

    return videoFile.link;
  } catch (error) {
    console.error('Error fetching Pexels video:', error.message);
    return null;
  }
};