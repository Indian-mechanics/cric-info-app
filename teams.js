/* ============================================================
   FULL TEAM DATA FOR ALL INTERNATIONAL CRICKET TEAMS
   ============================================================ */

const teamData = {

  india: {
    name: "India",
    captain: "Rohit Sharma",
    coach: "Rahul Dravid",
    ranking: "ICC Rank #1",
    home: "India",
    trophies: "WC 1983, 2011 • T20 WC 2007 • CT 2002, 2013",
    founded: "1932",
    players: [
      { name: "Rohit Sharma", role: "Batsman", jersey: 45, matches: 480, runs: 18500, wickets: 12, image: "images/rohit.jpg" },
      { name: "Virat Kohli", role: "Batsman", jersey: 18, matches: 520, runs: 25000, wickets: 8, image: "images/virat.jpg" },
      { name: "Jasprit Bumrah", role: "Bowler", jersey: 93, matches: 270, runs: 450, wickets: 390, image: "images/bumrah.jpg" },
      { name: "Hardik Pandya", role: "All-Rounder", jersey: 33, matches: 220, runs: 4500, wickets: 150, image: "images/hardik.jpg" },
      { name: "Ravindra Jadeja", role: "All-Rounder", jersey: 8, matches: 310, runs: 5500, wickets: 250, image: "images/jadeja.jpg" }
    ]
  },

  australia: {
    name: "Australia",
    captain: "Pat Cummins",
    coach: "Andrew McDonald",
    ranking: "ICC Rank #2",
    home: "Australia",
    trophies: "WC 1987, 1999, 2003, 2007, 2015, 2023",
    founded: "1877",
    players: [
      { name: "Pat Cummins", role: "Bowler", jersey: 30, matches: 230, runs: 1200, wickets: 340, image: "images/cummins.jpg" },
      { name: "Steve Smith", role: "Batsman", jersey: 49, matches: 410, runs: 17000, wickets: 10, image: "images/smith.jpg" },
      { name: "David Warner", role: "Batsman", jersey: 31, matches: 360, runs: 17000, wickets: 0, image: "images/warner.jpg" },
      { name: "Mitchell Starc", role: "Bowler", jersey: 56, matches: 240, runs: 900, wickets: 330, image: "images/starc.jpg" },
      { name: "Glenn Maxwell", role: "All-Rounder", jersey: 32, matches: 230, runs: 7000, wickets: 90, image: "images/maxwell.jpg" }
    ]
  },

  england: {
    name: "England",
    captain: "Jos Buttler",
    coach: "Matthew Mott",
    ranking: "ICC Rank #3",
    home: "England",
    trophies: "WC 2019 • T20 WC 2010, 2022",
    founded: "1877",
    players: [
      { name: "Jos Buttler", role: "WK-Batsman", jersey: 63, matches: 310, runs: 13000, wickets: 0, image: "images/buttler.jpg" },
      { name: "Joe Root", role: "Batsman", jersey: 66, matches: 350, runs: 18000, wickets: 30, image: "images/root.jpg" },
      { name: "Ben Stokes", role: "All-Rounder", jersey: 55, matches: 280, runs: 10000, wickets: 210, image: "images/stokes.jpg" },
      { name: "Jofra Archer", role: "Bowler", jersey: 22, matches: 70, runs: 300, wickets: 120, image: "images/archer.jpg" },
      { name: "Adil Rashid", role: "Bowler", jersey: 95, matches: 230, runs: 600, wickets: 280, image: "images/rashid.jpg" }
    ]
  },

  pakistan: {
    name: "Pakistan",
    captain: "Babar Azam",
    coach: "Gary Kirsten",
    ranking: "ICC Rank #4",
    home: "Pakistan",
    trophies: "WC 1992 • T20 WC 2009 • CT 2017",
    founded: "1952",
    players: [
      { name: "Babar Azam", role: "Batsman", jersey: 56, matches: 260, runs: 12000, wickets: 0, image: "images/babar.jpg" },
      { name: "Shaheen Afridi", role: "Bowler", jersey: 10, matches: 120, runs: 300, wickets: 210, image: "images/shaheen.jpg" },
      { name: "Mohammad Rizwan", role: "WK-Batsman", jersey: 16, matches: 180, runs: 6000, wickets: 0, image: "images/rizwan.jpg" },
      { name: "Shadab Khan", role: "All-Rounder", jersey: 7, matches: 150, runs: 2500, wickets: 180, image: "images/shadab.jpg" },
      { name: "Haris Rauf", role: "Bowler", jersey: 97, matches: 90, runs: 200, wickets: 150, image: "images/haris.jpg" }
    ]
  },

  newzealand: {
    name: "New Zealand",
    captain: "Kane Williamson",
    coach: "Gary Stead",
    ranking: "ICC Rank #5",
    home: "New Zealand",
    trophies: "WTC Champions 2021",
    founded: "1930",
    players: [
      { name: "Kane Williamson", role: "Batsman", jersey: 22, matches: 350, runs: 18000, wickets: 30, image: "images/kane.jpg" },
      { name: "Trent Boult", role: "Bowler", jersey: 18, matches: 250, runs: 400, wickets: 330, image: "images/boult.jpg" },
      { name: "Devon Conway", role: "Batsman", jersey: 88, matches: 70, runs: 3500, wickets: 0, image: "images/conway.jpg" },
      { name: "Tim Southee", role: "Bowler", jersey: 38, matches: 340, runs: 800, wickets: 350, image: "images/southee.jpg" },
      { name: "Jimmy Neesham", role: "All-Rounder", jersey: 50, matches: 130, runs: 2800, wickets: 120, image: "images/neesham.jpg" }
    ]
  },

  southafrica: {
    name: "South Africa",
    captain: "Aiden Markram",
    coach: "Rob Walter",
    ranking: "ICC Rank #6",
    home: "South Africa",
    trophies: "None",
    founded: "1889",
    players: [
      { name: "Aiden Markram", role: "Batsman", jersey: 4, matches: 130, runs: 6000, wickets: 20, image: "images/markram.jpg" },
      { name: "Kagiso Rabada", role: "Bowler", jersey: 25, matches: 180, runs: 300, wickets: 250, image: "images/rabada.jpg" },
      { name: "Quinton de Kock", role: "WK-Batsman", jersey: 12, matches: 250, runs: 12000, wickets: 0, image: "images/dekock.jpg" },
      { name: "David Miller", role: "Batsman", jersey: 10, matches: 230, runs: 7000, wickets: 0, image: "images/miller.jpg" },
      { name: "Tabraiz Shamsi", role: "Bowler", jersey: 26, matches: 90, runs: 100, wickets: 120, image: "images/shamsi.jpg" }
    ]
  },

  srilanka: {
    name: "Sri Lanka",
    captain: "Kusal Mendis",
    coach: "Chris Silverwood",
    ranking: "ICC Rank #7",
    home: "Sri Lanka",
    trophies: "WC 1996 • T20 WC 2014",
    founded: "1981",
    players: [
      { name: "Kusal Mendis", role: "Batsman", jersey: 13, matches: 190, runs: 6000, wickets: 0, image: "images/mendis.jpg" },
      { name: "Wanindu Hasaranga", role: "Bowler", jersey: 49, matches: 120, runs: 1200, wickets: 180, image: "images/hasaranga.jpg" },
      { name: "Charith Asalanka", role: "Batsman", jersey: 31, matches: 80, runs: 2500, wickets: 10, image: "images/asalanka.jpg" },
      { name: "Matheesha Pathirana", role: "Bowler", jersey: 8, matches: 30, runs: 100, wickets: 45, image: "images/pathirana.jpg" },
      { name: "Dhananjaya de Silva", role: "All-Rounder", jersey: 15, matches: 150, runs: 3500, wickets: 80, image: "images/desilva.jpg" }
    ]
  },

  bangladesh: {
    name: "Bangladesh",
    captain: "Shanto",
    coach: "Chandika Hathurusingha",
    ranking: "ICC Rank #8",
    home: "Bangladesh",
    trophies: "None",
    founded: "2000",
    players: [
      { name: "Shanto", role: "Batsman", jersey: 44, matches: 80, runs: 3000, wickets: 0, image: "images/shanto.jpg" },
      { name: "Shakib Al Hasan", role: "All-Rounder", jersey: 75, matches: 400, runs: 13000, wickets: 650, image: "images/shakib.jpg" },
      { name: "Tamim Iqbal", role: "Batsman", jersey: 28, matches: 390, runs: 15000, wickets: 0, image: "images/tamim.jpg" },
      { name: "Taskin Ahmed", role: "Bowler", jersey: 3, matches: 130, runs: 200, wickets: 150, image: "images/taskin.jpg" },
      { name: "Mustafizur Rahman", role: "Bowler", jersey: 90, matches: 150, runs: 150, wickets: 190, image: "images/fizz.jpg" }
    ]
  },

  westindies: {
    name: "West Indies",
    captain: "Shai Hope",
    coach: "Darren Sammy",
    ranking: "ICC Rank #9",
    home: "West Indies",
    trophies: "WC 1975, 1979 • T20 WC 2012, 2016",
    founded: "1928",
    players: [
      { name: "Shai Hope", role: "WK-Batsman", jersey: 23, matches: 160, runs: 7000, wickets: 0, image: "images/hope.jpg" },
      { name: "Nicholas Pooran", role: "WK-Batsman", jersey: 29, matches: 100, runs: 3500, wickets: 0, image: "images/pooran.jpg" },
      { name: "Jason Holder", role: "All-Rounder", jersey: 98, matches: 200, runs: 4000, wickets: 220, image: "images/holder.jpg" },
      { name: "Alzarri Joseph", role: "Bowler", jersey: 25, matches: 80, runs: 250, wickets: 130, image: "images/joseph.jpg" },
      { name: "Shimron Hetmyer", role: "Batsman", jersey: 2, matches: 110, runs: 3200, wickets: 0, image: "images/hetmyer.jpg" }
    ]
  },

  afghanistan: {
    name: "Afghanistan",
    captain: "Rashid Khan",
    coach: "Jonathan Trott",
    ranking: "ICC Rank #10",
    home: "Afghanistan",
    trophies: "None",
    founded: "2001",
    players: [
      { name: "Rashid Khan", role: "Bowler", jersey: 19, matches: 150, runs: 1200, wickets: 300, image: "images/rashid.jpg" },
      { name: "Rahmanullah Gurbaz", role: "WK-Batsman", jersey: 21, matches: 70, runs: 2500, wickets: 0, image: "images/gurbaz.jpg" },
      { name: "Ibrahim Zadran", role: "Batsman", jersey: 14, matches: 60, runs: 2200, wickets: 0, image: "images/ibrahim.jpg" },
      { name: "Naveen-ul-Haq", role: "Bowler", jersey: 74, matches: 45, runs: 150, wickets: 60, image: "images/naveen.jpg" },
      { name: "Mohammad Nabi", role: "All-Rounder", jersey: 7, matches: 350, runs: 6000, wickets: 250, image: "images/nabi.jpg" }
    ]
  }
};


