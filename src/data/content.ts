import { ServicePillar, FAQItem, HyperscalerPartner } from '../types';

export const VYNK_CONTACT_EMAIL = 'dealsupport@vynk.cloud';

export const HERO_CONTENT = {
  announcement: "Ex-Hyperscaler Global IT Veterans • #Risk = Zero Guarantee",
  mainHeadline: "Extract Maximum Value from Cloud Spend & Monetise Sustainability",
  subHeadline:
    "VYNK is a global team with a long history of working for global IT leaders including Google, Amazon, Microsoft, Dell, HP, IBM, and DXC. We center on the two most critical drivers for today's CXO suite: Public Cloud Consumption Optimization and Enterprise Sustainability.",
  primaryCta: "Book Free 15-Min CXO Consult",
  secondaryCta: "Explore The Vynk Approach",
  guaranteeBadge: "If we don't deliver added value, you don't pay a cent.",
};

export const ALUMNI_PROVIDERS: HyperscalerPartner[] = [
  { name: "Google Cloud", category: "Hyperscaler", roleDescription: "Ex-Sales & Advisory Leadership" },
  { name: "Amazon Web Services", category: "Hyperscaler", roleDescription: "Ex-Commercial Enterprise Execs" },
  { name: "Microsoft Azure", category: "Hyperscaler", roleDescription: "Ex-Global Enterprise Negotiators" },
  { name: "Dell Technologies", category: "Global IT", roleDescription: "Ex-Infrastructure Specialists" },
  { name: "HP Enterprise", category: "Global IT", roleDescription: "Ex-Enterprise Account Directors" },
  { name: "IBM", category: "Global IT", roleDescription: "Ex-Solutions & Services Leadership" },
  { name: "DXC Technology", category: "Global IT", roleDescription: "Ex-Contract & Advisory Strategists" },
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "cloud-spend",
    title: "Cloud Spend & Consumption",
    badge: "100% Value-Backed • Zero Risk",
    tagline: "Create and Extract More Value from Your Cloud Spend",
    headline: "Public Cloud Contract Negotiations & Spend Optimization",
    description:
      "Competition among Public Cloud providers (hyperscalers) is fierce. While they offer concessions to secure your business, our team of EXPERTS know intimately how to exploit that value. Having sold for the 3 largest public cloud providers on the planet, we will help you and the hyperscaler reduce the time to contract and ensure maximum benefit for each party.",
    subDescription:
      "We will save you money and time to contract, helping to remove the uncertainty of whether you got the best outcome in your Cloud contract negotiations. We ensure you get a robust, flexible agreement delivering maximum investment and benefit for your business.",
    keyPoints: [
      "Insider Hyperscaler Knowledge: Former commercial negotiators from AWS, GCP, and Azure working on your side.",
      "Accelerated Time-to-Contract: Streamline negotiations while locking in superior investment tiers and concessions.",
      "Maximised Financial Gains: Capture credits, discount tiers, custom commitments, and milestone co-investments.",
      "Robust & Flexible Agreements: Future-proof your contracts to prevent penalty clauses as workloads evolve.",
    ],
    ctaText: "Evaluate Your Cloud Contract",
    ctaAction: "cloud-spend",
    entryCriteria: {
      title: "Cloud Spend Entry Criteria",
      requirement: "Minimum 2-year term with at least $1M (USD) forecast spend per year.",
      note: "Our model and deep expertise focus on engagements in the $10s and $100s of millions, where we extract the highest measurable gains.",
    },
    accentColor: "from-[#FF5E14] to-[#E04F0B]",
  },
  {
    id: "sustainability",
    title: "Enterprise Sustainability",
    badge: "Global Network • 10+ Countries",
    tagline: "Profitability with a Purpose",
    headline: "Start & Progress Your Carbon Emission Journey",
    description:
      "We are part of a global alliance of passionate Sustainability specialists with a presence in over 10 countries and decades of Sustainability experience. The team will demystify the process to get you started on your Sustainability journey, or if you are already making progress, we leverage current global use cases to deliver solutions moving your business toward carbon neutrality using automated tooling.",
    subDescription:
      "We understand how important cost is in the Sustainability sector. The Vynk team are experts at finding ways to not only move your business to a more sustainable offering but, importantly, monetise the results and build GTM offerings that deliver competitive advantage.",
    keyPoints: [
      "Low-Risk Time-Boxed Consulting: Prove immediate value with rapid assessments focused on delivery of quick wins.",
      "GTM & Product Monetisation: Build market-leading, carbon-neutral services and products that win enterprise deals.",
      "Automated Recording & Reporting: Implement industry-standard platforms to simplify ESG compliance and reporting.",
      "Global Expert Footprint: On-ground specialists across the US, Europe, Asia, and ANZ ready to support your roadmap.",
    ],
    ctaText: "Start Sustainability Discovery",
    ctaAction: "sustainability",
    entryCriteria: {
      title: "Sustainability Entry Criteria",
      requirement: "No minimum spend or commitment threshold.",
      note: "Every organization can start with a complimentary 15-minute call to evaluate goals, feasible approaches, timelines, and costs.",
    },
    accentColor: "from-zinc-100 to-zinc-400",
  },
];

