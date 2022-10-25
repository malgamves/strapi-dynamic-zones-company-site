module.exports = {
    timeout: 10000,
    load: {
      before: ['hook-1', 'hook-2'],
      order: ["Define the hooks' load order by putting their names in this array in the right order"],
      after: ['hook-3', 'hook4'],
    },
    settings: {
      'hook-1': {
        enabled: true,
      },
      'hook-2': {
        enabled: true,
      },
      'hook-3': {
        enabled: true,
      },
      hook4: {
        enabled: true,
      },
    },
  };
  