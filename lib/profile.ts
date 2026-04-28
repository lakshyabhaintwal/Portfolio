import {
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
  Trophy,
  UsersRound,
  Wrench
} from "lucide-react";

export const profile = {
  name: "Lakshya Bhaintwal",
  initials: "LB",
  title: "Software Engineer",
  domains: "AI/ML / Systems / Full Stack",
  location: "India",
  email: "lakshyabhaintwal@gmail.com",
  phone: "+91 9045723770",
  linkedin: "https://linkedin.com/in/lakshya-bhaintwal",
  github: "https://github.com/lakshyabhaintwal",
  resumePath: "/lakshya-bhaintwal-resume.pdf",
  tagline:
    "I build production-minded systems where backend architecture, performance engineering, and applied machine learning meet.",
  summary:
    "I am an Electronics and Communication Engineering student at Manipal Institute of Technology focused on software systems that stay useful beyond the demo. My work spans backend services, data pipelines, model integration, computer vision, OCR, LLM workflows, and performance-oriented deployment. I like problems where correctness, latency, maintainability, and intelligent behavior all have to coexist."
};

export const navItems = [
  { label: "Intro", href: "#about" },
  { label: "Practice", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Story", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const highlights = [
  { label: "OCR accuracy", value: "95%+", icon: Sparkles },
  { label: "Inference throughput gain", value: "20%", icon: BrainCircuit },
  { label: "Students mentored", value: "50+", icon: UsersRound },
  { label: "CGPA", value: "8.00", icon: GraduationCap }
];

export const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "C++", "SQL", "Bash", "HTML/CSS", "JavaScript"]
  },
  {
    title: "AI / ML",
    icon: BrainCircuit,
    skills: [
      "Deep Learning",
      "NLP",
      "OCR",
      "LLMs",
      "Computer Vision",
      "Transformers",
      "RAG",
      "CRNN",
      "ALPR"
    ]
  },
  {
    title: "Frameworks",
    icon: Wrench,
    skills: ["PyTorch", "TensorFlow", "MXNet", "FastAPI", "Flask", "SQLAlchemy"]
  },
  {
    title: "Tools",
    icon: Database,
    skills: ["Git", "PowerBI", "TensorFlow Lite", "FAISS", "Hugging Face", "Edge TPU"]
  }
];

export const experiences = [
  {
    company: "IIT Roorkee",
    role: "Artificial Intelligence Research Assistant",
    location: "Roorkee, Uttarakhand",
    period: "May 2025 - July 2025",
    icon: BriefcaseBusiness,
    bullets: [
      "Developed CNN-LSTM, I3D, and C3D architectures for video-based human activity recognition on large-scale datasets.",
      "Optimized transformer-based temporal models, improving inference throughput by 20% on Kinetics-400.",
      "Engineered scalable preprocessing and feature extraction pipelines for real-time video classification."
    ]
  },
  {
    company: "Linear AmpTech",
    role: "Machine Learning Intern",
    location: "Roorkee, Uttarakhand",
    period: "May 2024 - Aug 2024",
    icon: BriefcaseBusiness,
    bullets: [
      "Engineered an end-to-end ALPR pipeline combining YOLO-based detection and CRNN-based OCR for edge deployment.",
      "Migrated and optimized models to TensorFlow Lite for Jetson Nano and Edge TPU, enabling efficient on-device inference.",
      "Curated and expanded the dataset 5x to improve robustness across lighting and angles, achieving 95%+ OCR accuracy."
    ]
  },
  {
    company: "IEEE Student Branch Manipal",
    role: "ML and Research Head",
    location: "Manipal, Karnataka",
    period: "Sep 2024 - Present",
    icon: UsersRound,
    bullets: [
      "Led ML initiatives and mentored 50+ students through workshops, projects, and hackathons.",
      "Organized technical sessions to promote hands-on AI/ML learning and research-driven development."
    ]
  }
];

export const education = [
  {
    school: "Manipal Institute of Technology",
    degree: "B.Tech in Electronics and Communication Engineering",
    period: "Aug 2023 - May 2027",
    metric: "CGPA: 8.00",
    icon: GraduationCap
  }
];

export const achievements = [
  {
    title: "Amazon Summer School",
    period: "Aug 2025 - Sept 2025",
    label: "Selected Participant",
    icon: Trophy,
    details:
      "Selected through a competitive national-level screening process for Amazon's engineering training program, strengthening algorithmic problem-solving through optimized data structures and complexity-driven solutions."
  }
];

export const contactItems = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/lakshya-bhaintwal", href: profile.linkedin, icon: MapPin },
  { label: "GitHub", value: "github.com/lakshyabhaintwal", href: profile.github, icon: Code2 }
];

