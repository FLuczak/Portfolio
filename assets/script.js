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
// THUMBNAILS
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
  "Unreal Engine 5",        "Unity", 
   "Custom Engines",'C#',
  "C++",           "Blueprints",
  "Behavior Trees", "HTNs",
  "Gameplay Systems programming",
   "Tools programming",
  "Animation programming",
          "Multiplayer / netcode",
  "Navigation and locomotion", 
  "Typescript", "Perforce","Git",
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
    thumb: null,
    shortDesc: "Internship at an established VR development studio working on advanced gameplay and AI systems. Architected and refactored core state management systems, designed hierarchical task network extensions, implemented character control mechanisms with procedural animation, and optimized performance-critical gameplay code for VR constraints.",
    tags: ["Unreal Engine 5", "C++", "AI Programming", "VR Development", "Animation Systems", "Architecture Design", "Performance Optimization"],
    body: `
      <h2>Overview</h2>
      <p>This internship provided hands-on experience with advanced VR gameplay and AI systems at a professional development studio. Over the course of the internship, I contributed to multiple interconnected systems while learning industry practices for collaborative development, code architecture, and performance optimization under hardware constraints.</p>
      
      <h2>State Management Systems</h2>
      <p>A significant portion of early work involved analyzing, refactoring, and extending the core world state system—an event-driven architecture that tracks the state of interactive objects, environmental triggers, and gameplay-critical conditions. I designed a universal query system for evaluating complex state conditions, implementing a hierarchical approach similar to existing tag-based systems in the engine but tailored for the specific needs of gameplay and AI logic.</p>
      
      <p>The refactoring included implementing custom struct serialization to provide backwards compatibility with legacy state evaluation approaches, allowing for a smooth migration path without requiring UI-level editor code. This demonstrated how careful architectural decisions can reduce implementation complexity and minimize disruption to designer workflows.</p>
      
      <h2>Hierarchical Task Network (HTN) Extensions</h2>
      <p>Building on the foundation of the project's HTN system, I implemented new HTN tasks and decorators that interface with the world state system. This involved deep dives into the existing HTN implementation to understand task lifecycle, parameter passing, and plan asset configuration. I extended the system with new primitives that enable designers to construct complex, state-dependent AI behaviors without requiring additional programmer implementation.</p>
      
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
      
      <p>This work required understanding AI token systems for distributing limited computational resources across many agents, ensuring responsive AI even under performance constraints.</p>
      
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
    thumb: "assets/Thumbnails/animal-shelter-2.jpg",
    shortDesc: "Commercial simulation game shipping on PC and SteamDeck. Architected the networked codebase, implemented all animal AI systems (navigation, locomotion, behavior, interactions), built sophisticated animation and procedural systems bringing animals to life, and maintained production code quality across 6+ months of active development.",
    tags: ["Unity", "C#", "AI Programming", "Gameplay Systems", "Animation Programming", "Multiplayer / Netcode", "Tools Programming", "Cross-platform"],
    link: { label: "steam", url: "https://store.steampowered.com/app/2658510/Animal_Shelter_2/" },
    body: `
      <iframe width="566" height="313" src="https://www.youtube.com/embed/UGSBsh4RQWo" title="Animal Shelter 2 - Release Trailer | STEAM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <h2>Overview</h2>
      <p>Animal Shelter Simulator 2 is a commercial simulation game released on PC and SteamDeck. I joined as a generalist programmer, taking a central role in architecture design and the implementation of all animal AI systems that power the core gameplay, as well as implementing gameplay systems and tools facilitating workflows of other developers.</p>
      
      <h2>Architecture & AI Systems</h2>
      <p>In the pre-production phase, I worked closely with the programming team to design the architectural foundation of the game, establishing system dependencies, API endpoints, and feature interactions using UML diagrams. This planning proved invaluable for scaling the codebase as the team grew.</p>
      
      <p>One of my primary responsibilities was implementing custom navigation and locomotion systems. I developed wrapper solutions over existing nav mesh implementations (Recast and A*) with custom components tailored to gameplay. The real challenge lay in creating locomotion beyond simple A-to-B pathfinding—animals needed to move naturally, responding to game events like interacting with objects. I built physics-based local avoidance, flocking behaviors for multiple NPCs, and custom logic for pets walking on leashes alongside handlers. Managing multiple large navigation graphs with dynamic obstacles and priority-based rebaking required careful optimization.</p>
      
      <img src="assets/Images/Shelter-open-day.png"/>

      <p> During the key moments of the game (such as shelter open day) there could be up to 20 agents in the same space, this introduced a challenge of creating flocking behaviors, so that the NPCs could properly react to other agents and pets in their vicinity </p>
      
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
    shortDesc: "Custom game engine built with a team of 8 over 8 weeks featuring custom rendering, robust level editor, and visual AI scripting. Implemented AI framework with visual scripting, maintained core engine systems, and established CI/CD pipelines.",
    tags: ["C++", "Engine Development", "AI Framework", "CI/CD", "ECS", "Tools Programming"],
    link: { label: "github", url: "https://github.com/FLuczak/Owlet" },
    body: `
      <h2>Overview</h2>
      <p>Pepi Engine is a game engine created by 8 programming students in just 8 weeks, designed to make real-time strategy (RTS) game development accessible. The engine featured a custom rendering pipeline, visual level editor, procedural tools, robust entity-component-system (ECS) architecture, advanced navigation systems, and comprehensive serialization.</p>
      
      <video controls width="566" height="313">
        <source src="assets/Videos/In editor work.mp4" type="video/mp4">
        </video>
      <h2>AI Visual Scripting Framework</h2>
      <p>I designed and implemented the core AI framework that allowed designers to define behaviors through both Finite State Machines (FSMs) and Behavior Trees (BTs) without writing code. Key features included:</p>
      <ul>
        <li><strong>Programmatic behavior definition</strong> with exposed parameters for dynamic prototyping and rapid iteration by designers</li>
        <li><strong>Blackboard system</strong> storing all data types available to AI, with debug functionality to preview values in real-time</li>
        <li><strong>Visual editors</strong> for both FSMs and BTs allowing intuitive logical flow definition with serialization support</li>
        <li><strong>Visual debugging</strong> indicating current states and behavior status during gameplay</li>
      </ul>
      
            <video controls width="566" height="313">
        <source src="assets/Videos/Animation editor.mp4" type="video/mp4">
        </video>
      
      <p>This framework became the backbone for all gameplay functionality in Owlet (see separate project), proving robust enough to even implement animation systems using only state machines.</p>
      
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

      <h2>Core Engine Systems</h2>
      <p>Beyond the AI framework, I maintained and enhanced critical engine features:</p>
      <ul>
        <li>Added multicast delegates for event-driven gameplay</li>
        <li>Modified the ECS framework (entt) to handle messages and events for parallel computation</li>
        <li>Contributed to the serialization system (utilizing cereal library) for robust serialization of entities, components, levels, and AI structures</li>
        <li>Created gameplay tools including area tagging for scripted zones, performant physics using BVH optimization, and a customizable order system for RTS mechanics</li>
      </ul>
      
      <h2>Navigation & Locomotion</h2>
      <p>I implemented a navigation system supporting performant parallelized pathfinding on both grids and nav meshes for up to 5,000 agents. The system featured path smoothing and funnel algorithm tracing. The grid-based approach used for Owlet could seamlessly switch to nav mesh with minimal adjustments.</p>
      
      <img src="assets/Images/Grid.png"/>
      
      <h2>CI/CD Pipeline</h2>
      <p>Single-handedly, I established a comprehensive QA pipeline using GitHub Actions including build checks across platforms, unit test integration, automatic formatting and linting, and automated build artifact generation for itch.io deployment with Discord notifications for team coordination.</p>
    `
  },
  {
    id: "owlet",
    title: "Owlet",
    period: "2024",
    type: "University Project · RTS Game",
    thumb: "assets/thumbnails/owlet.jpg",
    shortDesc: "Real-time strategy game built in Pepi Engine. Architected the AI framework that powered all unit behaviors, implemented core gameplay systems, and led the programming team through delivery.",
    tags: ["C++", "Pepi Engine", "AI Framework", "Gameplay Systems", "Tech team lead"],
    link: { label: "github", url: "https://github.com/FLuczak/Owlet" },
    body: `
      <iframe width="566" height="313" src="https://www.youtube.com/embed/dGsASNUbWmw" title="Owlet Trailer | Team Tiny Pepi | Pepi Engine" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
      <h2>Overview</h2>
      <p>Owlet is a real-time strategy game developed using the Pepi Engine over 8 weeks. My role encompassed AI framework creation and maintenance, core gameplay programming, and programming team leadership—managing task distribution and ensuring technical milestones were met.</p>
      
      <h2>AI Framework & Visual Scripting</h2>
      <p>The entire gameplay of Owlet—from unit behaviors to enemy AI—was built exclusively on the AI framework I created. The system had to be both robust and highly optimized. All behaviors ran in parallel, communicating through blackboards and gameplay events invoked after the AI update loop. This integration with the engine's ECS architecture allowed us to handle up to <strong>10,000 agents</strong> efficiently.</p>
            
      <img src="assets/Images/Owlet-tons-of-agents.png"/>
      
      <h2>Gameplay & Design Implementation</h2>
      <p>I worked directly with the design team to implement diverse gameplay elements including:</p>
      <ul>
        <li>All AI state behavior logic and decision-making for units</li>
        <li>Gameplay stat system with modifiers and buffs</li>
        <li>Wave generation system with in-editor configuration for enemy spawning</li>
        <li>Resource gathering and management systems</li>
        <li>Player command and unit order system</li>
      </ul>
      
      <img src= "assets/Images/Owlet-combat.gif"/>
      
      <h2>Core Engine Maintenance</h2>
      <p>I maintained multiple critical engine systems including serialization, ECS, level editor, unit creator, and animation editor to ensure stable tool support for the team's workflow.</p>
      
      <img src="assets/Images/Owlet-in-engine.png"/>

      <h2>CI/CD & Team Leadership</h2>
      <p>I established and maintained our GitHub Actions CI/CD pipeline featuring unit test integration, compilation checks, Clang Tidy analysis, automatic itch.io deployment post-merge, and automatic code formatting. As team lead, I assigned tasks, communicated with the producer and other discipline leads, managed deliverables, and ensured all requirements were feasible within sprint deadlines.</p>
    `
  },
  {
    id: "break-a-bot",
    title: "Break-A-Bot",
    period: "2024 — 2025",
    type: "PC / Steam · University Project",
    thumb: "assets/Thumbnails/break-a-bot.png",
    shortDesc: "Top-down roguelike with procedurally generated levels. Built a modular, extensible level generation tool used by designers and artists with rule-based room stitching, implemented modular AI for distinct enemy types and boss encounters, and maintained gameplay systems across 300+ iterations.",
    tags: ["Unreal Engine 5", "C++", "Procedural Generation", "AI Programming"],
    link: { label: "steam", url: "https://store.steampowered.com/app/3365860/BreakaBot/" },
    body: `
      <video controls width="566" height="313">
        <source src="assets/Videos/break-a-bot-trailer.mp4" type="video/mp4">
      </video>
      
      <h2>Overview</h2>
      <p>Break-A-Bot is a commercial roguelike developed in Unreal Engine. As AI and gameplay programmer, I focused on creating systems that empowered designers and artists—particularly a sophisticated level generation tool and modular AI framework supporting diverse enemy encounters.</p>
      
      <h2>Procedural Level Generation Architecture</h2>
      <p>I developed an architect-driven procedural level generation tool inspired by Returnal and Path of Exile 2. The system features a modular, pass-based design that enabled extensibility and maintainability:</p>
      <ul>
        <li><strong>Modular Generation Passes</strong> — Discrete C++ components with configurable priority ordering, each responsible for distinct generation features</li>
        <li><strong>Rule-Based Extensibility</strong> — Blueprint-scripted rule objects that define constraints for spawning rooms, props, and wall tiles, allowing designers to add new rules without coding</li>
        <li><strong>Room Template System</strong> — Reusable room components including Exit, Entrance, Bounds, Floor, and Prop Spawner components for fine-grained spatial control</li>
        <li><strong>Multi-floor Support</strong> — Full support for verticality and varied heights, enabling 3D level complexity</li>
        <li><strong>Collision & Overlap Management</strong> — Sophisticated bounding box systems preventing invalid placements while maintaining design flexibility</li>
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
      <p>Over 6 months of development, I implemented new player mechanics (mines and hammer), maintained gameplay systems through active iteration (300+ documented changes), debugged interconnected systems, and handled localization and UI interactions. This sustained development cycle tested system robustness and flexibility across a full commercial project lifecycle.</p>
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
      <p>I developed sophisticated input handling systems that managed player state transitions, preventing edge cases like getting stuck in animation states, and ensuring responsive controls throughout gameplay.</p>
      
      <h2>Performance Optimization</h2>
      <p>To ensure smooth gameplay across multiple devices, I regularly profiled and optimized both rendering and game logic. I contributed to profiling documentation and optimization guidelines, achieving consistently smooth performance even on lower-end hardware—critical for a couch game experience.</p>
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
    id: "holo-knights-td",
    title: "Holo Knights TD",
    period: "2021",
    type: "Personal Project · AR Game",
    thumb: "assets/thumbnails/Holoknights.png",
    shortDesc: "AR tower defense game for Microsoft HoloLens created during internship. Built procedurally generated maps, enemy and tower AI systems, UI, and AR controls in a passion project.",
    tags: ["Unity", "C#", "AR / Mixed Reality", "AI", "Procedural Generation"],
    link: { label: "github", url: null },
    body: `
      <video controls width="566" height="313">
        <source src="assets/Videos/HoloKnights.mp4" type="video/mp4">
      </video>
      
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
    thumb: "assets/Thumbnails/VisualDebugConsole.jpg",
    shortDesc: "Custom QA debugging tool replacing text-based console with user-friendly interface. Features runtime variable monitoring, remote function calling, and 3D worldspace labels. Used by multiple commercial game teams.",
    tags: ["Unity", "C#", "Tools Programming"],
    link: { label: "github", url: "https://gitlab.com/darthkornik/visual-debug-console" }
  },
  {
    title: "FLUCZAK Event Utility Libraries",
    period: "2024",
    type: "Open Source Library · C++",
    thumb: "assets/Thumbnails/delegates.png",
    shortDesc: "Reusable C++ utility library implementing multicast delegates, event systems, and signal buses. Designed for custom game engines and used across multiple personal and team projects.",
    tags: ["C++", "Architecture Patterns", "Libraries/Frameworks"],
    link: { label: "github", url: "https://github.com/FLuczak/FluczakSignalBus" }
  },
  {
    title: "Mobile Games — Frocco Games",
    period: "2022",
    type: "Mobile · Passion Projects",
    thumb: "assets/Thumbnails/frocco-games.jpg",
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
    /* ── Desktop layout: index | thumb | body | arrow ── */
    .project-row {
      display: grid !important;
      grid-template-columns: 3rem 240px 1fr auto !important;
      align-items: center !important;
      gap: 2rem !important;
    }

    /* ── Thumbnail wrapper ── */
    .row-thumb {
      width: 240px;
      height: 240px;
      flex-shrink: 0;
      overflow: hidden;
      border: 1px solid var(--border);
      position: relative;
      background: #111;
    }

    .row-thumb img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.4s ease;
    }

    .project-row:hover .row-thumb img {
      transform: scale(1.04);
    }

    /* Placeholder */
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

    /* ── Project Link Badge ── */
    .project-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 0.8rem;
      margin-top: 0.75rem;
      border: 1px solid currentColor;
      border-radius: 2px;
      font-size: 0.8rem;
      font-weight: 500;
      letter-spacing: 0.05em;
      text-transform: capitalize;
      text-decoration: none;
      transition: all 0.3s ease;
      color: rgba(255,255,255,0.6);
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

    /* ── Detail Page Link Section ── */
    .page-link {
      margin: 1.5rem 0 2rem 0;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border);
    }

    /* ── Tag color system ── */
    .tag { border: none !important; font-weight: 400 !important; }

    .tag[data-cat="engine"]   { background: rgba(120,180,255,0.12); color: #7ab4ff; }
    .tag[data-cat="language"] { background: rgba(180,255,160,0.10); color: #9de87a; }
    .tag[data-cat="tool"]     { background: rgba(255,200,100,0.10); color: #f0bc55; }
    .tag[data-cat="platform"] { background: rgba(200,140,255,0.10); color: #c47fff; }
    .tag[data-cat="concept"]  { background: rgba(255,130,110,0.10); color: #ff8a72; }
    .tag[data-cat="default"]  { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.5); }

    /* ── Mobile: full-width card layout ── */
    @media (max-width: 768px) {
      .project-row {
        display: flex !important;
        flex-direction: column !important;
        gap: 0 !important;
        padding: 0 0 1.5rem !important;
      }

      .row-thumb {
        width: 100% !important;
        height: 180px !important;
        border-left: none !important;
        border-right: none !important;
        border-top: none !important;
        margin-bottom: 1rem;
      }

      .row-index {
        padding: 1rem 0 0.25rem !important;
      }

      .row-arrow { display: none; }
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
    SKILLS.map(s => `<div class="skill-row">${s}</div>`).join('');
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

function tagCat(label) {
  return TAG_CATEGORIES[label.toLowerCase()] || "default";
}

function tagsHTML(tags) {
  return tags.map(t => `<span class="tag" data-cat="${tagCat(t)}">${t}</span>`).join('');
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
        <span class="row-index">${String(i + 1).padStart(2, '0')}</span>
        ${thumbHTML(p)}
        <div>
          <h3 class="row-title">${p.title}</h3>
          <p class="row-meta">${p.period} · ${p.type}</p>
          <p class="row-desc">${p.shortDesc}</p>
          <div class="row-tags">${tagsHTML(p.tags)}</div>
          ${linkHTML(p.link)}
        </div>
        ${isClickable ? '<span class="row-arrow">open ↗</span>' : ''}
      </div>`;
    }).join('');
}

// ─────────────────────────────────────────────────────────────────────────────
// ROUTING
// ─────────────────────────────────────────────────────────────────────────────
function showHome() {
  document.getElementById('view-home').classList.add('active');
  document.getElementById('view-project').classList.remove('active');
  document.getElementById('view-cv').classList.remove('active');
  window.scrollTo({ top: 0 });
  setTimeout(observeReveal, 50);
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
            <p class="meta-label">Stack</p>
            <div class="meta-tags">${tagsHTML(p.tags)}</div>
          </div>
        </div>
        ${linkHTML(p.link) ? `<div class="page-link">${linkHTML(p.link)}</div>` : ''}
        <div class="page-body">${bodyWithMedia}</div>
      </div>
    </div>`;
  document.getElementById('view-home').classList.remove('active');
  document.getElementById('view-project').classList.add('active');
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
              <li>Implementing and optimizing gameplay functionality for a virtual reality game project</li>
              <li>Creating technical design documents for new gameplay features</li>
              <li>Writing automated tests to validate game feature implementations</li>
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
              <li>Implemented comprehensive AI systems for animal characters including navigation with custom pathfinding wrappers, natural locomotion, behavior trees, and complex interactions</li>
              <li>Developed sophisticated animation systems leveraging behavior-driven parameters, animation layering, blending, and procedural IK for responsive character animation</li>
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
          <h2>Notable Projects & Contributions</h2>
          <ul class="cv-list">
            <li><strong>Animal Shelter Simulator 2</strong> — Commercial title shipping on PC and SteamDeck; architected networked codebase and implemented complete animal AI and animation systems</li>
            <li><strong>Break-A-Bot</strong> — Commercial roguelike in Unreal Engine featuring architect-driven procedural generation with rule-based extensibility and modular AI framework</li>
            <li><strong>Pepi Engine & Owlet</strong> — Custom C++ game engine with visual AI scripting tools (FSM/BT editors, blackboard system); powered RTS game handling 10,000+ agents</li>
            <li><strong>Animal Shelter Simulator</strong> — Multi-platform commercial title (PC, Xbox One, PlayStation, Switch, SteamDeck); refactored AI system and created visual tools for designers</li>
            <li><strong>Visual Debugging Console</strong> — Open-source QA tool for Unity with runtime variable monitoring and remote function calling; deployed in multiple commercial game studios</li>
            <li><strong>FLUCZAK Event Utility Libraries</strong> — Reusable C++ library implementing multicast delegates and event systems for custom game engines</li>
          </ul>
        </section>
      </div>
    </div>`;
  document.getElementById('view-home').classList.remove('active');
  document.getElementById('view-project').classList.remove('active');
  document.getElementById('view-cv').classList.add('active');
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
// INIT
// ─────────────────────────────────────────────────────────────────────────────
renderSkills();
renderSocials();
renderProjects();
setTimeout(observeReveal, 100);