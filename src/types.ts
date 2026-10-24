export interface ServicePillar {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  headline: string;
  description: string;
  subDescription?: string;
  keyPoints: string[];
  ctaText: string;
  ctaAction: string;
  entryCriteria: {
    title: string;
    requirement: string;
    note: string;
  };
  accentColor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'cloud' | 'sustainability' | 'general';
  highlight?: string;
}

export interface HyperscalerPartner {
  name: string;
  category: string;
  roleDescription: string;
}

export interface ConsultationFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  serviceInterest: 'cloud-spend' | 'sustainability' | 'both';
  timezone?: string;
  annualSpendRange?: string;
  contractRenewalTimeline?: string;
  message?: string;
}
