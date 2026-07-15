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
    title: 'WALGET Retail Profitability Analysis',
    description:
      'Analyzed 10 years of Walmart and Target financial data (40+ quarterly filings) by integrating SEC 10-K data with FRED macroeconomic datasets.',
    bullets: [
      'Performed EDA, OLS/logistic regression, and ANOVA testing across 15+ financial variables to identify statistically significant drivers of revenue growth and margin performance.',
      'Built profitability dashboards that quantified a 3–5 percentage-point margin gap between cost-leadership and differentiation strategies over the 10-year period.',
    ],
    stack: ['Python', 'Pandas', 'Statistical Modeling'],
    githubUrl: 'https://github.com/ujwal123ojaswi-star/retail-profitability-pipeline',
    demoUrl: 'https://retail-profitability-pipeline-qp88mbfowdehta4ptt4du2.streamlit.app/',
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
    id: 'credit-risk-prediction',
    title: 'Credit Risk Prediction Using Machine Learning',
    description:
      'End-to-end credit risk model on the German Credit Dataset (1,000 borrower records, 20+ features) to classify low/high-risk borrowers.',
    bullets: [
      'Applied feature engineering, one-hot encoding, and SMOTE balancing, improving minority-class (default) recall by an estimated 15–20% over the baseline model.',
      'Benchmarked 7 classification algorithms (Random Forest, Logistic Regression, SVM, Decision Tree, KNN, Naïve Bayes, Neural Networks); achieved 82–83% accuracy and 0.91 ROC-AUC with Random Forest, the top performer.',
    ],
    stack: ['Python', 'Scikit-Learn', 'SMOTE', 'Risk Analytics'],
    githubUrl: '#',
    demoUrl: '#',
    metrics: [
      { label: 'Accuracy (Random Forest)', value: 82.5, displayValue: '82–83%' },
      { label: 'ROC-AUC', value: 0.91, max: 1, displayValue: '0.91' },
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
]
