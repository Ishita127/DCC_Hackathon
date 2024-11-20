const leaderboardData = [
    { userId: "U001", name: "John Doe", score: 1838, projectCount: 5 },
    { userId: "U002", name: "Jane Doe", score: 1958, projectCount: 8 },
    { userId: "U003", name: "John Smith", score: 1721, projectCount: 6 },
    { userId: "U004", name: "Alice Johnson", score: 1600, projectCount: 7 },
    { userId: "U005", name: "Bob Williams", score: 1550, projectCount: 4 },
  ];
  
  function populateLeaderboard() {
    const leaderboardBody = document.getElementById("leaderboard-body");
    leaderboardBody.innerHTML = ""; 

leaderboardData.forEach((data) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${data.name}</td>
    <td>${data.score}</td>
    <td>${data.projectCount}</td>
    <td>${data.userId}</td>
  `;
  leaderboardBody.appendChild(row);
});

document.getElementById("top1").querySelector(".leaderboard-name").textContent = leaderboardData[0].name;
document.getElementById("top1").querySelector(".leaderboard-score").textContent = `$${leaderboardData[0].score}`;

document.getElementById("top2").querySelector(".leaderboard-name").textContent = leaderboardData[1].name;
document.getElementById("top2").querySelector(".leaderboard-score").textContent = `$${leaderboardData[1].score}`;

document.getElementById("top3").querySelector(".leaderboard-name").textContent = leaderboardData[2].name;
document.getElementById("top3").querySelector(".leaderboard-score").textContent = `$${leaderboardData[2].score}`;
  }  
document.addEventListener("DOMContentLoaded", populateLeaderboard);
  