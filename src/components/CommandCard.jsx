import React from 'react';
import { Copy, Check } from 'lucide-react';

const CommandCard = ({ command, index, copiedCommand, onCopy }) => {
  const getToolColorClasses = (color) => {
    const colors = {
      'blue': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'orange': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'purple': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'green': 'bg-green-500/20 text-green-400 border-green-500/30',
      'cyan': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 animate-fade-in">
      {/* Tool & Category Badges */}
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getToolColorClasses(command.toolColor)}`}>
            {command.tool}
          </span>
          <span className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs font-medium rounded">
            {command.category}
          </span>
        </div>
        <button
          onClick={() => onCopy(command.command, index)}
          className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white transition-all"
          title="Copy to clipboard"
          aria-label="Copy command to clipboard"
        >
          {copiedCommand === index ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Command */}
      <div className="mb-3 font-mono text-sm bg-slate-950/60 rounded-lg p-3 border border-slate-700/30">
        <code className="text-cyan-300 break-all">{command.command}</code>
      </div>

      {/* Description */}
      <p className="text-slate-300 text-sm leading-relaxed">
        {command.description}
      </p>
    </div>
  );
};

export default CommandCard;
