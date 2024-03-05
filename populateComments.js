export function loadJSON(fileName) {
  let comments = [];
  try {
    comments = JSON.parse(localStorage.getItem(fileName)) || [];
  } catch (error) {
    console.error('Error loading JSON:', error);
  }
  return comments;
}

export function saveJSON(fileName, data) {
  try {
    localStorage.setItem(fileName, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving JSON:', error);
  }
}