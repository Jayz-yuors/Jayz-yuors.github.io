/* =========================================================
   JAY KELUSKAR — PORTFOLIO CONTENT + INTERACTIONS
   Edit project/skill/credential arrays here when updating.
   ========================================================= */
const GITHUB = "https://github.com/Jayz-yuors";

const roles = [
  "AI / ML SYSTEMS",
  "FULL-STACK PRODUCTS",
  "PRIVACY-AWARE AI",
  "COMPUTER VISION"
];

const projects = [
  {
    name: "SentinelAI",
    category: ["ai", "fullstack"],
    label: "SECURITY · CI/CD",
    date: "2026 — PRESENT",
    featured: true,
    description: "An AI-powered, security-aware CI/CD platform that connects repository analysis with code intelligence and remediation workflows.",
    points: [
      "Engineered an end-to-end orchestration pipeline linking repository analysis, AI-assisted code review, security analysis, risk assessment, remediation and verification.",
      "Built a multi-service workflow with failure handling, AI-provider fallback and structured evidence logging for traceable execution outcomes.",
      "Automated the remediation-to-GitHub flow (branches, commits and pull requests); security validation and production hardening are in progress."
    ],
    stack: "React · Spring Boot · FastAPI · PostgreSQL · Neo4j"
  },
  {
    name: "QuantCopilot AI",
    category: ["ai", "fullstack"],
    label: "FINTECH · MARKET INTELLIGENCE",
    date: "2026 — PRESENT",
    featured: true,
    description: "A quantitative market intelligence platform combining technical indicators, ML market-regime classification and automated reporting.",
    points: [
      "Built a full-stack platform analysing 42 assets across US technology, Indian IT and pharma, ETFs, commodities, volatility and indices.",
      "Trained a Bull / Bear / High Volatility market-regime classifier and automated daily AI market-intelligence reports using N8N and Gemini.",
      "Delivered a React and Recharts dashboard over FastAPI and PostgreSQL handling 117K+ price, 117K+ indicator and 235K+ regime records; portfolio analysis, risk scoring and diversification modules are being extended."
    ],
    stack: "Python · FastAPI · React · PostgreSQL · ML · N8N · Gemini"
  },
  {
    name: "TrustFed",
    category: ["ai"],
    label: "FEDERATED LEARNING · FRAUD",
    date: "2026",
    description: "Decentralized financial fraud intelligence across mobile money, digital lending and insurance claims datasets.",
    points: [
      "Designed collaborative fraud detection using PaySim, Home Credit Default Risk and claims datasets.",
      "Explored SecAgg+ multi-party aggregation and differential privacy to collaborate without pooling raw customer records.",
      "Integrated ONNX Runtime FP16 inference for low-latency screening and TreeSHAP attributions with Gemini-assisted audit rationales.",
      "Reached the Final Round of ENIGMA 5.0 — GENESIS (PPT screening, then offline hackathon)."
    ],
    stack: "Federated Learning · ONNX Runtime · TreeSHAP · Differential Privacy"
  },
  {
    name: "Geospatial AI/ML — Urban Heat",
    category: ["ai"],
    label: "GEO-SPATIAL ML · TEAM PROJECT",
    date: "2026 — PRESENT",
    description: "A geospatial machine learning system to predict Landsat land-surface temperature and identify urban heat drivers.",
    points: [
      "Built a 46-factor dataset spanning vegetation, built-up areas, land cover, terrain, climate and population in Google Earth Engine.",
      "Designed region-wise North / South / East / West pipelines comparing Linear Regression, Decision Tree, Random Forest, LightGBM and XGBoost with city-held-out validation.",
      "Implemented new-city inference from coordinates to region to nearest environmentally similar city and regional model; approximately 80–85% of data engineering and Model-1 pipeline complete."
    ],
    stack: "Python · Google Earth Engine · XGBoost · LightGBM"
  },
  {
    name: "Rocket Landing Optimization",
    category: ["ai", "vision"],
    label: "REINFORCEMENT LEARNING",
    date: "2026 — PRESENT",
    description: "An experimental reinforcement learning pipeline for autonomous landing behaviour in Gymnasium's LunarLander-v3 environment.",
    points: [
      "Working with an 8-dimensional observation space and four discrete actions.",
      "Exploring reward shaping and episode-based training.",
      "Building episode logging and replay workflows to analyse trajectories and landing outcomes."
    ],
    stack: "Python · Gymnasium · Stable-Baselines3 · PyTorch"
  },
  {
    name: "TruthLens",
    category: ["ai"],
    label: "NLP · INFORMATION VERIFICATION",
    date: "2026",
    description: "A hybrid fake-news detection and verification system that combines a learned classifier with live evidence retrieval.",
    points: [
      "Engineered an LSTM classifier with N8N automation and NewsAPI live evidence retrieval.",
      "Pipeline performs text preprocessing, LSTM inference, live evidence cross-checking and returns a verdict with a confidence score."
    ],
    stack: "LSTM · NLP · N8N · NewsAPI"
  },
  {
    name: "Football Analytics System",
    category: ["vision"],
    label: "COMPUTER VISION",
    date: "2026",
    description: "A football video highlights analyser that extracts tactical context and player movement visualisations.",
    points: [
      "Produces player heatmaps and minimap tactical views.",
      "Uses contour detection, optical flow and homography for video analysis."
    ],
    stack: "OpenCV · YOLO · Video Analysis"
  },
  {
    name: "Football Match Outcome Prediction",
    category: ["ai"],
    label: "CLASSIFICATION",
    date: "ADDITIONAL PROJECT",
    description: "Classification model using team statistics, form and venue, with data cleaning, feature engineering and evaluation using accuracy and F1-score.",
    stack: "Python · Scikit-learn"
  },
  {
    name: "Space Domain Analytics",
    category: ["ai"],
    label: "NASA OPEN APIs",
    date: "ADDITIONAL PROJECT",
    description: "Consumed NASA Open APIs — NeoWs, APOD and Earth — for trend analysis and visualisation.",
    stack: "Python · NASA Open APIs · Matplotlib · Seaborn"
  },
  {
    name: "Crop Yield Prediction",
    category: ["ai"],
    label: "REGRESSION · 1M+ SAMPLES",
    date: "ADDITIONAL PROJECT",
    description: "Regression on a 1,000,000-sample dataset; compared 12 weather-segmented models with a unified model across R², MAE and RMSE.",
    stack: "Python · Scikit-learn · Linear Regression · Decision Tree · Random Forest · XGBoost"
  },
  {
    name: "Customer Churn Prediction Pipeline",
    category: ["ai"],
    label: "ML PIPELINE",
    date: "ADDITIONAL PROJECT",
    description: "Temporal feature engineering, SMOTE for class imbalance, feature selection and hyperparameter tuning across Logistic Regression, Random Forest and XGBoost.",
    stack: "Python · Logistic Regression · Random Forest · XGBoost · SMOTE"
  },
  {
    name: "Stock Insights Analysis System",
    category: ["ai", "fullstack"],
    label: "FULL-STACK · FINANCIAL ANALYTICS",
    date: "ADDITIONAL PROJECT",
    description: "A full-stack dashboard for volatility analysis, risk scoring and benchmarking of Indian listed companies with automated Python–MySQL data refresh.",
    stack: "Python · MySQL · Dashboard"
  },
  {
    name: "Foundations — Earlier Projects",
    category: ["foundations"],
    label: "PROGRAMMING FOUNDATIONS",
    date: "EARLIER WORK",
    description: "Java AWT/Swing Poster Generator, Scientific Calculator in Python, and a C data-structures lab covering stacks, queues, linked lists, trees and graphs.",
    stack: "Java AWT/Swing · Python · C · Data Structures"
  }
];

