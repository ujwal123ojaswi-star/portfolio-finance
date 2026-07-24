import type { ExperienceEntry } from '@/types'

export const experience: ExperienceEntry[] = [
  {
    company: 'KPMG',
    role: 'Financial Analyst',
    location: 'India',
    period: 'Jun 2023 – Jul 2024',
    bullets: [
      'Owned budgeting, forecasting, and variance analysis across 10+ banking-client engagements, automating recurring financial and risk reporting to cut report preparation by 30% and save 15 hours/week.',
      'Designed interactive Tableau and Power BI dashboards giving executives real-time visibility into financial performance metrics, and presented data-driven insights to senior leadership and committees.',
      'Built Excel / VBA scenario and stress-testing models and ran ROI analysis on analytics deployments that quantified a 22% operational efficiency gain across banking operations.',
    ],
  },
  {
    company: 'WHP Jewellers',
    role: 'Data Analyst',
    location: 'India',
    period: 'Apr 2022 – May 2023',
    bullets: [
      'Ran pricing, demand, budgeting, and variance analysis across 5+ product lines that improved forecast accuracy by 15% and helped increase sales by 18%.',
      'Extracted financial and operational data from SAP S/4HANA (FI/CO, SD, MM) and ran reporting and data-validation workflows, building Power BI dashboards over 500K+ sales records that reduced reporting time by 65% and surfaced pricing, inventory, and margin insights.',
    ],
  },
  {
    company: 'NodeOps',
    role: 'Financial Analyst Intern',
    location: 'Bangalore, India',
    period: 'May 2025 – Aug 2025',
    bullets: [
      'Built a bulk invoice-upload system that cut monthly processing from 40 hours to 3 (a 93% reduction, 150 hours saved per month) and automated recurring financial reporting, accelerating decision-making.',
      'Conducted financial analysis for a pricing initiative from market-trend and competitor data to recommend profitability adjustments, using SQL and advanced Excel (pivot tables, XLOOKUP) to surface cost-saving opportunities.',
    ],
  },
]
