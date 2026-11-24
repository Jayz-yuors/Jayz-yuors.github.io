/* ========= EDIT YOUR CONTENT HERE ========= */
const GH = "https://github.com/Jayz-yuors";
const roles = ["AI/ML Engineer", "Full-Stack Developer", "Federated Learning Explorer", "Problem Solver"];

const skills = {
  "Languages": ["Python", "Java", "C", "SQL", "MySQL", "HTML", "CSS"],
  "ML / AI": ["Supervised Learning", "Federated Learning", "Differential Privacy", "Reinforcement Learning", "NLP (LSTM)", "Explainable AI (TreeSHAP)", "Computer Vision"],
  "Frameworks": ["PyTorch", "Scikit-learn", "XGBoost", "LightGBM", "Stable-Baselines3", "Gymnasium", "ONNX Runtime", "OpenCV"],
  "Backend & Data": ["Spring Boot", "FastAPI", "React", "REST APIs", "PostgreSQL", "Neo4j", "SQLite"],
  "Tools": ["Git", "GitHub", "N8N", "Google Earth Engine", "NASA Open APIs", "Gemini API", "Jupyter"]
};

// cat: ai | web | rl ; add  repo: "https://github.com/Jayz-yuors/<repo>"  to show a Code link
const projects = [
  { name: "SentinelAI", cat: ["ai", "web"], badge: "2026 - Present", tech: "React, Spring Boot, FastAPI, PostgreSQL, Neo4j",
    pts: ["End-to-end security-aware CI/CD pipeline: code review, risk assessment, remediation and verification.", "Multi-service workflow with AI-provider fallback and structured evidence logging.", "Automates branches, commits and pull requests on GitHub."] },
  { name: "QuantCopilot AI", cat: ["ai", "web"], badge: "2026 - Present", tech: "Python, FastAPI, React, PostgreSQL, N8N, Gemini",
    pts: ["Analyses 42 assets with RSI, MACD, ATR, EMA and SMA indicators.", "ML regime classifier (Bull / Bear / High Volatility) with automated daily AI reports.", "Pipeline over 117K+ price, 117K+ indicator and 235K+ regime records."] },
  { name: "TrustFed", cat: ["ai"], badge: "ENIGMA 5.0 Finalist", tech: "Federated Learning, ONNX Runtime, TreeSHAP",
    pts: ["Collaborative fraud detection across mobile money, lending and insurance data.", "SecAgg+ aggregation and differential privacy, no raw data pooling.", "FP16 ONNX inference with TreeSHAP and Gemini audit rationales."] },
  { name: "Urban Heat Prediction", cat: ["ai"], badge: "Team project", tech: "Python, Google Earth Engine, XGBoost",
    pts: ["46-factor geospatial dataset to predict Landsat land surface temperature.", "Region-wise pipelines comparing 5 models with city-held-out validation.", "New-city inference via nearest environmentally similar city."] },
  { name: "Rocket Landing with RL", cat: ["rl"], badge: "In progress", tech: "Gymnasium, Stable-Baselines3, PyTorch",
    pts: ["RL pipeline on LunarLander-v3 with reward shaping.", "Episode logging and replay workflows to analyse landing trajectories."] },
  { name: "TruthLens", cat: ["ai"], badge: "2026", tech: "LSTM, NLP, N8N, NewsAPI",
    pts: ["Hybrid fake-news verifier: LSTM classifier plus live NewsAPI evidence check.", "Returns a verdict with a confidence score."] },
  { name: "Football Analytics System", cat: ["rl"], badge: "Computer Vision", tech: "OpenCV, YOLO, Video Analysis",
    pts: ["Highlights analyser with player heatmaps and minimap tactical views.", "Uses contour detection, optical flow and homography."] },
{ name: "Football Match Outcome Prediction", cat: ["ai"], badge: "Classification", tech: "Python, Scikit-learn",
    d: "Classification model on team stats, form and venue, with data cleaning, feature engineering and evaluation using accuracy and F1-score." },
  { name: "Space Domain Analytics", cat: ["ai"], badge: "NASA Open APIs", tech: "Python, Matplotlib, Seaborn",
    d: "Consumed NASA Open APIs (NeoWs, APOD, Earth) for trend analysis and visualisation." },
  { name: "Crop Yield Prediction", cat: ["ai"], badge: "1,000,000 samples", tech: "Python, Scikit-learn, XGBoost",
    d: "Regression on a 1,000,000-sample dataset. Compared 12 weather-segmented models with a unified model (Linear Regression, Decision Tree, Random Forest, XGBoost) on R², MAE and RMSE." },
  { name: "Customer Churn Prediction Pipeline", cat: ["ai"], badge: "ML Pipeline", tech: "Logistic Regression, Random Forest, XGBoost",
    d: "Temporal feature engineering, SMOTE for class imbalance, feature selection and hyperparameter tuning across three model families." },
  { name: "Stock Insights Analysis System", cat: ["web","ai"], badge: "Full-Stack", tech: "Python, MySQL, Dashboard",
    d: "Full-stack dashboard for volatility analysis, risk scoring and benchmarking of Indian listed companies with automated Python-MySQL data refresh." },
  { name: "Earlier projects", cat: ["other"], badge: "Foundations", tech: "Java AWT/Swing, Python, C",
    d: "Poster Generator (Java AWT/Swing), Scientific Calculator (Python), and a C data-structures lab covering stacks, queues, linked lists, trees and graphs." }
];
const filters = [["all", "All"], ["ai", "AI / ML"], ["web", "Full-Stack"], ["rl", "RL & Vision"], ["other", "Foundations"]];