const skills = {
  "Languages": ["Python", "Java — OOP, Swing/AWT, Multithreading", "C", "SQL", "MySQL", "HTML", "CSS"],
  "ML / AI": ["Supervised Learning", "Federated Learning", "Differential Privacy", "Reinforcement Learning — reward shaping", "NLP — LSTM", "Explainable AI — TreeSHAP", "Feature Engineering", "Model Evaluation & Tuning", "Computer Vision"],
  "Frameworks & Libraries": ["PyTorch", "Scikit-learn", "XGBoost", "LightGBM", "Stable-Baselines3", "Gymnasium", "ONNX Runtime", "OpenCV", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
  "Backend & Data": ["Spring Boot", "FastAPI", "React", "REST APIs", "PostgreSQL", "Neo4j", "MySQL", "SQLite"],
  "Tools & Platforms": ["Git", "GitHub", "N8N", "Google Earth Engine", "NASA Open APIs", "NewsAPI", "Gemini API", "Jupyter", "VS Code", "PyCharm"]
};

const journey = [
  ["SEP 2024 — PRESENT", "B.Tech, Computer Engineering", "Vidyalankar Institute of Technology — University of Mumbai. Overall CGPA 9.7/10; semester progression: 9.61 (Sem 1 & 2), 9.70 (Sem 3), 9.86 (Sem 4)."],
  ["NOV 2026", "NASA Open Science Essentials", "Certificate of Achievement from NASA; training in open science principles and practices for transparent and reproducible research."],
  ["JUN 2026", "Machine Learning with Python", "60-hour residential credit transfer program at L&T Skill Trainers Academy."],
  ["MAY — JUN 2026", "Barclays Developer & Data Analytics", "Developer and Data Analytics programs through Springpod."],
  ["2026", "Industry job simulations", "Software Engineering — JPMorgan Chase & Co.; Cybersecurity Analyst, Data Visualisation and GenAI-Powered Data Analytics — Tata Group; Data Analytics — Deloitte Australia."],
  ["ONGOING", "Problem-solving practice", "Active LeetCode practitioner, continuously sharpening algorithmic thinking and implementation skills."],
  ["JAN — APR 2025", "NPTEL Programming in Java — Elite", "92%; Top 1% among 16,040 certified candidates. NPTEL / IIT Kharagpur."]
];

const credentials = [
  ["NOV 2026", "NASA Open Science Essentials", "Certificate of Achievement — NASA. Open science principles and practices for transparent, reproducible research."],
  ["JUN 2026", "Machine Learning with Python", "60-hour residential credit transfer program — L&T Skill Trainers Academy."],
  ["2026", "Software Engineering Job Simulation", "JPMorgan Chase & Co. — Forage."],
  ["MAY–JUN 2026", "Developer & Data Analytics Programs", "Barclays — Springpod."],
  ["2026", "Cybersecurity Analyst Simulation", "Tata Group — Forage."],
  ["2026", "Data Visualisation Simulation", "Tata Group — Forage."],
  ["2026", "GenAI-Powered Data Analytics Simulation", "Tata Group — Forage."],
  ["2026", "Data Analytics Job Simulation", "Deloitte Australia — Forage."],
  ["2026", "Introduction to Machine Learning", "Kaggle."],
  ["2025", "Python Programming", "GeeksforGeeks."],
  ["JAN–APR 2025", "Programming in Java — Elite Certificate", "NPTEL / IIT Kharagpur. 92%; Top 1% among 16,040 certified candidates."]
];

const writing = [
  ["RESEARCH ARTICLE", "Devolution on Paper, Governance in Practice: The Local Self-Government Gap in Maharashtra", "17-page research article for the CAG–ICSSR Research Article Competition (2026)."],
  ["TECHNICAL ARTICLE", "Where Does Our Data Go? — Exploring the Digital Data Lifecycle", "Technical article exploring the digital data lifecycle (2026)."],
  ["LINKEDIN ARTICLE", "Why Still Wired? — Rethinking Wired vs. Wireless Infrastructure", "An exploration of wired and wireless infrastructure (2026)."],
  ["LINKEDIN ARTICLE", "Can Prompting Secure a Career?", "An article on prompting and career readiness (2026)."]
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function renderProjects(filter = "all") {
  const visible = projects.filter(project => filter === "all" || project.category.includes(filter));
  $("#projectGrid").innerHTML = visible.map((project, index) => `
    <article class="project-card ${project.featured ? "featured" : ""}" data-index="${String(index + 1).padStart(2,"0")}">
      <div class="project-meta"><span class="project-tag">${project.label}</span><span class="project-date">${project.date}</span></div>
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      ${project.points ? `<ul class="project-points">${project.points.map(point => `<li>${point}</li>`).join("")}</ul>` : ""}
      <div class="project-stack">STACK / ${project.stack}</div>
      <div class="project-footer"><a class="project-link" href="${GITHUB}" target="_blank" rel="noopener">EXPLORE ON GITHUB <span>↗</span></a></div>
    </article>
  `).join("");
  $("#projectCount").textContent = `${visible.length} PROJECT${visible.length === 1 ? "" : "S"}`;
}

function renderSkills() {
  $("#skillGrid").innerHTML = Object.entries(skills).map(([category, items]) => `
    <article class="skill-card"><h3>${category}</h3><div class="skill-chips">${items.map(item => `<span>${item}</span>`).join("")}</div></article>
  `).join("");
}

function renderTimeline() {
  $("#timeline").innerHTML = journey.map(([date, title, detail]) => `
    <article class="timeline-item"><span class="timeline-date">${date}</span><h3>${title}</h3><p>${detail}</p></article>
  `).join("");
}

function renderCredentials() {
  $("#credentialList").innerHTML = credentials.map(([date, title, detail]) => `
    <article class="credential-item"><span class="credential-year">${date}</span><div><h3>${title}</h3><p>${detail}</p></div></article>
  `).join("");
}

function renderWriting() {
  $("#writingGrid").innerHTML = writing.map(([type, title, detail]) => `
    <article class="writing-card"><span>${type}</span><h3>${title}</h3><p>${detail}</p><div class="writing-note">2026 · JAY KELUSKAR</div></article>
  `).join("");
}

function setupFilters() {
  $("#projectFilters").addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    $$(".filter-button").forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderProjects(button.dataset.filter);
  });
}

