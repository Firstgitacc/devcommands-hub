import React from 'react';
import { Terminal } from 'lucide-react';

const Header = ({ totalCommands }) => {
  return (
    <div className="mb-8 text-center">
      <div className="flex items-center justify-center gap-3 mb-3">
        <Terminal className="w-12 h-12 text-cyan-400" />
        <h1 className="text-4xl sm:text-6xl font-bold text-white">
          DevCommands Hub
        </h1>
      </div>
      <p className="text-slate-400 text-lg">
        Your comprehensive collection of developer commands across Docker, Git, Kubernetes & Shell
      </p>
      <div className="mt-4 flex items-center justify-center gap-4 text-sm text-slate-500">
        <span className="flex items-center gap-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          {totalCommands} Total Commands
        </span>
      </div>
    </div>
  );
};

export default Header;