const journey = [
  ["Sep 2024 - Present", "B.Tech Computer Engineering, VIT Mumbai", "CGPA 9.7/10 overall (9.86 in Sem 4)."],
  ["Nov 2026", "NASA Open Science Essentials", "Certificate of Achievement from NASA."],
  ["Jun 2026", "Machine Learning with Python", "60-hour residential program, L&T Skill Trainers Academy."],
  ["2026", "Industry simulations", "JPMorgan, Barclays, Deloitte and Tata (software, data, cybersecurity)."],
  ["Jan - Apr 2025", "NPTEL Java Elite", "92%, top 1% among 16,040 certified candidates."]
];
const writing = [
  ["Devolution on Paper, Governance in Practice", "17-page research article for the CAG-ICSSR Research Article Competition (2026) on the local self-government gap in Maharashtra."],
  ["Where Does Our Data Go?", "Technical article exploring the digital data lifecycle."],
  ["Why Still Wired?", "LinkedIn article rethinking wired vs. wireless infrastructure."],
  ["Can Prompting Secure a Career?", "LinkedIn article on prompting and career readiness."]
];
/* ========= END CONTENT ========= */

const $ = (s, r = document) => r.querySelector(s);
document.body.classList.add("loading");
window.addEventListener("load", () => setTimeout(() => { $("#loader").classList.add("done"); document.body.classList.remove("loading"); }, 700));

// Render content
$("#skillGrid").innerHTML = Object.entries(skills).map(([k, v]) =>
  `<div class="skill"><h4>${k}</h4><div class="chips">${v.map(x => `<span>${x}</span>`).join("")}</div></div>`).join("");
$("#timeline").innerHTML = journey.map(([d, t, p]) => `<div class="t-item"><small>${d}</small><h4>${t}</h4><p>${p}</p></div>`).join("");
$("#writeGrid").innerHTML = writing.map(([t, p]) => `<div class="card"><h4>${t}</h4><p>${p}</p></div>`).join("");
$("#filters").innerHTML = filters.map(([k, l], i) => `<button data-f="${k}" class="${i ? "" : "on"}">${l}</button>`).join("");

function drawProjects(f = "all") {
  $("#projectGrid").innerHTML = projects.filter(p => f === "all" || p.cat.includes(f)).map((p, i) =>
    `<article class="card tilt" style="animation-delay:${i * 70}ms"><span class="badge">${p.badge}</span><h4>${p.name}</h4>
     ${p.pts ? `<ul>${p.pts.map(x => `<li>${x}</li>`).join("")}</ul>` : `<p>${p.d}</p>`}<p><b>Stack:</b> ${p.tech}</p>
     <div class="links"><a href="${p.repo || GH}" target="_blank" rel="noopener">${p.repo ? "View code" : "GitHub profile"}</a></div></article>`).join("");
  bindTilt();
}
$("#filters").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  document.querySelectorAll("#filters button").forEach(x => x.classList.remove("on"));
  b.classList.add("on"); drawProjects(b.dataset.f);
});

