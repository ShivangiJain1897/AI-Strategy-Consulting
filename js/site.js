/* ============================================================================
   SITE ENGINE — builds the shared navigation & footer, and renders the
   pillar and accelerator pages from the content in data.js.
   You normally do NOT need to edit this file to change content.
   ========================================================================== */
(function () {
  "use strict";

  var SITE = window.SITE || { brand: {}, pillars: [] };

  /* ---- Small helpers ---------------------------------------------------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function qs(name) {
    return new URLSearchParams(window.location.search).get(name);
  }
  function findPillar(slug) {
    return SITE.pillars.filter(function (p) {
      return p.slug === slug;
    })[0];
  }
  function findAccelerator(slug) {
    for (var i = 0; i < SITE.pillars.length; i++) {
      var accs = SITE.pillars[i].accelerators || [];
      for (var j = 0; j < accs.length; j++) {
        if (accs[j].slug === slug) {
          return { pillar: SITE.pillars[i], accel: accs[j] };
        }
      }
    }
    return null;
  }
  var STATUS = {
    available: { cls: "badge--available", label: "Available" },
    progress: { cls: "badge--progress", label: "In Development" },
    planned: { cls: "badge--planned", label: "Planned" },
  };
  function statusBadge(status) {
    var s = STATUS[status] || STATUS.planned;
    return '<span class="badge ' + s.cls + '"><span class="dot"></span>' + s.label + "</span>";
  }

  /* Base path helper: pages live at site root, so links are relative to root.
     We detect if we're in a subfolder (we aren't in this design) — kept simple. */
  var ROOT = "";

  /* ---- Universal navigation --------------------------------------------- */
  function buildHeader() {
    var mount = document.querySelector("[data-site-header]");
    if (!mount) return;
    var b = SITE.brand || {};
    var dropdown = SITE.pillars
      .map(function (p) {
        return (
          '<li><a href="' +
          ROOT +
          "pillar.html?slug=" +
          esc(p.slug) +
          '"><strong>' +
          esc(p.icon) +
          "  " +
          esc(p.name) +
          "</strong><span>" +
          esc(p.short) +
          "</span></a></li>"
        );
      })
      .join("");

    mount.innerHTML =
      '<div class="container">' +
      '<nav class="nav" aria-label="Primary">' +
      '<a class="brand" href="' + ROOT + 'index.html">' +
      '<span class="brand-mark">' + esc(b.initials || "AI") + "</span>" +
      "<span>" + esc(b.name || "AI Strategy") +
      "<small>" + esc(b.tagline || "") + "</small></span>" +
      "</a>" +
      '<button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">☰</button>' +
      '<ul class="nav-links">' +
      '<li><a class="nav-link" href="' + ROOT + 'index.html">Home</a></li>' +
      '<li class="has-dropdown"><a class="nav-link" href="' + ROOT + 'capabilities.html">Capabilities</a>' +
      '<ul class="dropdown">' + dropdown + "</ul></li>" +
      '<li><a class="nav-link" href="' + ROOT + 'accelerators.html">Accelerators</a></li>' +
      '<li><a class="nav-link" href="' + ROOT + 'methodology.html">Methodology</a></li>' +
      '<li><a class="nav-link" href="' + ROOT + 'about.html">About</a></li>' +
      "</ul>" +
      '<div class="nav-cta">' +
      '<a class="btn btn--primary btn--sm" href="' + ROOT + 'contact.html">Get in touch</a>' +
      "</div>" +
      "</nav></div>";

    // Mobile toggle
    var toggle = mount.querySelector(".nav-toggle");
    var links = mount.querySelector(".nav-links");
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Highlight current page
    var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    mount.querySelectorAll(".nav-link").forEach(function (a) {
      var href = (a.getAttribute("href") || "").toLowerCase();
      if (href.indexOf(here) !== -1 && here) a.setAttribute("aria-current", "page");
    });
  }

  /* ---- Universal footer ------------------------------------------------- */
  function buildFooter() {
    var mount = document.querySelector("[data-site-footer]");
    if (!mount) return;
    var b = SITE.brand || {};
    var pillarLinks = SITE.pillars
      .map(function (p) {
        return '<li><a href="' + ROOT + "pillar.html?slug=" + esc(p.slug) + '">' + esc(p.name) + "</a></li>";
      })
      .join("");
    var year = document.currentScript ? "" : ""; // year filled below without Date restrictions

    mount.innerHTML =
      '<div class="container">' +
      '<div class="footer-grid">' +
      "<div>" +
      '<a class="brand" href="' + ROOT + 'index.html">' +
      '<span class="brand-mark">' + esc(b.initials || "AI") + "</span>" +
      "<span>" + esc(b.name || "AI Strategy") + "</span></a>" +
      '<p class="footer-about">' +
      esc(b.tagline || "") +
      ". A go-to-market showcase of how we help organizations turn AI ambition into governed, measurable value." +
      "</p>" +
      "</div>" +
      '<div class="footer-col"><h5>Capabilities</h5><ul>' + pillarLinks + "</ul></div>" +
      '<div class="footer-col"><h5>Explore</h5><ul>' +
      '<li><a href="' + ROOT + 'capabilities.html">All Capabilities</a></li>' +
      '<li><a href="' + ROOT + 'accelerators.html">Accelerator Library</a></li>' +
      '<li><a href="' + ROOT + 'methodology.html">Methodology</a></li>' +
      "</ul></div>" +
      '<div class="footer-col"><h5>Company</h5><ul>' +
      '<li><a href="' + ROOT + 'about.html">About</a></li>' +
      '<li><a href="' + ROOT + 'contact.html">Contact</a></li>' +
      "</ul></div>" +
      "</div>" +
      '<div class="footer-bottom">' +
      "<span>&copy; " +
      esc(b.name || "AI Strategy Studio") +
      ". Illustrative GTM showcase.</span>" +
      "<span>Built as a living asset — accelerators ship over time.</span>" +
      "</div>" +
      "</div>";
  }

  /* ---- Reveal-on-scroll ------------------------------------------------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );
    els.forEach(function (el) {
      io.observe(el);
    });

    // Safety net: never leave content permanently hidden if the observer
    // doesn't fire (unusual browsers, capture tools, programmatic scrolling).
    // Below-the-fold elements aren't visible yet, so forcing them shown causes
    // no flash — it only guarantees content is there when the user scrolls to it.
    window.setTimeout(function () {
      document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (el) {
        el.classList.add("is-visible");
      });
    }, 1600);
  }

  /* ---- Renderers reused across pages ------------------------------------ */
  function pillarCardHTML(p) {
    var count = (p.accelerators || []).length;
    return (
      '<article class="pillar-card reveal" style="--pillar-color:' +
      esc(p.color) +
      ";--pillar-tint:" +
      esc(p.tint) +
      '">' +
      '<div class="pillar-icon">' + esc(p.icon) + "</div>" +
      "<h3>" + esc(p.name) + "</h3>" +
      "<p>" + esc(p.summary) + "</p>" +
      '<div class="pillar-meta"><span>' + count + " accelerators</span>" +
      '<span class="arrow">Explore &rarr;</span></div>' +
      '<a class="card-link-cover" href="' + ROOT + "pillar.html?slug=" + esc(p.slug) + '">' +
      esc(p.name) + "</a>" +
      "</article>"
    );
  }

  function accelCardHTML(p, a) {
    return (
      '<article class="accel-card reveal">' +
      '<div class="accel-top">' +
      '<div class="accel-icon">' + esc(a.icon) + "</div>" +
      statusBadge(a.status) +
      "</div>" +
      "<h4>" + esc(a.name) + "</h4>" +
      "<p>" + esc(a.summary) + "</p>" +
      '<div class="accel-foot">View accelerator &rarr;</div>' +
      '<a class="card-link-cover" href="' + ROOT + "accelerator.html?slug=" + esc(a.slug) + '">' +
      esc(a.name) + "</a>" +
      "</article>"
    );
  }

  /* ---- Home: render pillar grid ----------------------------------------- */
  function renderHomePillars() {
    var mount = document.querySelector("[data-pillar-grid]");
    if (!mount) return;
    mount.innerHTML = SITE.pillars.map(pillarCardHTML).join("");
  }

  /* ---- Capabilities index page ------------------------------------------ */
  function renderCapabilities() {
    var mount = document.querySelector("[data-capabilities]");
    if (!mount) return;
    mount.innerHTML = SITE.pillars
      .map(function (p) {
        var accs = (p.accelerators || [])
          .map(function (a) {
            return accelCardHTML(p, a);
          })
          .join("");
        return (
          '<div class="section-head reveal" style="margin-bottom:28px">' +
          '<span class="eyebrow" style="color:' + esc(p.color) + '">' + esc(p.icon) + " " + esc(p.name) + "</span>" +
          "<p class=\"lead\">" + esc(p.summary) + "</p>" +
          '<a class="btn btn--light btn--sm" href="' + ROOT + "pillar.html?slug=" + esc(p.slug) + '">Open pillar &rarr;</a>' +
          "</div>" +
          '<div class="accel-grid" style="margin-bottom:64px">' + accs + "</div>"
        );
      })
      .join("");
  }

  /* ---- All accelerators library ----------------------------------------- */
  function renderAcceleratorLibrary() {
    var mount = document.querySelector("[data-accel-library]");
    if (!mount) return;
    var cards = [];
    SITE.pillars.forEach(function (p) {
      (p.accelerators || []).forEach(function (a) {
        cards.push(accelCardHTML(p, a));
      });
    });
    mount.innerHTML = '<div class="accel-grid">' + cards.join("") + "</div>";

    // Simple counts
    var counts = { available: 0, progress: 0, planned: 0, total: 0 };
    SITE.pillars.forEach(function (p) {
      (p.accelerators || []).forEach(function (a) {
        counts.total++;
        counts[a.status] = (counts[a.status] || 0) + 1;
      });
    });
    var stat = document.querySelector("[data-accel-counts]");
    if (stat) {
      stat.innerHTML =
        '<div class="stat"><strong>' + counts.total + "</strong><span>Total accelerators</span></div>" +
        '<div class="stat"><strong>' + counts.available + "</strong><span>Available now</span></div>" +
        '<div class="stat"><strong>' + counts.progress + "</strong><span>In development</span></div>" +
        '<div class="stat"><strong>' + counts.planned + "</strong><span>Planned</span></div>";
    }
  }

  /* ---- Pillar detail page ----------------------------------------------- */
  function renderPillarPage() {
    var mount = document.querySelector("[data-pillar-page]");
    if (!mount) return;
    var p = findPillar(qs("slug"));
    if (!p) {
      mount.innerHTML =
        '<section class="section"><div class="container"><h1>Pillar not found</h1>' +
        '<p><a href="' + ROOT + 'capabilities.html">Back to all capabilities &rarr;</a></p></div></section>';
      return;
    }
    document.title = p.name + " — " + (SITE.brand.name || "AI Strategy");

    var approach = (p.approach || [])
      .map(function (s) {
        return '<div class="step reveal"><h4>' + esc(s.title) + "</h4><p>" + esc(s.text) + "</p></div>";
      })
      .join("");

    var outcomes = (p.outcomes || [])
      .map(function (o) {
        return '<li><span class="check">✓</span><span><span>' + esc(o) + "</span></span></li>";
      })
      .join("");

    // Focus areas (the buckets a pillar is made up of) — optional
    var focusSection = "";
    if (p.focusAreas && p.focusAreas.length) {
      var focusCards = p.focusAreas
        .map(function (f) {
          return (
            '<article class="focus-card reveal">' +
            '<div class="focus-icon">' + esc(f.icon || "•") + "</div>" +
            "<h4>" + esc(f.name) + "</h4>" +
            (f.text ? "<p>" + esc(f.text) + "</p>" : "") +
            "</article>"
          );
        })
        .join("");
      focusSection =
        '<section class="section"><div class="container">' +
        '<div class="section-head reveal"><span class="eyebrow">What it covers</span>' +
        "<h2>Key focus areas</h2>" +
        '<p class="lead">The core areas that make up ' + esc(p.name) + ".</p></div>" +
        '<div class="focus-grid">' + focusCards + "</div>" +
        "</div></section>";
    }

    var accels = (p.accelerators || [])
      .map(function (a) {
        return accelCardHTML(p, a);
      })
      .join("");

    mount.innerHTML =
      /* Page hero */
      '<header class="page-hero" style="--pillar-glow:' + esc(p.glow) + '">' +
      '<div class="container">' +
      '<nav class="breadcrumbs"><a href="' + ROOT + 'index.html">Home</a><span class="sep">/</span>' +
      '<a href="' + ROOT + 'capabilities.html">Capabilities</a><span class="sep">/</span>' +
      "<span>" + esc(p.name) + "</span></nav>" +
      '<span class="pill-tag">' + esc(p.icon) + " Capability Pillar</span>" +
      "<h1>" + esc(p.name) + "</h1>" +
      '<p class="lead">' + esc(p.summary) + "</p>" +
      "</div></header>" +
      /* Overview + outcomes */
      '<section class="section"><div class="container">' +
      '<div class="grid-2">' +
      '<div class="reveal"><span class="eyebrow">Overview</span>' +
      "<h2>What this pillar covers</h2><p class=\"lead\">" + esc(p.description) + "</p></div>" +
      '<div class="panel panel--tint reveal"><h3 style="margin-bottom:18px">Outcomes you can expect</h3>' +
      '<ul class="feature-list">' + outcomes + "</ul></div>" +
      "</div></div></section>" +
      /* Focus areas (optional) */
      focusSection +
      /* Approach */
      '<section class="section section--alt"><div class="container">' +
      '<div class="section-head reveal"><span class="eyebrow">Our Approach</span>' +
      "<h2>How we deliver " + esc(p.name) + "</h2>" +
      '<p class="lead">A structured, repeatable path from framing to impact.</p></div>' +
      '<div class="steps">' + approach + "</div>" +
      "</div></section>" +
      /* Accelerators */
      '<section class="section"><div class="container">' +
      '<div class="section-head reveal"><span class="eyebrow">Accelerators</span>' +
      "<h2>Assets that speed up delivery</h2>" +
      '<p class="lead">Reusable frameworks, models, and tools for this pillar. Each is being built into a working asset over time — click any card to learn more.</p></div>' +
      '<div class="accel-grid">' + accels + "</div>" +
      "</div></section>" +
      /* CTA */
      '<section class="section section--alt"><div class="container">' +
      ctaBandHTML() +
      "</div></section>";

    initReveal();
  }

  /* ---- Accelerator detail page ------------------------------------------ */
  function renderAcceleratorPage() {
    var mount = document.querySelector("[data-accel-page]");
    if (!mount) return;
    var found = findAccelerator(qs("slug"));
    if (!found) {
      mount.innerHTML =
        '<section class="section"><div class="container"><h1>Accelerator not found</h1>' +
        '<p><a href="' + ROOT + 'accelerators.html">Back to the accelerator library &rarr;</a></p></div></section>';
      return;
    }
    var p = found.pillar,
      a = found.accel;
    document.title = a.name + " — " + (SITE.brand.name || "AI Strategy");

    var deliverables = (a.deliverables || [])
      .map(function (d) {
        return '<li><span class="check">✓</span><span><span>' + esc(d) + "</span></span></li>";
      })
      .join("");
    var inputs = (a.inputs || [])
      .map(function (d) {
        return '<li><span class="check">›</span><span><span>' + esc(d) + "</span></span></li>";
      })
      .join("");

    // "Roadmap" reflects that these are built over time
    var stageState = {
      planned: ["active", "", ""],
      progress: ["done", "active", ""],
      available: ["done", "done", "active"],
    };
    var st = stageState[a.status] || stageState.planned;

    mount.innerHTML =
      '<header class="page-hero" style="--pillar-glow:' + esc(p.glow) + '">' +
      '<div class="container">' +
      '<nav class="breadcrumbs"><a href="' + ROOT + 'index.html">Home</a><span class="sep">/</span>' +
      '<a href="' + ROOT + "pillar.html?slug=" + esc(p.slug) + '">' + esc(p.name) + "</a>" +
      '<span class="sep">/</span><span>' + esc(a.name) + "</span></nav>" +
      '<div style="display:flex;gap:14px;align-items:center;flex-wrap:wrap;margin-bottom:6px">' +
      '<span class="pill-tag" style="margin:0">' + esc(a.icon) + " Accelerator</span>" +
      statusBadge(a.status) +
      "</div>" +
      "<h1>" + esc(a.name) + "</h1>" +
      '<p class="lead">' + esc(a.summary) + "</p>" +
      "</div></header>" +
      '<section class="section"><div class="container"><div class="grid-2">' +
      /* Left: description + deliverables */
      '<div class="reveal">' +
      '<span class="eyebrow">What it is</span><h2>Overview</h2>' +
      "<p class=\"lead\">" + esc(a.description) + "</p>" +
      (deliverables
        ? '<h3 style="margin-top:32px">What you get</h3><ul class="feature-list">' + deliverables + "</ul>"
        : "") +
      (inputs
        ? '<h3 style="margin-top:32px">What we need from you</h3><ul class="feature-list">' + inputs + "</ul>"
        : "") +
      (a.status !== "available"
        ? '<div class="callout"><p><strong>Status: ' +
          esc(STATUS[a.status].label) +
          ".</strong> This accelerator is part of our roadmap of working assets and is being built out over time. Reach out if you'd like to shape it or pilot an early version.</p></div>"
        : "") +
      "</div>" +
      /* Right: meta + roadmap */
      '<div class="reveal">' +
      '<div class="panel" style="margin-bottom:22px"><h3 style="margin-bottom:12px">At a glance</h3>' +
      '<ul class="meta-list">' +
      '<li><span class="k">Pillar</span><span class="v"><a href="' + ROOT + "pillar.html?slug=" + esc(p.slug) + '">' + esc(p.name) + "</a></span></li>" +
      '<li><span class="k">Status</span><span class="v">' + esc(STATUS[a.status].label) + "</span></li>" +
      (a.effort ? '<li><span class="k">Typical effort</span><span class="v">' + esc(a.effort) + "</span></li>" : "") +
      '<li><span class="k">Format</span><span class="v">Reusable asset</span></li>' +
      "</ul></div>" +
      '<div class="panel"><h3 style="margin-bottom:16px">Build roadmap</h3>' +
      '<ul class="timeline">' +
      '<li class="' + st[0] + '"><h4>Framework defined</h4><p>Approach, templates, and structure.</p></li>' +
      '<li class="' + st[1] + '"><h4>Asset in development</h4><p>Turning the framework into a working tool.</p></li>' +
      '<li class="' + st[2] + '"><h4>Available to use</h4><p>Deployed on client engagements.</p></li>' +
      "</ul></div>" +
      "</div>" +
      "</div></div></section>" +
      /* Related accelerators */
      relatedAccelHTML(p, a) +
      '<section class="section"><div class="container">' + ctaBandHTML() + "</div></section>";

    initReveal();
  }

  function relatedAccelHTML(p, current) {
    var others = (p.accelerators || []).filter(function (a) {
      return a.slug !== current.slug;
    });
    if (!others.length) return "";
    var cards = others
      .map(function (a) {
        return accelCardHTML(p, a);
      })
      .join("");
    return (
      '<section class="section section--alt"><div class="container">' +
      '<div class="section-head reveal"><span class="eyebrow">Keep exploring</span>' +
      "<h2>More " + esc(p.name) + " accelerators</h2></div>" +
      '<div class="accel-grid">' + cards + "</div></div></section>"
    );
  }

  function ctaBandHTML() {
    return (
      '<div class="cta-band reveal">' +
      "<h2>Ready to put this to work?</h2>" +
      "<p>Let's talk through where AI can create the most value for your organization — and how these accelerators can get you there faster.</p>" +
      '<div class="hero-actions"><a class="btn btn--light" href="' + ROOT + 'contact.html">Start a conversation</a>' +
      '<a class="btn btn--ghost" href="' + ROOT + 'capabilities.html">Explore capabilities</a></div>' +
      "</div>"
    );
  }

  /* ---- Boot ------------------------------------------------------------- */
  function boot() {
    buildHeader();
    buildFooter();
    renderHomePillars();
    renderCapabilities();
    renderAcceleratorLibrary();
    renderPillarPage();
    renderAcceleratorPage();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
