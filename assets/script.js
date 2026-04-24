// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO DATA — edit below to customise
// ─────────────────────────────────────────────────────────────────────────────
//
// PROJECT DETAIL PAGES
// Each project's `body` field supports HTML and embedded media:
//
// 1. TEXT — Use standard HTML tags:
//    <h2>Section Title</h2>, <p>Paragraph</p>, <ul><li>items</li></ul>
//    Use <strong> for bold text.
//
// 2. MEDIA PLACEHOLDERS — Embed images/videos inline with text:
//    <!-- IMAGE: Descriptive caption for this image -->
//
// The system automatically converts these to full-width media containers
// centered in the page with captions below.
//
// 3. EXAMPLES:
//    <!-- IMAGE: Architecture diagram showing system dependencies -->
//    <!-- IMAGE: Gameplay footage of combat system in action -->
//    <!-- IMAGE: In-game level with procedural generation -->
//
// To add actual images, use img tags within the body:
//    <img src="images/screenshot.jpg" alt="Description">
//
// Layout is centered, responsive, and matches the portfolio's minimalist style.
//
// thumbnails
// Each project accepts an optional `thumb` field for the landing page:
//   thumb: "images/my-project.jpg"   ← relative path to an image file
//   thumb: "https://..."             ← or an absolute URL
//
// If `thumb` is omitted or null, a placeholder is shown instead.
// Recommended size: 320×200px (16:10). Any aspect ratio works — it will crop.
//
// LINKS
// Each project accepts an optional `link` field for external platform links:
//   link: { 
//     url: "https://...",            ← the URL to link to
//     label: "steam" | "github" | "itch.io" | "web"  ← platform identifier
//   }
//
// If `link` is omitted or null, no link is shown.
//
// ─────────────────────────────────────────────────────────────────────────────

const SKILLS = [
  { name: "Unreal Engine 5", group: "Engine", experience: "2.5 years", years: 2.5, description: "0.5 year commercial · 2 years university. Used in university game projects and professionally on an unannounced VR title." },
  { name: "Unity", group: "Engine", experience: "5 years", years: 5, description: "3 years commercial · 2 years personal/university. Primary engine across commercial simulation titles, mobile games, and an AR project." },
  { name: "Custom Engines", group: "Engine", experience: "1 year", years: 0.5, description: "University only. Built and maintained a custom C++ engine for a university game project." },
  { name: "C++", group: "Language", experience: "3 years", years: 3, description: "0.5 year commercial · 2.5 years university. Used throughout custom engine and Unreal Engine projects." },
  { name: "C#", group: "Language", experience: "5 years", years: 5, description: "3 years commercial · 2 years personal work. Primary language for all Unity work — commercial titles, tools, and mobile games." },
  { name: "TypeScript", group: "Language", experience: "1 year", years: 1, description: "Used for commercial mobile game project for 0.5 a year and for personal web development projects for 0.5 a year" },
  { name: "Blueprints", group: "Workflow", experience: "3 years", years: 3, description: "0.5 year commercial · 2.5 years university. Used alongside C++ for prototyping and designer-facing scripting in Unreal projects." },
  { name: "Behavior Trees", group: "AI", experience: "4 years", years: 4, description: "1 year commercial · 3 years university. Implemented custom BT editors, tasks, and decorators across commercial and university work." },
  { name: "HTNs", group: "AI", experience: "1 year", years: 1, description: "Commercial only. Extended an existing HTN system with custom tasks and decorators during a professional internship." },
  { name: "Navigation and Locomotion", group: "AI", experience: "4 years", years: 4, description: "2 years commercial · 2 years university. Built nav systems ranging from grid A* to Recast wrappers with physics-based flocking and parallelised pathfinding." },
  { name: "Gameplay Systems", group: "Gameplay", experience: "6 years", years: 6, description: "3 years commercial · 3 years university. Core focus across nearly all projects — economy, AI interactions, and player mechanics." },
  { name: "Animation Programming", group: "Gameplay", experience: "2 years", years: 2, description: "1 year commercial · 1 year university. Unity Animator with IK and layering commercially; control rigs and procedural animation professionally." },
  { name: "Tools Programming", group: "Gameplay", experience: "4 years", years: 4, description: "2 years commercial · 2 years university. Custom editor tooling, CI/CD pipelines, and a visual debugging console used by multiple commercial teams." },
  { name: "Multiplayer / Netcode", group: "Gameplay", experience: "1.5 years", years: 1.5, description: "Commercial only. Client/server architecture for a commercial simulation title, covering authority, replication, and AI state sync." },
  { name: "Git", group: "Workflow", experience: "6 years", years: 6, description: "3 years commercial · 3 years personal/university. Used throughout all work, including CI/CD pipelines with automated deployment and formatting." },
    { name: "Perforce", group: "Workflow", experience: "4 years", years: 4, description: "3 years university · 1 year commercial use" },
];

const SOCIALS = [
  { platform: "GitHub",   handle: "github.com/fluczak",      url: "https://github.com/fluczak" },
  { platform: "itch.io",  handle: "itch.io",         url: "https://kenarf.itch.io" },
  { platform: "LinkedIn", handle: "linkedin.com/in/fluczak", url: "https://www.linkedin.com/in/fluczak/" },
  { platform: "Email",    handle: "franek.luczak.02@gmail.com",     url: "mailto: franek.luczak.02@gmail.com" },
];

