import React from 'react';

const Statistics = ({ stats }) => {
  const getColorClass = (tool) => {
    const colors = {
      'Docker': 'text-blue-400',
      'Git': 'text-orange-400',
      'Kubernetes': 'text-purple-400',
      'Shell': 'text-green-400'
    };
    return colors[tool] || 'text-cyan-400';
  };

  return (
    <div className="mt-12 pt-8 border-t border-slate-800">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {Object.entries(stats.byTool).map(([tool, count]) => (
          <div key={tool} className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/50">
            <div className={`text-2xl font-bold ${getColorClass(tool)}`}>
              {count}
            </div>
            <div className="text-slate-400 text-sm mt-1">{tool} Commands</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
