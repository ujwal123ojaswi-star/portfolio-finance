import type { Project } from '@/types'

export const projects: Project[] = [
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