export const selectedWork = [
  {
    title: "EzResume",
    description: "AI-assisted resume builder that turns structured profile data into tailored, editable LaTeX resumes.",
    points: [
      "Built a Next.js 16 application with Clerk authentication and Supabase persistence for user-specific resume state.",
      "Designed Gemini-powered generation flows for general, role-based, and job-description-specific resume optimization.",
      "Added Zod request validation, lightweight rate limiting, retry handling, and strict JSON parsing to harden AI output.",
      "Generated ATS-friendly LaTeX with escaping safeguards, then exposed a Monaco-based editor and live PDF preview loop.",
      "Separated prompt rules, content rules, and LaTeX templates so resume behavior can evolve without rewriting the UI."
    ],
    impact: [
      "JD-aware resume generation",
      "Editable LaTeX output",
      "Auth + persistence + AI pipeline"
    ],
    tech: "Next.js / TypeScript / Gemini / Clerk / Supabase / Monaco / LaTeX",
    github: "https://github.com/lakshyabhaintwal/Resume-Builder",
    demo: null
  },
  {
    title: "Legal LLM with RAG (Indian Law)",
    description: "Indian-law reasoning assistant combining Mistral fine-tuning with retrieval-grounded legal QA.",
    points: [
      "Fine-tuned Mistral-7B-Instruct with PEFT/LoRA and 4-bit quantization to make legal-domain adaptation feasible on constrained GPU resources.",
      "Merged Indian legal QA sources including IPC, CrPC, Constitution QA, and IndicLegalQA-style datasets into a domain-specific instruction corpus.",
      "Built a FAISS-backed retrieval layer using SentenceTransformers embeddings over Indian-law QA documents.",
      "Separated model adaptation from retrieval so generated answers can be grounded in indexed legal context instead of relying only on parametric memory.",
      "Prepared adapter and merged-model paths for flexible inference depending on storage and VRAM constraints."
    ],
    impact: [
      "Domain-adapted Mistral-7B",
      "FAISS-grounded legal retrieval",
      "Low-resource fine-tuning path"
    ],
    tech: "Python / Mistral-7B / PEFT / LoRA / bitsandbytes / FAISS / SentenceTransformers",
    github: "https://github.com/lakshyabhaintwal/Law-Based-LLM-Mistral7B-",
    demo: null
  },
  {
    title: "Edge-based ALPR System",
    description: "Real-time license plate recognition on low-cost edge hardware",
    points: [
      "Built detection and OCR pipeline with YOLO and PaddleOCR.",
      "Migrated from Jetson to Raspberry Pi with TPU acceleration.",
      "Converted PyTorch pipeline to TensorFlow Lite.",
      "Created augmented dataset with 500% expansion.",
      "Optimized for edge inference."
    ],
    impact: [
      "~0.9s inference time",
      "~60% cost reduction",
      "~30% accuracy improvement"
    ],
    tech: "YOLO / PaddleOCR / TensorFlow Lite / Raspberry Pi / Edge TPU",
    github: null,
    demo: null
  },
  {
    title: "CinePlex",
    description: "Full-stack movie reservation platform with authenticated booking, seat availability, and deployed web flows.",
    points: [
      "Built a FastAPI backend with SQLAlchemy models for users, movies, showtimes, reservations, and reserved seats.",
      "Implemented JWT authentication, password hashing, protected user routes, and session-backed frontend access.",
      "Modeled seat reservation logic with availability checks, cancellation flows, and database-level uniqueness intent for seat conflicts.",
      "Connected a Django frontend to the deployed API for login, signup, movie browsing, showtimes, booking, and reservation management."
    ],
    impact: [
      "Deployed reservation flow",
      "Authenticated booking system",
      "Backend-first full-stack architecture"
    ],
    tech: "FastAPI / SQLAlchemy / JWT / Django / SQLite / Render",
    github: "https://github.com/lakshyabhaintwal/CinePlex",
    demo: "https://cineplex-1-akn1.onrender.com"
  },
  {
    title: "Roguelike Engine",
    description: "Procedural dungeon crawler built around turn-based systems, pathfinding, combat, inventory, and persistence.",
    points: [
      "Implemented procedural room generation with collision checks, tunnel carving, floor progression, and weighted entity spawning.",
      "Built component-based gameplay systems for combat, inventory, equipment, consumables, leveling, and render ordering.",
      "Used TCOD pathfinding and field-of-view computation for enemy AI, exploration memory, and tactical visibility.",
      "Added compressed save/load support so the full engine state can be resumed across sessions."
    ],
    impact: [
      "Procedural level generation",
      "Turn-based AI + pathfinding",
      "Persistent game state"
    ],
    tech: "Python / TCOD / NumPy / OOP systems",
    github: "https://github.com/lakshyabhaintwal/RougeLike_game-python",
    demo: null
  }
];
