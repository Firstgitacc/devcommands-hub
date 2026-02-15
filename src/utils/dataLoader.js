// Import all JSON files from the data directory
import dockerData from '../data/docker.json';
import gitData from '../data/git.json';
import kubernetesData from '../data/kubernetes.json';
import shellData from '../data/shell.json';

/**
 * Data loader utility
 * This file automatically loads all JSON files from the data directory
 * To add a new command set, simply:
 * 1. Add your new JSON file to src/data/
 * 2. Import it above
 * 3. Add it to the dataSources array below
 */

const dataSources = [
  { name: 'Docker', data: dockerData, color: 'blue' },
  { name: 'Git', data: gitData, color: 'orange' },
  { name: 'Kubernetes', data: kubernetesData, color: 'purple' },
  { name: 'Shell', data: shellData, color: 'green' },
];

/**
 * Loads and combines all command data from JSON files
 * @returns {Array} Array of command objects with tool and category
 */
export const loadAllCommands = () => {
  const allCommands = [];

  dataSources.forEach(source => {
    source.data.forEach(section => {
      section.commands.forEach(cmd => {
        allCommands.push({
          ...cmd,
          tool: source.name,
          toolColor: source.color,
          category: section.category
        });
      });
    });
  });

  return allCommands;
};

/**
 * Get unique tools from all data sources
 * @returns {Array} Array of tool names
 */
export const getTools = () => {
  return dataSources.map(source => source.name);
};

/**
 * Get tool color
 * @param {string} toolName - Name of the tool
 * @returns {string} Color name
 */
export const getToolColor = (toolName) => {
  const source = dataSources.find(s => s.name === toolName);
  return source ? source.color : 'cyan';
};

/**
 * Get statistics about commands
 * @returns {Object} Statistics object
 */
export const getStatistics = () => {
  const commands = loadAllCommands();
  const stats = {
    total: commands.length,
    byTool: {}
  };

  dataSources.forEach(source => {
    stats.byTool[source.name] = commands.filter(cmd => cmd.tool === source.name).length;
  });

  return stats;
};

export default {
  loadAllCommands,
  getTools,
  getToolColor,
  getStatistics
};
