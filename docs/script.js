const featuredRepos = [
	{
		name: "YOLO-Talk",
		url: "https://github.com/damifts/YOLO-Talk",
		description: "Visual Q&A che combina object detection con risposta AI contestuale.",
		language: "Python",
		topic: "Computer Vision"
	},
	{
		name: "tutor-ai-api-streamlit",
		url: "https://github.com/damifts/tutor-ai-api-streamlit",
		description: "Tutor AI generico per integrazione servizi AI via API con UI Streamlit.",
		language: "Python",
		topic: "LLM Education"
	},
	{
		name: "InstagramManager-MVP",
		url: "https://github.com/damifts/InstagramManager-MVP",
		description: "MVP per orchestrare workflow social e gestione operativa contenuti.",
		language: "Python",
		topic: "Automation"
	},
	{
		name: "python-course",
		url: "https://github.com/damifts/python-course",
		description: "Esercizi e appunti Python strutturati per apprendimento pratico.",
		language: "Python",
		topic: "Learning"
	}
];

function renderRepos() {
	const grid = document.getElementById("repoGrid");
	if (!grid) return;

	grid.innerHTML = featuredRepos
		.map(
			(repo) => `
			<article class="repo-card">
				<div class="repo-head">
					<a href="${repo.url}" target="_blank" rel="noreferrer">${repo.name}</a>
					<span class="badge">Public</span>
				</div>
				<p>${repo.description}</p>
				<div class="meta">
					<span class="chip">${repo.language}</span>
					<span class="chip">${repo.topic}</span>
				</div>
			</article>
		`
		)
		.join("");
}

function setupReveal() {
	const targets = document.querySelectorAll(".reveal");
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.15 }
	);

	targets.forEach((el, index) => {
		el.style.transitionDelay = `${index * 90}ms`;
		observer.observe(el);
	});
}

renderRepos();
setupReveal();
