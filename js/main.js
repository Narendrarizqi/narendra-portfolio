/**
 * Portfolio JavaScript — Bagus Narendra Rizqi Ananto
 * Handles: theme toggle, navigation, scroll animations,
 * project rendering, filtering, modal, lightbox
 */

(function () {
  'use strict';

  // ======================== THEME TOGGLE ========================
  const ThemeManager = {
    init() {
      const toggle = document.getElementById('theme-toggle');
      const saved = localStorage.getItem('portfolio-theme');
      const preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      const theme = saved || preferred;

      document.documentElement.setAttribute('data-theme', theme);

      toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('portfolio-theme', next);
      });
    }
  };

  // ======================== NAVIGATION ========================
  const Navigation = {
    init() {
      const toggle = document.getElementById('nav-toggle');
      const menu = document.getElementById('nav-menu');
      const links = menu.querySelectorAll('.nav-link');
      const header = document.getElementById('nav-header');
      const sections = document.querySelectorAll('.section, .hero');

      // Hamburger toggle
      toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !expanded);
        menu.classList.toggle('active');
      });

      // Close menu on link click
      links.forEach(link => {
        link.addEventListener('click', () => {
          toggle.setAttribute('aria-expanded', 'false');
          menu.classList.remove('active');
        });
      });

      // Close menu on outside click
      document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggle.contains(e.target)) {
          toggle.setAttribute('aria-expanded', 'false');
          menu.classList.remove('active');
        }
      });

      // Active nav state on scroll
      const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
      };

      const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            links.forEach(link => {
              link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      }, observerOptions);

      sections.forEach(section => navObserver.observe(section));

      // Nav background on scroll
      let lastScroll = 0;
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
          header.style.borderBottomColor = 'var(--border)';
        } else {
          header.style.borderBottomColor = 'transparent';
        }
        lastScroll = scrollY;
      }, { passive: true });
    }
  };

  // ======================== SCROLL REVEAL ========================
  const ScrollReveal = {
    init() {
      const elements = document.querySelectorAll('.reveal');

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(el => observer.observe(el));
      } else {
        // Fallback: show all
        elements.forEach(el => el.classList.add('visible'));
      }
    }
  };

  // ======================== RENDER CAPABILITIES ========================
  const Capabilities = {
    icons: {
      code: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
      server: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>',
      database: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>',
      layout: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>'
    },

    render() {
      const grid = document.getElementById('capabilities-grid');
      if (!grid || !PORTFOLIO_DATA.capabilities) return;

      grid.innerHTML = PORTFOLIO_DATA.capabilities.map(cap => `
        <div class="capability-card reveal">
          <div class="capability-icon">${this.icons[cap.icon] || this.icons.code}</div>
          <h3>${cap.title}</h3>
          <p>${cap.description}</p>
        </div>
      `).join('');
    }
  };

  // ======================== RENDER PROJECTS ========================
  const Projects = {
    render() {
      this.renderFeatured();
      this.renderGrid();
      this.setupFilter();
    },

    renderFeatured() {
      const container = document.getElementById('featured-project');
      if (!container) return;

      const featured = PORTFOLIO_DATA.projects.find(p => p.featured);
      if (!featured) return;

      const thumbnail = featured.screenshots.length > 0
        ? `<img src="${featured.screenshots[0].src}" alt="${featured.screenshots[0].alt}" loading="lazy">`
        : `<div class="project-card-placeholder"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg></div>`;

      container.innerHTML = `
        <div class="featured-card" data-category="${featured.category}" data-project-id="${featured.id}">
          <div class="featured-image-wrapper" onclick="ProjectModal.open('${featured.id}')">
            ${thumbnail}
            <span class="featured-badge">Featured</span>
            ${featured.screenshots.length > 0 ? `<span class="featured-screenshots-count">${featured.screenshots.length} screenshots</span>` : ''}
          </div>
          <div class="featured-info">
            <span class="featured-category">${featured.category}</span>
            <h3 class="featured-title">${featured.title}</h3>
            <p class="featured-description">${featured.shortDescription}</p>
            <div class="featured-tech">
              ${featured.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
            <div class="featured-actions">
              <button class="btn btn-primary btn-sm" onclick="ProjectModal.open('${featured.id}')">View Details</button>
              ${featured.github ? `<a href="${featured.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">GitHub</a>` : ''}
            </div>
          </div>
        </div>
      `;
    },

    renderGrid() {
      const grid = document.getElementById('projects-grid');
      if (!grid) return;

      const otherProjects = PORTFOLIO_DATA.projects.filter(p => !p.featured);

      grid.innerHTML = otherProjects.map(project => {
        const thumbnail = project.screenshots.length > 0
          ? `<img src="${project.screenshots[0].src}" alt="${project.screenshots[0].alt}" loading="lazy">`
          : `<div class="project-card-placeholder"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg><span style="font-size:0.75rem">No preview</span></div>`;

        return `
          <div class="project-card reveal" data-category="${project.category}" onclick="ProjectModal.open('${project.id}')">
            <div class="project-card-image">
              ${thumbnail}
              <span class="project-card-category">${project.category}</span>
            </div>
            <div class="project-card-body">
              <h3 class="project-card-title">${project.title}</h3>
              <p class="project-card-desc">${project.shortDescription}</p>
              <div class="project-card-tech">
                ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
              </div>
            </div>
          </div>
        `;
      }).join('');
    },

    setupFilter() {
      const buttons = document.querySelectorAll('.filter-btn');
      const cards = document.querySelectorAll('.project-card');
      const featured = document.getElementById('featured-project');
      const featuredCard = featured ? featured.querySelector('.featured-card') : null;

      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.dataset.filter;

          // Update active state
          buttons.forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
          });
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');

          // Filter cards
          cards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
              card.classList.remove('hidden');
            } else {
              card.classList.add('hidden');
            }
          });

          // Filter featured
          if (featuredCard) {
            if (filter === 'all' || featuredCard.dataset.category === filter) {
              featured.classList.remove('hidden');
            } else {
              featured.classList.add('hidden');
            }
          }
        });
      });
    }
  };

  // ======================== PROJECT MODAL ========================
  window.ProjectModal = {
    open(projectId) {
      const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
      if (!project) return;

      const modal = document.getElementById('project-modal');
      const body = document.getElementById('modal-body');

      // Build development section
      let devHtml = '';
      if (project.development) {
        const devEntries = Object.entries(project.development);
        devHtml = `
          <div class="modal-section">
            <h3 class="modal-section-title">Development</h3>
            <div class="modal-dev-grid">
              ${devEntries.map(([key, val]) => `
                <div class="modal-dev-item">
                  <span class="modal-dev-label">${key}</span>
                  <span class="modal-dev-value">${val}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      // Build screenshots section
      let screenshotsHtml = '';
      if (project.screenshots.length > 0) {
        screenshotsHtml = `
          <div class="modal-section">
            <h3 class="modal-section-title">Screenshots</h3>
            <div class="modal-screenshots">
              ${project.screenshots.map((ss, i) => `
                <div class="modal-screenshot" onclick="Lightbox.open('${project.id}', ${i})">
                  <img src="${ss.src}" alt="${ss.alt}" loading="lazy">
                  <p class="modal-screenshot-label">${ss.alt}</p>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      body.innerHTML = `
        <div class="modal-project-header">
          <p class="modal-project-category">${project.category}</p>
          <h2 class="modal-project-title">${project.title}</h2>
          <p class="modal-project-desc">${project.description}</p>
        </div>

        ${project.purpose ? `
          <div class="modal-section">
            <h3 class="modal-section-title">Purpose</h3>
            <p style="color: var(--text-secondary); font-size: 0.9375rem; line-height: 1.7;">${project.purpose}</p>
          </div>
        ` : ''}

        ${project.role ? `
          <div class="modal-section">
            <h3 class="modal-section-title">My Role</h3>
            <p style="color: var(--text-secondary); font-size: 0.9375rem;">${project.role}</p>
          </div>
        ` : ''}

        ${project.features.length > 0 ? `
          <div class="modal-section">
            <h3 class="modal-section-title">Features</h3>
            <ul class="modal-features-list">
              ${project.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <div class="modal-section">
          <h3 class="modal-section-title">Technologies</h3>
          <div class="modal-tech-list">
            ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>

        ${devHtml}
        ${screenshotsHtml}

        <div class="modal-section">
          <h3 class="modal-section-title">Links</h3>
          <div class="modal-links">
            ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">View on GitHub</a>` : ''}
            ${project.demo ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Live Demo</a>` : ''}
          </div>
        </div>
      `;

      modal.removeAttribute('hidden');
      requestAnimationFrame(() => {
        modal.classList.add('active');
      });
      document.body.style.overflow = 'hidden';

      // Focus trap
      modal.focus();
    },

    close() {
      const modal = document.getElementById('project-modal');
      modal.classList.remove('active');
      setTimeout(() => {
        modal.setAttribute('hidden', '');
      }, 300);
      document.body.style.overflow = '';
    }
  };

  // ======================== LIGHTBOX ========================
  window.Lightbox = {
    currentImages: [],
    currentIndex: 0,

    open(projectId, index) {
      const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
      if (!project || !project.screenshots.length) return;

      this.currentImages = project.screenshots;
      this.currentIndex = index || 0;

      const overlay = document.getElementById('lightbox');
      overlay.removeAttribute('hidden');
      requestAnimationFrame(() => {
        overlay.classList.add('active');
      });
      this.updateImage();
    },

    updateImage() {
      const img = document.getElementById('lightbox-image');
      const caption = document.getElementById('lightbox-caption');
      const current = this.currentImages[this.currentIndex];

      img.src = current.src;
      img.alt = current.alt;
      caption.textContent = `${current.alt} (${this.currentIndex + 1}/${this.currentImages.length})`;
    },

    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.currentImages.length) % this.currentImages.length;
      this.updateImage();
    },

    next() {
      this.currentIndex = (this.currentIndex + 1) % this.currentImages.length;
      this.updateImage();
    },

    close() {
      const overlay = document.getElementById('lightbox');
      overlay.classList.remove('active');
      setTimeout(() => {
        overlay.setAttribute('hidden', '');
      }, 300);
    }
  };

  // ======================== ADAPTIVE STARFIELD ========================
  const Starfield = {
    canvas: null,
    ctx: null,
    particles: [],
    animId: null,
    lastTime: 0,
    mouse: { x: 0, y: 0 },

    init() {
      // Check prefers-reduced-motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      this.canvas = document.getElementById('starfield-canvas');
      if (!this.canvas) return;

      this.ctx = this.canvas.getContext('2d');
      if (!this.ctx) return;

      this.resize();
      this.createParticles();

      window.addEventListener('resize', () => {
        this.resize();
        this.createParticles();
      }, { passive: true });

      window.addEventListener('mousemove', (e) => {
        this.mouse.x = (e.clientX / window.innerWidth - 0.5) * 20;
        this.mouse.y = (e.clientY / window.innerHeight - 0.5) * 20;
      }, { passive: true });

      // Pause rendering when tab is hidden to save CPU/battery
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          if (this.animId) {
            cancelAnimationFrame(this.animId);
            this.animId = null;
          }
        } else if (!this.animId) {
          this.lastTime = performance.now();
          this.loop();
        }
      });

      this.lastTime = performance.now();
      this.loop();
    },

    resize() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    },

    createParticles() {
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 18 : 36;
      this.particles = [];

      for (let i = 0; i < count; i++) {
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          radius: Math.random() * 1.6 + 0.6,
          alpha: Math.random() * 0.6 + 0.2,
          speedX: (Math.random() - 0.5) * 0.25,
          speedY: (Math.random() - 0.5) * 0.25,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01
        });
      }
    },

    loop() {
      const now = performance.now();
      const dt = Math.min((now - this.lastTime) / 1000, 0.1);
      this.lastTime = now;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const baseColor = isLight ? '129, 140, 248' : '255, 255, 255';

      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];
        p.x += p.speedX * dt * 60;
        p.y += p.speedY * dt * 60;
        p.pulse += p.pulseSpeed;

        // Wrap around borders
        if (p.x < 0) p.x = this.canvas.width;
        if (p.x > this.canvas.width) p.x = 0;
        if (p.y < 0) p.y = this.canvas.height;
        if (p.y > this.canvas.height) p.y = 0;

        const dynamicAlpha = Math.max(0.1, p.alpha + Math.sin(p.pulse) * 0.2);

        this.ctx.beginPath();
        this.ctx.arc(p.x + this.mouse.x * 0.2, p.y + this.mouse.y * 0.2, p.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(${baseColor}, ${dynamicAlpha})`;
        this.ctx.fill();
      }

      this.animId = requestAnimationFrame(() => this.loop());
    }
  };

  // ======================== MECHANICAL SWITCH AUDIO ========================
  const MechanicalAudio = {
    ctx: null,
    masterGain: null,
    compressor: null,
    filter: null,
    enabled: localStorage.getItem('portfolio-macropad-audio') !== 'false',
    lastPlayTime: 0,

    init() {
      const btn = document.getElementById('sound-toggle-btn');
      if (btn) {
        this.updateUI(btn);

        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.enabled = !this.enabled;
          localStorage.setItem('portfolio-macropad-audio', this.enabled);
          this.updateUI(btn);
          if (this.enabled) {
            this.ensureContext();
            this.playClick(true);
          }
        });
      }

      // Eagerly unlock AudioContext on any user interaction across the page
      const unlockAudio = () => {
        this.ensureContext();
        ['pointerdown', 'pointermove', 'touchstart', 'keydown', 'scroll', 'click'].forEach(evt => {
          document.removeEventListener(evt, unlockAudio);
        });
      };
      ['pointerdown', 'pointermove', 'touchstart', 'keydown', 'scroll', 'click'].forEach(evt => {
        document.addEventListener(evt, unlockAudio, { passive: true, once: true });
      });
    },

    ensureContext() {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return null;

        if (!this.ctx) {
          this.ctx = new AudioCtx();

          // Master compressor for smooth dynamics and zero clipping
          this.compressor = this.ctx.createDynamicsCompressor();
          this.compressor.threshold.setValueAtTime(-18, this.ctx.currentTime);
          this.compressor.knee.setValueAtTime(12, this.ctx.currentTime);
          this.compressor.ratio.setValueAtTime(4, this.ctx.currentTime);
          this.compressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
          this.compressor.release.setValueAtTime(0.1, this.ctx.currentTime);

          // Warm low-pass filter to remove harshness and create a creamy mechanical switch sound
          this.filter = this.ctx.createBiquadFilter();
          this.filter.type = 'lowpass';
          this.filter.frequency.setValueAtTime(1800, this.ctx.currentTime);
          this.filter.Q.setValueAtTime(1.2, this.ctx.currentTime);

          // Master volume
          this.masterGain = this.ctx.createGain();
          this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);

          this.filter.connect(this.compressor);
          this.compressor.connect(this.masterGain);
          this.masterGain.connect(this.ctx.destination);
        }

        if (this.ctx.state === 'suspended') {
          this.ctx.resume().catch(() => {});
        }
        return this.ctx;
      } catch (e) {
        return null;
      }
    },

    updateUI(btn) {
      const onIcon = btn.querySelector('.sound-icon-on');
      const offIcon = btn.querySelector('.sound-icon-off');
      const label = btn.querySelector('.sound-label');

      if (this.enabled) {
        if (onIcon) onIcon.style.display = 'inline-block';
        if (offIcon) offIcon.style.display = 'none';
        if (label) label.textContent = 'Audio: ON';
        btn.classList.add('audio-active');
      } else {
        if (onIcon) onIcon.style.display = 'none';
        if (offIcon) offIcon.style.display = 'inline-block';
        if (label) label.textContent = 'Audio: OFF';
        btn.classList.remove('audio-active');
      }
    },

    playClick(force = false) {
      if (!this.enabled) return;

      const nowMs = performance.now();
      if (!force && (nowMs - this.lastPlayTime < 50)) return; // smooth throttle to avoid crackle on rapid sweeps
      this.lastPlayTime = nowMs;

      try {
        const ctx = this.ensureContext();
        if (!ctx) return;

        if (ctx.state === 'suspended') {
          ctx.resume().then(() => this._synthesizeSwitch(ctx)).catch(() => {});
        } else {
          this._synthesizeSwitch(ctx);
        }
      } catch (e) {
        // Safe fallback
      }
    },

    _synthesizeSwitch(ctx) {
      const now = ctx.currentTime;
      
      // Subtle pitch randomization (+/- 4%) so rapid clicks sound organic and mechanical
      const pitchVariance = 0.96 + Math.random() * 0.08;

      // 1. Initial Tactile Snap (high-frequency contact impulse, 7ms)
      const snapOsc = ctx.createOscillator();
      const snapGain = ctx.createGain();
      snapOsc.type = 'triangle';
      snapOsc.frequency.setValueAtTime(780 * pitchVariance, now);
      snapOsc.frequency.exponentialRampToValueAtTime(320 * pitchVariance, now + 0.007);

      snapGain.gain.setValueAtTime(0.18, now);
      snapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.012);

      snapOsc.connect(snapGain);
      snapGain.connect(this.filter);
      snapOsc.start(now);
      snapOsc.stop(now + 0.015);

      // 2. Body Switch Resonance (the smooth "thock", warm tone, 35ms)
      const bodyOsc = ctx.createOscillator();
      const bodyGain = ctx.createGain();
      bodyOsc.type = 'sine';
      bodyOsc.frequency.setValueAtTime(230 * pitchVariance, now);
      bodyOsc.frequency.exponentialRampToValueAtTime(105 * pitchVariance, now + 0.032);

      bodyGain.gain.setValueAtTime(0.4, now);
      bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.042);

      bodyOsc.connect(bodyGain);
      bodyGain.connect(this.filter);
      bodyOsc.start(now);
      bodyOsc.stop(now + 0.045);

      // 3. Housing Bottom-Out Sub (weight & punch, 25ms)
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = 'triangle';
      subOsc.frequency.setValueAtTime(92 * pitchVariance, now);
      subOsc.frequency.exponentialRampToValueAtTime(42 * pitchVariance, now + 0.026);

      subGain.gain.setValueAtTime(0.26, now);
      subGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

      subOsc.connect(subGain);
      subGain.connect(this.filter);
      subOsc.start(now);
      subOsc.stop(now + 0.04);
    }
  };

  // ======================== INTERACTIVE 3D MACROPAD & SKILLS ========================
  const SkillsManager = {
    activeSkillId: 'laravel',
    pawToggle: false,
    autoTypeTimer: null,
    autoTypeCount: 0,
    userInteracted: false,

    init() {
      this.renderMacropad();
      this.renderDetailedGrid();
      this.setupModeSwitch();
      this.setupKeyListeners();
      MechanicalAudio.init();

      // Select default skill
      this.selectSkill('laravel', false);

      // Start auto-typing sequence when skills section enters viewport
      this.setupAutoTypingOnInview();
    },

    setupAutoTypingOnInview() {
      const section = document.getElementById('skills');
      if (!section) return;

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !this.userInteracted && !this.autoTypeTimer) {
              // Delay slightly for smooth entrance
              setTimeout(() => {
                this.startAutoTyping();
              }, 600);
              observer.disconnect();
            }
          });
        }, { threshold: 0.25 });

        observer.observe(section);
      } else {
        setTimeout(() => this.startAutoTyping(), 1000);
      }
    },

    startAutoTyping() {
      if (this.userInteracted || this.autoTypeTimer) return;

      const skills = PORTFOLIO_DATA.macropadSkills;
      if (!skills || !skills.length) return;

      const maxAutoTypes = 5;

      this.autoTypeTimer = setInterval(() => {
        if (this.userInteracted || this.autoTypeCount >= maxAutoTypes) {
          this.stopAutoTyping();
          return;
        }

        // Pick random skill different from current
        const candidates = skills.filter(s => s.id !== this.activeSkillId);
        const randomSkill = candidates[Math.floor(Math.random() * candidates.length)];

        if (randomSkill) {
          this.selectSkill(randomSkill.id, true);
          this.autoTypeCount++;
        }
      }, 750);
    },

    stopAutoTyping() {
      if (this.autoTypeTimer) {
        clearInterval(this.autoTypeTimer);
        this.autoTypeTimer = null;
      }
      this.userInteracted = true;
    },

    renderMacropad() {
      const keysGrid = document.getElementById('keys-grid');
      if (!keysGrid || !PORTFOLIO_DATA.macropadSkills) return;

      keysGrid.innerHTML = PORTFOLIO_DATA.macropadSkills.map((skill, index) => `
        <button type="button" 
          class="keycap ${index === 0 ? 'active-selected' : ''}" 
          data-key="${skill.key.toLowerCase()}" 
          data-skill-id="${skill.id}" 
          id="key-${skill.id}" 
          aria-label="Skill ${skill.name}" 
          aria-pressed="${index === 0 ? 'true' : 'false'}"
          style="--key-bg: ${skill.bg}; --key-dark: ${skill.darkBg}; --key-glow: ${skill.glow};">
          <span class="keycap-top">
            <span class="keycap-icon">${skill.iconSvg}</span>
          </span>
        </button>
      `).join('');

      // Add hover (pointerenter/mouseenter/mouseover) and click listeners to all keycaps
      keysGrid.querySelectorAll('.keycap').forEach(btn => {
        const skillId = btn.dataset.skillId;

        const handleHover = () => {
          this.stopAutoTyping();
          if (this.activeSkillId !== skillId) {
            this.selectSkill(skillId, true);
          }
        };

        // 1. Mouse / Pointer touching key instantly reveals skill contents
        btn.addEventListener('mouseenter', handleHover);
        btn.addEventListener('pointerenter', handleHover);
        btn.addEventListener('mouseover', handleHover);

        // 2. Click / Touch Event
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.stopAutoTyping();
          this.selectSkill(skillId, true);
        });

        // 3. Pointerdown for instant tactile response on touch devices
        btn.addEventListener('pointerdown', (e) => {
          if (e.pointerType === 'touch') {
            this.stopAutoTyping();
            this.selectSkill(skillId, true);
          }
        });
      });

      // 4. Support smooth touch dragging across keys on mobile/touch screens
      keysGrid.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        if (!touch) return;
        const target = document.elementFromPoint(touch.clientX, touch.clientY);
        if (!target) return;
        const btn = target.closest('.keycap');
        if (btn && btn.dataset.skillId && btn.dataset.skillId !== this.activeSkillId) {
          this.stopAutoTyping();
          this.selectSkill(btn.dataset.skillId, true);
        }
      }, { passive: true });

      // Stop auto typing on hover / touch anywhere on the 3D stage
      const stage = document.getElementById('macropad-stage');
      if (stage) {
        stage.addEventListener('mouseenter', () => this.stopAutoTyping(), { passive: true });
        stage.addEventListener('touchstart', () => this.stopAutoTyping(), { passive: true });
      }
      keysGrid.addEventListener('mouseenter', () => this.stopAutoTyping(), { passive: true });
      keysGrid.addEventListener('touchstart', () => this.stopAutoTyping(), { passive: true });
    },

    selectSkill(skillId, isUserAction = true) {
      const skill = PORTFOLIO_DATA.macropadSkills.find(s => s.id === skillId);
      if (!skill) return;

      this.activeSkillId = skillId;

      // Update HUD elements
      const hudCategory = document.getElementById('hud-category');
      const hudTitle = document.getElementById('hud-title');
      const hudDesc = document.getElementById('hud-desc');
      const hudEvidenceText = document.getElementById('hud-evidence-text');
      const hudProjectBtn = document.getElementById('hud-project-btn');
      const hudProjectName = document.getElementById('hud-project-name');
      const hudProjectWrap = document.getElementById('hud-project-wrap');

      if (hudCategory) hudCategory.textContent = skill.category;
      if (hudTitle) hudTitle.textContent = skill.name;
      if (hudDesc) hudDesc.textContent = skill.description;
      if (hudEvidenceText) hudEvidenceText.textContent = skill.evidence;

      // Update project link
      if (hudProjectWrap) {
        hudProjectWrap.style.display = 'flex';
        if (skill.projects && skill.projects.length > 0) {
          hudProjectWrap.style.visibility = 'visible';
          if (hudProjectName) hudProjectName.textContent = skill.projects[0];

          if (hudProjectBtn) {
            hudProjectBtn.onclick = (e) => {
              e.preventDefault();
              // Scroll to projects section smoothly
              const projectsSec = document.getElementById('projects');
              if (projectsSec) {
                projectsSec.scrollIntoView({ behavior: 'smooth' });
              }
            };
          }
        } else {
          hudProjectWrap.style.visibility = 'hidden';
        }
      }

      // Update Keycaps Active State
      const keycaps = document.querySelectorAll('.keycap');
      keycaps.forEach(cap => {
        const isCurrent = cap.dataset.skillId === skillId;
        cap.classList.toggle('active-selected', isCurrent);
        cap.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
      });

      // Play crisp mechanical click sound on user action
      if (isUserAction) {
        MechanicalAudio.playClick();
      }
    },

    setupKeyListeners() {
      document.addEventListener('keydown', (e) => {
        // 1. Ignore browser shortcut combos
        if (e.ctrlKey || e.altKey || e.metaKey) return;

        // 2. SAFE CHECK: Do NOT trigger when typing in inputs/textareas/selects/contenteditable
        const target = e.target;
        const isTyping = target.matches('input, textarea, select') || target.isContentEditable;
        if (isTyping) return;

        // 3. Do not trigger when modal or lightbox is active
        const modal = document.getElementById('project-modal');
        const lightbox = document.getElementById('lightbox');
        if ((modal && modal.classList.contains('active')) || (lightbox && lightbox.classList.contains('active'))) {
          return;
        }

        // 4. Match key
        const pressedChar = e.key.toLowerCase();
        const skill = PORTFOLIO_DATA.macropadSkills.find(s => s.key.toLowerCase() === pressedChar);
        if (skill) {
          this.stopAutoTyping();
          this.selectSkill(skill.id, true);
        }
      });
    },

    setupModeSwitch() {
      const btnMacropad = document.getElementById('mode-btn-macropad');
      const btnGrid = document.getElementById('mode-btn-grid');
      const viewMacropad = document.getElementById('skills-macropad-view');
      const viewGrid = document.getElementById('skills-grid-view');

      if (!btnMacropad || !btnGrid || !viewMacropad || !viewGrid) return;

      btnMacropad.addEventListener('click', () => {
        btnMacropad.classList.add('active');
        btnMacropad.setAttribute('aria-selected', 'true');
        btnGrid.classList.remove('active');
        btnGrid.setAttribute('aria-selected', 'false');

        viewMacropad.style.display = 'grid';
        viewGrid.style.display = 'none';
        MechanicalAudio.playClick(true);
      });

      btnGrid.addEventListener('click', () => {
        btnGrid.classList.add('active');
        btnGrid.setAttribute('aria-selected', 'true');
        btnMacropad.classList.remove('active');
        btnMacropad.setAttribute('aria-selected', 'false');

        viewMacropad.style.display = 'none';
        viewGrid.style.display = 'block';
        MechanicalAudio.playClick(true);
      });
    },

    renderDetailedGrid() {
      const grid = document.getElementById('skills-grid');
      if (!grid || !PORTFOLIO_DATA.skills) return;

      const groups = Object.values(PORTFOLIO_DATA.skills);

      grid.innerHTML = groups.map(group => `
        <div class="skill-group">
          <h3 class="skill-group-title">${group.title}</h3>
          ${group.items.map(item => `
            <div class="skill-item">
              <div class="skill-item-header">
                <span class="skill-name">${item.name}</span>
                ${item.projectEvidence ? `<span class="skill-evidence" title="${item.projectEvidence}">${item.projectEvidence}</span>` : ''}
              </div>
              ${item.description ? `<p class="skill-item-desc">${item.description}</p>` : ''}
            </div>
          `).join('')}
        </div>
      `).join('');

      // Add gentle audio feedback on detailed grid skill hover
      grid.querySelectorAll('.skill-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
          MechanicalAudio.playClick();
        });
      });
    }
  };

  // ======================== RENDER EXPERIENCE ========================
  const Experience = {
    render() {
      const timeline = document.getElementById('experience-timeline');
      if (!timeline || !PORTFOLIO_DATA.experience) return;

      timeline.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
        <div class="experience-item reveal">
          <span class="experience-period">${exp.period}</span>
          <h3 class="experience-position">${exp.position}</h3>
          <p class="experience-company">${exp.company}</p>
          <p class="experience-desc">${exp.description}</p>
        </div>
      `).join('');
    }
  };

  // ======================== RENDER ORGANIZATIONS ========================
  const Organizations = {
    render() {
      const grid = document.getElementById('organization-grid');
      if (!grid || !PORTFOLIO_DATA.organizations) return;

      grid.innerHTML = PORTFOLIO_DATA.organizations.map(org => `
        <div class="org-card reveal">
          <h3 class="org-name">${org.name}</h3>
          ${org.positions.map(pos => `
            <div class="org-position">
              <p class="org-role">${pos.role}</p>
              ${pos.period ? `<span class="org-period">${pos.period}</span>` : ''}
            </div>
          `).join('')}
        </div>
      `).join('');
    }
  };

  // ======================== RENDER EDUCATION ========================
  const Education = {
    render() {
      const cards = document.getElementById('education-cards');
      if (!cards || !PORTFOLIO_DATA.education) return;

      cards.innerHTML = PORTFOLIO_DATA.education.map(edu => `
        <div class="education-card reveal ${edu.current ? 'current' : ''}">
          <span class="education-period">${edu.period}</span>
          <h3 class="education-institution">${edu.institution}</h3>
          <p class="education-degree">${edu.degree}</p>
        </div>
      `).join('');
    }
  };

  // ======================== EVENT LISTENERS ========================
  function setupEventListeners() {
    // Modal close
    document.getElementById('modal-close').addEventListener('click', () => ProjectModal.close());
    document.getElementById('project-modal').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) ProjectModal.close();
    });

    // Lightbox controls
    document.getElementById('lightbox-close').addEventListener('click', () => Lightbox.close());
    document.getElementById('lightbox-prev').addEventListener('click', () => Lightbox.prev());
    document.getElementById('lightbox-next').addEventListener('click', () => Lightbox.next());
    document.getElementById('lightbox').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) Lightbox.close();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      // Close modal on Escape
      if (e.key === 'Escape') {
        const lightbox = document.getElementById('lightbox');
        const modal = document.getElementById('project-modal');

        if (lightbox.classList.contains('active')) {
          Lightbox.close();
        } else if (modal.classList.contains('active')) {
          ProjectModal.close();
        }
      }

      // Lightbox navigation with arrows
      const lightbox = document.getElementById('lightbox');
      if (lightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') Lightbox.prev();
        if (e.key === 'ArrowRight') Lightbox.next();
      }
    });
  }

  // ======================== INITIALIZE ========================
  function init() {
    ThemeManager.init();
    Navigation.init();
    Starfield.init();
    Capabilities.render();
    Projects.render();
    SkillsManager.init();
    Experience.render();
    Organizations.render();
    Education.render();
    setupEventListeners();

    // Init scroll reveal after rendering
    requestAnimationFrame(() => {
      ScrollReveal.init();
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