// Add a new object here to add a project row + detail page.
// Set `thumb` to a path/URL for a thumbnail image, or leave it null.
const PROJECTS = [
  {
    id: "vertigo-games-internship",
    title: "Unannounced VR Project",
    period: "September 2025 — February 2026",
    type: "VR Title · Vertigo Games · Commercial (Unannounced)",
    thumb: 'assets/thumbnails/vertigo-logo.jpg',
    shortDesc: "Internship at an established VR development studio working on advanced gameplay and AI systems. Architected and refactored core state management systems, designed hierarchical task network extensions, implemented character control mechanisms with procedural animation, and optimized performance-critical gameplay code for VR constraints.",
    tags: ["Unreal Engine 5", "C++", "AI Programming", "VR Development", "Animation Systems", "Architecture Design", "Performance Optimization"],
    body: `
      <h2>Overview</h2>
      <p>This internship provided hands-on experience with advanced VR gameplay and AI systems at a professional development studio. Over the course of the internship, I contributed to multiple interconnected systems while learning industry practices for collaborative development, code architecture, and performance optimization under hardware constraints.</p>
      
      <h2>State Management Systems</h2>
      <p>A significant portion of early work involved analyzing, refactoring, and extending the core world state system—an event-driven architecture that tracks the state of interactive objects, environmental triggers, and gameplay-critical conditions. I designed a universal query system for evaluating complex state conditions, implementing a hierarchical approach similar to existing tag-based systems in the engine but tailored for the specific needs of gameplay and AI logic.</p>
      
      <p>The refactoring included implementing custom struct serialization to provide backwards compatibility with legacy state evaluation approaches, allowing for a smooth migration path without requiring UI-level editor code. This demonstrated how careful architectural decisions can reduce implementation complexity and minimize disruption to designer workflows.</p>
      
      <h2>Hierarchical Task Network (HTN) Extensions</h2>
      <p>Building on the foundation of the project's HTN system, I implemented new HTN tasks and decorators that interface with the world state system. This involved deep dives into the existing HTN implementation to understand task lifecycle, parameter passing, and plan asset configuration. I extended the system with new tasks that enable designers to construct complex, state-dependent AI behaviors without requiring additional programmer implementation.</p>
      
      <h2>Character Animation and Control Rigs</h2>
      <p>A substantial learning focus was placed on Unreal's control rig system and its integration with gameplay code. I implemented procedural animation passes for character models, including complex mechanics like dynamic aim systems that respond to player input and environmental factors. This involved:</p>
      <ul>
        <li>Implementing inverse kinematics systems for responsive character animation</li>
        <li>Creating mathematical systems for targeting and aim-point calculation</li>
        <li>Debugging and optimizing animation graphs for smooth runtime performance</li>
        <li>Integrating control rig output with damage systems and hit detection</li>
      </ul>
      
      <p>The work required understanding animation blueprint logic, motion matching concepts, and the interaction between gameplay code and animation systems—critical knowledge for AI and gameplay programming.</p>
      
      <h2>AI Combat Behaviors</h2>
      <p>I designed and implemented AI behavior systems for multiple enemy types, including:</p>
      <ul>
        <li>Defensive behaviors with dynamic position protection mechanics</li>
        <li>Environment-aware navigation using position reservation systems</li>
        <li>Combat decision-making based on player state and threat assessment</li>
        <li>Flanking and tactical positioning behaviors</li>
        <li>Integrating existing AI token distribution systems for managing action scheduling across multiple agents</li>
      </ul>
            
      <h2>VR Gameplay Mechanics</h2>
      <p>Early project work focused on refining interactive gameplay mechanics for VR, including hand snapping systems that respond to object geometry, haptic feedback integration, and the underlying gameplay code that drives player interaction. This required understanding physics queries, collision detection, and responsive feedback systems critical to VR user experience.</p>
      
      <h2>Performance & Optimization</h2>
      <p>Throughout the internship, emphasis was placed on performance optimization for VR constraints. This included profiling hot paths in AI systems, optimizing navigation queries, and understanding the tradeoffs between visual fidelity and frame rate stability—essential for maintaining the sub-frame-latency requirements of VR.</p>
      
      <h2>Tools & Architecture</h2>
      <p>In addition to feature work, I contributed to developer tooling and documentation, creating systems and documentation that improved workflows for designers and other programmers. This included writing documentation targeted at non-programmer stakeholders and designing systems with extensibility and ease-of-use in mind.</p>
    `
  },
  {
    id: "animal-shelter-simulator-2",
    title: "Animal Shelter Simulator 2",
    period: "2024 — 2025",
    type: "PC / SteamDeck · Commercial",
    thumb: "assets/thumbnails/animal-shelter-2.jpg",
    shortDesc: "Commercial simulation game shipping on PC and SteamDeck. Architected the networked codebase, implemented all animal AI systems (navigation, locomotion, behavior, interactions), built animation systems including procedural animations bringing animals to life, and maintained production code quality across 12+ months of development",
    tags: ["Unity", "C#", "AI Programming", "Gameplay Systems", "Animation Programming", "Multiplayer / Netcode", "Tools Programming", "Cross-platform"],
    link: { label: "steam", url: "https://store.steampowered.com/app/2658510/Animal_Shelter_2/" },
    body: `
      <iframe width="566" height="313" src="https://www.youtube.com/embed/UGSBsh4RQWo" title="Animal Shelter 2 - Release Trailer | STEAM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <h2>Overview</h2>
      <p>Animal Shelter Simulator 2 is a commercial simulation game released on PC and SteamDeck. I joined as a generalist programmer, taking a central role in architecture design and the implementation of all animal AI systems that power the core gameplay, as well as implementing gameplay systems and tools facilitating workflows of other developers.</p>
      
      <h2>Architecture design</h2>
      <p>In the pre-production phase, I worked closely with the programming team to design the architectural foundation of the game, establishing system dependencies, API endpoints, and feature interactions using UML diagrams. This planning proved invaluable for scaling the codebase as the team grew.</p>
      
      <h2>AI Systems</h2>

      <p>One of my primary responsibilities was implementing custom navigation and locomotion systems. I developed highly proprietary logic for pathfinding and traversal over existing nav mesh implementations (Recast and A*) with custom components tailored to gameplay. The real challenge lay in creating locomotion beyond simple A-to-B pathfinding—animals needed to move naturally, responding to game events like interacting with objects. I built physics-based local avoidance, flocking behaviors for multiple NPCs, whisker-based obstacle detection and avoidance, as well as custom logic for pets walking on leashes alongside handlers. Managing multiple large navigation graphs with dynamic obstacles and priority-based rebaking required careful optimization. For this I worked on several optimization techniques: agent area throttling, clustering, agent LODs, path prebaking</p>
      
      <img src="assets/Images/Shelter-open-day.png"/>

      <p> During the key moments of the game (such as shelter open day) there could be up to 20 agents in the same space, this introduced a challenge of creating flocking behaviors, so that the NPCs could properly react to other agents and pets in their vicinity </p>
      
      <p> In the project I also contributed to the development of the game's core behavior system - utility AI. My main contributions involved creating new considerations, tasks and integrations of the gameplay logic to the behaviors and working on multiplayer synchronization of the AI code.</p>
      <h2>Gameplay & Multiplayer Architecture</h2>
      <p>I collaborated closely with the design team to implement gameplay features while exposing values and creating mini-tools to support their work. Key systems included the shelter customization system with upgrades, in-game economy simulation, interactions with dozens of interactable items, and UI screen logic.</p>
      
      <p>Multiplayer synchronization required careful and planned work. I implemented both client and server-side systems ensuring consistent state across networked players. This involved carefully managing authority, replication, and conflict resolution for interconnected systems (AI, player actions, item interactions, economy). The challenge intensified managing this complexity while maintaining performance with high agent counts and frequent state changes.</p>
      
      <img src="assets/Images/Animal-shelter-2-multiplayer.png"/>

      <h2>Animation Systems</h2>
      <p>Working with Unity's Animator system as the foundation, I built systems to drive animations from gameplay state. The goal was creating responsive, varied animations that reflected what animals were doing and feeling:</p>
      <ul>
        <li><strong>Behavior-driven animation parameters</strong> — Developed and managed a system that managed animations states based on what the AI is doing (moving, idle, interacting) with 40+ interaction animations with internal variants</li>
        <li><strong>Animation layering</strong> — Used additive layers and blending to layer multiple animations (base locomotion with layered idles, interactions, or emotional overlays).</li>
        <li><strong>Parameter-based animation variety</strong> — Created systems to vary animation playback through parameters (speed modulation, variation indices for random idles, blend values based on emotional state)</li>
        <li><strong>NPC animation management</strong> — Implemented systems for managing staff animations with variation to avoid repetition across dozens of NPCs performing the same actions.</li>
        <li><strong>Procedural animation for pets, players and NPCs</strong> — Developed a system that applied inverse kinematics to existing layered animations to achieve better results for interactions (such as looking at objects and turning)</li>
      </ul>
      
      <h2>Developer Tools</h2>
      <p>To accelerate team workflows, I created custom Unity tools including a visual debugging console with extended functionality, level design iteration tools, and procedural level generation tools for interventions and missions. These tools significantly reduced iteration time for designers and level artists.</p>
      
      <h2>Cross-Platform Optimization</h2>
      <p>The game deployed to both PC and SteamDeck, requiring careful performance profiling and optimization. I ensured gameplay remained responsive and ai agents performant across the performance spectrum—from high-end PCs to the SteamDeck's constraints. Low-level optimization of hot paths in AI update loops and navigation queries proved critical.</p>
    `
  },
  {
    id: "pepi-engine",
    title: "Pepi Engine",
    period: "2024",
    type: "University Project · Custom Engine",
    thumb: "assets/thumbnails/pepi-engine.jpg",
    shortDesc: "Custom C++ game engine built with a team of 8 over 8 weeks. Designed and implemented an AI framework supporting Finite State Machines and Behavior Trees with a type-safe blackboard, a navmesh system built on Constrained Delaunay Triangulation with funnel smoothing, and a full CI/CD pipeline. Powered a shipped RTS game handling up to 10,000 concurrent agents.",
    tags: ["C++", "Engine Development", "AI Framework", "CI/CD", "ECS", "Tools Programming"],
    link: { label: "github", url: "https://github.com/FLuczak/Owlet" },
    body: `
      <h2>Overview</h2>
      <p>Pepi Engine is a custom C++ game engine built by 8 programmers over 8 weeks, designed from the ground up for real-time strategy game development. It ships a custom rendering pipeline, a visual level editor with scene hierarchy, an entity-component-system architecture built on entt, and a comprehensive cereal-based serialization layer. My primary contributions were the AI behavior framework, the navigation system, and CI/CD infrastructure for the whole team.</p>

      <video controls width="566" height="313">
        <source src="assets/Videos/In editor work.mp4" type="video/mp4">
      </video>

      <h2>AI Behavior Framework</h2>
      <p>The AI framework supports two complementary behavior paradigms that run simultaneously on the same agent and share a common blackboard: Finite State Machines for structured, transition-driven logic and Behavior Trees for hierarchical, goal-driven decision-making. This dual-paradigm design lets designers and programmers choose the right abstraction per behavior without duplicating infrastructure. The system runs on a fixed timestep of 0.1 seconds, decoupled from the render loop, keeping AI update costs predictable and eliminating jitter from frame rate variance.</p>

      <h3>Behavior Trees</h3>
      <p>The BT implementation covers the full production node set:</p>
      <ul>
        <li><strong>Composite nodes</strong>: Sequence runs children until one fails; Selector runs children until one succeeds</li>
        <li><strong>Decorator nodes</strong>: Inverter, Repeater, AlwaysSucceed, UntilFail, and a generic Comparison&lt;T&gt; for blackboard-driven conditions with compile-time type checking</li>
        <li><strong>Leaf nodes</strong>: Abstract BehaviorTreeAction base class extended per behavior, receiving a context with delta time, blackboard reference, and per-node status tracking</li>
        <li><strong>Status propagation</strong>: INVALID, SUCCESS, RUNNING, FAILURE, and ABORTED states flow correctly through the tree hierarchy on every tick</li>
        <li><strong>Serialization</strong>: Full JSON round-trip persistence via nlohmann/json, enabling the visual editor to save and reload behavior definitions</li>
      </ul>

      <h3>Finite State Machines</h3>
      <p>The FSM implementation goes significantly beyond a basic state switch. Transitions are evaluated through a type-safe comparator system supporting six operators (==, !=, &lt;, &lt;=, &gt;, &gt;=) with compile-time operator verification via SFINAE — invalid comparisons are caught before the program runs. States register editor-exposed parameters through a macro-based field system, letting designers tune values without touching code. Runtime type queries via GetStateIDsOfType&lt;T&gt;() support dynamic state lookups across active machines, enabling complex inter-agent logic without tight coupling.</p>

      <h3>Blackboard</h3>
      <p>All AI data exchange flows through a template-based blackboard with compile-time type safety and zero runtime overhead. SetData&lt;T&gt;() and GetData&lt;T&gt;() enforce correct types at the call site, while TryGet&lt;T&gt;() returns a nullable pointer for safe conditional reads without exceptions. The blackboard handles primitives, enums, containers, pointers, and custom structs. A built-in PreviewToString() method surfaces live values in the ImGui editor overlay, making the full blackboard state instantly inspectable during play without stopping execution.</p>

      <div class="repo-card">
        <div class="repo-card-header">
          <h3>⚙️ Behavior Selection Structures</h3>
          <a href="https://github.com/FLuczak/FLuczakBehaviorSelectionStructures" target="_blank" rel="noopener" class="repo-card-link">View on GitHub ↗</a>
        </div>
        <p class="repo-card-desc">A slightly adjusted and stripped standalone version of the AI behavior framework. Implements Behavior Trees and Finite State Machines with a shared type-safe blackboard, JSON round-trip serialization, factory-pattern runtime instantiation by name, and ImGui-integrated live debugging.</p>
        <div class="repo-card-tags">
          <span class="repo-tag">C++</span>
          <span class="repo-tag">Behavior Trees</span>
          <span class="repo-tag">Finite State Machines</span>
          <span class="repo-tag">Game AI</span>
        </div>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin: 2rem 0;">
        <tr>
          <td style="width: 50%; padding: 0 1rem 0 0;">
            <img src="assets/Images/behavior trees.png" alt="Behavior Trees Editor" style="width: 100%; border: 1px solid var(--border);" />
            <p style="text-align: center; font-size: 0.9em; color: rgba(255,255,255,0.7); margin-top: 0.5rem;">Behavior Trees Editor</p>
          </td>
          <td style="width: 50%; padding: 0 0 0 1rem;">
            <img src="assets/Images/finite state machine.png" alt="Finite State Machine Editor" style="width: 100%; border: 1px solid var(--border);" />
            <p style="text-align: center; font-size: 0.9em; color: rgba(255,255,255,0.7); margin-top: 0.5rem;">Finite State Machine Editor</p>
          </td>
        </tr>
      </table>

      <p>The framework proved robust enough to drive animation state machines as well as gameplay logic in Owlet, with designers using the visual editors to wire up behavior without writing code.</p>

      <video controls width="566" height="313">
        <source src="assets/Videos/Animation editor.mp4" type="video/mp4">
      </video>

      <h2>Navigation System</h2>
      <p>The navigation system exposes a unified agent interface over two interchangeable backends. Game code accesses navigation through GridAgent structs containing radius, speed, height, goal position, and preferred velocity. Switching from grid to navmesh requires no changes to gameplay code, making the approach future-proof as level complexity grows.</p>

      <h3>Grid Pathfinding</h3>
      <p>The grid backend runs A* on a tile graph with selectable heuristics: Euclidean, Manhattan, or straight-line. Local separation avoidance activates within five agent radii, preventing clumping without requiring global collision resolution. Path recomputation is lazy and triggers only on goal changes, keeping per-frame overhead minimal. The grid backend was the primary system used in Owlet, where it sustained up to 10,000 simultaneous agents within frame budget.</p>

      <h3>Navmesh Pathfinding</h3>
      <p>The navmesh backend generates a triangle mesh from raw obstacle and floor polygons using Constrained Delaunay Triangulation (CDT). Obstacles are automatically inflated by agent radius before triangulation, guaranteeing collision-free corridors without manual authoring. A* runs on the resulting polygon-to-polygon adjacency graph, and a funnel algorithm (string pulling) then converts the raw waypoint sequence into smooth, direct routes. Navigation paths support continuous interpolation via FindPointOnPath(t), nearest-point queries, and offset-based sampling for multi-agent lane separation.</p>

      <div class="repo-card">
        <div class="repo-card-header">
          <h3>🧭 Navigation Library</h3>
          <a href="https://github.com/FLuczak/FluczakNavigation" target="_blank" rel="noopener" class="repo-card-link">View on GitHub ↗</a>
        </div>
        <p class="repo-card-desc">A slightly adjusted and stripped standalone C++ navigation library. Features Constrained Delaunay Triangulation mesh generation from obstacle polygons, A* pathfinding on the resulting graph, funnel algorithm path smoothing, agent radius inflation for collision-free corridors, and position sampling utilities.</p>
        <div class="repo-card-tags">
          <span class="repo-tag">C++</span>
          <span class="repo-tag">Pathfinding</span>
          <span class="repo-tag">Navmesh</span>
          <span class="repo-tag">CDT</span>
          <span class="repo-tag">A*</span>
        </div>
      </div>

      <img src="assets/Images/Grid.png"/>

      <h2>Core Engine Systems</h2>
      <p>Beyond the AI framework, I maintained and extended critical engine infrastructure:</p>
      <ul>
        <li>Added multicast delegates for event-driven gameplay, later extracted as the FLUCZAK Event Utility Library</li>
        <li>Modified the entt ECS framework to route messages and events for parallel computation across systems</li>
        <li>Contributed to the cereal-based serialization system covering entities, components, levels, and all AI structures</li>
        <li>Built gameplay tools including area tagging for scripted zones, BVH-accelerated physics queries, and a configurable order system for RTS command logic</li>
      </ul>

      <h2>CI/CD Pipeline</h2>
      <p>I established a full automated QA pipeline using GitHub Actions covering multi-platform build verification, unit test integration, automatic Clang formatting and linting, and artifact generation with automated itch.io deployment and Discord notifications on every merge to keep the whole team informed.</p>
    `
  },
  {
    id: "owlet",
    title: "Owlet",
    period: "2024",
    type: "University Project · RTS Game",
    thumb: "assets/thumbnails/owlet.jpg",
    shortDesc: "Real-time strategy game built in a custom C++ engine over 8 weeks by a team of 13. As tech lead and sole AI programmer, designed and shipped an AI framework sustaining up to 10,000 concurrent agents on a fixed-timestep parallel execution loop. Implemented all unit and enemy behaviors, resource and combat systems, and coordinated delivery across all programming disciplines.",
    tags: ["C++", "Pepi Engine", "AI Framework", "Gameplay Systems", "Tech team lead"],
    link: { label: "github", url: "https://github.com/FLuczak/Owlet" },
    body: `
      <iframe width="566" height="313" src="https://www.youtube.com/embed/dGsASNUbWmw" title="Owlet Trailer | Team Tiny Pepi | Pepi Engine" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <h2>Overview</h2>
      <p>Owlet is a real-time strategy game developed in Pepi Engine over 8 weeks by a team of 13, including 9 programmers. As tech lead and the sole AI programmer, I owned the complete AI behavior framework, all unit and enemy behaviors, core gameplay systems, and programming team coordination. The central technical challenge was building an AI architecture that could sustain RTS-scale agent counts in real time while staying designer-friendly enough for rapid iteration without programmer involvement.</p>

      <h2>AI at Scale: 10,000 Concurrent Agents</h2>
      <p>The entire gameplay of Owlet runs on the AI behavior framework built in Pepi Engine. Every unit and enemy is driven by a combination of Finite State Machines and Behavior Trees sharing a single type-safe blackboard. The architecture was designed specifically for the demands of an RTS, where agent counts can reach the thousands during wave-based combat.</p>

      <p>The AI system runs on a fixed timestep of 0.1 seconds, fully decoupled from the render loop. This keeps update costs predictable and eliminates jitter caused by frame rate variance. All agents execute in parallel within the ECS update loop. Once the AI pass completes, results synchronize through events and blackboard writes, ensuring no mid-frame data races. The tested upper bound for simultaneous agents was <strong>10,000</strong> without dropping below target frame rate.</p>

      <p>State transitions use the comparator system to evaluate conditions such as attack range, cooldown status, and threat proximity without branching code. Blackboard writes from gameplay events feed directly into transition evaluations, so AI state reacts to game changes within the same fixed-timestep frame they occur.</p>

      <img src="assets/Images/Owlet-tons-of-agents.png"/>

      <h2>Unit and Enemy Behaviors</h2>
      <p>All unit and enemy AI was implemented as custom states and actions within the framework. Notable implementations include:</p>
      <ul>
        <li><strong>RangedAttackState</strong>: Validates targets against blackboard data, manages attack cooldowns, spawns projectiles with visual and audio effects, and continuously recomputes navigation goals to maintain optimal range during active combat</li>
        <li><strong>AttackOrderEnemyAI</strong>: Assesses threats by finding the closest player unit or building, sets navigation goals dynamically, and triggers attack states when range conditions are satisfied</li>
        <li><strong>Idle and patrol states</strong>: Handle default behavior and movement between orders, with action index tracking to stagger AI decisions across frames and prevent synchronized update spikes</li>
        <li><strong>Animation synchronization</strong>: Blackboard values drive animation parameters directly, keeping visual state consistent with AI state with no extra coupling code between systems</li>
      </ul>

      <div class="repo-card">
        <div class="repo-card-header">
          <h3>⚙️ Behavior Selection Structures</h3>
          <a href="https://github.com/FLuczak/FLuczakBehaviorSelectionStructures" target="_blank" rel="noopener" class="repo-card-link">View on GitHub ↗</a>
        </div>
        <p class="repo-card-desc">A slightly adjusted and stripped standalone version of the AI behavior framework used in Owlet. Implements Behavior Trees and Finite State Machines with a shared type-safe blackboard, JSON round-trip serialization, factory-pattern instantiation by name, and ImGui-integrated live debugging.</p>
        <div class="repo-card-tags">
          <span class="repo-tag">C++</span>
          <span class="repo-tag">Behavior Trees</span>
          <span class="repo-tag">Finite State Machines</span>
          <span class="repo-tag">Game AI</span>
        </div>
      </div>

      <div class="repo-card">
        <div class="repo-card-header">
          <h3>🧭 Navigation Library</h3>
          <a href="https://github.com/FLuczak/FluczakNavigation" target="_blank" rel="noopener" class="repo-card-link">View on GitHub ↗</a>
        </div>
        <p class="repo-card-desc">A slightly adjusted and stripped standalone version of the navigation system used in Owlet. Features Constrained Delaunay Triangulation navmesh generation, A* pathfinding, funnel algorithm path smoothing, and agent radius inflation for collision-free corridors.</p>
        <div class="repo-card-tags">
          <span class="repo-tag">C++</span>
          <span class="repo-tag">Pathfinding</span>
          <span class="repo-tag">Navmesh</span>
          <span class="repo-tag">CDT</span>
          <span class="repo-tag">A*</span>
        </div>
      </div>

      <h2>Gameplay Systems</h2>
      <p>Working directly with the design team, I implemented the full gameplay feature set:</p>
      <ul>
        <li>All AI state behavior logic and decision-making for player units and enemy waves</li>
        <li>Gameplay stat system with modifiers, buffs, and debuffs driving combat balance</li>
        <li>Wave generation system with in-editor configuration for enemy type, count, and spawn timing</li>
        <li>Resource gathering and management feeding the construction and upgrade economy</li>
        <li>Player command and unit order system translating input into distributed AI goals across hundreds of agents</li>
      </ul>

      <img src="assets/Images/Owlet-combat.gif"/>

      <h2>Core Engine Maintenance</h2>
      <p>I kept critical engine systems stable throughout production: serialization, ECS, level editor, unit creator, and animation editor. This ensured the rest of the team always had reliable tool support without having to pause feature work for infrastructure issues.</p>

      <img src="assets/Images/Owlet-in-engine.png"/>

      <h2>CI/CD and Team Leadership</h2>
      <p>I set up and maintained the GitHub Actions pipeline with unit test integration, build verification, Clang Tidy analysis, automatic itch.io deployment on merge, and automatic code formatting. As programming lead, I assigned tasks, coordinated with the producer and other discipline leads, and confirmed every sprint's deliverables were technically feasible before commitment.</p>
    `
  },
  {
    id: "animal-shelter-simulator",
    title: "Animal Shelter Simulator",
    period: "2022 — 2023",
    type: "Multi-platform · Commercial",
    thumb: "assets/thumbnails/AnimalShelter1.jpg",
    shortDesc: "Commercial simulation game released on PC, Xbox One, PlayStation, Nintendo Switch, and SteamDeck. Rebuilt the AI system with a visual tool for designers, implemented gameplay mechanics, and developed technical documentation.",
    tags: ["Unity", "C#", "AI Systems", "Multi-platform", "Documentation"],
    link: { label: "steam", url: "https://store.steampowered.com/app/1239320/Animal_Shelter/" },
    body: `
      <iframe width="566" height="313" src="https://www.youtube.com/embed/SloUgzPK1v0" title="Animal Shelter - Official Release Trailer | STEAM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
      <h2>Overview</h2>
      <p>Animal Shelter Simulator is a commercial simulation game released across PC and multiple consoles (Xbox One, PlayStation, Nintendo Switch, SteamDeck). I joined as AI and gameplay programmer, quickly becoming the designated AI specialist while contributing broadly to gameplay systems and team infrastructure.</p>
      
      <h2>AI System Refactor</h2>
      <p>Upon joining, I refactored the core AI system to accommodate the growing team's content creation needs. I slimmed out the API and made it more robust, turning it into a proper finite state machine structure, allowing programmers to implement new AI behaviors quickly and easily. Later, I implemented a smart object system, allowing designers to quickly specify which interactions should pets enter and under which conditions while interacting with the objects. </p>
      
      <img src="assets/Images/Animal-shelter-screenshot.png"/>
      
      <h2>Gameplay Mechanics Implementation</h2>
      <p>Working from design documentation, I implemented diverse gameplay features:</p>
      <ul>
        <li>World interactions and environmental systems</li>
        <li>UI elements and their functionalities</li>
        <li>Horse riding mechanics (DLC content)</li>
        <li>Pet customization systems</li>
        <li>AI actions and behaviors</li>
        <li>Animal-to-animal interactions</li>
      </ul>
      
      <img src="assets/Images/Animal-shelter-photos.png"/>
      
      <img src="assets/Images/Shelter-interactions.png"/>
      
      <h2>Codebase Maintenance & Documentation</h2>
      <p>From day one, I maintained and improved existing gameplay systems while bug-fixing across multiple interconnected areas. The technical documentation I developed became critical for onboarding new programmers joining the team. This documentation covered system APIs, architectural patterns, proprietary tools, and style guides—directly enabling the team's growth and sustained development.</p>
      
      <img src="assets/Images/Shelter-building-system.png"/>
      
      <h2>QA & Diagnostics Infrastructure</h2>
      <p>I contributed to building QA infrastructure including a custom debugging console replacing text-based input (significantly improving non-technical testers' workflows), proprietary logging tools, and integration with Unity's cloud diagnostics for post-release metrics and improvements.</p>
    `
  },
  {
    id: "break-a-bot",
    title: "Break-A-Bot",
    period: "2024 — 2025",
    type: "PC / Steam · University Project",
    thumb: "assets/thumbnails/break-a-bot.png",
    shortDesc: "Top-down roguelike with procedurally generated levels. Built a modular, extensible level generation tool used by designers and artists with rule-based room stitching, implemented modular AI for distinct enemy types and boss encounters, and maintained gameplay systems across multiple iterations.",
    tags: ["Unreal Engine 5", "C++", "Procedural Generation", "AI Programming"],
    link: { label: "steam", url: "https://store.steampowered.com/app/3365860/BreakaBot/" },
    body: `
      <video controls width="566" height="313">
        <source src="assets/Videos/break-a-bot-trailer.mp4" type="video/mp4">
      </video>
      
      <h2>Overview</h2>
      <p>Break-A-Bot is a roguelike developed in Unreal Engine as a university project. As AI and gameplay programmer, I focused on creating systems that empowered designers and artists—particularly a complex level generation tool and modular AI framework supporting diverse enemy encounters.</p>
      
      <h2>Procedural Level Generation Architecture</h2>
      <p>I developed an architect-driven procedural level generation tool inspired by Returnal and Path of Exile 2. The system features a modular, pass-based design that enabled extensibility and maintainability:</p>
      <ul>
        <li><strong>Modular Generation Passes</strong> — Discrete C++ components with configurable priority ordering, each responsible for distinct generation features</li>
        <li><strong>Rule-Based Extensibility</strong> — Blueprint-scripted rule objects that define constraints for spawning rooms, props, and wall tiles, allowing designers to add new rules without coding</li>
        <li><strong>Room Template System</strong> — Reusable room components including Exit, Entrance, Bounds, Floor, and Prop Spawner components for fine-grained spatial control</li>
        <li><strong>Multi-floor Support</strong> — Full support for verticality and varied heights, enabling 3D level complexity</li>
        <li><strong>Collision & Overlap Management</strong> —  Bounding box controlling systems preventing invalid placements while maintaining design flexibility</li>
      </ul>
      
      <div class="repo-card">
        <div class="repo-card-header">
          <h3>📦 Unreal Dungeon Generator</h3>
          <a href="https://github.com/FLuczak/FluczakUnrealDungeonGenerator" target="_blank" rel="noopener" class="repo-card-link">View on GitHub ↗</a>
        </div>
        <p class="repo-card-desc">Standalone Unreal Engine plugin implementing architect-driven procedural level generation with modular pass-based architecture, rule-based room stitching, and multi-floor support.</p>
        <div class="repo-card-tags">
          <span class="repo-tag">Unreal Engine</span>
          <span class="repo-tag">C++</span>
          <span class="repo-tag">Procedural Generation</span>
          <span class="repo-tag">Plugin</span>
        </div>
      </div>

      <img src="assets/Images/Generated-levels.gif"/>
            
      <p>The tool stitches pre-designed rooms into complete levels, balancing game designer intent with procedural variation. Multi-floor layouts added spatial complexity. The source code is available on GitHub as a standalone Unreal plugin. The architecture demonstrated how procedural systems can remain flexible and designer-friendly through rule-based scripting.</p>
      
      <h2>Enemy Spawning Integration</h2>
      <p>I developed a flexible enemy spawning system that integrated with the level generation pipeline. Designers could define enemy compositions using data tables and spawner volumes, allowing carefully controlled encounter design within procedurally generated spaces.</p>
      
      <h2>Enemy AI Systems</h2>
      <p>I designed and implemented AI behaviors for standard enemies, elite variants, and the boss encounter. By pushing Unreal's Behavior Tree system with custom behaviors, decorators, and dynamic subtree replacement, I created varied and engaging combats that leveraged the engine's capabilities.</p>
      
      <img src="assets/Images/Simple-sword-enemy.gif"/>
      
      <video controls width="566" height="313">
        <source src="assets/Videos/Boss-fight.mp4" type="video/mp4">
      </video>      
      
      <h2>Gameplay Development & Maintenance</h2>
      <p>Over 6 months of development, I implemented new player mechanics (mines and hammer), maintained gameplay systems through active iteration, debugged interconnected systems, and handled localization and UI interactions.</p>
    `
  },
  {
    id: "smash-balls",
    title: "Smash Balls",
    period: "2023",
    type: "University Project · Arcade Game",
    thumb: "assets/thumbnails/smash-balls.jpg",
    shortDesc: "Fast-paced couch versus arcade game. Designed the game architecture, implemented gameplay mechanics in C++ and Blueprints, built a player progression system with persistent saves, and optimized performance for multi-device compatibility.",
    tags: ["Unreal Engine", "C++", "Blueprints", "Gameplay systems", "Performance Optimization"],
    link: { label: "itch.io", url: "https://vittoriobellinello.itch.io/team-moth" },
    body: `
      <video controls width="566" height="313">
        <source src="assets/Videos/Smash balls gameplay final game 4 players.mp4" type="video/mp4">
      </video>
      
      <h2>Overview</h2>
      <p>Smash Balls is a couch versus arcade game where players compete in fast-paced matches. As gameplay programmer, I took charge of architectural design, feature implementation, and performance optimization across diverse hardware.</p>
      
      <h2>Architecture Design</h2>
      <p>The project began with gathering feature requirements and identifying optimal technical solutions. I created visual dependency graphs showing class relationships and system interactions, identifying potential issues and resolving them before implementation. This architectural planning provided a solid foundation for rapid prototyping and team collaboration.</p>
      
      <img src="assets/Images/Smash-balls-screenshot.png"/>
      
      <h2>Gameplay Implementation</h2>
      <p>I implemented core gameplay mechanics collaboratively with the design team:</p>
      <ul>
        <li>Character state machines handling player logic and animation transitions</li>
        <li>Physics interactions for player movement and collision</li>
        <li>Circular bumper elements and arena mechanics</li>
        <li>HUD and end-of-game UI systems</li>
      </ul>
      
      <h2>Player Progression & Save System</h2>
      <p>I designed and implemented a robust player stats system that tracks and persists player progress across rounds. This included:</p>
      <ul>
        <li>Stat definitions using Unreal's data table system</li>
        <li>Persistent stat storage across multiple game sessions</li>
        <li>Save/load functionality integrated with the game instance</li>
        <li>End-of-game UI displaying achievement and stat progression</li>
        <li>Reward system based on performance metrics</li>
      </ul>
      
      <img src="assets/Images/Smash-balls-end-screen.png"/>
      
      <h2>Input Management & State Control</h2>
      <p>I developed input handling systems that managed player state transitions, preventing edge cases like getting stuck in animation states, and ensuring responsive controls throughout gameplay.</p>
      
      <h2>Performance Optimization</h2>
      <p>To ensure smooth gameplay across multiple devices, I regularly profiled and optimized both rendering and game logic. I contributed to profiling documentation and optimization guidelines, achieving consistently smooth performance even on lower-end hardware—critical for a couch game experience.</p>
          `
  },
  {
    id: "holo-knights-td",
    title: "Holo Knights TD",
    period: "2021",
    type: "Personal Project · AR Game",
    thumb: "assets/thumbnails/HoloKnights.png",
    shortDesc: "AR tower defense game for Microsoft HoloLens created during internship. Built procedurally generated maps, enemy and tower AI systems, UI, and AR controls in a passion project.",
    tags: ["Unity", "C#", "AR / Mixed Reality", "AI", "Procedural Generation"],
    link: { label: "github", url: null },
    body: `
      <iframe width="566" height="626" src="https://www.youtube.com/embed/CRAg9q6iLu8" title="Holoknights" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
      <h2>Introduction</h2>
      <p>Holo Knights is a tower defense game created as a solo project during my free time at my Apptimia internship. Having access to Microsoft HoloLens AR glasses sparked the idea to develop this experience. Holo Knights combines traditional tower defense mechanics with AR integration, featuring:</p>
      <ul>
        <li>Dynamic game auto-balancing systems</li>
        <li>Procedurally generated maps for unique gameplay every session</li>
        <li>Complex tower AI with multiple distinct behaviors per tower type</li>
        <li>Core tower defense mechanics: building placement, tower upgrades, currency gathering, and time manipulation</li>
      </ul>

      <src="assets/Images/Procedural.gif"/>

      <h2>Technical Implementation: Enemy Navigation & Pathfinding</h2>
      <p>I built a proprietary A* pathfinding system on a grid—a more suitable solution for this game than Unity's standard NavMesh package. This custom implementation provided several advantages:</p>
      <ul>
        <li><strong>Procedural Path Generation:</strong> The system generates paths by placing random waypoints between point A and point B, creating a unique traversal challenge each playthrough</li>
        <li><strong>Enemy Traversal:</strong> Enemies navigate along generated paths with precise movement, enabling the exact gameplay experience intended</li>
        <li><strong>Grid-Based Design:</strong> The grid-based approach offered better performance and control compared to NavMesh solutions for this AR context</li>
      </ul>
      
      <img src="assets/Images/holoknights-1.gif"/>

      <h2>Core Gameplay & HoloLens Integration</h2>
      <p>The core gameplay mechanics presented a unique challenge—instead of traditional mouse and keyboard controls, I implemented HoloLens hand detection for all player interactions. The satisfaction of placing objects within the AR level proved to be a compelling gameplay element.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Enemy Variety:</strong> Multiple enemy types traverse the level with distinct behaviors and stats</li>
        <li><strong>Tower Combat:</strong> Towers attack enemies with targeted logic and individual firing patterns</li>
        <li><strong>Currency & Progression:</strong> Players gather currency to place and upgrade towers</li>
        <li><strong>Time Controls:</strong> Ability to speed up or slow down gameplay</li>
        <li><strong>Billboard UI:</strong> Custom UI design that remains readable and doesn't clutter the viewport while enhancing immersion</li>
      </ul>

      <img src="assets/Images/holoknights-2.gif"/>

      <h3>Hand Detection & Input Design</h3>
      <p>Implementing HoloLens hand detection as the primary input method required careful design to ensure intuitive interaction. Placing towers and navigating the interface through gestures created a satisfying and immersive experience that leveraged the AR hardware's capabilities.</p>

      <h2>Lessons Learned</h2>
      <p>This project taught me valuable lessons in AR game design, custom pathfinding systems, and the importance of thoughtful UI/UX in immersive environments. The constraint of AR-only controls pushed me to think creatively about interaction design and player experience.</p>
    `
  },
  {
    title: "Visual Debugging Console for Unity",
    period: "2022",
    type: "Open Source Tool · Passion Project",
    thumb: "assets/thumbnails/VisualDebugConsole.jpg",
    shortDesc: "Custom QA debugging tool replacing text-based console with user-friendly interface. Features runtime variable monitoring, remote function calling, and 3D worldspace labels. Used by multiple commercial game teams.",
    tags: ["Unity", "C#", "Tools Programming"],
    link: { label: "github", url: "https://gitlab.com/darthkornik/visual-debug-console" }
  },
  {
    title: "FLUCZAK Event Utility Libraries",
    period: "2024",
    type: "Open Source Library · C++",
    thumb: "assets/thumbnails/delegates.png",
    shortDesc: "Reusable C++ utility library implementing multicast delegates, event systems, and signal buses. Designed for custom game engines and used across multiple personal and team projects.",
    tags: ["C++", "Architecture Patterns", "Libraries/Frameworks"],
    link: { label: "github", url: "https://github.com/FLuczak/FluczakSignalBus" }
  },
  {
    title: "Mobile Games — Frocco Games",
    period: "2022",
    type: "Mobile · Passion Projects",
    thumb: "assets/thumbnails/frocco-games.jpg",
    shortDesc: "Collection of mobile games created in free time. Designed gameplay architecture, implemented core mechanics, and integrated Google APIs including AdMob, Google Play Games, and Firebase for monetization and analytics.",
    tags: ["Unity", "C#", "Mobile", "Game Design", "Architecture"],
    link: { label: "google-play", url: "https://play.google.com/store/apps/dev?id=7936025786907934516&hl=en_AU" }
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// TAG CATEGORY MAPPING
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// CSS injected at runtime — keeps all thumbnail styles co-located with the JS
// ─────────────────────────────────────────────────────────────────────────────
(function injectThumbStyles() {
  const css = `
    .projects-list {
      display: grid !important;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.1rem;
      border-top: none !important;
    }

    .project-row {
      display: flex !important;
      flex-direction: column !important;
      padding: 0 !important;
      border: 1px solid var(--border);
      background: rgba(255,255,255,0.02);
      overflow: hidden;
      position: relative;
    }

    .row-thumb {
      width: 100%;
      aspect-ratio: 1 / 1;
      overflow: hidden;
      border-bottom: 1px solid var(--border);
      position: relative;
      background: #111;
    }

    .row-thumb img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
      transition: transform 0.4s ease;
      background-color: #111;
    }

    .project-row:hover .row-thumb img {
      transform: scale(1.04);
    }

    .row-content {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      padding: 0.9rem 0.95rem 1rem;
      flex: 1;
    }

    .row-topline {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0.85rem;
    }

    .row-copy {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      flex: 1;
    }

    .row-index {
      padding-top: 0 !important;
      min-width: 2rem;
      line-height: 1;
      margin-bottom: 0.5rem;
    }

    .row-arrow {
      opacity: 0.7;
      transform: none;
      padding-top: 0 !important;
      flex-shrink: 0;
    }

    .project-row:hover .row-arrow {
      opacity: 1;
      transform: translateX(3px);
    }

    .row-meta,
    .row-title {
      margin-bottom: 0 !important;
    }

    .row-desc {
      max-width: none !important;
      min-height: 4.3rem;
      margin: 0;
    }

    .row-tags {
      margin-top: 0 !important;
      align-items: flex-start;
    }

    .row-thumb-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 4px,
        rgba(255,255,255,0.025) 4px,
        rgba(255,255,255,0.025) 8px
      );
    }

    .row-thumb-placeholder span {
      font-family: var(--mono);
      font-size: 0.55rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.12);
    }

    .project-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 0.8rem;
      margin-top: auto;
      border: 1px solid currentColor;
      border-radius: 2px;
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 0.05em;
      text-transform: capitalize;
      text-decoration: none;
      transition: all 0.3s ease;
      color: rgba(255,255,255,0.6);
      align-self: flex-start;
    }

    .project-link:hover {
      color: rgba(255,255,255,1);
      background: rgba(255,255,255,0.05);
      border-color: rgba(255,255,255,1);
    }

    .project-link.steam {
      --link-color: #1b9dff;
      color: var(--link-color);
      border-color: var(--link-color);
    }

    .project-link.steam:hover {
      color: #fff;
      border-color: #fff;
      background: rgba(27, 157, 255, 0.1);
    }

    .project-link.github {
      --link-color: #e8e8e8;
      color: var(--link-color);
      border-color: var(--link-color);
    }

    .project-link.github:hover {
      background: rgba(232, 232, 232, 0.08);
    }

    .project-link.itch-io {
      --link-color: #fa5c5c;
      color: var(--link-color);
      border-color: var(--link-color);
    }

    .project-link.itch-io:hover {
      color: #fff;
      border-color: #fff;
      background: rgba(250, 92, 92, 0.1);
    }

    .project-link.web {
      --link-color: #7fb3ff;
      color: var(--link-color);
      border-color: var(--link-color);
    }

    .project-link.web:hover {
      color: #fff;
      border-color: #fff;
      background: rgba(127, 179, 255, 0.1);
    }

    .project-link.google-play {
      --link-color: #34a853;
      color: var(--link-color);
      border-color: var(--link-color);
    }

    .project-link.google-play:hover {
      color: #fff;
      border-color: #fff;
      background: rgba(52, 168, 83, 0.1);
    }

    .project-link::before {
      content: attr(data-icon);
      font-size: 1em;
    }

    .page-link {
      margin: 1.5rem 0 2rem 0;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border);
    }

    .tag { border: none !important; font-weight: 400 !important; }

    .tag[data-cat="engine"]   { background: rgba(120,180,255,0.12); color: #7ab4ff; }
    .tag[data-cat="language"] { background: rgba(180,255,160,0.10); color: #9de87a; }
    .tag[data-cat="tool"]     { background: rgba(255,200,100,0.10); color: #f0bc55; }
    .tag[data-cat="platform"] { background: rgba(200,140,255,0.10); color: #c47fff; }
    .tag[data-cat="concept"]  { background: rgba(255,130,110,0.10); color: #ff8a72; }
    .tag[data-cat="default"]  { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.5); }

    @media (max-width: 1380px) {
      .projects-list {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 1080px) {
      .projects-list {
        grid-template-columns: minmax(0, 1fr);
      }
    }

    @media (max-width: 768px) {
      .projects-list {
        grid-template-columns: minmax(0, 1fr);
        gap: 1rem;
      }

      .project-row {
        display: grid !important;
      }

      .row-thumb {
        width: 100% !important;
        aspect-ratio: 1 / 1 !important;
        margin-bottom: 0;
        padding: 0.65rem;
      }

      .row-content {
        padding: 1rem;
      }

      .row-topline {
        gap: 0.75rem;
      }

      .row-arrow { display: none; }

      .row-desc {
        min-height: 0;
      }
    }
  `;
  const el = document.createElement('style');
  el.textContent = css;
  document.head.appendChild(el);
})();

// ─────────────────────────────────────────────────────────────────────────────
// RENDER
// ─────────────────────────────────────────────────────────────────────────────
function renderSkills() {
  document.getElementById('skills-grid').innerHTML =
    SKILLS.map(skill => `
      <article class="skill-card" tabindex="0">
        <div class="skill-card-head">
          <div>
            <p class="skill-name">${skill.name}</p>
            <p class="skill-group">${skill.group}</p>
          </div>
          <div class="skill-detail">
            <span class="skill-exp">${skill.experience}</span>
            <div class="skill-tooltip" role="tooltip">
              <p class="skill-tooltip-text">${skill.description}</p>
            </div>
          </div>
        </div>
      </article>`).join('');
}

function renderSocials() {
  document.getElementById('socials-list').innerHTML =
    SOCIALS.map(s => `
      <a class="social-link" href="${s.url}" target="_blank" rel="noopener">
        <span>${s.handle}</span>
        <span class="social-platform">${s.platform}</span>
      </a>`).join('');
}

function thumbHTML(p) {
  if (p.thumb) {
    return `
      <div class="row-thumb">
        <img src="${p.thumb}" alt="${p.title}" loading="lazy" />
      </div>`;
  }
  return `
    <div class="row-thumb">
      <div class="row-thumb-placeholder">
        <span>no image</span>
      </div>
    </div>`;
}

// ── Tag color categories ──────────────────────────────────────────────────────
// Map keywords → category. Add more entries freely.
const TAG_CATEGORIES = {
  // Engines
  "unreal engine 5": "engine", "unreal engine 4": "engine", "unreal engine": "engine",
  "unity": "engine", "godot": "engine", "pepi engine": "engine",
  // Languages
  "c++": "language", "c#": "language", "python": "language",
  "glsl": "language", "hlsl": "language", "blueprints": "language",
  "rust": "language",
  // Tools & middleware
  "fmod": "tool", "wwise": "tool", "git": "tool", "perforce": "tool",
  "opengl": "tool", "vulkan": "tool", "dx12": "tool",
  "steam sdk": "tool", "dots": "tool", "ecs": "tool",
  "tools programming": "tool", "engine development": "tool", "ci/cd": "tool",
  "level design tools": "tool", "documentation": "tool", "ai programming": "tool", "gameplay systems": "tool",
  "animation programming": "tool", "animation systems": "tool", "architecture patterns": "tool", "libraries/frameworks": "tool",
  // Platforms
  "pc": "platform", "pc / steam": "platform", "pc / steamdeck · commercial": "platform",
  "mobile": "platform", "ios & android": "platform", "ios": "platform", "android": "platform",
  "console": "platform", "open source": "platform", "multi-platform": "platform", "cross-platform": "platform",
  "ar / mixed reality": "platform", "ar game": "platform", "vr development": "platform",
  // Concepts / disciplines
  "procedural gen": "concept", "procedural": "concept", "procedural generation": "concept",
  "multiplayer": "concept", "multiplayer / netcode": "concept", "netcode": "concept", "replication": "concept",
  "physics systems": "concept", "ai / bt": "concept", "ai systems": "concept", "ai": "concept",
  "ai framework": "concept", "game design": "concept", "tech team lead": "concept",
  "architecture": "concept", "architecture design": "concept", "pbr": "concept", "ssao": "concept", "optimization": "concept",
  "72hr jam": "concept", "live ops": "concept", "performance optimization": "concept"
};

const TAG_CATEGORY_ORDER = {
  engine: 0,
  language: 1,
  tool: 2,
  platform: 3,
  concept: 4,
  default: 5,
};

function tagCat(label) {
  return TAG_CATEGORIES[label.toLowerCase()] || "default";
}

function tagsHTML(tags) {
  return [...tags]
    .sort((left, right) => {
      const leftCategory = tagCat(left);
      const rightCategory = tagCat(right);
      const categoryDiff = TAG_CATEGORY_ORDER[leftCategory] - TAG_CATEGORY_ORDER[rightCategory];
      return categoryDiff !== 0 ? categoryDiff : left.localeCompare(right);
    })
    .map(tag => `<span class="tag" data-cat="${tagCat(tag)}">${tag}</span>`)
    .join('');
}

function linkHTML(link) {
  if (!link || !link.url) return '';
  const icons = {
    steam: '🎮',
    github: '⚙️',
    'itch.io': '🎨',
    web: '🌐',
    'google-play': '▶️'
  };
  const labelClass = link.label === 'itch.io' ? 'itch-io' : link.label.replace(/[.]/g, '-');
  return `<a class="project-link ${labelClass}" href="${link.url}" target="_blank" rel="noopener" data-icon="${icons[link.label] || ''}">${link.label}</a>`;
}

function renderProjects() {
  document.getElementById('projects-list').innerHTML =
    PROJECTS.map((p, i) => {
      const isClickable = p.id && p.body;
      return `
      <div class="project-row reveal" ${isClickable ? `onclick="showProject('${p.id}')"` : ''}>
        ${thumbHTML(p)}
        <div class="row-content">
          <div class="row-topline">
            <div class="row-copy">
              <span class="row-index">${String(i + 1).padStart(2, '0')}</span>
              <h3 class="row-title">${p.title}</h3>
              <p class="row-meta">${p.period} · ${p.type}</p>
            </div>
            ${isClickable ? '<span class="row-arrow">open ↗</span>' : ''}
          </div>
          <p class="row-desc">${p.shortDesc}</p>
          <div class="row-tags">${tagsHTML(p.tags)}</div>
          ${linkHTML(p.link)}
        </div>
      </div>`;
    }).join('');
}

// ─────────────────────────────────────────────────────────────────────────────
// ROUTING
// ─────────────────────────────────────────────────────────────────────────────
function toggleNavMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('active');
}

function showHome(skipPushState = false) {
  document.getElementById('view-home').classList.add('active');
  document.getElementById('view-project').classList.remove('active');
  document.getElementById('view-cv').classList.remove('active');
  window.scrollTo({ top: 0 });
  if (!skipPushState) {
    window.history.pushState({ page: 'home' }, 'Home', window.location.pathname);
  }
  setTimeout(observeReveal, 50);
}

function showHomeAndScrollToProjects() {
  showHome();
  setTimeout(() => {
    document.getElementById('projects').scrollIntoView({behavior:'smooth'});
    toggleNavMenu();
  }, 100);
}

function showProject(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  
  // Replace IMAGE comments with media container placeholders
  let bodyWithMedia = p.body.replace(/<!-- IMAGE: (.+?) -->/g, (match, description) => {
    return `
    <div class="media-container">
      <div class="media-placeholder">
        <div class="media-placeholder-title">Image / Video</div>
        <div class="media-placeholder-desc">${description}</div>
      </div>
      <div class="media-label">${description}</div>
    </div>`;
  });

  // Remove fixed media sizing while preserving iframe aspect ratio when it is provided.
  bodyWithMedia = bodyWithMedia.replace(/<(video|iframe)\b([^>]*)>/g, (match, tagName, rawAttributes) => {
    const widthMatch = rawAttributes.match(/\swidth=["']?(\d+)["']?/i);
    const heightMatch = rawAttributes.match(/\sheight=["']?(\d+)["']?/i);
    let attributes = rawAttributes
      .replace(/\swidth=["']?\d+["']?/gi, '')
      .replace(/\sheight=["']?\d+["']?/gi, '');

    if (tagName.toLowerCase() === 'iframe' && widthMatch && heightMatch) {
      const embedRatio = `${widthMatch[1]} / ${heightMatch[1]}`;
      if (/\sstyle=(['"])(.*?)\1/i.test(attributes)) {
        attributes = attributes.replace(/\sstyle=(['"])(.*?)\1/i, (styleMatch, quote, styleValue) => {
          const suffix = styleValue.trim().endsWith(';') || styleValue.trim() === '' ? '' : ';';
          return ` style=${quote}${styleValue}${suffix} --embed-ratio: ${embedRatio};${quote}`;
        });
      } else {
        attributes += ` style="--embed-ratio: ${embedRatio};"`;
      }
    }

    return `<${tagName}${attributes}>`;
  });
  
  document.getElementById('project-page-content').innerHTML = `
    <div class="project-page">
      <button class="page-back" onclick="showHome()">← back</button>
      
      <div class="page-content">
        <p class="page-label">${p.type}</p>
        <h1 class="page-title">${p.title}</h1>
        <div class="page-meta">
          <div>
            <p class="meta-label">Period</p>
            <p class="meta-value">${p.period}</p>
          </div>
          <div>
            <p class="meta-label">Platform</p>
            <p class="meta-value">${p.type}</p>
          </div>
          <div>
            <div class="meta-tags">${tagsHTML(p.tags)}</div>
          </div>
        </div>
        ${linkHTML(p.link) ? `<div class="page-link">${linkHTML(p.link)}</div>` : ''}
        <div class="page-body">${bodyWithMedia}</div>
      </div>
    </div>`;
  document.getElementById('view-home').classList.remove('active');
  document.getElementById('view-project').classList.add('active');
  window.history.pushState({ page: 'project', id: id }, p.title, `#project/${id}`);
  window.scrollTo({ top: 0 });
}

function showCV() {
  document.getElementById('cv-page-content').innerHTML = `
    <div class="cv-page">
      <button class="page-back" onclick="showHome()">← back</button>
      
      <div class="page-content cv-content">
        <h1 class="cv-title">Franciszek Łuczak</h1>
        <p class="cv-subtitle">Game Programmer | AI & Gameplay Systems</p>
        
        <div class="cv-contact">
          <span>franek.luczak.02@gmail.com</span>
          <span>Nijmegen, Netherlands</span>
        </div>

        <section class="cv-section">
          <h2>Professional Summary</h2>
          <p>Gameplay and AI programmer with a track record of shipping commercial titles across PC, console, SteamDeck, mobile, and VR/AR platforms. Specialized in designing and implementing complex AI systems, gameplay architectures, and networked game systems. Proficient in both C++ (custom engines, Unreal Engine) and C# (Unity), with proven ability to collaborate effectively in fast-paced development environments. Strong background in technical architecture, visual scripting tools, procedural systems, and cross-platform optimization. Currently seeking C++ roles focused on gameplay and AI programming.</p>
        </section>

        <section class="cv-section">
          <h2>Work Experience</h2>
          
          <div class="cv-entry">
            <div class="cv-entry-header">
              <h3>Programming Intern (C++ & Unreal Engine)</h3>
              <span class="cv-date">September 2025 — Present</span>
            </div>
            <p class="cv-company">Vertigo Games</p>
            <ul class="cv-responsibilities">
              <li>Refactored and extended a world state management system with a universal query evaluator and custom serialization for backwards-compatible migration without disrupting designer workflows</li>
              <li>Implemented new HTN tasks and decorators integrating with the world state system, enabling designers to author complex state-dependent AI behaviors via data assets without programmer involvement</li>
              <li>Built procedural character animation using Unreal control rigs: inverse kinematics systems, dynamic aim point calculation, and integration with damage and hit-detection systems</li>
              <li>Designed AI combat behaviors including defensive position protection, environment-aware navigation with slot reservation, flanking logic, and AI token-based action scheduling across multiple agents</li>
              <li>Profiled and optimized performance-critical AI and navigation paths for VR latency constraints</li>
            </ul>
          </div>

          <div class="cv-entry">
            <div class="cv-entry-header">
              <h3>Game Programmer (C# & Unity)</h3>
              <span class="cv-date">March 2024 — August 2025</span>
            </div>
            <p class="cv-company">Dream Parable</p>
            <ul class="cv-responsibilities">
              <li>Architected the core game codebase during pre-production, establishing system dependencies, API contracts, and design patterns to support rapid team scaling</li>
              <li>Designed and implemented all animal AI systems: custom navigation and locomotion atop Recast/A* navmesh, physics-based flocking and local avoidance, a utility AI framework with custom considerations and tasks, whisker obstacle detection, and leash-following logic for pets walking alongside handlers</li>
              <li>Developed animation systems leveraging behavior-driven parameters, animation layering, blending, and procedural IK for responsive character animation</li>
              <li>Created specialized tools and mini-editors for the level design, QA, and systems design teams to accelerate iteration workflows</li>
              <li>Engineered multiplayer synchronization systems with client/server authority management, state replication, and conflict resolution for interconnected game systems</li>
              <li>Profiled and optimized performance across PC and SteamDeck platforms, ensuring consistent responsiveness across different hardware specifications</li>
            </ul>
          </div>

          <div class="cv-entry">
            <div class="cv-entry-header">
              <h3>Junior Game Programmer (C# & Unity)</h3>
              <span class="cv-date">March 2022 — March 2023</span>
            </div>
            <p class="cv-company">Dream Parable</p>
            <ul class="cv-responsibilities">
              <li>Refactored core AI system architecture to support scaling the design team and enabling faster content iteration</li>
              <li>Developed a visual finite state machine tool allowing designers to define AI logic without writing code, significantly improving team autonomy</li>
              <li>Implemented diverse gameplay mechanics and AI functionalities based on design specifications</li>
              <li>Maintained codebase health through continuous bug fixing and system improvements across interconnected gameplay systems</li>
              <li>Built QA tools to streamline testing workflows for non-technical team members</li>
            </ul>
          </div>

          <div class="cv-entry">
            <div class="cv-entry-header">
              <h3>Intern Software Developer</h3>
              <span class="cv-date">July 2021 — September 2021</span>
            </div>
            <p class="cv-company">apptimia · Szczecin, Poland</p>
            <ul class="cv-responsibilities">
              <li>Developed software for multiple AR platforms including Microsoft HoloLens and Lenovo Think Reality, gaining practical experience with emerging technologies</li>
              <li>Significantly strengthened Unity3D and C# programming fundamentals through hands-on development on constraint-based AR systems</li>
              <li>Acquired comprehensive knowledge of augmented reality development including platform-specific SDKs, tools, and best practices</li>
              <li>Developed proficiency with version control workflows and learned SCRUM-based development methodology in a professional team environment</li>
            </ul>
          </div>
        </section>

        <section class="cv-section">
          <h2>Education</h2>
          
          <div class="cv-entry">
            <div class="cv-entry-header">
              <h3>Bachelor of Applied Science — Creative Media and Game Technologies</h3>
              <span class="cv-date">2022 — 2026</span>
            </div>
            <p class="cv-company">Breda University of Applied Sciences</p>
            <p>Game programming track specialized in AI systems, gameplay architecture, and custom engine development. Coursework focused on advanced AI techniques (Behavior Trees, HTNs, visual scripting), real-time systems optimization, and technical architecture design patterns.</p>
          </div>
        </section>

        <section class="cv-section">
          <h2>Technical Skills</h2>
          
          <div class="cv-skills-grid">
            <div class="cv-skill-category">
              <h4>Programming Languages</h4>
              <p>C++ (primary), C#, Python, TypeScript</p>
            </div>
            <div class="cv-skill-category">
              <h4>Game Engines</h4>
              <p>Unreal Engine 5, Unity, Custom C++ Engines</p>
            </div>
            <div class="cv-skill-category">
              <h4>AI & Gameplay Systems</h4>
              <p>Behavior Trees, Finite State Machines, Hierarchical Task Networks, Pathfinding & Navigation, ECS Architecture, Gameplay State Management</p>
            </div>
            <div class="cv-skill-category">
              <h4>Advanced Systems</h4>
              <p>Multiplayer/Netcode & Replication, Animation Systems, Physics Integration, Procedural Generation, Visual Scripting Tools</p>
            </div>
            <div class="cv-skill-category">
              <h4>Development Practices</h4>
              <p>Git, Perforce, GitHub Actions, CI/CD Pipeline Design, Technical Documentation, Profiling & Optimization, SCRUM Methodology</p>
            </div>
            <div class="cv-skill-category">
              <h4>Platforms & Specializations</h4>
              <p>PC, Console (Xbox One, PlayStation, Nintendo Switch), SteamDeck, Mobile (iOS/Android), VR/AR, Cross-platform Optimization</p>
            </div>
          </div>
        </section>

        <section class="cv-section">
          <h2>Languages</h2>
          <div class="cv-languages">
            <div class="cv-language">
              <h4>Polish</h4>
              <p>Native</p>
            </div>
            <div class="cv-language">
              <h4>English</h4>
              <p>C1 Level (8.0 IELTS)</p>
            </div>
            <div class="cv-language">
              <h4>Spanish</h4>
              <p>A2 Level</p>
            </div>
            <div class="cv-language">
              <h4>Dutch</h4>
              <p>A1 Level</p>
            </div>
          </div>
        </section>

        <section class="cv-section">
          <h2>Notable Projects</h2>

          <div class="cv-project">
            <h3>Animal Shelter Simulator 2 <span class="cv-subtitle-small">— PC / SteamDeck · Commercial · Dream Parable · 2024–2025</span></h3>
            <p>Sole AI programmer and co-architect on a commercial simulation title. Designed and implemented all animal AI: custom navigation atop Recast/A* with physics-based flocking, whisker avoidance, and leash-following locomotion; a utility AI framework with custom considerations and tasks; 40+ behavior-driven interaction animations with procedural IK layering. Engineered multiplayer synchronization across AI, economy, and item interaction systems. Sustained 20+ agents in dense scenes via per-agent LODs, area throttling, and cluster-based path optimization.</p>
          </div>

          <div class="cv-project">
            <h3>Pepi Engine &amp; Owlet <span class="cv-subtitle-small">— Custom C++ Engine · University · 2024</span></h3>
            <p>Built a custom C++ game engine in 8 weeks (team of 8). Designed the AI framework with Behavior Trees and Finite State Machines sharing a type-safe blackboard with JSON round-trip serialization and ImGui live debugging. Built navmesh generation via Constrained Delaunay Triangulation with funnel smoothing. As tech lead on Owlet, drove the AI system to sustain <strong>10,000 concurrent agents</strong> on a fixed-timestep parallel update loop. Established the full CI/CD pipeline with multi-platform build verification, Clang formatting, and automated itch.io deployment.</p>
          </div>

          <div class="cv-project">
            <h3>Break-A-Bot <span class="cv-subtitle-small">— Unreal Engine 5 · University · 2024–2025</span></h3>
            <p>AI and gameplay programmer on a roguelike shipping on Steam. Architected a pass-based procedural level generation system with Blueprint-scripted rule objects for room stitching — fully usable by designers without code. Implemented enemy AI using Unreal Behavior Trees with custom tasks, decorators, and dynamic subtree replacement for standard enemies, elite variants, and boss encounters.</p>
          </div>

          <div class="cv-project">
            <h3>Animal Shelter Simulator <span class="cv-subtitle-small">— PC / Xbox One / PlayStation / Nintendo Switch / SteamDeck · Commercial · Dream Parable · 2022–2023</span></h3>
            <p>Refactored the core AI system into a robust FSM architecture and built a visual smart object tool enabling designers to define pet interactions and conditions without writing code. Implemented gameplay features including horse riding DLC mechanics, pet customisation, and animal-to-animal interactions. Shipped across five platforms.</p>
          </div>

          <div class="cv-project">
            <h3>Visual Debugging Console for Unity <span class="cv-subtitle-small">— Open Source · 2022</span></h3>
            <p>Custom QA tool replacing Unity's text console with a user-friendly GUI featuring runtime variable monitoring, remote function invocation, and 3D worldspace labels. Adopted by multiple commercial game studios to accelerate non-technical tester workflows.</p>
          </div>

          <div class="cv-project">
            <h3>FLUCZAK Event Utility Libraries <span class="cv-subtitle-small">— Open Source C++ · 2024</span></h3>
            <p>Reusable C++ multicast delegate and signal bus library used across custom engine and university projects. Designed for zero-overhead type-safe event dispatch in game engine contexts.</p>
          </div>
        </section>
      </div>
    </div>`;
  document.getElementById('view-home').classList.remove('active');
  document.getElementById('view-project').classList.remove('active');
  document.getElementById('view-cv').classList.add('active');
  window.history.pushState({ page: 'cv' }, 'CV', '#cv');
  window.scrollTo({ top: 0 });
}
function observeReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting)
        setTimeout(() => e.target.classList.add('visible'), i * 50);
    });
  }, { threshold: 0.04 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ─────────────────────────────────────────────────────────────────────────────
// BROWSER HISTORY HANDLER
// ─────────────────────────────────────────────────────────────────────────────
window.addEventListener('popstate', (event) => {
  if (event.state) {
    if (event.state.page === 'home') {
      showHome(true);
    } else if (event.state.page === 'project' && event.state.id) {
      showProject(event.state.id);
    } else if (event.state.page === 'cv') {
      showCV();
    }
  } else {
    // If no state, go back to home
    showHome(true);
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────────────────────
renderSkills();
renderSocials();
renderProjects();
setTimeout(observeReveal, 100);
window.history.replaceState({ page: 'home' }, 'Home', window.location.pathname);