// Typed roles
let ri = 0, ci = 0, del = false;
(function type() {
  const w = roles[ri];
  $("#typed").textContent = w.slice(0, ci);
  if (!del && ci === w.length) { del = true; return setTimeout(type, 1400); }
  if (del && ci === 0) { del = false; ri = (ri + 1) % roles.length; }
  ci += del ? -1 : 1;
  setTimeout(type, del ? 35 : 80);
})();

// Tilt effect
function bindTilt() {
  document.querySelectorAll(".tilt").forEach(el => {
    if (el.dataset.t) return; el.dataset.t = 1;
    el.addEventListener("mousemove", e => {
      const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      el.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    });
    el.addEventListener("mouseleave", () => el.style.transform = "");
  });
}

// Scroll: reveal, counters, progress, nav state
const counted = new WeakSet();
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add("in");
  e.target.querySelectorAll("[data-count]").forEach(n => {
    if (counted.has(n)) return; counted.add(n);
    const to = +n.dataset.count, dec = +n.dataset.dec || 0, t0 = performance.now();
    (function step(t) {
      const k = Math.min((t - t0) / 1400, 1), v = to * (1 - Math.pow(1 - k, 3));
      n.textContent = (n.dataset.pre || "") + v.toFixed(dec) + (n.dataset.suf || "");
      if (k < 1) requestAnimationFrame(step);
    })(t0);
  });
}), { threshold: .15 });
document.querySelectorAll(".reveal").forEach(s => io.observe(s));

const secs = [...document.querySelectorAll("main section[id]")], navLinks = [...document.querySelectorAll("#links a[href^='#']")];
addEventListener("scroll", () => {
  const h = document.documentElement;
  $("#progress").style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100 + "%";
  $("#nav").classList.toggle("solid", scrollY > 30);
  const cur = secs.filter(s => s.offsetTop - 140 <= scrollY).pop();
  navLinks.forEach(a => a.classList.toggle("active", cur && a.getAttribute("href") === "#" + cur.id));
}, { passive: true });

// Mobile menu
$("#burger").onclick = () => $("#links").classList.toggle("open");
$("#links").addEventListener("click", e => e.target.tagName === "A" && $("#links").classList.remove("open"));

// Cursor glow
addEventListener("mousemove", e => { const g = $("#glow"); g.style.left = e.clientX + "px"; g.style.top = e.clientY + "px"; });

// Neural network canvas background
(function () {
  const c = $("#net"), x = c.getContext("2d"), m = { x: -999, y: -999 };
  let W, H, pts;
  const init = () => {
    W = c.width = innerWidth; H = c.height = innerHeight;
    pts = Array.from({ length: Math.min(90, Math.floor(W * H / 16000)) }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .5, vy: (Math.random() - .5) * .5 }));
  };
  addEventListener("resize", init);
  addEventListener("mousemove", e => { m.x = e.clientX; m.y = e.clientY; });
  init();
  (function frame() {
    x.clearRect(0, 0, W, H);
    pts.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
      const dm = Math.hypot(p.x - m.x, p.y - m.y);
      if (dm < 150) { p.x += (m.x - p.x) * .008; p.y += (m.y - p.y) * .008; }
      x.fillStyle = "rgba(34,211,238,.7)"; x.beginPath(); x.arc(p.x, p.y, 1.8, 0, 7); x.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(p.x - pts[j].x, p.y - pts[j].y);
        if (d < 130) { x.strokeStyle = `rgba(139,92,246,${.35 * (1 - d / 130)})`; x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(pts[j].x, pts[j].y); x.stroke(); }
      }
    });
    requestAnimationFrame(frame);
  })();
})();

drawProjects();
bindTilt();
