import React from 'react';
import { Search, Filter } from 'lucide-react';

const SearchBar = ({ 
  searchTerm, 
  onSearchChange, 
  tools, 
  selectedTool, 
  onToolSelect,
  categories,
  selectedCategory,
  onCategorySelect
}) => {
  return (
    <div className="mb-6 backdrop-blur-md bg-slate-800/40 border border-slate-700/50 rounded-2xl p-4 shadow-2xl">
      {/* Search Input */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search commands or descriptions..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-slate-900/60 text-white placeholder-slate-500 pl-12 pr-4 py-4 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-lg"
          aria-label="Search commands"
        />
      </div>

      {/* Tool Filter */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="text-slate-400 text-sm font-medium">Filter by Tool:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onToolSelect('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedTool === 'all'
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 border border-slate-700/50'
            }`}
          >
            All
          </button>
          {tools.map(tool => (
            <button
              key={tool}
              onClick={() => onToolSelect(tool)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedTool === tool
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 border border-slate-700/50'
              }`}
            >
              {tool}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="text-slate-400 text-sm font-medium">Filter by Category:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => onCategorySelect(cat)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/30'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 border border-slate-700/50'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