export const CONSULTATION_CALLOUT = {
  badge: "Don't Leave Money on the Table",
  title: "Upcoming Renewal or New Agreement in the Next 6 Months?",
  description:
    "If you are considering signing an agreement or have a renewal in the next 6 months with a Public Cloud Provider, contact us first for a free 15-minute consult. We WILL save you money.",
  steps: [
    {
      number: "01",
      title: "Baseline Assessment",
      desc: "During the consultation, our first step is to understand your current infrastructure, roadmap, and hyperscaler posture.",
    },
    {
      number: "02",
      title: "Strategic Action Path",
      desc: "With a baseline established, we quickly outline a suggested negotiation path, timing overview, and end-result expectations.",
    },
    {
      number: "03",
      title: "Decision Clarity",
      desc: "You will leave with a clear, informed decision framework should you choose to partner with Vynk for your contract discussions.",
    },
  ],
};

export const FAQS: FAQItem[] = [
  {
    question: "How does VYNK get paid?",
    answer:
      "We make money from the added-value that we have created or extracted from the future value of the partnership between you and your Cloud provider; so, if we don't deliver, you won't pay a cent. #Risk = Zero.",
    category: "cloud",
    highlight: "100% Success & Value-Based (#Risk = Zero)",
  },
  {
    question: "Does VYNK offer contract negotiation services for other IT providers?",
    answer:
      "Yes. The team has extensive experience working for most of the large global IT providers. While our focus is on the hyperscaler business models of Microsoft, Amazon, Google and Ali Cloud, we also have first hand experience working with HP, IBM, DXC and DELL.",
    category: "cloud",
  },
  {
    question: "How can VYNK help with our sustainability requirements?",
    answer:
      "Sustainability means many things and is a fast-evolving industry. Vynk focuses on simplification and monetisation: how can we help you be more sustainable whilst delivering a positive ROI using the simplest approaches possible.\n\nWe typically start with short, time-boxed consulting agreements providing a low-risk approach to prove value with quick wins. Beyond initial consulting, we jointly decide the right path—whether making your Go-To-Market (GTM) offerings more sustainable for competitive advantage, or implementing industry-standard platforms for simplified recording and reporting.",
    category: "sustainability",
  },
  {
    question: "What is the entry criteria for VYNK to support my cloud negotiations?",
    answer:
      "Our model and experience are aimed at engagements in the 10s and 100s of millions, where we have the deepest expertise and can deliver maximum benefit. The entry criteria for Vynk to engage in your Cloud negotiations is an agreement with a minimum 2-year term with at least $1M (USD) forecast spend in each year.",
    category: "cloud",
  },
  {
    question: "Is there entry criteria for VYNK to help with my sustainability needs?",
    answer:
      "No, there is no entry criteria for Sustainability-related discussions. In a 15-minute call (at zero charge) we quickly establish: a) if Vynk can help, b) an indication of possible approaches, and c) timelines and potential costs.",
    category: "sustainability",
  },
];
