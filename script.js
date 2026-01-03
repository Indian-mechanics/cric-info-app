document.addEventListener("DOMContentLoaded", () => {

    /* ----------------- MATCH CARDS ------------------ */

    const matches = [
        { title: "Australia vs England ICC", team: "India", status: "LIVE" },
    ];

    const container = document.getElementById("matchContainer");

    if (container) {
        matches.forEach(match => {
            container.innerHTML += `
                <div class="match-card">
                    <div class="match-image"><img src="https://www.shutterstock.com/image-illustration/karachi-pakistan-07-july-2023-260nw-2328496955.jpg"></div>
                    <div class="match-content">
                        <div class="match-title">${match.title}</div>
                        <div class="team">${match.team}</div>
                        <div class="status">${match.status}</div>
                        <a href="https://www.google.com/search?q=Australia%20vs%20England%20ICC#sie=m;/g/11ybbyybkk;5;/m/021q23;dt;fp;1;;;${encodeURIComponent(match.title)}"
                           target="_self" class="btn">
                            View Details
                        </a>
                    </div>
                </div>
            `;
        });
    }

    /* ----------------- TEAMS DROPDOWN SYSTEM ------------------ */

    const teamsBtn = document.getElementById("teamsBtn");
    const subButtons = document.getElementById("subButtons");

    const nationalBtn = document.getElementById("AsianBtn");
    const internationalBtn = document.getElementById("OverseasBtn");

    const nationalDropdown = document.getElementById("AsianDropdown");
    const internationalDropdown = document.getElementById("OverseasDropdown");

    const teamName = document.getElementById("teamName");
    const teamMatches = document.getElementById("teamMatches");

    // Open National + International
    if (teamsBtn) {
        teamsBtn.addEventListener("click", () => {
            subButtons.classList.toggle("show");
            nationalDropdown.classList.remove("show");
            internationalDropdown.classList.remove("show");
        });
    }

    // National Click
    if (AsianBtn) {
        AsianBtn.addEventListener("click", () => {
            AsianDropdown.classList.toggle("show");
            OverseasDropdown.classList.remove("show");
        });
    }

    // International Click
    if (OverseasBtn) {
        OverseasBtn.addEventListener("click", () => {
            OverseasDropdown.classList.toggle("show");
            AsianDropdown.classList.remove("show");
        });
    }

    /* ----------------- TEAM SELECTION ------------------ */

    document.querySelectorAll(".team-card").forEach(card => {
        card.addEventListener("click", () => {

            const selectedTeam = card.textContent.trim();

            if (teamName) teamName.textContent = selectedTeam;

            // Find related matches
            const teamMatchesList = matches
                .filter(m => m.team === selectedTeam)
                .map(m => m.title)
                .join(", ");

            if (teamMatches) {
                teamMatches.textContent = teamMatchesList || "No matches found";
            }

        });
    });

});
/* ================= RADIAL MENU TOGGLE ================= */

const mainCircle = document.getElementById("mainCircle");
const radialMenu = document.querySelector(".radial-menu-wrapper");

if (mainCircle && radialMenu) {
  mainCircle.addEventListener("click", () => {
    radialMenu.classList.toggle("active");
  });
}

