import React from 'react';
import MacWindow from './MacWindow';
import TerminalModule from 'react-console-emulator';
import './Cli.scss';

const Terminal = TerminalModule.default || TerminalModule;

const commands = {
  about: {
    description: 'About me',
    fn: () => `
Vishwaraj Singh Shekhawat
----------------------------------------
React Developer | AI/ML Enthusiast

• Builds scalable frontend systems
• Combines UI engineering with machine learning
• Focused on real-world, production-grade applications

Type 'projects' to explore work
`
  },

  projects: {
    description: 'View projects',
    fn: () => `
Projects
----------------------------------------
macos   : macOS-style portfolio UI
fraud   : Payment fraud detection system
ocr     : Inscription reader (OCR + NLP)

Run: open <project>
Example: open fraud
`
  },

  open: {
    description: 'Open project details',
    usage: 'open <name>',
    fn: (name) => {
      const data = {
        macos: `
MacOS Portfolio
----------------------------------------
• Built with React
• Custom window management system
• Interactive terminal and UI components
`,

        fraud: `
Fraud Detection System
----------------------------------------
• XGBoost and Logistic Regression
• Threshold optimization
• Leakage-free training pipeline
• Performance profiling
`,

        ocr: `
OCR + Translation System
----------------------------------------
• EasyOCR for text extraction
• Transformer-based translation
• Supports Tamil, Sanskrit, Hindi
`
      };

      return data[name] || "Project not found. Try: macos | fraud | ocr";
    }
  },

  skills: {
    description: 'Tech stack',
    fn: () => `
Tech Stack
----------------------------------------
Frontend:
React, Tailwind, Axios

Backend:
Node.js, Express (learning)

AI/ML:
Scikit-learn, XGBoost, EasyOCR

Tools:
Git, Docker, Streamlit
`
  },

  resume: {
    description: 'View resume',
    fn: () => 'https://your-portfolio-link/resume.pdf'
  },

  github: {
    description: 'GitHub profile',
    fn: () => 'https://github.com/yourusername'
  },

  contact: {
    description: 'Contact info',
    fn: () => `
Contact
----------------------------------------
Email: yourmail@gmail.com
LinkedIn: linkedin.com/in/yourprofile
`
  },

  whoami: {
    description: 'Why hire me',
    fn: () => `
Profile Summary
----------------------------------------
• Strong combination of frontend engineering and AI/ML
• Focus on real-world, production-oriented projects
• Emphasis on performance, clarity, and system design

Builds products, not just features
`
  }
};

const welcomeMessage = `
Booting VishwarajOS v1.0...
Loading modules [##########] 100%

Interactive developer terminal initialized.

Type 'help' to begin
`;

const Cli = ({windowName,setwindowsState}) => {
  return (
    <MacWindow windowName={windowName} setwindowsState={setwindowsState}>
      <div className="cliWin">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={'vishwaraj@dev:~$'}
          autoFocus={true}
          theme={{
            background: 'transparent',
            color: '#c9d1d9',
            promptColor: '#58a6ff',
            commandColor: '#ffffff'
          }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;