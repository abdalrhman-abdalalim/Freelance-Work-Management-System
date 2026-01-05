import { LayoutGrid, Timer, Users } from "lucide-react";
import { FeatureType } from "./features-section/type";

export const FEATURES_DATA:FeatureType[] = [
  {
    id: "project-boards",
    title: "Project Boards",
    description: "Organize your projects with intuitive boards. See what's next and stay on top of your game.",
    icon: LayoutGrid,
  },
  {
    id: "time-tracking",
    title: "Time Tracking",
    description: "Know exactly where your time goes. Built-in timers for accurate billing and productivity tracking.",
    icon: Timer,
  },
  {
    id: "client-management",
    title: "Client Management",
    description: "Centralize your client communications, documents, and invoices in one secure place.",
    icon: Users,
  },
];