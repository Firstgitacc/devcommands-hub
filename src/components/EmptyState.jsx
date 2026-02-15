import React from 'react';
import { Terminal } from 'lucide-react';

const EmptyState = () => {
  return (
    <div className="text-center py-16">
      <Terminal className="w-16 h-16 text-slate-700 mx-auto mb-4" />
      <p className="text-slate-400 text-lg">No commands found</p>
      <p className="text-slate-500 text-sm mt-2">Try adjusting your search or filters</p>
    </div>
  );
};

export default EmptyState;
