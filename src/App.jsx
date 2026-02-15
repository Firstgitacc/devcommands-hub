import React, { useState, useMemo } from 'react';
import { loadAllCommands, getTools, getStatistics } from './utils/dataLoader';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CommandCard from './components/CommandCard';
import Statistics from './components/Statistics';
import EmptyState from './components/EmptyState';
import './styles/index.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedCommand, setCopiedCommand] = useState(null);
  const [selectedTool, setSelectedTool] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Load all commands from JSON files
  const allCommands = useMemo(() => loadAllCommands(), []);
  
  // Get tools list
  const tools = useMemo(() => getTools(), []);
  
  // Get statistics
  const stats = useMemo(() => getStatistics(), []);

  // Get categories based on selected tool
  const categories = useMemo(() => {
    if (selectedTool === 'all') {
      return ['all', ...new Set(allCommands.map(cmd => cmd.category))];
    }
    return ['all', ...new Set(allCommands.filter(cmd => cmd.tool === selectedTool).map(cmd => cmd.category))];
  }, [allCommands, selectedTool]);

  // Filter commands based on search and filters
  const filteredCommands = useMemo(() => {
    return allCommands.filter(cmd => {
      const matchesSearch = cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          cmd.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTool = selectedTool === 'all' || cmd.tool === selectedTool;
      const matchesCategory = selectedCategory === 'all' || cmd.category === selectedCategory;
      return matchesSearch && matchesTool && matchesCategory;
    });
  }, [allCommands, searchTerm, selectedTool, selectedCategory]);

  // Handle tool selection
  const handleToolSelect = (tool) => {
    setSelectedTool(tool);
    setSelectedCategory('all');
  };

  // Copy to clipboard
  const handleCopy = (command, index) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(index);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Header totalCommands={allCommands.length} />

        {/* Search and Filters */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          tools={tools}
          selectedTool={selectedTool}
          onToolSelect={handleToolSelect}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        {/* Results Count */}
        <div className="mb-4 text-slate-400 text-sm">
          Showing {filteredCommands.length} command{filteredCommands.length !== 1 ? 's' : ''}
          {selectedTool !== 'all' && ` from ${selectedTool}`}
          {selectedCategory !== 'all' && ` in ${selectedCategory}`}
        </div>

        {/* Commands Grid */}
        {filteredCommands.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
            {filteredCommands.map((cmd, index) => (
              <CommandCard
                key={index}
                command={cmd}
                index={index}
                copiedCommand={copiedCommand}
                onCopy={handleCopy}
              />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}

        {/* Statistics Footer */}
        <Statistics stats={stats} />
      </div>
    </div>
  );
}

export default App;
