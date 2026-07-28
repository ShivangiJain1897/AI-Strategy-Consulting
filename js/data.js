/* ============================================================================
   SITE CONTENT — the single source of truth for the whole website.
   ----------------------------------------------------------------------------
   👋 NON-TECHNICAL EDITING GUIDE
   Almost everything you'll want to change lives in THIS file.

   • To edit a pillar's text ............ change "summary", "description", "approach"
   • To add an accelerator .............. copy an existing { ... } block inside
                                          "accelerators" and change the values
   • To change an accelerator's status .. set "status" to one of:
                                          "available", "progress", or "planned"
   • Keep every "slug" UNIQUE and use only lowercase-with-dashes
     (the slug becomes the page's web address, e.g. ?slug=ai-opportunity-scan)

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

  /* ---- The four capability pillars -------------------------------------- */
  pillars: [
    /* ===================== PILLAR 1 ===================== */
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
        "Most AI programs stall because they begin with a tool in search of a problem. Business Value Discovery flips that. Working with your leaders and frontline teams, we map the value chain, quantify pain points, and pressure-test where AI can move a metric that matters — revenue, cost, risk, or experience. The output is a shared, defensible view of where to play and why.",
      outcomes: [
        "A ranked portfolio of AI opportunities tied to business KPIs",
        "Quantified value hypotheses with baseline and target metrics",
        "Executive alignment on ambition, scope, and sequencing",
      ],
      approach: [
        {
          title: "Frame",
          text: "Align on strategic objectives, value drivers, and the metrics that define success.",
        },
        {
          title: "Explore",
          text: "Run structured discovery across functions to surface pain points and AI-eligible moments.",
        },
        {
          title: "Quantify",
          text: "Size the value of each opportunity with a transparent, assumption-driven model.",
        },
        {
          title: "Shortlist",
          text: "Converge on a defensible portfolio of opportunities ready for prioritization.",
        },
      ],
      accelerators: [
        {
          slug: "ai-opportunity-scan",
          name: "AI Opportunity Scan",
          icon: "🔍",
          status: "available",
          summary:
            "A structured framework to rapidly map AI opportunities across a function or value chain.",
          description:
            "The AI Opportunity Scan gives teams a repeatable way to inventory candidate use cases, score them against value and effort, and produce a heat-mapped view of where AI can create the most impact — in days, not months.",
          deliverables: [
            "Value-chain opportunity heat map",
            "Use-case inventory with initial value/effort scoring",
            "Executive-ready opportunity summary",
          ],
          inputs: ["Process/value-chain overview", "Key business KPIs", "SME availability for discovery"],
          effort: "1–2 weeks",
        },
        {
          slug: "value-hypothesis-canvas",
          name: "Value Hypothesis Canvas",
          icon: "🧭",
          status: "progress",
          summary:
            "A one-page canvas to articulate and test the value hypothesis behind each AI use case.",
          description:
            "For each candidate use case, the canvas captures the problem, the intended intervention, the value mechanism, baseline and target metrics, and the assumptions that must hold true — creating a shared, testable definition of success before a line of code is written.",
          deliverables: ["Per-use-case value canvas", "Assumption & risk log", "Baseline/target metric definitions"],
          inputs: ["Shortlisted use cases", "Access to relevant KPI data"],
          effort: "3–5 days per use case",
        },
        {
          slug: "ai-business-case-model",
          name: "AI Business Case Model",
          icon: "📊",
          status: "planned",
          summary:
            "A financial model that turns value hypotheses into a defensible ROI and investment case.",
          description:
            "A configurable model that projects costs, benefits, ramp curves, and sensitivities for an AI initiative — giving finance and leadership a transparent basis for investment decisions.",
          deliverables: ["ROI / NPV model", "Cost & benefit driver breakdown", "Sensitivity analysis"],
          inputs: ["Validated value hypotheses", "Cost assumptions", "Adoption estimates"],
          effort: "1–2 weeks",
        },
      ],
    },

    /* ===================== PILLAR 2 ===================== */
    {
      slug: "technology-value-delivery",
      name: "Technology Value Delivery",
      short: "Turn prioritized opportunities into working, scalable AI.",
      icon: "⚙️",
      color: "#17c9c1",
      tint: "#e3f8f6",
      glow: "rgba(23,201,193,0.28)",
      summary:
        "Technology Value Delivery is how strategy becomes software. We design the architecture, prove value through rapid experimentation, and build the delivery muscle to scale AI safely and repeatably.",
      description:
        "A great opportunity portfolio is worthless if delivery stalls. This pillar covers the technology foundations — data readiness, reference architecture, evaluation, and the engineering practices (MLOps / LLMOps) — that let you move from prototype to production with confidence. We favor proving value fast with thin slices, then hardening what works.",
      outcomes: [
        "Reference architecture aligned to your stack and constraints",
        "Working prototypes that de-risk the highest-value use cases",
        "A repeatable path from experiment to production",
      ],
      approach: [
        {
          title: "Assess",
          text: "Evaluate data, platform, and engineering readiness against target use cases.",
        },
        {
          title: "Architect",
          text: "Design a fit-for-purpose reference architecture and evaluation strategy.",
        },
        {
          title: "Prototype",
          text: "Build thin, high-value slices to prove feasibility and value quickly.",
        },
        {
          title: "Industrialize",
          text: "Harden, automate, and operationalize what works for reliable scaling.",
        },
      ],
      accelerators: [
        {
          slug: "data-readiness-assessment",
          name: "Data Readiness Assessment",
          icon: "🗂️",
          status: "available",
          summary:
            "A rapid diagnostic of whether your data can support the AI use cases you want to build.",
          description:
            "Evaluates availability, quality, access, and governance of the data behind priority use cases, and produces a clear gap analysis and remediation plan so data doesn't become a mid-project surprise.",
          deliverables: ["Data readiness scorecard", "Gap analysis & remediation plan", "Use-case feasibility rating"],
          inputs: ["Priority use cases", "Data source inventory", "Data owner access"],
          effort: "1–2 weeks",
        },
        {
          slug: "reference-architecture-blueprint",
          name: "Reference Architecture Blueprint",
          icon: "🏗️",
          status: "progress",
          summary:
            "A modular blueprint for building and scaling AI and GenAI solutions on your stack.",
          description:
            "A vendor-aware reference architecture covering data pipelines, model serving, orchestration, retrieval, guardrails, and observability — adaptable to cloud and platform choices, and designed for security and scale from day one.",
          deliverables: ["Reference architecture diagrams", "Component & pattern catalog", "Build vs. buy guidance"],
          inputs: ["Current tech landscape", "Security & compliance constraints", "Target use-case patterns"],
          effort: "2–3 weeks",
        },
        {
          slug: "rapid-poc-framework",
          name: "Rapid PoC Framework",
          icon: "🚀",
          status: "progress",
          summary:
            "A repeatable framework for standing up value-proving proofs of concept in weeks.",
          description:
            "Provides the scaffolding, guardrails, and success criteria to run disciplined proofs of concept — so experiments are fast, comparable, and produce a clear go / no-go decision.",
          deliverables: ["PoC scaffolding & templates", "Success-criteria framework", "Go/no-go decision pack"],
          inputs: ["Prioritized use case", "Access to representative data", "SME time"],
          effort: "2–4 weeks",
        },
        {
          slug: "model-evaluation-harness",
          name: "Model Evaluation Harness",
          icon: "🧪",
          status: "planned",
          summary:
            "A structured harness to evaluate model and prompt quality, safety, and cost.",
          description:
            "Standardizes how you measure AI system performance across accuracy, safety, latency, and cost — enabling objective comparison of models, prompts, and configurations before you commit.",
          deliverables: ["Evaluation dataset & rubric", "Automated scoring pipeline", "Model comparison report"],
          inputs: ["Target task definition", "Representative test cases", "Quality thresholds"],
          effort: "1–3 weeks",
        },
      ],
    },

    /* ===================== PILLAR 3 ===================== */
    {
      slug: "governance",
      name: "Governance & AICC",
      short: "Govern AI responsibly and build lasting internal capability.",
      icon: "🛡️",
      color: "#f5a623",
      tint: "#fdf1dd",
      glow: "rgba(245,166,35,0.26)",
      summary:
        "Governance covers two intertwined disciplines: the program governance that keeps AI initiatives on track, and the AI Center of Competence (AICC) that builds durable internal capability, standards, and responsible-AI guardrails.",
      description:
        "AI at scale needs more than projects — it needs an operating model. This pillar establishes program governance to steer the portfolio, and stands up an AI Center of Competence (AICC) as the home for standards, reusable assets, talent, and responsible-AI practices. Together they turn AI from a series of experiments into a governed, compounding capability.",
      outcomes: [
        "A clear governance operating model and decision rights",
        "A functioning AI Center of Competence (AICC)",
        "Responsible-AI guardrails embedded in delivery",
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
            "A blueprint for standing up and running an AI Center of Competence.",
          description:
            "Defines the mandate, structure, roles, funding model, and service catalog of an AI Center of Competence — the organizational engine that scales AI capability across the enterprise.",
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

    /* ===================== PILLAR 4 ===================== */
    {
      slug: "value-based-prioritization",
      name: "Value-Based Prioritization",
      short: "Sequence the portfolio to maximize value and momentum.",
      icon: "📈",
      color: "#8b5cf6",
      tint: "#f0ebfe",
      glow: "rgba(139,92,246,0.26)",
      summary:
        "Value-Based Prioritization is the connective tissue between the pillars. It brings discipline to sequencing — balancing value, feasibility, and risk to build a roadmap that delivers early wins and compounding impact.",
      description:
        "With a portfolio of opportunities in hand, the hardest question is what to do first. Value-Based Prioritization applies a transparent, multi-criteria approach to rank and sequence initiatives — weighing value, feasibility, risk, and strategic fit — so investment flows to what matters and momentum builds behind visible wins.",
      outcomes: [
        "A transparent, defensible prioritization of initiatives",
        "A sequenced roadmap balancing quick wins and big bets",
        "A repeatable model for ongoing portfolio decisions",
      ],
      approach: [
        {
          title: "Define",
          text: "Agree the criteria and weights that reflect your strategy and constraints.",
        },
        {
          title: "Score",
          text: "Assess each initiative consistently against value, feasibility, and risk.",
        },
        {
          title: "Sequence",
          text: "Build a roadmap that balances quick wins with foundational investments.",
        },
        {
          title: "Revisit",
          text: "Re-prioritize on a cadence as evidence and conditions evolve.",
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
