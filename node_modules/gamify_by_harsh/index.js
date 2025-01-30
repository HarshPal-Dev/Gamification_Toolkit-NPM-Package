// Points System
const points = {};
export const addPoints = (userId, amount) => {
  points[userId] = (points[userId] || 0) + amount;
  return points[userId];
};

export const deductPoints = (userId, amount) => {
  points[userId] = Math.max(0, (points[userId] || 0) - amount);
  return points[userId];
};

export const getPoints = (userId) => {
  return points[userId] || 0;
};

export const getAllPoints = () => {
  return points;
};

// Leaderboard System
export const getLeaderboard = () => {
  return Object.entries(points)
    .map(([userId, points]) => ({ userId, points }))
    .sort((a, b) => b.points - a.points);
};

// Badges System
const badges = {};
export const assignBadge = (userId, badge) => {
  if (!badges[userId]) badges[userId] = [];
  badges[userId].push(badge);
};

export const getBadges = (userId) => {
  return badges[userId] || [];
};

export const getAllBadges = () => {
  return badges;
};

// Utilities
export const logPoints = () => {
  console.log('Points:', getAllPoints());
};

export const logBadges = () => {
  console.log('Badges:', getAllBadges());
};

export const logLeaderboard = () => {
  console.log('Leaderboard:', getLeaderboard());
};

export const displayLeaderboardGraph = () => {
  const leaderboard = getLeaderboard();
  console.log('\nLeaderboard:\n');
  leaderboard.forEach(({ userId, points }, index) => {
    console.log(`${index + 1}. ${userId} - ${'█'.repeat(points / 10)} (${points})`);
  });
};

// Example Data Initialization (For Testing)
export const initializeDemoData = () => {
  addPoints('user1', 100);
  addPoints('user2', 50);
  addPoints('user3', 75);

  assignBadge('user1', { name: 'Top Scorer', description: 'Achieved the highest score' });
  assignBadge('user2', { name: 'First Step', description: 'First point scored' });
  assignBadge('user3', { name: 'Steady Performer', description: 'Consistently earning points' });
  console.log('Demo data initialized.');
};

//Testin function -- Successfully  :)
initializeDemoData();
logPoints();
logBadges();
logLeaderboard();
displayLeaderboardGraph();