function setupTyping() {
  const target = $("#typedRole");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    target.textContent = roles[0];
    return;
  }
  let word = 0, char = 0, deleting = false;
  function tick() {
    const current = roles[word];
    target.textContent = current.slice(0, char);
    if (!deleting && char === current.length) {
      deleting = true;
      setTimeout(tick, 1350);
      return;
    }
    if (deleting && char === 0) {
      deleting = false;
      word = (word + 1) % roles.length;
    }
    char += deleting ? -1 : 1;
    setTimeout(tick, deleting ? 38 : 78);
  }
  tick();
}

function setupReveal() {
  const elements = $$(".reveal");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach(element => element.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: .12 });
  elements.forEach(element => observer.observe(element));
}

function setupNavigation() {
  const header = $(".site-header");
  const menu = $("#menuToggle");
  const nav = $("#navLinks");
  const closeMenu = () => {
    nav.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Open navigation");
    document.body.classList.remove("menu-open");
  };
  menu.addEventListener("click", () => {
    const expanded = menu.getAttribute("aria-expanded") === "true";
    menu.setAttribute("aria-expanded", String(!expanded));
    menu.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
    nav.classList.toggle("open", !expanded);
    document.body.classList.toggle("menu-open", !expanded);
  });
  nav.addEventListener("click", event => {
    if (event.target.closest("a")) closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 700) closeMenu();
  });
  const updateScroll = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    $("#scrollProgress").style.width = `${max > 0 ? (doc.scrollTop / max) * 100 : 0}%`;
    header.classList.toggle("scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", updateScroll, { passive: true });
  updateScroll();
}

