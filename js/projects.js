/* =====================================================
   NAJAH MADANI — PROJECTS.JS
   Project detail sections injected after #projectDetails
   ===================================================== */

(() => {
  const container = document.getElementById('projectDetails');
  if (!container) return;

  const galleryImages = [
    'Screenshot 2026-06-30 175224.png',
    'Screenshot 2026-06-30 175239.png',
    'Screenshot 2026-06-30 175251.png',
    'Screenshot 2026-06-30 175307.png',
    'Screenshot 2026-06-30 175320.png',
    'Screenshot 2026-06-30 175332.png',
    'Screenshot 2026-06-30 175341.png',
    'Screenshot 2026-06-30 175359.png',
    'Screenshot 2026-06-30 175416.png',
    'Screenshot 2026-06-30 175423.png',
    'Screenshot 2026-06-30 175430.png',
    'Screenshot 2026-06-30 175436.png',
    'Screenshot 2026-06-30 175442.png',
    'Screenshot 2026-06-30 175450.png',
    'Screenshot 2026-06-30 175456.png',
    'Screenshot 2026-06-30 175505.png',
    'Screenshot 2026-06-30 175524.png',
    'Screenshot 2026-06-30 175532.png',
    'Screenshot 2026-06-30 175545.png'
  ];

  const projects = [
/* =========================================================
       PROJECT 1 — Ingredients App Project Plan
       ========================================================= */
    {
      odd: false,
      meta: ['Requirements', 'WBS', 'Gantt', '5 months', '990 SAR budget'],
      title: 'The Ingredients App — Project Plan & Requirements',
      overview: `A mobile app that recommends recipes using only the ingredients the user already has at home.
      Project covers the full requirements scope: stakeholder analysis, functional/non-functional requirements,
      Work Breakdown Structure, Gantt chart timeline, and a comprehensive resource management plan.`,
      learningsTitle: 'What this project taught me',
      learnings: [
        'Translating a fuzzy user pain point into a structured scope document.',
        'Writing testable, prioritized functional & non-functional requirements.',
        'Decomposing scope into WBS levels and aligning tasks on a Gantt.',
        'Realistic resource planning under a strict budget & timeline.'
      ],
      goalsTitle: 'Project goals',
      goals: [
        'Voice or manual ingredient input.',
        'Personalized recipe recommendations based on preferences & diet.',
        'Step-by-step cooking instructions with nutritional info.',
        'Save favorites + persistent user profile.',
        'Performance: < 3s load, 10,000 concurrent users, 99.9% uptime.',
        'WCAG 2.1 accessibility compliance.'
      ],
      stats: [
        { num: '990 SAR', label: 'Budget' },
        { num: '5 mo',   label: 'Duration' },
        { num: '7',      label: 'Functional Reqs' },
        { num: '5',      label: 'Non-Functional Reqs' }
      ],
      statsTitle: 'At a glance',
      uiTitle: 'Work Breakdown Structure & Project Gantt',
      uiIcon: 'fa-diagram-project',
      ui: `
        <div class="wbs-tree">
          <div class="wbs-item"><strong>1. Project Initiation</strong></div>
          <div class="wbs-item" data-level="2">1.1 Stakeholder identification</div>
          <div class="wbs-item" data-level="2">1.2 Scope definition</div>
          <div class="wbs-item"><strong>2. Planning</strong></div>
          <div class="wbs-item" data-level="2">2.1 Requirements analysis</div>
          <div class="wbs-item" data-level="2">2.2 Resource planning</div>
          <div class="wbs-item" data-level="2">2.3 Risk assessment</div>
          <div class="wbs-item"><strong>3. Design</strong></div>
          <div class="wbs-item" data-level="2">3.1 UI / UX design</div>
          <div class="wbs-item" data-level="2">3.2 Database schema</div>
          <div class="wbs-item"><strong>4. Development</strong></div>
          <div class="wbs-item" data-level="2">4.1 Backend (API + DB)</div>
          <div class="wbs-item" data-level="2">4.2 Mobile app (iOS / Android)</div>
          <div class="wbs-item" data-level="3">4.2.1 Ingredient input (voice / manual)</div>
          <div class="wbs-item" data-level="3">4.2.2 Recipe recommendation engine</div>
          <div class="wbs-item" data-level="3">4.2.3 Favorites + user profile</div>
          <div class="wbs-item"><strong>5. Testing</strong></div>
          <div class="wbs-item" data-level="2">5.1 Functional & non-functional tests</div>
          <div class="wbs-item" data-level="2">5.2 User acceptance testing</div>
          <div class="wbs-item"><strong>6. Deployment & Maintenance</strong></div>
        </div>

        <h4 style="margin-top:2rem;font-family:'Playfair Display',serif;font-weight:700;">Gantt Chart — 5-Month Timeline</h4>
        <div class="gantt">
          <div class="gantt-row">
            <span class="gantt-label">Initiation</span>
            <div class="gantt-bar-track"><div class="gantt-bar" style="left:0%;width:8%">M1</div></div>
          </div>
          <div class="gantt-row">
            <span class="gantt-label">Planning</span>
            <div class="gantt-bar-track"><div class="gantt-bar" style="left:8%;width:12%">M1-M2</div></div>
          </div>
          <div class="gantt-row">
            <span class="gantt-label">Design</span>
            <div class="gantt-bar-track"><div class="gantt-bar" style="left:18%;width:18%">M2-M3</div></div>
          </div>
          <div class="gantt-row">
            <span class="gantt-label">Development</span>
            <div class="gantt-bar-track"><div class="gantt-bar" style="left:34%;width:38%">M3-M4</div></div>
          </div>
          <div class="gantt-row">
            <span class="gantt-label">Testing</span>
            <div class="gantt-bar-track"><div class="gantt-bar" style="left:62%;width:22%">M4-M5</div></div>
          </div>
          <div class="gantt-row">
            <span class="gantt-label">Deployment</span>
            <div class="gantt-bar-track"><div class="gantt-bar" style="left:82%;width:18%">M5</div></div>
          </div>
        </div>
      `
    },

/* =========================================================
       PROJECT 2 — VUI Barn's Coffee
       ========================================================= */
    {
      odd: true,
      meta: ['Voice UI', 'Dialogue Design', 'Accessibility', 'Multimodal'],
      title: 'VUI Design — Barn\'s Coffee Drive-Thru Assistant',
      overview: `Voice User Interface for Barn's Coffee — a popular Saudi coffeehouse chain with multiple drive-thru
      branches. The assistant (BarnBot) takes voice orders, handles customizations, recovers from errors, and
      adapts for accessibility (speech/hearing impairments, noisy environments).`,
      learningsTitle: 'What I delivered',
      learnings: [
        'Five menu items: Espresso, Café Latte, Cookie, Iced Matcha Latte, Turkey Cheese Sandwich.',
        'Detailed customization scenarios — milk type, sweetness, add-ons with SAR pricing.',
        'Explicit confirmation for customized orders, implicit for non-customizable items.',
        'Error handling for ambiguous requests and unrecognized input.',
        'Multimodal interaction (voice + touch + visual feedback) for noisy drive-thru.'
      ],
      goalsTitle: 'Operational challenges solved',
      goals: [
        'Long wait times at drive-thru counters.',
        'Order errors from miscommunication.',
        'Noisy environments breaking voice-only flows.',
        'Limited staff availability during peak hours.',
        'Accessibility for speech or hearing-impaired users.'
      ],
      stats: [
        { num: '5', label: 'Menu Items' },
        { num: '9', label: 'Dialogue Scenarios' },
        { num: '4', label: 'State Modes' },
        { num: '100%', label: 'Accessibility' }
      ],
      statsTitle: 'At a glance',
      uiTitle: 'Live Dialogue Simulation — Order a Café Latte',
      uiIcon: 'fa-microphone-lines',
      ui: `
        <div class="vui-flow">
          <div class="vui-msg user">
            <div class="vui-msg-avatar"><i class="fa-solid fa-user"></i></div>
            <div class="vui-bubble">I'd like a café latte.</div>
          </div>
          <div class="vui-msg bot">
            <div class="vui-msg-avatar"><i class="fa-solid fa-mug-hot"></i></div>
            <div class="vui-bubble">You've selected a café latte — 15 SAR. Would you like to choose a milk type or adjust the sweetness?</div>
          </div>
          <div class="vui-msg user">
            <div class="vui-msg-avatar"><i class="fa-solid fa-user"></i></div>
            <div class="vui-bubble">Add milk and make it more sweet.</div>
          </div>
          <div class="vui-msg bot">
            <div class="vui-msg-avatar"><i class="fa-solid fa-mug-hot"></i></div>
            <div class="vui-bubble">Café latte with milk (+2 SAR) and more sweetened = 17 SAR. Is this correct?</div>
          </div>
          <div class="vui-msg user">
            <div class="vui-msg-avatar"><i class="fa-solid fa-user"></i></div>
            <div class="vui-bubble">Yes, that's correct.</div>
          </div>
          <div class="vui-msg bot">
            <div class="vui-msg-avatar"><i class="fa-solid fa-mug-hot"></i></div>
            <div class="vui-bubble">✓ Added to your order. Would you like to add another item?</div>
          </div>

          <div class="vui-msg system">
            <div class="vui-msg-avatar"><i class="fa-solid fa-circle-info"></i></div>
            <div class="vui-bubble">Error handling — invalid input: "Did you mean café latte or iced matcha latte?"</div>
          </div>
          <div class="vui-msg system">
            <div class="vui-msg-avatar"><i class="fa-solid fa-universal-access"></i></div>
            <div class="vui-bubble">Accessibility fallback — noisy drive-thru: "Could you repeat, or tap the screen to continue?"</div>
          </div>
        </div>

        <div class="vui-persona">
          <div class="vui-avatar">B</div>
          <div class="vui-persona-info">
            <h5>BarnBot — the assistant persona</h5>
            <p>Friendly, approachable tone that mirrors Barn's Coffee's warm brand voice. Casual during recommendations,
            formal when confirming orders. Anticipates needs ("Would you like to customize your café latte today?")
            and offers touch alternatives in noisy environments.</p>
          </div>
        </div>
      `
    },

/* =========================================================
       PROJECT 3 — Ingredients Website UX Research
       ========================================================= */
    {
      odd: false,
      meta: ['UX Research', 'Survey', 'Personas', 'Wireframes', 'User Flow'],
      title: 'The Ingredients Website — UX Research Phase',
      overview: `UX research for the "Ingredients Website" — a recipe-recommendation web app. The research phase
      targeted beginner-to-intermediate cooks who want quick recipes using ingredients already at home. We ran a
      full survey, built personas, designed lo/mid/hi-fi wireframes, mapped the user flow, and validated with
      usability testing.`,
      learningsTitle: 'Approach & deliverables',
      learnings: [
        'Survey-based research across a large user group to identify behaviors and preferences.',
        'Persona synthesis: home cooks who lack time, variety, and cooking confidence.',
        'Three validated user needs: quick recipes, simple instructions, dietary personalization.',
        'Lo-Fi, Mid-Fi, and Hi-Fi wireframes for homepage, categories, login, ingredients, flow screens.',
        'User testing with 2 participants (age 21 and 55) revealed navigation & icon issues.'
      ],
      goalsTitle: 'Research objectives',
      goals: [
        'Create a smart app that provides quick, easy recipes from home ingredients.',
        'Reduce friction for users with limited time and cooking skill.',
        'Deliver simple instructions with minimal preparation steps.',
        'Validate designs through structured usability testing with two age groups.'
      ],
      stats: [
        { num: '4', label: 'Survey Pages' },
        { num: '6', label: 'Wireframe Screens' },
        { num: '2', label: 'Test Users' },
        { num: '4', label: 'Recommendations' }
      ],
      statsTitle: 'At a glance',
      uiTitle: 'Survey Highlights & Wireframe Frames',
      uiIcon: 'fa-clipboard-list',
      ui: `
        <div class="survey-q">
          <div class="sq-card">
            <div class="sq-num">Q1</div>
            <div class="sq-body">
              <h6>What frustrates you most when cooking?</h6>
              <p>Lack of recipe ideas &rarr; need for inspiration based on available ingredients.</p>
            </div>
          </div>
          <div class="sq-card">
            <div class="sq-num">Q2</div>
            <div class="sq-body">
              <h6>How often do you cook at home?</h6>
              <p>Range: 3-7 times/week — strong need for quick, accessible recipes.</p>
            </div>
          </div>
          <div class="sq-card">
            <div class="sq-num">Q3</div>
            <div class="sq-body">
              <h6>What features would you value?</h6>
              <p>Ratings, sharing, cooking tutorials, dietary filters, favorites.</p>
            </div>
          </div>
        </div>

        <div class="survey-result">
          <div class="survey-bar"><div class="survey-bar-label"><span>Lack of time</span><span>82%</span></div><div class="survey-bar-track"><div class="survey-bar-fill" style="width:82%"></div></div></div>
          <div class="survey-bar"><div class="survey-bar-label"><span>Lack of variety</span><span>68%</span></div><div class="survey-bar-track"><div class="survey-bar-fill" style="width:68%"></div></div></div>
          <div class="survey-bar"><div class="survey-bar-label"><span>Unfamiliar cooking</span><span>57%</span></div><div class="survey-bar-track"><div class="survey-bar-fill" style="width:57%"></div></div></div>
          <div class="survey-bar"><div class="survey-bar-label"><span>Want personalization</span><span>73%</span></div><div class="survey-bar-track"><div class="survey-bar-fill" style="width:73%"></div></div></div>
        </div>

        <h4 style="margin-top:2rem;font-family:'Playfair Display',serif;font-weight:700;">Wireframe progression</h4>
        <div class="wf-mock">
          <div class="wf-card">
            <div class="wf-mockup">
              <div class="wf-mock-bar tall"></div>
              <div class="wf-mock-bar short"></div>
              <div class="wf-mock-bar"></div>
              <div class="wf-mock-grid">
                <div class="wf-mock-tile"></div><div class="wf-mock-tile accent"></div>
                <div class="wf-mock-tile accent"></div><div class="wf-mock-tile"></div>
              </div>
            </div>
            <div class="wf-label">Lo-Fi · Homepage</div>
          </div>
          <div class="wf-card">
            <div class="wf-mockup">
              <div class="wf-mock-bar"></div>
              <div class="wf-mock-bar"></div>
              <div class="wf-mock-grid">
                <div class="wf-mock-tile"></div><div class="wf-mock-tile"></div>
              </div>
              <div class="wf-mock-bar short"></div>
            </div>
            <div class="wf-label">Mid-Fi · Login</div>
          </div>
          <div class="wf-card">
            <div class="wf-mockup">
              <div class="wf-mock-bar tall"></div>
              <div class="wf-mock-grid">
                <div class="wf-mock-tile accent"></div><div class="wf-mock-tile accent"></div>
                <div class="wf-mock-tile accent"></div><div class="wf-mock-tile accent"></div>
              </div>
            </div>
            <div class="wf-label">Hi-Fi · Ingredients</div>
          </div>
        </div>

        <h4 style="margin-top:2rem;font-family:'Playfair Display',serif;font-weight:700;">Usability testing — 2 users</h4>
        <div class="user-flow">
          <div class="uf-step"><div class="uf-icon">A</div><span>First User, 21 yrs — 15s to ingredients</span></div>
          <div class="uf-step"><div class="uf-icon">B</div><span>Appreciated ease of use</span></div>
          <div class="uf-step"><div class="uf-icon">C</div><span>Suggested faster access to Recipes</span></div>
          <div class="uf-step"><div class="uf-icon">D</div><span>Second User, 55 yrs — needed clearer icons</span></div>
          <div class="uf-step"><div class="uf-icon">✓</div><span>Outcome: navigation arrows added</span></div>
        </div>
      `
    },

/* =========================================================
       PROJECT 4 — STC App UX Research
       ========================================================= */
    {
      odd: true,
      meta: ['User Research', 'HCI', 'Content Testing', 'Heuristics'],
      title: 'Optimizing STC App Interface — HCI User Research',
      overview: `Research project to evaluate and improve the STC (Saudi Telecom Company) mobile app experience.
      Method mixed content testing with usability tests and interviews. We focused on two pain points:
      inconsistent interface colors, and the placement of offers directly on the home and store pages.`,
      learningsTitle: 'Methodology & findings',
      learnings: [
        '6 participants across 3 user groups: HCI students, regular students, and non-expert users 40-50.',
        'Naturalistic sessions where users recharge balance & evaluate color comfort.',
        '4/6 dissatisfied with current color scheme; 4/6 had usability problems.',
        '3/6 had trouble recharging balance — interface responsiveness was an issue.',
        'Final recommendations: dedicated offers page + option to switch app color palette.'
      ],
      goalsTitle: 'Research objectives',
      goals: [
        'Improve user comfort in the STC application.',
        'Optimize the toolbar for better usability.',
        'Enhance overall usability and visual consistency.',
        'Surface key pain points in color scheme and offers placement.',
        'Recharge flow: let users pick a custom amount & apply payment faster.'
      ],
      stats: [
        { num: '6', label: 'Participants' },
        { num: '3', label: 'User Groups' },
        { num: '4/6', label: 'Color Issues' },
        { num: '4/6', label: 'Usability Pain' }
      ],
      statsTitle: 'At a glance',
      uiTitle: 'Participant Feedback & Recommendations',
      uiIcon: 'fa-mobile-screen',
      ui: `
        <h4 style="font-family:'Playfair Display',serif;font-weight:700;margin-bottom:1rem;">Sample participants</h4>
        <div class="participant-cards">
          <div class="p-card"><div class="p-card-avatar">P1</div><div class="p-card-name">P1 · 23</div><div class="p-card-meta">Student</div></div>
          <div class="p-card"><div class="p-card-avatar">P2</div><div class="p-card-name">P2 · 25</div><div class="p-card-meta">HCI user</div></div>
          <div class="p-card"><div class="p-card-avatar">P3</div><div class="p-card-name">P3 · 21</div><div class="p-card-meta">Student</div></div>
          <div class="p-card"><div class="p-card-avatar">P4</div><div class="p-card-name">P4 · 41</div><div class="p-card-meta">HCI specialist</div></div>
          <div class="p-card"><div class="p-card-avatar">P5</div><div class="p-card-name">P5 · 21</div><div class="p-card-meta">Student</div></div>
          <div class="p-card"><div class="p-card-avatar">P6</div><div class="p-card-name">P6 · 40</div><div class="p-card-meta">Non-expert</div></div>
        </div>

        <h4 style="font-family:'Playfair Display',serif;font-weight:700;margin:2rem 0 1rem;">Key findings</h4>
        <div class="findings-grid">
          <div class="finding"><div class="finding-num">1</div><div class="finding-body"><h6>Color discomfort</h6><p>4/6 wanted lighter, more eye-friendly palette options.</p></div></div>
          <div class="finding"><div class="finding-num">2</div><div class="finding-body"><h6>Offers placement</h6><p>Cluttering home and store pages — recommends dedicated offers screen.</p></div></div>
          <div class="finding"><div class="finding-num">3</div><div class="finding-body"><h6>Recharge friction</h6><p>3/6 couldn't pick a custom recharge amount or experienced slow activation.</p></div></div>
          <div class="finding"><div class="finding-num">4</div><div class="finding-body"><h6>Responsiveness</h6><p>Internet recharges took time to activate — improving backend responsiveness.</p></div></div>
          <div class="finding"><div class="finding-num">5</div><div class="finding-body"><h6>Visual consistency</h6><p>Standardize color usage across screens to reduce cognitive load.</p></div></div>
        </div>

        <h4 style="font-family:'Playfair Display',serif;font-weight:700;margin:2rem 0 1rem;">Recommendations</h4>
        <div class="findings-grid">
          <div class="finding"><div class="finding-num" style="background:var(--grad-2)">A</div><div class="finding-body"><h6>Dedicated Offers Page</h6><p>Move offers off home / store to a focused surface.</p></div></div>
          <div class="finding"><div class="finding-num" style="background:var(--grad-2)">B</div><div class="finding-body"><h6>Color-mode toggle</h6><p>Let users pick a comfortable palette.</p></div></div>
          <div class="finding"><div class="finding-num" style="background:var(--grad-2)">C</div><div class="finding-body"><h6>Custom recharge amount</h6><p>Free-form input + faster activation feedback.</p></div></div>
        </div>
      `
    },

/* =========================================================
       PROJECT 5 — Usability Evaluation Ehsan & Tabaru
       ========================================================= */
    {
      odd: false,
      meta: ['Heuristic Evaluation', 'Nielsen\'s 10', 'Donation Platforms'],
      title: 'Usability Evaluation — Ehsan & Tabaru Platforms',
      overview: `Heuristic evaluation of two Saudi charity platforms — <strong>Ehsan</strong> (SDAIA-backed donation platform)
      and <strong>Tabaru</strong> (Ministry of Human Resources platform for individual donations). Evaluations
      applied Nielsen's 10 usability heuristics with severity ratings (1-4) and actionable recommendations.`,
      learningsTitle: 'Coverage & outcomes',
      learnings: [
        'Reviewed core flows: account creation, donations, viewing records, search, navigation.',
        'Identified missing "Undo" controls, lack of progress indicators, cluttered homepages.',
        'Heuristic violations in match-between-system-and-real-world (terms like "Reports" vs "Records").',
        'Recommended cancel/retrieve flows and improved access to donation history.',
        'Inclusive design recommendations: keyboard nav, screen-reader support, simplified language.'
      ],
      goalsTitle: 'Why usability evaluation matters',
      goals: [
        'Improve user satisfaction and reduce friction when donating.',
        'Minimize steps required for donations — speed up the journey.',
        'Reduce redesign costs by catching issues early.',
        'Ensure inclusivity for users with disabilities.',
        'Boost charitable initiative success through a frictionless UX.'
      ],
      stats: [
        { num: '2', label: 'Platforms' },
        { num: '10', label: 'Nielsen Heuristics' },
        { num: '4/4', label: 'Max Severity' },
        { num: '7', label: 'Ihsan Issues' }
      ],
      statsTitle: 'At a glance',
      uiTitle: 'Top usability findings (Ehsan platform)',
      uiIcon: 'fa-heart',
      ui: `
        <div class="heuristic-grid">
          <div class="heuristic">
            <div class="heuristic-num">1</div>
            <h5>User Control &amp; Freedom</h5>
            <p>No clear "Undo" button after key actions. Users can't easily revert changes.</p>
            <span class="severity">Severity 4/4</span>
          </div>
          <div class="heuristic">
            <div class="heuristic-num">2</div>
            <h5>Visibility of System Status</h5>
            <p>Progress for long operations (donation processing) is not displayed.</p>
            <span class="severity">Severity 3/4</span>
          </div>
          <div class="heuristic">
            <div class="heuristic-num">3</div>
            <h5>Error Prevention</h5>
            <p>No warnings before critical actions like deleting or confirming donations.</p>
            <span class="severity">Severity 3/4</span>
          </div>
          <div class="heuristic">
            <div class="heuristic-num">4</div>
            <h5>Recognition Rather Than Recall</h5>
            <p>Donation records buried inside menus. Should be on the homepage.</p>
            <span class="severity">Severity 3/4</span>
          </div>
          <div class="heuristic">
            <div class="heuristic-num">5</div>
            <h5>Match Real World</h5>
            <p>Replace "Reports" with familiar term "Donation Records".</p>
            <span class="severity">Severity 2/4</span>
          </div>
          <div class="heuristic">
            <div class="heuristic-num">6</div>
            <h5>Aesthetic Minimalist Design</h5>
            <p>Too many ads and unnecessary elements distract from core donation flows.</p>
            <span class="severity">Severity 2/4</span>
          </div>
          <div class="heuristic">
            <div class="heuristic-num">7</div>
            <h5>Help &amp; Documentation</h5>
            <p>Expand FAQ and add prominent help entry point.</p>
            <span class="severity">Severity 2/4</span>
          </div>
        </div>
      `
    },

/* =========================================================
       PROJECT 6 — Event Hub Information Architecture
       ========================================================= */
    {
      odd: true,
      meta: ['Information Architecture', 'Sitemap', 'Card Sorting', 'Audit'],
      title: 'Event Hub — Information Architecture',
      overview: `IA redesign for <strong>Event Hub</strong> — an entertainment app for booking events. Started with an
      audit of the existing webook.com platform, ran user interviews with volunteers, organizers, and attendees,
      then rebuilt the entire navigation structure, organization schemes, and sitemap from scratch.`,
      learningsTitle: 'What this project produced',
      learnings: [
        'Audit of webook.com: lack of visual appeal, complex navigation, inconsistent design.',
        'Interviews with 3 user types: volunteer, organizer, visitor — each got tailored questions.',
        'Organization schemes: classified, sequential, alphabetical, task-oriented.',
        'Navigation structure split into primary, secondary, utility, search, and footer.',
        'Card sorting test results validated the proposed navigation across roles.'
      ],
      goalsTitle: 'Project scope',
      goals: [
        'Streamline event management processes for organizers.',
        'Enhance attendee engagement through personalized recommendations.',
        'Provide ticketing, registration, event analytics, and communication tools.',
        'Counter poor organization with built-in feedback mechanisms.',
        'Deliver a unified navigation across user types.'
      ],
      stats: [
        { num: '4', label: 'Org Schemes' },
        { num: '3', label: 'User Types' },
        { num: '5', label: 'Nav Levels' },
        { num: '85%', label: 'Card Sort Success' }
      ],
      statsTitle: 'At a glance',
      uiTitle: 'Sitemap & Navigation Structure',
      uiIcon: 'fa-sitemap',
      ui: `
        <h4 style="font-family:'Playfair Display',serif;font-weight:700;margin-bottom:1rem;">Sitemap (top-level)</h4>
        <div class="sitemap">
          <div class="sitemap-root">Event Hub · Home</div>
          <div class="sitemap-children">
            <div class="sitemap-node">Homepage</div>
            <div class="sitemap-node">Browse Events</div>
            <div class="sitemap-node">My Reservations</div>
            <div class="sitemap-node">Payment</div>
            <div class="sitemap-node">User Type</div>
            <div class="sitemap-node">Technical Support</div>
            <div class="sitemap-node">Offers</div>
            <div class="sitemap-node">Evaluate Services</div>
          </div>
          <div class="sitemap-children">
            <div class="sitemap-node"><strong>Events</strong> → Economic · Historical · Charitable</div>
            <div class="sitemap-node"><strong>Innovate</strong> → Create · My Events · Photos</div>
          </div>
        </div>

        <h4 style="font-family:'Playfair Display',serif;font-weight:700;margin:2rem 0 1rem;">User-Type Decision Tree</h4>
        <div class="sitemap">
          <div class="sitemap-root">Select user type</div>
          <div class="sitemap-children">
            <div class="sitemap-node">Visitor<br><em>Browse + book tickets</em></div>
            <div class="sitemap-node">Organizer<br><em>Create &amp; manage events</em></div>
            <div class="sitemap-node">Volunteer<br><em>Join + coordinate</em></div>
            <div class="sitemap-node">Browser<br><em>Just looking</em></div>
          </div>
        </div>

        <h4 style="font-family:'Playfair Display',serif;font-weight:700;margin:2rem 0 1rem;">Card Sorting Results</h4>
        <div class="survey-result">
          <div class="survey-bar"><div class="survey-bar-label"><span>Volunteers — login &amp; signup</span><span>85%</span></div><div class="survey-bar-track"><div class="survey-bar-fill" style="width:85%"></div></div></div>
          <div class="survey-bar"><div class="survey-bar-label"><span>Volunteers — design approval</span><span>70%</span></div><div class="survey-bar-track"><div class="survey-bar-fill" style="width:70%"></div></div></div>
          <div class="survey-bar"><div class="survey-bar-label"><span>Visitors — search &amp; filter</span><span>90%</span></div><div class="survey-bar-track"><div class="survey-bar-fill" style="width:90%"></div></div></div>
          <div class="survey-bar"><div class="survey-bar-label"><span>Organizers — event creation</span><span>75%</span></div><div class="survey-bar-track"><div class="survey-bar-fill" style="width:75%"></div></div></div>
        </div>
      `
    },

/* =========================================================
       PROJECT 7 — Ingredients Website UI Design
       ========================================================= */
    {
      odd: false,
      meta: ['UI Design', 'Lo-Fi', 'Mid-Fi', 'Hi-Fi', 'User Flow', 'Usability'],
      title: 'The Ingredients Website — UI Design (Lo/Mid/Hi-Fi)',
      overview: `The design phase for the same "Ingredients Website" research project. Built on the UX research
      findings — turning assumptions and user needs into Lo-Fi sketches, Mid-Fi wireframes, Hi-Fi mockups,
      and an end-to-end user flow. Validated with two age groups (21 and 55).`,
      learningsTitle: 'Design artefacts delivered',
      learnings: [
        'Lo-Fi: homepage, categories + footer, login, ingredients page — pencil-and-paper style.',
        'Mid-Fi: cleaner layout for the same screens with refined hierarchy.',
        'Hi-Fi: full color and typography — homepage, recipes, profile.',
        'User flow diagram spanning guest → login → ingredient input → recipe view.',
        'Recommendations: navigation arrows, clearer icons, accessible content for older users.'
      ],
      goalsTitle: 'Assumptions addressed by design',
      goals: [
        'Multiple ways to reach recipes (nav bar, popular, categories, ingredients).',
        'Login to deliver personalized recipes (chronic disease, allergies, healthy options).',
        'Recipe ratings + sharing to drive variety & community.',
        'Cooking tutorials to reduce intimidation for beginners.',
        'Maintain clear visual design + quick tip tooltips for older users.'
      ],
      stats: [
        { num: '3', label: 'Fidelity Levels' },
        { num: '6', label: 'Screens' },
        { num: '1', label: 'User Flow' },
        { num: '2', label: 'Test Groups' }
      ],
      statsTitle: 'At a glance',
      uiTitle: 'Hi-Fi Preview & User Flow',
      uiIcon: 'fa-pen-ruler',
      ui: `
        <h4 style="font-family:'Playfair Display',serif;font-weight:700;margin-bottom:1rem;">Hi-Fi preview</h4>
        <div class="hifi-grid">
          <div class="hifi-card">
            <div class="hifi-mock">
              <h6>Welcome to the Kitchen</h6>
              <div class="hifi-mock-line s1"></div>
              <div class="hifi-mock-line s2"></div>
              <div class="hifi-mock-line s3"></div>
              <div class="hifi-recipes">
                <div class="hifi-recipe"></div>
                <div class="hifi-recipe"></div>
                <div class="hifi-recipe"></div>
                <div class="hifi-recipe"></div>
              </div>
            </div>
            <div class="hifi-card-label">Homepage · Popular recipes</div>
          </div>

          <div class="hifi-card">
            <div class="hifi-mock">
              <h6>Recipes By Category</h6>
              <div class="hifi-mock-line"></div>
              <div class="hifi-recipes">
                <div class="hifi-recipe"></div>
                <div class="hifi-recipe"></div>
                <div class="hifi-recipe"></div>
                <div class="hifi-recipe"></div>
              </div>
              <div class="hifi-mock-line s3"></div>
            </div>
            <div class="hifi-card-label">Categories</div>
          </div>

          <div class="hifi-card">
            <div class="hifi-mock">
              <h6>Your Ingredients</h6>
              <div class="hifi-recipes">
                <div class="hifi-recipe"></div>
                <div class="hifi-recipe"></div>
                <div class="hifi-recipe"></div>
                <div class="hifi-recipe"></div>
              </div>
              <div class="hifi-mock-line s3"></div>
            </div>
            <div class="hifi-card-label">Ingredients input</div>
          </div>

          <div class="hifi-card">
            <div class="hifi-mock">
              <h6>Match Found!</h6>
              <div class="hifi-mock-line s1"></div>
              <div class="hifi-recipes">
                <div class="hifi-recipe"></div>
                <div class="hifi-recipe"></div>
              </div>
            </div>
            <div class="hifi-card-label">Result · Recipes</div>
          </div>
        </div>

        <h4 style="font-family:'Playfair Display',serif;font-weight:700;margin:2rem 0 1rem;">End-to-end user flow</h4>
        <div class="user-flow">
          <div class="uf-step"><div class="uf-icon">1</div><span>Open website as guest</span></div>
          <div class="uf-step"><div class="uf-icon">2</div><span>Sign up / log in</span></div>
          <div class="uf-step"><div class="uf-icon">3</div><span>Answer dietary questions</span></div>
          <div class="uf-step"><div class="uf-icon">4</div><span>Add ingredients manually</span></div>
          <div class="uf-step"><div class="uf-icon">5</div><span>Browse recommended recipes</span></div>
          <div class="uf-step"><div class="uf-icon">6</div><span>Save favorites &amp; rate</span></div>
        </div>
      `
    },

/* =========================================================
       PROJECT 8 — Digital Menu (Vue / Node / Mongo)
       ========================================================= */
    {
      odd: true,
      meta: ['Vue 3', 'Node.js', 'Express', 'MongoDB Atlas', 'Mongoose', 'SPA'],
      title: 'Digital Menu — Vue 3 · Node.js · MongoDB',
      overview: `Full-stack web application for a small café to manage its digital menu. Built as a Vue 3 SPA on
      the frontend, a Node.js + Express REST API on the backend, and MongoDB Atlas (via Mongoose) as the
      persistent cloud store. Implements complete CRUD: Create, Read, Update, Delete — with real-time
      reflection on the frontend after every database change.`,
      learningsTitle: 'Tech stack & architecture',
      learnings: [
        'Vue 3 single-page application with form-based menu management.',
        'Node.js + Express REST API: GET / POST / PUT / DELETE /menu.',
        'MongoDB Atlas with Mongoose schema (name, price, category).',
        'CORS-enabled API + Axios for HTTP requests from frontend.',
        'Responsive Flexbox layouts for desktop and mobile.'
      ],
      goalsTitle: 'Project flow',
      goals: [
        'User opens frontend SPA in the browser.',
        'Adds an item via the Vue form.',
        'Axios sends a POST request to the Node.js API.',
        'Express forwards to MongoDB Atlas.',
        'Response returns to frontend → menu list updates in real-time.',
        'Edit / Delete also persist to MongoDB automatically.'
      ],
      stats: [
        { num: '4', label: 'CRUD Endpoints' },
        { num: '3', label: 'Data Fields' },
        { num: 'Vue 3', label: 'Frontend' },
        { num: 'Atlas', label: 'Database' }
      ],
      statsTitle: 'At a glance',
      uiTitle: 'Live Demo — Café Digital Menu (try adding an item!)',
      uiIcon: 'fa-mug-hot',
      ui: `
        <div class="menu-app" id="digitalMenuApp">
          <div class="menu-app-header">
            <h5><i class="fa-solid fa-mug-hot"></i> Café Menu — Admin</h5>
            <span class="tech-pill">Vue 3 · Node · MongoDB</span>
          </div>

          <div class="menu-form">
            <input class="menu-input" id="menuName" placeholder="Item name (e.g. Cappuccino)" />
            <input class="menu-input" id="menuPrice" type="number" placeholder="Price (SAR)" />
            <select class="menu-select" id="menuCat">
              <option>Coffee</option>
              <option>Tea</option>
              <option>Dessert</option>
              <option>Sandwich</option>
            </select>
            <button class="menu-btn" id="menuAddBtn">＋ Add</button>
          </div>

          <div class="menu-list" id="menuList"></div>
        </div>
      `
    },

/* =========================================================
       PROJECT 9 — Order Delivery System SRS
       ========================================================= */
    {
      odd: false,
      meta: ['SRS', 'Use Cases', '6 UI Mockups', 'Customer · Admin'],
      title: 'Order Delivery System (ODS) — SRS Document',
      overview: `Software Requirements Specification for the Order Delivery System — an integrated mobile app
      for customers to place orders & track deliveries, with an admin dashboard for managing orders, inventory,
      and delivery services. Compared against ToYou, Jahez, and Mrsool apps. Uses MVC architecture.`,
      learningsTitle: 'Requirements coverage',
      learnings: [
        'Customer interface: account creation, login, product browsing, order submit & track, payment, ratings.',
        'Admin dashboard: order management, delivery services assignment, status filtering.',
        '6 use cases with full scenarios for create-account, login, browsing, order management, payment.',
        'Non-functional: performance (3s response, 5000 concurrent), reliability, 99.5% uptime, security, portability.',
        '6 UI mockups included: splash, login, home, restaurants, product, side menu.'
      ],
      goalsTitle: 'System goals',
      goals: [
        'Simplify delivery order experience for customers.',
        'Provide admins with a central operations dashboard.',
        'Online payments via secure gateway (credit cards).',
        'Customer service support for queries and concerns.',
        'Mobile-first design across Android &amp; iOS.'
      ],
      stats: [
        { num: '6', label: 'UI Mockups' },
        { num: '5', label: 'Use Cases' },
        { num: '18', label: 'SRS Pages' },
        { num: 'MVC', label: 'Architecture' }
      ],
      statsTitle: 'At a glance',
      uiTitle: 'Use Case Table & 6 UI Mockups',
      uiIcon: 'fa-truck',
      ui: `
        <h4 style="font-family:'Playfair Display',serif;font-weight:700;margin-bottom:1rem;">Use Case Map</h4>
        <div class="uc-table">
          <div class="uc-row" style="background:var(--surface-2);font-weight:700;font-family:'JetBrains Mono',monospace;font-size:0.74rem;letter-spacing:0.08em;">
            <div class="uc-id">ID</div><div class="uc-name">Use Case</div><div class="uc-actor">Actor</div><div class="uc-status">Priority</div>
          </div>
          <div class="uc-row"><div class="uc-id">UC-01</div><div class="uc-name">Create Account</div><div class="uc-actor">User / Admin</div><div class="uc-status core">Core</div></div>
          <div class="uc-row"><div class="uc-id">UC-02</div><div class="uc-name">Login</div><div class="uc-actor">User / Admin</div><div class="uc-status core">Core</div></div>
          <div class="uc-row"><div class="uc-id">UC-03</div><div class="uc-name">Product Browsing</div><div class="uc-actor">User</div><div class="uc-status core">Core</div></div>
          <div class="uc-row"><div class="uc-id">UC-04</div><div class="uc-name">Submit &amp; Track Order</div><div class="uc-actor">User</div><div class="uc-status core">Core</div></div>
          <div class="uc-row"><div class="uc-id">UC-05</div><div class="uc-name">Order Management</div><div class="uc-actor">Admin</div><div class="uc-status core">Core</div></div>
          <div class="uc-row"><div class="uc-id">UC-06</div><div class="uc-name">Online Payment</div><div class="uc-actor">User</div><div class="uc-status standard">Standard</div></div>
          <div class="uc-row"><div class="uc-id">UC-07</div><div class="uc-name">Comments &amp; Ratings</div><div class="uc-actor">User</div><div class="uc-status standard">Standard</div></div>
          <div class="uc-row"><div class="uc-id">UC-08</div><div class="uc-name">Delivery Services Mgmt</div><div class="uc-actor">Admin</div><div class="uc-status core">Core</div></div>
        </div>

        <h4 style="font-family:'Playfair Display',serif;font-weight:700;margin:2rem 0 1rem;">6 UI Mockups</h4>
        <div class="ods-mocks">
          <div class="ods-mock">
            <div class="ods-mock-screen">
              <div class="ods-mock-bar tall"></div>
              <div class="ods-mock-bar short"></div>
              <div class="ods-mock-bar"></div>
            </div>
            <div class="ods-mock-label"><span>Splash / Logo</span><div class="ods-mock-num">1</div></div>
          </div>
          <div class="ods-mock">
            <div class="ods-mock-screen">
              <div class="ods-mock-bar short"></div>
              <div class="ods-mock-bar"></div>
              <div class="ods-mock-bar"></div>
              <div class="ods-mock-bar tall"></div>
            </div>
            <div class="ods-mock-label"><span>Login</span><div class="ods-mock-num">2</div></div>
          </div>
          <div class="ods-mock">
            <div class="ods-mock-screen">
              <div class="ods-mock-bar"></div>
              <div class="ods-mock-tiles"><div class="ods-mock-tile">PROMO</div><div class="ods-mock-tile">NEW</div></div>
              <div class="ods-mock-bar short"></div>
            </div>
            <div class="ods-mock-label"><span>Home</span><div class="ods-mock-num">3</div></div>
          </div>
          <div class="ods-mock">
            <div class="ods-mock-screen">
              <div class="ods-mock-tiles"><div class="ods-mock-tile">R1</div><div class="ods-mock-tile">R2</div><div class="ods-mock-tile">R3</div><div class="ods-mock-tile">R4</div></div>
            </div>
            <div class="ods-mock-label"><span>Restaurants</span><div class="ods-mock-num">4</div></div>
          </div>
          <div class="ods-mock">
            <div class="ods-mock-screen">
              <div class="ods-mock-bar tall"></div>
              <div class="ods-mock-bar"></div>
              <div class="ods-mock-bar short"></div>
              <div class="ods-mock-bar tall" style="background:#ffb88c"></div>
            </div>
            <div class="ods-mock-label"><span>Product</span><div class="ods-mock-num">5</div></div>
          </div>
          <div class="ods-mock">
            <div class="ods-mock-screen">
              <div class="ods-mock-bar"></div>
              <div class="ods-mock-bar"></div>
              <div class="ods-mock-bar"></div>
              <div class="ods-mock-bar short"></div>
            </div>
            <div class="ods-mock-label"><span>Side Menu</span><div class="ods-mock-num">6</div></div>
          </div>
        </div>
      `
    },

/* =========================================================
       PROJECT 10 — Jahez UX Research
       ========================================================= */
    {
      odd: true,
      meta: ['UX Research', 'Personas', 'Journey Maps', 'User Stories'],
      title: 'Jahez — Cancellation UX Research',
      overview: `Research focused on improving the cancellation experience in Jahez — the popular Saudi food
      delivery app. We chose Jahez over HungerStation and ToYou because of familiarity, ease of use, and
      adoption. We built three personas, mapped their journeys, and produced user stories around cancellation.`,
      learningsTitle: 'Research approach',
      learnings: [
        'Defined cancellation as the chosen task because there is no visible cancel button in Jahez.',
        '3 personas: Sarah (teacher, 30), Ahmed (student, 19), Laila (vocational guide, 40 with disability).',
        'Built journey maps per persona across Awareness → Search → Order/Wait → Receiving.',
        'Captured pain points across each journey stage and emotional states.',
        'Storyboards and 3 user stories highlighting the cancel-or-refund need.'
      ],
      goalsTitle: 'Project goals',
      goals: [
        'Improve cancel-order flow so users don\'t feel trapped after paying.',
        'Enhance user satisfaction and make Jahez the #1 food ordering choice.',
        'Cancel orders up to 15 minutes after the request with immediate refund.',
        'Reduce friction for users with disabilities (accessibility scenario).',
        'Deliver a simple, predictable post-order experience.'
      ],
      stats: [
        { num: '3', label: 'Personas' },
        { num: '4', label: 'Journey Stages' },
        { num: '3', label: 'User Stories' },
        { num: '15min', label: 'Cancel Window' }
      ],
      statsTitle: 'At a glance',
      uiTitle: 'Personas · Journey Map · User Stories',
      uiIcon: 'fa-utensils',
      ui: `
        <h4 style="font-family:'Playfair Display',serif;font-weight:700;margin-bottom:1rem;">Personas</h4>
        <div class="personas-grid">
          <div class="persona">
            <div class="persona-avatar">S</div>
            <h6>Sarah</h6>
            <div class="persona-age">30 · Teacher</div>
            <div class="persona-row"><strong>Goal:</strong> Order quickly during school breaks.</div>
            <div class="persona-row"><strong>Challenge:</strong> Needs cancel within 15 min.</div>
            <div class="persona-row"><strong>Preference:</strong> Cancel or modify after ordering.</div>
          </div>
          <div class="persona">
            <div class="persona-avatar">A</div>
            <h6>Ahmed</h6>
            <div class="persona-age">19 · Student</div>
            <div class="persona-row"><strong>Goal:</strong> Fast delivery between study sessions.</div>
            <div class="persona-row"><strong>Challenge:</strong> Mistakes order, can't cancel &rarr; no refund.</div>
            <div class="persona-row"><strong>Preference:</strong> Cancel or modify feature.</div>
          </div>
          <div class="persona">
            <div class="persona-avatar">L</div>
            <h6>Laila</h6>
            <div class="persona-age">40 · Vocational guide</div>
            <div class="persona-row"><strong>Goal:</strong> Order easily despite disability.</div>
            <div class="persona-row"><strong>Challenge:</strong> Struggles with cancellation.</div>
            <div class="persona-row"><strong>Preference:</strong> Simple cancel request flow.</div>
          </div>
        </div>

        <h4 style="font-family:'Playfair Display',serif;font-weight:700;margin:2rem 0 1rem;">Journey Map — Sarah's flow</h4>
        <div class="journey-map">
          <div class="journey-steps">
            <div class="j-step"><div class="j-step-label">Awareness</div><h6>Order delayed</h6><p>Realizes she won't be able to eat during her break if delivery is late.</p></div>
            <div class="j-step"><div class="j-step-label">Search</div><h6>Looking for cancel</h6><p>Can't find a clear cancel button — feels confused.</p></div>
            <div class="j-step"><div class="j-step-label">Order &amp; Wait</div><h6>Tries to contact support</h6><p>Searches for help, but no easy path — feels nervous.</p></div>
            <div class="j-step"><div class="j-step-label">Receiving</div><h6>No solution</h6><p>Disappointed with the service because there's no cancel option.</p></div>
          </div>
        </div>

        <h4 style="font-family:'Playfair Display',serif;font-weight:700;margin:2rem 0 1rem;">User Stories</h4>
        <div class="user-stories">
          <div class="user-story">
            <div class="story-id">#1</div>
            <p><strong>Cancel post-creation.</strong> As a user, I'd like the option to cancel my order post-creation, ensuring I can change my mind.</p>
          </div>
          <div class="user-story">
            <div class="story-id">#2</div>
            <p><strong>Advance notice.</strong> As a user, I would like to be informed in advance if there is no cancellation feature.</p>
          </div>
          <div class="user-story">
            <div class="story-id">#3</div>
            <p><strong>15-min window + refund.</strong> As a user, I want the freedom to cancel or modify my order within 15 minutes and receive a refund if I cancel the order.</p>
          </div>
        </div>
      `
    },

/* =========================================================
       PROJECT 11 — LAYAQAH App
       ========================================================= */
    {
      odd: false,
      meta: ['Sports Tech', '3 Roles', '3 Dashboards', 'Use Cases', 'Wireframes'],
      title: 'LAYAQAH — Sports Injury Tracking (GP2)',
      overview: `Unified system for managing player, coach, and doctor workflows in a sports organization.
      GP2 transformed the approved prototype from GP1 into a fully functional interactive system with role-based
      dashboards, performance tracking, injury management, and visualizations — all anchored in HCI principles.`,
      learningsTitle: 'What GP2 delivered',
      learnings: [
        '3 role-based dashboards: Player, Coach, Doctor (each with its own data view).',
        'Centralized player data replacing fragmented Excel / paper / chat workflows.',
        'Performance & injury tracking + automated reports and visualizations.',
        'Sequence & activity diagrams for Add Injury Record, Messaging, Login, View Record, etc.',
        'WCAG-aware accessibility, secure role-based access, ethical design review.'
      ],
      goalsTitle: 'Verified user needs',
      goals: [
        'Unify player data in one system accessible by coaches, doctors, players.',
        'Fast & easy access to performance + medical information.',
        'Accurate, complete data through structured input.',
        'Automated reports & notifications for daily workflows.',
        'Role-based access — clear permission boundaries.'
      ],
      stats: [
        { num: '3', label: 'Roles' },
        { num: '5+', label: 'Sequence Diagrams' },
        { num: '8+', label: 'Activity Diagrams' },
        { num: 'WCAG', label: 'Accessibility' }
      ],
      statsTitle: 'At a glance',
      uiTitle: 'Three Role-Based Dashboards',
      uiIcon: 'fa-medal',
      ui: `
        <div class="layaqah-grid">
          <div class="lay-card">
            <div class="lay-screen player">
              <div class="lay-header">
                <div class="lay-icon"><i class="fa-solid fa-person-running"></i></div>
                <span class="lay-badge">PLAYER</span>
              </div>
              <div class="lay-stat"><div><h4>87%</h4><span>Readiness</span></div><i class="fa-solid fa-heart-pulse"></i></div>
              <div class="lay-stat"><div><h4>12.4</h4><span>km this week</span></div><i class="fa-solid fa-route"></i></div>
              <div class="lay-chart">
                <i style="height:55%"></i><i style="height:80%"></i><i style="height:62%"></i><i style="height:90%"></i><i style="height:72%"></i>
              </div>
            </div>
            <div class="lay-label"><i class="fa-solid fa-person-running"></i> Player Dashboard</div>
          </div>

          <div class="lay-card">
            <div class="lay-screen coach">
              <div class="lay-header">
                <div class="lay-icon"><i class="fa-solid fa-clipboard-list"></i></div>
                <span class="lay-badge">COACH</span>
              </div>
              <div class="lay-stat"><div><h4>24</h4><span>Active players</span></div><i class="fa-solid fa-users"></i></div>
              <div class="lay-stat"><div><h4>3</h4><span>Pending reviews</span></div><i class="fa-solid fa-bell"></i></div>
              <div class="lay-chart">
                <i style="height:40%"></i><i style="height:60%"></i><i style="height:78%"></i><i style="height:55%"></i><i style="height:92%"></i>
              </div>
            </div>
            <div class="lay-label"><i class="fa-solid fa-clipboard-list"></i> Coach Dashboard</div>
          </div>

          <div class="lay-card">
            <div class="lay-screen doctor">
              <div class="lay-header">
                <div class="lay-icon"><i class="fa-solid fa-stethoscope"></i></div>
                <span class="lay-badge">DOCTOR</span>
              </div>
              <div class="lay-stat"><div><h4>6</h4><span>Active injuries</span></div><i class="fa-solid fa-briefcase-medical"></i></div>
              <div class="lay-stat"><div><h4>2</h4><span>Recovery plans</span></div><i class="fa-solid fa-notes-medical"></i></div>
              <div class="lay-chart">
                <i style="height:90%"></i><i style="height:70%"></i><i style="height:48%"></i><i style="height:38%"></i><i style="height:24%"></i>
              </div>
            </div>
            <div class="lay-label"><i class="fa-solid fa-stethoscope"></i> Doctor Dashboard</div>
          </div>
        </div>

        <h4 style="font-family:'Playfair Display',serif;font-weight:700;margin:2rem 0 1rem;">System Interaction — Example Use Case</h4>
        <div class="user-flow">
          <div class="uf-step"><div class="uf-icon"><i class="fa-solid fa-stethoscope"></i></div><span>Doctor adds injury record</span></div>
          <div class="uf-step"><div class="uf-icon"><i class="fa-solid fa-database"></i></div><span>Persisted in secure DB</span></div>
          <div class="uf-step"><div class="uf-icon"><i class="fa-solid fa-clipboard-list"></i></div><span>Coach reviews + gets notified</span></div>
          <div class="uf-step"><div class="uf-icon"><i class="fa-solid fa-comments"></i></div><span>Coach ↔ Doctor messaging</span></div>
          <div class="uf-step"><div class="uf-icon"><i class="fa-solid fa-person-running"></i></div><span>Player views own record</span></div>
        </div>
      `
    },

/* =========================================================
       PROJECT 12 — HAJJ & UMRAH Arafat Boundary Verification
       ========================================================= */
    {
      odd: true,
      meta: ['Context-Aware HCI', 'Smart Wristband', 'Haptic UX', 'Accessibility', '13 screens'],
      title: 'Hajj & Umrah — Arafat Boundary Verification System',
      overview: `Context-aware HCI system using a smart wristband + mobile app to verify pilgrim safety at the
      Arafat boundary during Hajj. Built around heat, stress, and cognitive overload — uses only haptic, no
      screen, no sound, no language. Six mobile app screens (A1-A6) and seven wristband screens (B1-B7) cover
      everything from normal monitoring to emergency escalation.`,
      learningsTitle: 'System design highlights',
      learnings: [
        'Normal / Advisory / Warning / Danger / Confirmed / Health / Emergency states on the wristband.',
        'Triple-pulse haptic patterns replace screen language under glare & stress.',
        'Mobile app for group leaders (Mutawwif): stats, alert list, individual pilgrim details.',
        'Boundaries trigger progressive escalation; auto-dismissed when pilgrim returns.',
        'BLE SOS beacon broadcasts to nearby devices in emergencies.'
      ],
      goalsTitle: 'Sensing & interpretation',
      goals: [
        'GPS + boundary polygon for real-time location tracking.',
        'Live HR + skin temperature vitals.',
        'State model with triggers: distance, vitals, time, acknowledgment.',
        'Privacy-by-design — minimal data, on-device processing, opt-in sharing.',
        'Inclusive for non-Arabic speakers, elders, and people with disabilities.'
      ],
      stats: [
        { num: '6', label: 'Mobile Screens' },
        { num: '7', label: 'Wristband States' },
        { num: '0', label: 'Languages Required' },
        { num: '0.5s', label: 'Glance Time' }
      ],
      statsTitle: 'At a glance',
      uiTitle: '13 Screens — Mobile (A1-A6) + Wristband (B1-B7)',
      uiIcon: 'fa-kaaba',
      ui: `
        <div class="hajj-grid">
          <div class="hajj-group">
            <div class="hajj-group-title">📱 Mobile App · 390 × 844 pt</div>
            <div class="hajj-screens">

              <div class="mobile-frame">
                <div class="mobile-screen">
                  <div class="ms-status"><span>9:41</span><span>●●●●</span></div>
                  <div class="ms-content" data-state="setup">
                    <div class="ms-h">Welcome</div>
                    <div class="ms-pill">PAIR MY WRISTBAND</div>
                    <div class="ms-mock-map">Feature highlights</div>
                    <div class="ms-cta">Learn how it works</div>
                  </div>
                </div>
              </div>
              <div class="mobile-frame">
                <div class="mobile-screen">
                  <div class="ms-status"><span>9:41</span><span>●●●●</span></div>
                  <div class="ms-content" data-state="setup">
                    <div class="ms-h">Ahmed · Group 12</div>
                    <div class="ms-pill">WRISTBAND 87%</div>
                    <div class="ms-mock-map">Haptic tutorial: 3 patterns</div>
                    <div class="ms-cta">Confirm &amp; Start</div>
                  </div>
                </div>
              </div>
              <div class="mobile-frame">
                <div class="mobile-screen">
                  <div class="ms-status"><span>9:41</span><span>●●●●</span></div>
                  <div class="ms-content" data-state="normal">
                    <div class="ms-h">Inside Arafat</div>
                    <div class="ms-pill">NORMAL · 847 m</div>
                    <div class="ms-mock-map">Live map · Arafat boundary</div>
                    <div class="ms-stats"><div class="ms-stat"><strong>72</strong><span>HR</span></div><div class="ms-stat"><strong>36.4</strong><span>Temp</span></div><div class="ms-stat"><strong>87%</strong><span>Bat</span></div></div>
                  </div>
                </div>
              </div>
              <div class="mobile-frame">
                <div class="mobile-screen">
                  <div class="ms-status"><span>9:41</span><span>●●●●</span></div>
                  <div class="ms-content" data-state="warning">
                    <div class="ms-h">Approaching edge</div>
                    <div class="ms-pill">48 m · TURN BACK</div>
                    <div class="ms-mock-map">Buffer zone · 50 m</div>
                    <div class="ms-cta">I'm Turning Back ✓</div>
                  </div>
                </div>
              </div>
              <div class="mobile-frame">
                <div class="mobile-screen">
                  <div class="ms-status"><span>9:41</span><span>●●●●</span></div>
                  <div class="ms-content" data-state="emergency">
                    <div class="ms-h">OUTSIDE ARAFAT</div>
                    <div class="ms-pill">EMERGENCY</div>
                    <div class="ms-mock-map">Leader · Officer · GPS</div>
                    <div class="ms-cta">STAY WHERE YOU ARE</div>
                  </div>
                </div>
              </div>
              <div class="mobile-frame">
                <div class="mobile-screen">
                  <div class="ms-status"><span>9:41</span><span>●●●●</span></div>
                  <div class="ms-content" data-state="monitor">
                    <div class="ms-h">Leader · Group 12</div>
                    <div class="ms-pill">9 SAFE · 1 WARNING · 1 EMERG</div>
                    <div class="ms-mock-map">12 dots · color-coded</div>
                    <div class="ms-cta">Alert list</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="hajj-group">
            <div class="hajj-group-title">⌚ Smart Wristband · 198 × 242 pt</div>
            <div class="hajj-screens">

              <div class="wrist-wrap">
                <div class="wrist-band"></div>
                <div class="wristband"><div class="wrist-screen" data-state="normal"><strong>INSIDE ARAFAT</strong><i>847 m</i><em>page • •</em></div></div>
                <div class="wrist-band bot"></div>
                <div style="font-size:0.7rem;color:var(--text-3);margin-top:0.4rem;font-family:'JetBrains Mono',monospace;">B1 · Normal</div>
              </div>
              <div class="wrist-wrap">
                <div class="wrist-band"></div>
                <div class="wristband"><div class="wrist-screen" data-state="advisory"><strong>BE AWARE</strong><i>100 m</i><em>double pulse</em></div></div>
                <div class="wrist-band bot"></div>
                <div style="font-size:0.7rem;color:var(--text-3);margin-top:0.4rem;font-family:'JetBrains Mono',monospace;">B2 · Advisory</div>
              </div>
              <div class="wrist-wrap">
                <div class="wrist-band"></div>
                <div class="wristband"><div class="wrist-screen" data-state="warning"><strong>WARNING</strong><i>48 m</i><em>Turn back now</em></div></div>
                <div class="wrist-band bot"></div>
                <div style="font-size:0.7rem;color:var(--text-3);margin-top:0.4rem;font-family:'JetBrains Mono',monospace;">B3 · Warning</div>
              </div>
              <div class="wrist-wrap">
                <div class="wrist-band"></div>
                <div class="wristband"><div class="wrist-screen" data-state="danger"><strong>STOP</strong><i>&lt; 10 m</i><em>Tap to confirm</em></div></div>
                <div class="wrist-band bot"></div>
                <div style="font-size:0.7rem;color:var(--text-3);margin-top:0.4rem;font-family:'JetBrains Mono',monospace;">B4 · Danger</div>
              </div>
              <div class="wrist-wrap">
                <div class="wrist-band"></div>
                <div class="wristband"><div class="wrist-screen" data-state="confirmed"><strong>SAFE</strong><i>returning</i><em>● ●</em></div></div>
                <div class="wrist-band bot"></div>
                <div style="font-size:0.7rem;color:var(--text-3);margin-top:0.4rem;font-family:'JetBrains Mono',monospace;">B5 · Confirmed</div>
              </div>
              <div class="wrist-wrap">
                <div class="wrist-band"></div>
                <div class="wristband"><div class="wrist-screen" data-state="health"><strong>REST</strong><i>HR 128</i><em>39.8°C</em></div></div>
                <div class="wrist-band bot"></div>
                <div style="font-size:0.7rem;color:var(--text-3);margin-top:0.4rem;font-family:'JetBrains Mono',monospace;">B6 · Health</div>
              </div>
              <div class="wrist-wrap">
                <div class="wrist-band"></div>
                <div class="wristband"><div class="wrist-screen" data-state="emergency"><strong>HELP</strong><i>outside</i><em>SOS active</em></div></div>
                <div class="wrist-band bot"></div>
                <div style="font-size:0.7rem;color:var(--text-3);margin-top:0.4rem;font-family:'JetBrains Mono',monospace;">B7 · Emergency</div>
              </div>

            </div>
          </div>
        </div>
      `
    },

/* =========================================================
       PROJECT 13 — Graduation Project
       ========================================================= */
    {
      odd: false,
      meta: ['Graduation Project', 'UI Screens', 'Showcase', 'Portfolio'],
      title: 'Graduation Project',
      overview: `A lightweight graduation project showcase presented as a polished UI portfolio section. The project now uses the real screenshots stored in the images folder for a more complete presentation.`,
      learningsTitle: 'What this section includes',
      learnings: [
        'A clear, minimal project description for the graduation showcase.',
        'Real screenshots from the images folder organized as a visual gallery.',
        'A flexible layout that keeps the portfolio presentation polished and ready to share.',
        'A professional showcase suitable for portfolio review.'
      ],
      goalsTitle: 'Purpose',
      goals: [
        'Present the graduation project in a clean, professional way.',
        'Showcase the project through authentic screenshots.',
        'Keep the section visually rich and ready for review.'
      ],
      stats: [
        { num: '19', label: 'Screenshots' },
        { num: '1', label: 'Showcase Section' },
        { num: '100%', label: 'Visual Ready' }
      ],
      statsTitle: 'At a glance',
      uiTitle: 'UI Gallery Preview — Project Screenshots',
      uiIcon: 'fa-graduation-cap',
      ui: `
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:0.75rem;">
          ${galleryImages.map((file, index) => `
            <button class="gallery-image-btn" type="button" data-image="images/${encodeURIComponent(file)}" data-alt="Graduation project screenshot ${index + 1}" style="border:1px solid rgba(255,255,255,0.12);border-radius:16px;overflow:hidden;background:linear-gradient(135deg,#1f2937,#111827);box-shadow:0 10px 30px rgba(0,0,0,0.18);aspect-ratio:4/5;">
              <img src="images/${encodeURIComponent(file)}" alt="Graduation project screenshot ${index + 1}" loading="lazy" style="display:block;width:100%;height:100%;object-fit:cover;" />
            </button>
          `).join('')}
        </div>
      `
    },


  ];

  // ---------- Build HTML for each visible project ----------
  const visibleProjects = [projects[0], projects[10], projects[8], projects[3], projects[5], projects[12]];
  visibleProjects.forEach((p, idx) => {
    const num = String(idx + 1).padStart(2, '0');

    const html = `
      <section class="pdetail" id="pdetail-${idx + 1}" data-odd="${p.odd}">
        <div class="pd-head">
          <div>
            <div class="pd-num">${num}</div>
            <span class="pd-num-label">Project · ${p.stats.length} highlights below</span>
          </div>
          <div class="pd-title-section">
            <h2 class="pd-title">${p.title}</h2>
            <div class="pd-meta">
              ${p.meta.map(m => `<span>${m}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="pd-body">
          <div class="pd-cols">
            <div class="pd-col">
              <h4>Overview</h4>
              <p>${p.overview}</p>
            </div>
            <div class="pd-col">
              <h4>${p.learningsTitle}</h4>
              <ul>
                ${p.learnings.map(l => `<li>${l}</li>`).join('')}
              </ul>
            </div>
          </div>

          <div class="pd-stats">
            ${p.stats.map(s => `
              <div class="pd-stat">
                <span class="pd-stat-num">${s.num}</span>
                <span class="pd-stat-label">${s.label}</span>
              </div>
            `).join('')}
          </div>

          <div class="pd-cols">
            <div class="pd-col">
              <h4>${p.goalsTitle}</h4>
              <ul>${p.goals.map(g => `<li>${g}</li>`).join('')}</ul>
            </div>
            <div class="pd-col">
              <h4>Najah's role</h4>
              <p>Co-led this project as part of a 4-person team at Umm Al-Qura University
              (HCI / Software Engineering Department). Najah contributed to research,
              design, and validation phases — building skills in collaborative scoping,
              iterative prototyping, and evidence-based decision-making.</p>
            </div>
          </div>

          <div class="pd-ui">
            <div class="pd-ui-label"><i class="fa-solid ${p.uiIcon}"></i> ${p.uiTitle}</div>
            ${p.ui}
          </div>
        </div>
      </section>
    `;

    container.insertAdjacentHTML('beforeend', html);
  });

  const modal = document.createElement('div');
  modal.className = 'gallery-modal';
  modal.innerHTML = `
    <div class="gallery-modal__content">
      <button class="gallery-modal__close" type="button" aria-label="Close image preview">✕</button>
      <img class="gallery-modal__image" src="" alt="Expanded project preview" />
    </div>
  `;
  document.body.appendChild(modal);

  const modalImage = modal.querySelector('.gallery-modal__image');
  const modalClose = modal.querySelector('.gallery-modal__close');

  const openGalleryModal = (src, alt) => {
    modalImage.src = src;
    modalImage.alt = alt;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeGalleryModal = () => {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  container.addEventListener('click', (event) => {
    const trigger = event.target.closest('.gallery-image-btn');
    if (!trigger) return;
    openGalleryModal(trigger.dataset.image, trigger.dataset.alt);
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.closest('.gallery-modal__close')) {
      closeGalleryModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeGalleryModal();
    }
  });

  // ---------- Project 8 demo: Digital Menu — interactive mock ----------
  initDigitalMenuDemo();

  function initDigitalMenuDemo() {
    const list = document.getElementById('menuList');
    const addBtn = document.getElementById('menuAddBtn');
    if (!list || !addBtn) return;

    const sample = [
      { id: 1, name: 'Cappuccino', price: 15, cat: 'Coffee' },
      { id: 2, name: 'Spanish Latte', price: 18, cat: 'Coffee' },
      { id: 3, name: 'Karak Tea', price: 8, cat: 'Tea' },
      { id: 4, name: 'Brownie', price: 12, cat: 'Dessert' }
    ];
    let items = [...sample];
    let nextId = items.length + 1;

    const render = () => {
      list.innerHTML = items.map(item => `
        <div class="menu-item">
          <span class="menu-item-cat">${item.cat}</span>
          <div class="menu-item-name">${item.name}</div>
          <div class="menu-item-price">${item.price} SAR</div>
          <div class="menu-item-actions">
            <button class="menu-act edit" data-id="${item.id}" data-act="edit">Edit</button>
            <button class="menu-act del" data-id="${item.id}" data-act="del">Delete</button>
          </div>
        </div>
      `).join('');
    };

    addBtn.addEventListener('click', () => {
      const name = document.getElementById('menuName').value.trim();
      const price = parseFloat(document.getElementById('menuPrice').value);
      const cat = document.getElementById('menuCat').value;
      if (!name || isNaN(price) || price <= 0) {
        addBtn.textContent = 'Name + price required';
        addBtn.style.background = '#de6262';
        setTimeout(() => {
          addBtn.textContent = '＋ Add';
          addBtn.style.background = '';
        }, 1400);
        return;
      }
      items.push({ id: nextId++, name, price, cat });
      document.getElementById('menuName').value = '';
      document.getElementById('menuPrice').value = '';
      render();
    });

    list.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;
      const id = parseInt(btn.dataset.id, 10);
      const act = btn.dataset.act;
      if (act === 'del') {
        items = items.filter(i => i.id !== id);
        render();
      } else if (act === 'edit') {
        const item = items.find(i => i.id === id);
        if (!item) return;
        const newName = prompt('Edit name', item.name);
        const newPrice = prompt('Edit price (SAR)', item.price);
        if (newName) item.name = newName;
        if (newPrice && !isNaN(parseFloat(newPrice))) item.price = parseFloat(newPrice);
        render();
      }
    });

    render();
  }
})();