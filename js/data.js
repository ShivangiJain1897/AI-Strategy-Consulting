/* ============================================================================
   SITE CONTENT — the single source of truth for the whole website.
   ----------------------------------------------------------------------------
   👋 NON-TECHNICAL EDITING GUIDE
   Almost everything you'll want to change lives in THIS file.

   • To edit a pillar's text ............ change "summary", "description", "approach"
   • To edit a pillar's focus areas ..... change the "focusAreas" list (the
                                          buckets a pillar is made up of)
   • To add an accelerator .............. copy an existing { ... } block inside
                                          "accelerators" and change the values
   • To change an accelerator's status .. set "status" to one of:
                                          "available", "progress", or "planned"
   • Keep every "slug" UNIQUE and use only lowercase-with-dashes
     (the slug becomes the page's web address, e.g. ?slug=service-design-framework)

   After editing, save the file and refresh the browser. That's it.
   ========================================================================== */

window.SITE = {
  /* ---- Brand / company details (used in nav + footer) ------------------- */
  brand: {
    name: "AI Strategy Studio",
    tagline: "AI Strategy & GTM Consulting",
    initials: "AI",
    email: "hello@example.com",
  },

  /* ---- The four pillars of transformation ------------------------------- */
  pillars: [
    /* ===================== PILLAR 1 — BUSINESS VALUE DISCOVERY ========== */
    {
      slug: "business-value-discovery",
      name: "Business Value Discovery",
      short: "Find where AI creates real, measurable business value.",
      icon: "🎯",
      color: "#4f60ff",
      tint: "#eef1fb",
      glow: "rgba(79,96,255,0.28)",
      summary:
        "We start with the business, not the technology. Business Value Discovery uncovers the highest-impact opportunities for AI across your value chain and translates them into a prioritized, evidence-backed opportunity portfolio.",
      description:
        "Most AI programs stall because they begin with a tool in search of a problem. Business Value Discovery flips that. Working with your leaders and frontline teams, we anchor on your strategic North Star, benchmark the market, map your value chains, and pressure-test where AI can move a metric that matters — revenue, cost, risk, or experience. The output is a shared, defensible view of where to play and why.",
      outcomes: [
        "A ranked portfolio of AI opportunities tied to business KPIs",
        "Quantified value hypotheses with baseline and target metrics",
        "Executive alignment on ambition, scope, and sequencing",
      ],
      /* The buckets / key aspects this pillar is made up of */
      focusAreas: [
        {
          name: "Service Design Understanding",
          icon: "🧩",
          text: "Map the end-to-end service and experience to reveal where AI can reshape value for customers and the business.",
        },
        {
          name: "Market Analysis & Benchmarking",
          icon: "🌐",
          text: "Read the competitive and AI landscape to set ambition against what leading organizations are already doing.",
        },
        {
          name: "Process Mining & Redesign",
          icon: "🔬",
          text: "Use event data to see how processes really run, then redesign them around AI-enabled moments.",
        },
        {
          name: "AI Readiness Assessment",
          icon: "📶",
          text: "Gauge data, technology, talent, and organizational readiness to act on AI opportunities.",
        },
        {
          name: "Business KPI Benchmarking",
          icon: "📊",
          text: "Establish the baseline metrics that define value and make the impact of AI measurable.",
        },
        {
          name: "AI Product Management",
          icon: "🧭",
          text: "Bring product discipline to shaping, prioritizing, and owning AI use cases end to end.",
        },
      ],
      /* The five-step approach for this pillar */
      approach: [
        {
          title: "Anchor on your North Star",
          text: "Align on the strategic objectives and value drivers that every opportunity must tie back to.",
        },
        {
          title: "Benchmark the market",
          text: "Understand what leaders are doing and where the bar for 'good' really sits.",
        },
        {
          title: "Map the value chains",
          text: "Lay out the end-to-end value chains to see where value is created, lost, and unlocked.",
        },
        {
          title: "Target impactful processes",
          text: "Focus on the processes where AI can move the metrics that matter most.",
        },
        {
          title: "Shape transformative use cases",
          text: "Turn targeted opportunities into well-defined, high-value AI use cases ready to prioritize.",
        },
      ],
      accelerators: [
        {
          slug: "service-design-framework",
          name: "Service Design Framework",
          icon: "🧩",
          status: "progress",
          summary:
            "A structured framework for mapping the end-to-end service and spotting where AI reshapes value.",
          description:
            "The Service Design Framework brings a customer- and service-centric lens to opportunity discovery. It maps actors, touchpoints, journeys, and the processes beneath them so teams can see the whole service system and pinpoint the moments where AI can transform experience, efficiency, and value.",
          deliverables: [
            "Service blueprint & journey maps",
            "Pain-point and opportunity overlay",
            "Prioritized AI intervention points",
          ],
          inputs: ["Service / process overview", "CX and operations SME access", "Existing journey or process docs"],
          effort: "2–3 weeks",
        },
        {
          slug: "business-process-mining-approach",
          name: "Business Process Mining Approach",
          icon: "🔬",
          status: "progress",
          summary:
            "A data-driven approach to reveal how processes actually run and redesign them around AI.",
          description:
            "Rather than relying on how a process is assumed to work, the Process Mining Approach uses event-log data to reconstruct the real flow — surfacing bottlenecks, rework, and variants. That evidence base drives targeted redesign around AI-enabled steps.",
          deliverables: [
            "Process discovery & conformance analysis",
            "Bottleneck and variant heat map",
            "AI-enabled redesign recommendations",
          ],
          inputs: ["Event-log / system data", "Process scope", "Data access & owners"],
          effort: "3–5 weeks",
        },
        {
          slug: "business-kpi-benchmarks",
          name: "Business KPI Benchmarks",
          icon: "📊",
          status: "planned",
          summary:
            "A reference set of business KPIs and benchmarks to baseline value and measure impact.",
          description:
            "A curated library of the KPIs that matter by function and industry, with benchmark ranges — giving teams a fast, credible way to baseline current performance and define the targets AI initiatives will be measured against.",
          deliverables: [
            "KPI library by function",
            "Benchmark reference ranges",
            "Baseline-vs-target definition sheet",
          ],
          inputs: ["Function / industry context", "Access to current performance data"],
          effort: "1–2 weeks",
        },
        {
          slug: "ai-readiness-assessment",
          name: "AI Readiness Assessment",
          icon: "📶",
          status: "planned",
          summary:
            "A diagnostic of data, technology, talent, and organizational readiness to pursue AI.",
          description:
            "The AI Readiness Assessment scores the organization across the dimensions that determine whether AI opportunities can actually be delivered — data, platform, skills, governance, and change capacity — and produces a clear readiness profile with gaps and next steps.",
          deliverables: [
            "Multi-dimension readiness scorecard",
            "Gap analysis",
            "Prioritized readiness roadmap",
          ],
          inputs: ["Stakeholder interviews", "Data & platform overview", "Organizational context"],
          effort: "2–3 weeks",
        },
        {
          slug: "business-case-template",
          name: "Business Case Template",
          icon: "🧾",
          status: "planned",
          summary:
            "A ready-to-use template to turn AI opportunities into a defensible business case.",
          description:
            "A structured template and model that captures costs, benefits, assumptions, and risks for an AI initiative — producing a consistent, finance-ready business case that leadership can compare and trust.",
          deliverables: ["Business case template", "Cost / benefit model", "Assumptions & risk log"],
          inputs: ["Opportunity definition", "Cost & benefit inputs", "Adoption estimates"],
          effort: "~1 week",
        },
        {
          slug: "ai-product-management-discipline",
          name: "AI Product Management Discipline",
          icon: "🧭",
          status: "planned",
          summary:
            "An operating discipline for shaping, prioritizing, and owning AI use cases like products.",
          description:
            "Brings product-management rigor to AI — defining the roles, artifacts, and cadences (discovery, backlog, prioritization, lifecycle) so AI use cases are owned end to end and evolve based on evidence rather than one-off projects.",
          deliverables: [
            "AI product operating model",
            "Discovery-to-delivery artifacts",
            "Prioritization & lifecycle cadence",
          ],
          inputs: ["Current delivery model", "Stakeholder roles", "Portfolio context"],
          effort: "2–4 weeks",
        },
      ],
    },

    /* ===================== PILLAR 2 — TECHNOLOGY VALUE DELIVERY ========= */
    {
      slug: "technology-value-delivery",
      name: "Technology Value Delivery",
      short: "Turn prioritized opportunities into working, scalable AI.",
      icon: "⚙️",
      color: "#17c9c1",
      tint: "#e3f8f6",
      glow: "rgba(23,201,193,0.28)",
      summary:
        "Technology Value Delivery is how strategy becomes working, scalable AI. We move teams from a traditional SDLC to an AI Development Life Cycle (ADLC), build reusable architecture and capabilities, lay a strong data foundation, and engineer the economics so value scales efficiently.",
      description:
        "A great opportunity portfolio is worthless if delivery stalls. This pillar builds the technology engine for AI at scale: redesigning delivery around an AI Development Life Cycle (ADLC), establishing composable and reusable architecture and capability patterns, selecting the right AI platform, laying a robust data foundation, and standing up a governance and control tower — all engineered with the economics of scale in mind.",
      outcomes: [
        "A shift from SDLC to a repeatable AI Development Life Cycle (ADLC)",
        "Composable architecture and capabilities reused across use cases",
        "A robust data foundation and fit-for-purpose AI platform",
      ],
      /* The buckets / key aspects this pillar is made up of */
      focusAreas: [
        {
          name: "ADLC Process, Redesign & Value Models",
          icon: "🔄",
          text: "Redesign the delivery lifecycle from SDLC to an AI Development Life Cycle, with process redesign and value models built in.",
        },
        {
          name: "Architecture & Capability Reuse",
          icon: "♻️",
          text: "Design composable architecture and reusable capabilities so the same building blocks serve many use cases.",
        },
        {
          name: "AI Platform Selection",
          icon: "🧰",
          text: "Choose the right AI and GenAI platform for your stack, constraints, and ambition.",
        },
        {
          name: "Data Foundation",
          icon: "🗄️",
          text: "Establish the data architecture, quality, and governance that reliable AI depends on.",
        },
        {
          name: "Governance & Control Tower",
          icon: "🗼",
          text: "Stand up a control tower to monitor delivery, cost, risk, and performance across AI initiatives.",
        },
      ],
      /* The four-step approach for this pillar */
      approach: [
        {
          title: "Move from SDLC to ADLC",
          text: "Redesign delivery around an AI Development Life Cycle built for data, models, and continuous iteration.",
        },
        {
          title: "Build once, reuse everywhere",
          text: "Establish composable architecture and capability patterns so new use cases assemble from proven building blocks.",
        },
        {
          title: "Lay the data foundation",
          text: "Put in place the data architecture, quality, and governance that scalable AI depends on.",
        },
        {
          title: "Engineer the economics",
          text: "Design for cost, performance, and reuse so value scales efficiently — not just technically.",
        },
      ],
      accelerators: [
        {
          slug: "adlc-agents-accelerators",
          name: "ADLC Agents & Accelerators",
          icon: "🤖",
          status: "progress",
          summary:
            "AI agents and tooling that automate and speed up the AI Development Life Cycle.",
          description:
            "A growing toolkit of agents and accelerators mapped to each stage of the AI Development Life Cycle (ADLC) — from discovery and data prep to build, evaluation, and deployment — so teams deliver AI faster and more consistently than a hand-crafted SDLC allows.",
          deliverables: ["ADLC stage-by-stage tooling map", "Reusable agent templates", "Delivery automation playbook"],
          inputs: ["Current delivery lifecycle", "Tooling landscape", "Target use-case types"],
          effort: "3–6 weeks",
        },
        {
          slug: "composable-architecture-blueprint",
          name: "Composable Architecture Blueprint",
          icon: "🧱",
          status: "progress",
          summary:
            "A modular, composable reference architecture designed for reuse across AI use cases.",
          description:
            "A blueprint that breaks the AI stack into composable building blocks — data, retrieval, models, orchestration, guardrails, and observability — so new use cases assemble from proven components instead of starting from scratch.",
          deliverables: ["Composable architecture diagrams", "Reusable component catalog", "Integration & extension guidelines"],
          inputs: ["Current tech landscape", "Platform & security constraints", "Target use-case patterns"],
          effort: "2–3 weeks",
        },
        {
          slug: "capability-patterns-archetypes",
          name: "Capability Patterns & Archetypes",
          icon: "🧩",
          status: "planned",
          summary:
            "A library of common AI capability patterns and archetypes to accelerate design.",
          description:
            "Codifies recurring AI solution patterns (e.g., RAG assistant, document extraction, agentic workflow, forecasting) into reusable archetypes with reference designs — so teams pick a proven pattern rather than reinventing the approach for every use case.",
          deliverables: ["Capability pattern library", "Per-archetype reference design", "Pattern selection guidance"],
          inputs: ["Use-case portfolio", "Existing solution inventory"],
          effort: "2–4 weeks",
        },
        {
          slug: "build-vs-buy-framework",
          name: "Build vs. Buy Framework",
          icon: "⚖️",
          status: "planned",
          summary:
            "A structured framework to decide when to build, buy, or partner for AI capabilities.",
          description:
            "A decision framework and scoring model that weighs cost, differentiation, time-to-value, and risk to guide build-versus-buy-versus-partner choices across the AI stack — keeping investment focused on what truly differentiates.",
          deliverables: ["Build/buy/partner decision framework", "Weighted scoring model", "Recommendation summary"],
          inputs: ["Capability requirements", "Vendor landscape", "Cost & constraint inputs"],
          effort: "1–2 weeks",
        },
        {
          slug: "data-foundation-architecture",
          name: "Data Foundation Architecture",
          icon: "🏗️",
          status: "planned",
          summary:
            "A reference architecture for the data foundation that AI at scale depends on.",
          description:
            "Defines the data architecture — ingestion, storage, quality, governance, and retrieval / vector layers — that reliable, scalable AI requires, aligned to your platform and ready to serve multiple use cases.",
          deliverables: ["Data foundation architecture", "Data quality & governance model", "Retrieval / vector layer design"],
          inputs: ["Data landscape & sources", "Platform choices", "Priority use-case data needs"],
          effort: "2–4 weeks",
        },
      ],
    },

    /* ===================== PILLAR 3 — GOVERNANCE ======================== */
    {
      slug: "governance",
      name: "Governance",
      short: "Govern AI responsibly and build lasting internal capability.",
      icon: "🛡️",
      color: "#f5a623",
      tint: "#fdf1dd",
      glow: "rgba(245,166,35,0.26)",
      summary:
        "Governance spans two intertwined arms: the Enterprise Governance Program that keeps AI initiatives aligned, controlled, and compliant, and the AI Competency Center (AICC) that builds durable internal capability, standards, and reusable assets.",
      description:
        "AI at scale needs more than projects — it needs an operating model. This pillar establishes an enterprise governance program to steer the portfolio with the right decision rights and controls, and stands up an AI Competency Center (AICC) as the home for standards, reusable assets, talent, and responsible-AI practices. Together they turn AI from a series of experiments into a governed, compounding capability.",
      outcomes: [
        "A clear governance operating model and decision rights",
        "A functioning AI Competency Center (AICC)",
        "Responsible-AI guardrails embedded in delivery",
      ],
      /* The two arms that make up Governance */
      focusAreas: [
        {
          name: "Enterprise Governance Program",
          icon: "🏛️",
          text: "Establish the bodies, decision rights, standards, and controls that keep AI initiatives aligned, funded, and compliant across the enterprise.",
        },
        {
          name: "AI Competency Center (AICC)",
          icon: "🎓",
          text: "Build a central home for AI talent, reusable assets, and standards that scales capability and consistency across teams.",
        },
      ],
      approach: [
        {
          title: "Establish",
          text: "Define governance bodies, decision rights, and the AICC operating model.",
        },
        {
          title: "Standardize",
          text: "Set standards, reusable assets, and responsible-AI policies teams can adopt.",
        },
        {
          title: "Enable",
          text: "Build skills, playbooks, and support so teams deliver consistently.",
        },
        {
          title: "Assure",
          text: "Monitor risk, compliance, and value realization across the portfolio.",
        },
      ],
      accelerators: [
        {
          slug: "aicc-operating-model",
          name: "AICC Operating Model",
          icon: "🏛️",
          status: "available",
          summary:
            "A blueprint for standing up and running an AI Competency Center.",
          description:
            "Defines the mandate, structure, roles, funding model, and service catalog of an AI Competency Center — the organizational engine that scales AI capability across the enterprise.",
          deliverables: ["AICC operating model", "Roles & RACI", "Service catalog & funding model"],
          inputs: ["Org context & ambition", "Existing capability inventory", "Stakeholder input"],
          effort: "2–4 weeks",
        },
        {
          slug: "responsible-ai-framework",
          name: "Responsible AI Framework",
          icon: "⚖️",
          status: "progress",
          summary:
            "A practical policy and control framework for trustworthy, compliant AI.",
          description:
            "Translates responsible-AI principles into concrete policies, review gates, and controls that fit into delivery — covering fairness, transparency, security, and regulatory alignment.",
          deliverables: ["Responsible-AI policy set", "Risk tiering & review gates", "Control checklist"],
          inputs: ["Regulatory context", "Risk appetite", "Existing policies"],
          effort: "2–4 weeks",
        },
        {
          slug: "program-governance-playbook",
          name: "Program Governance Playbook",
          icon: "📋",
          status: "planned",
          summary:
            "A playbook for steering the AI portfolio with the right cadences and metrics.",
          description:
            "Provides the governance cadences, stage gates, reporting, and escalation paths to keep a portfolio of AI initiatives aligned, funded, and delivering measurable value.",
          deliverables: ["Governance cadence & stage gates", "Portfolio dashboard template", "Escalation framework"],
          inputs: ["Portfolio overview", "Existing PMO practices", "Leadership cadence"],
          effort: "1–3 weeks",
        },
      ],
    },

    /* ===================== PILLAR 4 — VALUE REALIZATION & ECONOMICS ===== */
    {
      slug: "value-realization-economics",
      name: "Value Realization & Economics",
      short: "Prioritize, capture, and prove the economic value AI delivers.",
      icon: "📈",
      color: "#8b5cf6",
      tint: "#f0ebfe",
      glow: "rgba(139,92,246,0.26)",
      summary:
        "Value Realization & Economics makes AI accountable for outcomes. It brings economic discipline to prioritize investment, track promised versus realized value, and prove the return on the AI portfolio.",
      description:
        "AI only matters if it delivers value the business can see. This pillar establishes the economic frame — prioritizing initiatives on value and feasibility, modeling costs and benefits, and tracking benefits realization — so leadership can invest with confidence and continuously double down on what works.",
      outcomes: [
        "A transparent basis for AI investment decisions",
        "Clear tracking of promised vs. realized value",
        "A defensible view of AI portfolio ROI",
      ],
      approach: [
        {
          title: "Define value",
          text: "Agree the criteria, weights, and metrics that reflect your strategy and constraints.",
        },
        {
          title: "Model the economics",
          text: "Size the costs, benefits, and returns of each initiative with a transparent model.",
        },
        {
          title: "Prioritize & sequence",
          text: "Rank and sequence initiatives to balance quick wins with foundational bets.",
        },
        {
          title: "Track & realize",
          text: "Monitor realized value against the business case and course-correct as evidence lands.",
        },
      ],
      accelerators: [
        {
          slug: "value-feasibility-scoring",
          name: "Value–Feasibility Scoring Model",
          icon: "⚖️",
          status: "available",
          summary:
            "A transparent multi-criteria model to score and rank AI initiatives.",
          description:
            "A configurable scoring model that rates each initiative on value, feasibility, and risk using agreed weights — producing a defensible, comparable ranking that stakeholders can trust.",
          deliverables: ["Weighted scoring model", "Ranked initiative list", "Prioritization matrix (2x2)"],
          inputs: ["Opportunity portfolio", "Agreed criteria & weights", "Stakeholder scoring input"],
          effort: "1–2 weeks",
        },
        {
          slug: "ai-investment-roadmap",
          name: "AI Investment Roadmap",
          icon: "🗺️",
          status: "progress",
          summary:
            "A sequenced, multi-horizon roadmap linking initiatives to value and investment.",
          description:
            "Turns a prioritized portfolio into a phased roadmap across horizons — showing what gets built when, the dependencies, and the value expected at each stage.",
          deliverables: ["Multi-horizon roadmap", "Dependency & capacity view", "Value realization timeline"],
          inputs: ["Prioritized initiatives", "Capacity constraints", "Dependency map"],
          effort: "1–2 weeks",
        },
        {
          slug: "benefits-realization-tracker",
          name: "Benefits Realization Tracker",
          icon: "📥",
          status: "planned",
          summary:
            "A tool to track promised vs. realized value across the AI portfolio.",
          description:
            "Keeps AI honest about value — tracking the benefits committed in the business case against what is actually realized, so leadership can course-correct and double down on what works.",
          deliverables: ["Benefits tracking dashboard", "Value baseline vs. actuals", "Course-correction reporting"],
          inputs: ["Business case metrics", "Live performance data", "Reporting cadence"],
          effort: "1–2 weeks",
        },
      ],
    },
  ],
};