function setupCursorAura() {
  const aura = $(".cursor-aura");
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  let raf = 0;
  window.addEventListener("pointermove", event => {
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      aura.style.left = `${event.clientX}px`;
      aura.style.top = `${event.clientY}px`;
    });
  }, { passive: true });
}

function setupParticleField() {
  const canvas = $("#particle-field");
  const ctx = canvas.getContext("2d");
  if (!ctx || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let width = 0, height = 0, particles = [], frame = 0;
  const pointer = { x: -1000, y: -1000 };
  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = Math.min(48, Math.floor(width * height / 24000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width, y: Math.random() * height,
      vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22
    }));
  };
  const move = event => { pointer.x = event.clientX; pointer.y = event.clientY; };
  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x < 0 || particle.x > width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > height) particle.vy *= -1;
      const dx = particle.x - pointer.x, dy = particle.y - pointer.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 130 && distance > 0) {
        particle.x += dx / distance * .22;
        particle.y += dy / distance * .22;
      }
      ctx.fillStyle = "rgba(198,243,106,.48)";
      ctx.beginPath(); ctx.arc(particle.x, particle.y, 1.25, 0, Math.PI * 2); ctx.fill();
      for (let next = index + 1; next < particles.length; next++) {
        const other = particles[next];
        const gap = Math.hypot(particle.x - other.x, particle.y - other.y);
        if (gap < 115) {
          ctx.strokeStyle = `rgba(157,133,255,${.13 * (1 - gap / 115)})`;
          ctx.lineWidth = .7;
          ctx.beginPath(); ctx.moveTo(particle.x, particle.y); ctx.lineTo(other.x, other.y); ctx.stroke();
        }
      }
    });
    frame = requestAnimationFrame(draw);
  };
  resize();
  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("pointermove", move, { passive: true });
  draw();
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(frame);
    else draw();
  });
}

function init() {
  renderProjects();
  renderSkills();
  renderTimeline();
  renderCredentials();
  renderWriting();
  setupFilters();
  setupTyping();
  setupReveal();
  setupNavigation();
  setupCursorAura();
  setupParticleField();
  $("#year").textContent = new Date().getFullYear();
  window.addEventListener("load", () => {
    setTimeout(() => $("#preloader").classList.add("done"), 450);
  });
  setTimeout(() => $("#preloader")?.classList.add("done"), 1800);
}

init();
