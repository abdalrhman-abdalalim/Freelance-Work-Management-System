import { FeatureType } from "../type";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const FeatureCard = ({ title, description, icon: Icon }: FeatureType) => (
  <Card className="group relative overflow-hidden border-white/5 bg-gradient-to-b  to-transparent transition-all duration-500 hover:border-brand-teal/50 hover:-translate-y-2 rounded-3xl">
    <div className="absolute -inset-px from-brand-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <CardHeader className="relative z-10 pb-2">
      {/* Icon Wrapper */}
      <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-brand-dark border border-white/10 group-hover:border-brand-teal/50 transition-colors duration-500">
        <div className="absolute inset-0 bg-brand-teal/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <Icon className="text-brand-teal w-8 h-8 relative z-10 group-hover:scale-110 transition-transform duration-500" />
      </div>
    </CardHeader>

    <CardContent className="relative z-10 space-y-4">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-brand-teal transition-colors">
          {title}
        </h3>
        <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
          {description}
        </p>
      </div>

      {/* Decorative Line */}
      <div className="w-0 h-1 bg-brand-teal rounded-full group-hover:w-12 transition-all duration-500" />
    </CardContent>
  </Card>
);

export default FeatureCard;