/* ============================================================
   EVENT HANDLERS — TEAM SELECTION & PLAYER PROFILE
   ============================================================ */

const teamButtons = document.querySelectorAll(".team-btn");
const teamInfo = document.getElementById("teamInfo");
const playerProfile = document.getElementById("playerProfile");

teamButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    teamButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const key = btn.dataset.team;
    const team = teamData[key];

    let playersHTML = "";
    team.players.forEach((p, i) => {
      playersHTML += `
        <tr class="player-row" data-team="${key}" data-index="${i}">
          <td>${p.name}</td>
          <td>${p.role}</td>
          <td>${p.jersey}</td>
        </tr>
      `;
    });

    teamInfo.classList.remove("show");
    void teamInfo.offsetWidth;

    teamInfo.innerHTML = `
      <h2>${team.name}</h2>

      <table class="team-table">
        <tr><th>Captain</th><td>${team.captain}</td></tr>
        <tr><th>Coach</th><td>${team.coach}</td></tr>
        <tr><th>Ranking</th><td>${team.ranking}</td></tr>
        <tr><th>Home</th><td>${team.home}</td></tr>
        <tr><th>Founded</th><td>${team.founded}</td></tr>
        <tr><th>Trophies</th><td>${team.trophies}</td></tr>
      </table>

      <h3 class="squad-heading">Playing Squad</h3>

      <table class="team-table">
        <tr><th>Name</th><th>Role</th><th>Jersey</th></tr>
        ${playersHTML}
      </table>
    `;

    teamInfo.classList.add("show");

    playerProfile.innerHTML = `<h3 style='text-align:center; opacity:0.6;'>Click a player to view full profile</h3>`;
    playerProfile.classList.remove("show");

    document.querySelectorAll(".player-row").forEach(row => {
      row.addEventListener("click", () => {
        const teamKey = row.dataset.team;
        const pIndex = row.dataset.index;
        const player = teamData[teamKey].players[pIndex];

        playerProfile.classList.remove("show");
        void playerProfile.offsetWidth;

        playerProfile.innerHTML = `
          <div class="player-card">
            <img src="${player.image}" onerror="this.src='images/default.png'">
            <div class="player-details">
              <h2>${player.name}</h2>
              <p><b>Role:</b> ${player.role}</p>
              <p><b>Jersey No:</b> ${player.jersey}</p>
              <p><b>Matches:</b> ${player.matches}</p>
              <p><b>Runs:</b> ${player.runs}</p>
              <p><b>Wickets:</b> ${player.wickets}</p>
            </div>
          </div>
        `;

        playerProfile.classList.add("show");
      });
    });

  });
});
