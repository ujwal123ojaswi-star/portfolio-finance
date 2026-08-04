import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'fixed-income-analytics',
    title: 'Fixed Income Analytics — Bond Pricing, Duration & Convexity',
    description:
      'Bond pricing, YTM solving, duration/convexity, and yield curve analysis built on real, live public US Treasury par yield data — including the real 2022-2023 curve inversion and its normalization through 2026.',
    bullets: [
      'Priced bonds from first principles and solved for YTM via root-finding (validated with a round-trip test: price → solve YTM → recover the original yield to within 0.0001bp).',
      'Computed duration and convexity numerically via finite differences on the pricing function itself, then stress-tested 4 benchmark bonds and a hypothetical portfolio against ±50/100/200bp yield shifts, showing how much convexity improves the estimate over duration alone.',
    ],
    stack: ['Python', 'Fixed Income', 'Excel', 'scipy'],
    githubUrl: 'https://github.com/ujwal123ojaswi-star/fixed-income-analytics',
    demoUrl: 'https://fixed-income-demo.vercel.app',
    metrics: [
      { label: 'YTM Solver Round-Trip Error', value: 0, max: 1, displayValue: '0.0000 bp' },
    ],
  },
  {
    id: 'custodian-reconciliation-analytics',
    title: 'Custodian Reconciliation & Portfolio Operations Analytics',
    description:
      'Investment operations analytics reconciling a firm’s internal fixed-income book of record against a separately generated custodian bank statement, applying the same three-way-match/exception-aging pattern used in the SAP Ariba-modeled procurement project to back/middle-office investment operations. Self-directed project on synthetic data modeled after realistic custodian-reconciliation workflows, not a claim of professional back-office experience.',
    bullets: [
      'Independently matched 82 positions ($542.5M market value) between book of record and custodian statement — price, quantity, and accrued interest each compared directly — then cross-checked the merge-detected exceptions against a persistent break-tracking log with 0 mismatches (19 vs. 19 open exceptions).',
      'Classified 87 reconciliation breaks this period by root cause (price difference, quantity/trade timing, accrued interest difference, missing/extra at custodian, corporate action timing), aged the 23 open breaks by days outstanding, and tracked an 8.9-day average time-to-resolve across 64 resolved breaks.',
      'Built an income receivable aging view (coupon income booked vs. cash received, $8,070 outstanding across 4 events, oldest 18 days) and a collateral tracker across 18 repo/derivative-margin positions, flagging 4 under- and 2 over-collateralized positions against $23.85M required collateral.',
    ],
    stack: ['Python', 'Investment Operations', 'Reconciliation', 'Excel'],
    githubUrl: 'https://github.com/ujwal123ojaswi-star/custodian-reconciliation-analytics',
    demoUrl: 'https://custodian-reconciliation-demo.vercel.app',
    metrics: [
      { label: 'Reconciliation exception rate', value: 23.17, max: 100, displayValue: '23.17%' },
      { label: 'Break-log cross-check match', value: 100, max: 100, displayValue: '100% (0 mismatches)' },
    ],
  },
  {
    id: 'dcf-valuation-comps',
    title: 'DCF & Comparable Company Analysis — Starbucks (SBUX)',
    description:
      'Discounted cash flow and comparable company analysis built entirely on real, live-pulled market data — historical financials, beta, Treasury yield, and peer trading multiples, not synthetic inputs.',
    bullets: [
      'Computed WACC from CAPM (real beta, live 10-year Treasury yield) and projected 5-year free cash flow, cross-checking Gordon Growth and exit-multiple terminal value methods against a live 5-peer comps set.',
      'Delivered a full sensitivity grid (WACC × terminal growth, WACC × exit multiple) and a football-field valuation summary comparing DCF and comps ranges against the current market price.',
    ],
    stack: ['Python', 'yfinance', 'DCF Modeling', 'Excel'],
    githubUrl: 'https://github.com/ujwal123ojaswi-star/dcf-valuation-comps',
    demoUrl: 'https://dcf-comps-demo.vercel.app',
    metrics: [
      { label: 'WACC', value: 8.16, max: 15, displayValue: '8.16%' },
    ],
  },
  {
    id: 'fpa-budget-forecast',
    title: 'FP&A: Budget vs Actual & Rolling Forecast',
    description:
      '3 years of monthly Budget vs Actual data across 3 product lines and 3 opex departments, with price/volume variance decomposition, an operating income bridge, and a driver-based rolling 12-month forecast.',
    bullets: [
      'Decomposed revenue variance into price and volume effects (exact bridge) and built a full FY operating income bridge from Budget to Actual across 3 product lines and 3 departments.',
      'Built a driver-based rolling forecast with Best/Base/Worst scenarios, back-tested against a prior fiscal year for a real forecast-accuracy figure (12% MAPE) rather than an untested method.',
    ],
    stack: ['Python', 'Excel', 'FP&A', 'Variance Analysis'],
    githubUrl: 'https://github.com/ujwal123ojaswi-star/fpa-budget-forecast',
    demoUrl: 'https://fpa-forecast-demo.vercel.app',
    metrics: [
      { label: 'Revenue Attainment (FY25)', value: 98.2, max: 100, displayValue: '98.2%' },
    ],
  },
  {
    id: 'walget-retail-profitability',
    title: 'Retail Profitability Analysis (Walmart vs Target)',
    description:
      'Analyzed 18 years (2008-2026) of Walmart and Target SEC filings and FRED macro data to compare gross- and operating-margin durability across cost-leadership and differentiation strategies through demand and inflation shocks.',
    bullets: [
      'Computed gross- and operating-margin volatility (std. dev.) across 144 company-quarters from a DuckDB + dbt warehouse: Target runs higher average margins, but Walmart’s are structurally steadier — 3.8x lower gross-margin volatility and 2.2x lower operating-margin volatility than Target.',
      'Delivered the analysis as an interactive dashboard for non-technical stakeholders, with automated data-quality checks (not-null, uniqueness, referential integrity, accepted-range on margins) ensuring reliable underlying numbers.',
    ],
    stack: ['Python', 'DuckDB', 'dbt', 'Streamlit'],
    githubUrl: 'https://github.com/ujwal123ojaswi-star/retail-profitability-pipeline',
    demoUrl: 'https://retail-profitability-demo.vercel.app',
    metrics: [
      { label: 'Margin volatility (TGT vs WMT, gross)', value: 3.8, max: 5, displayValue: '3.8x higher at TGT' },
    ],
  },
  {
    id: 'portfolio-optimization',
    title: 'Portfolio Optimization (Modern Portfolio Theory)',
    description:
      'Markowitz efficient-frontier optimizer over a 10-asset basket, using 5 years of real historical prices pulled live via yfinance.',
    bullets: [
      'Ran a 6,000-portfolio Monte Carlo simulation and solved the efficient frontier via constrained optimization (SciPy SLSQP), identifying a max-Sharpe portfolio at Sharpe 1.24.',
      'Compared Max Sharpe, Min Volatility, and Equal Weight allocations with correlation and cumulative-return analysis across the basket.',
    ],
    stack: ['Python', 'SciPy', 'yfinance', 'Streamlit'],
    githubUrl: 'https://github.com/ujwal123ojaswi-star/portfolio-optimization',
    demoUrl: 'https://portfolio-opt-demo.vercel.app',
    metrics: [
      { label: 'Best Sharpe ratio', value: 1.24, displayValue: '1.24' },
    ],
  },
  {
    id: 'credit-risk-scoring',
    title: 'Credit Risk Scoring — Default Prediction (UCI Credit Card Clients)',
    description:
      'Credit-risk scorecard on 30,000 real Taiwanese credit card accounts (UCI "Default of Credit Card Clients" dataset) — feature-engineered utilization, payment-coverage, and delinquency-history signals, validated with the metrics a retail bank’s risk team actually uses.',
    bullets: [
      'Engineered 20 behavioral features from repayment-status history and 6 months of bill/payment amounts (utilization ratios, payment-to-bill coverage, delinquency streaks) instead of feeding raw columns into the model; trained logistic regression and a sample-weighted gradient boosting model against the 22.1% default rate.',
      'Validated with real scorecard metrics — ROC-AUC 0.777, Gini coefficient 0.555, KS statistic 0.417 — and a risk-decile loss-concentration analysis showing the riskiest 10% of borrowers account for 31.2% of all defaults (69.1% default rate vs. a 22.1% portfolio average), plus a calibration check confirming the score is well rank-ordered.',
    ],
    stack: ['Python', 'Scikit-Learn', 'Gradient Boosting', 'Credit Risk Analytics'],
    githubUrl: 'https://github.com/ujwal123ojaswi-star/credit-risk-scoring',
    demoUrl: 'https://credit-risk-demo-six.vercel.app',
    metrics: [
      { label: 'ROC-AUC (Gradient Boosting)', value: 0.777, max: 1, displayValue: '0.777' },
      { label: 'Top-decile default capture', value: 31.2, max: 100, displayValue: '31.2%' },
    ],
  },
  {
    id: 'sec-filing-rag',
    title: 'SEC Filing RAG Assistant',
    description:
      'Retrieval-augmented Q&A over SEC 10-K filings, answering plain-English questions with citations to the exact filing passages.',
    bullets: [
      'Built a DuckDB vector store over embedded 10-K chunks, retrieving top-k passages by cosine similarity for grounded, cited answers.',
      'Structured risk-factor extraction and side-by-side company comparison across filings, with the model instructed to refuse when the filings don’t support an answer.',
    ],
    stack: ['Python', 'DuckDB', 'RAG', 'Streamlit', 'Gemini'],
    githubUrl: 'https://github.com/ujwal123ojaswi-star/sec-filing-rag',
    demoUrl: 'https://sec-filing-rag-hgkkrmujxdkjrwcjfzrvd9.streamlit.app/',
  },
  {
    id: 'supply-chain-ariba-analytics',
    title: 'Supply Chain & Procurement Analytics (SAP Ariba-Modeled)',
    description:
      'Procurement analytics on data modeled after SAP Ariba’s real data structures (Supplier Master, Purchase Orders, Invoices, Sourcing Events, Contracts) — 45 suppliers, 1,106 POs/invoices across 24 months, 14 sourcing events.',
    bullets: [
      'Built a three-way match engine comparing PO vs. invoiced price/quantity across 1,106 PO↔invoice pairs, flagging 85 exceptions (7.69% exception rate) representing $882,620 in invoice value above the matching PO amount.',
      'Identified $131.1M (46.2%) of PO spend as maverick (off-contract), and built a supplier risk & performance scorecard classifying suppliers into Low Risk / Watch / High Risk tiers.',
      'Tracked 14 sourcing events realizing $2.73M in savings (11.5% average), and built ABC/Pareto spend analysis by category and supplier, delivered as a buyer-ready Excel workbook alongside a live dashboard.',
    ],
    stack: ['Python', 'SAP Ariba', 'Procurement Analytics', 'Excel'],
    githubUrl: 'https://github.com/ujwal123ojaswi-star/supply-chain-ariba-analytics',
    demoUrl: 'https://ariba-analytics-demo.vercel.app',
    metrics: [
      { label: 'Sourcing savings realized', value: 2731213, max: 24779490, displayValue: '$2.73M (11.5%)' },
    ],
  },
]
