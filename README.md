🚀 Freelance Work Management System (FWMS)

FWMS is a hands-on workshop project designed to help developers learn how to collaborate on a real-world product using a clear architecture, well-defined responsibilities, and structured workflows.

The project simulates a production-grade system, with a strong focus on:

Organization

Clean separation of concerns

Scalable structure

Team collaboration

FWMS is not just a task manager — it is a collaborative learning environment.

🎯 Workshop Goals

This repository exists to help developers:

Collaborate using a shared product vision

Understand how requirements translate into architecture

Practice clean, scalable project structure

Implement role-based access control

Build features incrementally using Agile principles

🧠 What You Will Learn

By working on FWMS, you will practice:

Translating BRD → PRD → SRS into real code

Structuring frontend codebases for team scalability

Feature-based modular architecture

Project-based authorization & permissions

Shared task ownership & contribution logic

Dashboard-driven business logic

Writing clean, maintainable, and extensible code

💡 Product Concept

FWMS is a project-centric work management system for freelancers and small teams.

Unlike client-centric tools, FWMS organizes work around projects, making it an excellent case study for:

Proper domain modeling

Permission boundaries

Ownership and responsibility tracking

Real-world collaboration challenges

🏗️ System Architecture
Frontend (Web Application)
        ↓
     REST API
        ↓
Backend (Auth & Business Logic)
        ↓
 Relational Database

Architecture Principles

Clear separation of concerns

Feature-based modular structure

Centralized domain logic

Explicit ownership & permissions

Scalable by design (even in MVP stage)

🧩 Core Domain Entities

FWMS is built around the following core entities:

User

Project

Project Membership

Role

Task

Task Participant

Each entity exists to teach proper domain modeling in collaborative systems.

📁 Frontend Folder Structure

The frontend follows a feature-first, module-based architecture designed for teamwork and scalability.

src/
├── modules/
│   └── public-website/
│       ├── screens/
│       │   └── LandingPageScreen.tsx
│       │
│       ├── features/
│       │   ├── HeroSection/
│       │   │   ├── HeroSection.tsx
│       │   │   ├── index.ts
│       │   │   └── components/
│       │   │       ├── CTAButtons.tsx
│       │   │       └── AnimatedBackground.tsx
│       │   │
│       │   ├── ValueProposition/
│       │   │   ├── ValueProposition.tsx
│       │   │   ├── index.ts
│       │   │   └── components/
│       │   │       ├── ValueCard.tsx
│       │   │       └── StatsCounter.tsx
│       │   │
│       │   ├── HowItWorks/
│       │   │   ├── HowItWorks.tsx
│       │   │   ├── index.ts
│       │   │   └── components/
│       │   │       ├── StepCard.tsx
│       │   │       └── InteractiveDemo.tsx
│       │   │
│       │   └── Testimonials/
│       │       ├── Testimonials.tsx
│       │       ├── index.ts
│       │       └── components/
│       │           └── TestimonialCard.tsx
│       │
│       ├── models/
│       │   └── api.types.ts
│       │
│       └── index.ts
│
├── shared/
│   ├── ui/
│   │   ├── buttons/
│   │   │   ├── GradientButton.tsx
│   │   │   ├── PrimaryButton.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── cards/
│   │   │   ├── GlassCard.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── typography/
│   │   │   ├── AnimatedText.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── index.ts
│   │
│   ├── layout/
│   │   ├── PublicLayout.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   │
│   └── seo/
│       ├── MetaTags.tsx
│       └── index.ts
│
└── app/
    ├── layout.tsx
    ├── page.tsx
    └── globals.css

🧱 Structural Philosophy

Modules represent business domains or main screens

Screens define page-level composition

Features encapsulate a single responsibility

Components are pure UI building blocks

Models handle API contracts & UI-friendly data transformation

Shared contains reusable, design-system-level building blocks

App handles routing and global layout (Next.js App Router)

This structure enables parallel development, minimal conflicts, and clear ownership.

🤝 Who Is This For?

Developers learning real-world architecture

Teams practicing collaborative development

Workshops & mentoring environments

Engineers transitioning from solo to team-based projects

📌 Final Note

FWMS is intentionally designed to be:

Structured

Opinionated

Educational

Production-inspired

If you follow the structure and principles of this repository, you are learning how professional teams actually build software.
