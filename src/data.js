export const personalData = {
  name: "Sunil Kumar Rout",
  title: "AI Engineer",
  bio: "AI Engineer with 2.6+ years in safety-critical systems and 5 shipped Generative AI projects. Specializing in LLM Applications, RAG Pipelines, LangGraph Agents, and Multimodal AI. Open to remote/hybrid/onsite opportunities worldwide.",
  email: "sunilrout49057@gmail.com",
  github: "https://github.com/sunilroutgithub",
  linkedin: "https://linkedin.com/in/sunil9938",
  twitter: "https://twitter.com/sunilroutgithub",
  resumeLink: "https://drive.google.com/uc?export=download&id=12CsyrCa3loQ3cIwas-pI61jpYLSvaWEv",
  profileImage: "https://via.placeholder.com/400",
  phone: "+91-88478 18535",
  location: "Bengaluru, India",
  timezone: "IST (UTC+5:30)"
};

export const skills = [
  { name: "Python", icon: "🐍" },
  { name: "FastAPI", icon: "⚡" },
  { name: "LangChain", icon: "🔗" },
  { name: "LangGraph", icon: "🤖" },
  { name: "Groq AI (LLaMA3)", icon: "🦙" },
  { name: "Hugging Face", icon: "🤗" },
  { name: "Docker", icon: "🐳" },
  { name: "RAG Pipelines", icon: "📚" },
  { name: "Vector DB (FAISS)", icon: "🔍" },
  { name: "LoRA Fine-Tuning", icon: "🎯" },
  { name: "PyTorch", icon: "🔥" },
  { name: "CI/CD", icon: "🚀" }
];

export const projects = [
  {
    id: 1,
    title: "RAG-Powered Document Q&A Chatbot",
    description: "End-to-end RAG pipeline with PDF/DOCX/TXT ingestion, FAISS vector store, and Groq LLaMA3. Reduces hallucination by 40% with ~90% answer relevance.",
    tech: ["FastAPI", "LangChain", "FAISS", "Groq LLaMA3", "Docker", "Render"],
    github: "https://github.com/sunilroutgithub/rag-document-qa",
    live: "https://rag-document-qa-aegf.onrender.com/docs",
    image: "https://via.placeholder.com/600x400/1a1a2e/4a9eff?text=RAG+Chatbot"
  },
  {
    id: 2,
    title: "Repo Doc Agent - AI Code Documentation",
    description: "ReAct agent that reads GitHub repos, generates Google-style docstrings and pytest tests, and autonomously opens PRs. Cuts documentation time by 93%.",
    tech: ["Python", "LangChain", "LangGraph", "Groq LLM", "PyGithub", "pytest"],
    github: "https://github.com/sunilroutgithub/repo-doc-agent",
    live: "https://github.com/sunilroutgithub/repo-doc-agent",
    image: "https://via.placeholder.com/600x400/1a1a2e/9b59b6?text=Repo+Doc+Agent"
  },
  {
    id: 3,
    title: "Multimodal Product Description Generator",
    description: "AI application that generates product descriptions from images in three tone variations (playful, professional, concise) for e-commerce automation.",
    tech: ["Groq Vision AI", "FastAPI", "Docker", "Hugging Face", "GitHub Actions"],
    github: "https://github.com/sunilroutgithub/multimodal-product-describer",
    live: "https://sunil9938-multimodal-product-describer.hf.space/docs",
    image: "https://via.placeholder.com/600x400/1a1a2e/2ecc71?text=Multimodal+AI"
  },
  {
    id: 4,
    title: "Fine-Tuned Sentiment Classifier (LoRA)",
    description: "Fine-tuned DistilBERT with LoRA on 2,000 Amazon reviews, achieving 87.8% accuracy with only 1.09% trainable parameters. Outperforms baseline by +6.8 points.",
    tech: ["Hugging Face", "LoRA/PEFT", "DistilBERT", "FastAPI", "Docker"],
    github: "https://github.com/sunilroutgithub/finetuned-sentiment-classifier",
    live: "https://huggingface.co/sunil9938/distilbert-lora-sentiment-amazon",
    image: "https://via.placeholder.com/600x400/1a1a2e/e74c3c?text=LoRA+Fine-Tuning"
  },
  {
    id: 5,
    title: "AI Resume Screener API",
    description: "ATS screener that embeds JDs and resumes in ChromaDB, ranks candidates by semantic similarity with LLM reasoning, and provides interview question suggestions.",
    tech: ["Groq API", "ChromaDB", "sentence-transformers", "FastAPI", "Docker"],
    github: "https://github.com/sunilroutgithub/ai-resume-screener-api",
    live: "https://ai-resume-screener-api-rtq5.onrender.com/docs",
    image: "https://via.placeholder.com/600x400/1a1a2e/f39c12?text=AI+Resume+Screener"
  }
];

export const experience = [
  {
    company: "G.G. Tronics India Pvt. Ltd.",
    role: "Associate Software Engineer",
    period: "Jan 2024 - Present",
    location: "Bengaluru, India",
    description: [
      "Built real-time embedded software for 12+ live railway signalling sites, achieving 99% algorithmic accuracy on a mission-critical train detection module.",
      "Automated build verification and log analysis with Python, cutting manual QA effort by ~30%.",
      "Authored architecture docs, deployment runbooks, and interface specs for cross-functional and remote stakeholders.",
      "Delivered in Agile/Scrum with Git branching, pull requests, and code review across distributed teams."
    ]
  }
];

export const certifications = [
  "LangChain for LLM Application Development - Simplilearn",
  "ChatGPT Prompt Engineering for Developers - Google Cloud",
  "Introduction to Generative AI - Google Cloud",
  "Introduction to Large Language Models - Google Cloud",
  "Responsible AI: Applying AI Principles with Google Cloud",
  "Hugging Face NLP Course - Pragmatic AI Labs",
  "AWS Cloud Practitioner Essentials - Amazon Web Services",
  "Automation & Scripting with Python - Microsoft"
];

export const education = {
  degree: "Master of Computer Applications (MCA)",
  institution: "GIET University, Gunupur, Odisha",
  period: "2021 - 2023",
  cgpa: "8.43 / 10"
};