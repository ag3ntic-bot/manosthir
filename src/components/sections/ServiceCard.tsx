import React from "react";
import { Card } from "@/components/ui/Card";
import {
  Brain,
  Heart,
  Users,
  Shield,
  Briefcase,
  Sparkles,
  Check,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="w-6 h-6 text-primary" />,
  heart: <Heart className="w-6 h-6 text-primary" />,
  users: <Users className="w-6 h-6 text-primary" />,
  shield: <Shield className="w-6 h-6 text-primary" />,
  briefcase: <Briefcase className="w-6 h-6 text-primary" />,
  sparkles: <Sparkles className="w-6 h-6 text-primary" />,
};

interface ServiceCardProps {
  title: string;
  description: string;
  focusAreas: string[];
  icon: string;
  linkText: string;
}

export function ServiceCard({
  title,
  description,
  focusAreas,
  icon,
  linkText,
}: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full" data-testid="service-card">
      <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-5">
        {iconMap[icon] || <Brain className="w-6 h-6 text-primary" />}
      </div>
      <h3 className="text-xl font-bold text-text-primary mb-3 font-[family-name:var(--font-body)]">
        {title}
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed mb-4 font-[family-name:var(--font-body)]">
        {description}
      </p>
      <ul className="space-y-2 mb-5 flex-1">
        {focusAreas.map((area) => (
          <li
            key={area}
            className="flex items-center gap-2 text-sm text-text-secondary font-[family-name:var(--font-body)]"
          >
            <Check className="w-4 h-4 text-primary flex-shrink-0" />
            {area}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-200 font-[family-name:var(--font-body)]"
      >
        {linkText} &rarr;
      </a>
    </Card>
  );
}

export default ServiceCard;
