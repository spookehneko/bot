module.exports = {
  apps: [
    {
      name: "fire",
      script: "dist/src/index.js",
      exec_mode: "cluster",
      instances: 2,
      wait_ready: true,
      kill_timeout: 3000,
      post_update: ["yarn compile"],
      automation: false,
      env: {
        NODE_ENV: "production",
      },
      max_restarts: 5,
      max_memory_restart: "1G",
      exp_backoff_restart_delay: 2500,
      // node_args: "--expose-gc",
    },
    {
      name: "firedev",
      script: "dist/src/index.js",
      automation: false,
      kill_timeout: 3000,
      post_update: ["yarn compile"],
      env: {
        NODE_ENV: "development",
      },
      max_restarts: 5,
      max_memory_restart: "1G",
      exp_backoff_restart_delay: 2500,
      // node_args: "--expose-gc",
    },
    {
      name: "firelc",
      script: "dist/src/index.js",
      kill_timeout: 3000,
      post_update: ["yarn compile"],
      automation: false,
      env: {
        NODE_ENV: "litecord",
      },
      max_restarts: 5,
      max_memory_restart: "1G",
      exp_backoff_restart_delay: 2500,
      // node_args: "--expose-gc",
    },
    {
      name: "firedev-clustered",
      script: "dist/src/index.js",
      exec_mode: "cluster",
      instances: 1,
      wait_ready: true,
      kill_timeout: 3000,
      post_update: ["yarn compile"],
      automation: false,
      env: {
        NODE_ENV: "development",
      },
      max_restarts: 5,
      max_memory_restart: "1G",
      exp_backoff_restart_delay: 2500,
      // node_args: "--expose-gc",
    },
    {
      name: "firelc-clustered",
      script: "dist/src/index.js",
      exec_mode: "cluster",
      instances: 1,
      wait_ready: true,
      kill_timeout: 3000,
      post_update: ["yarn compile"],
      automation: false,
      env: {
        NODE_ENV: "litecord",
      },
      max_restarts: 5,
      max_memory_restart: "1G",
      exp_backoff_restart_delay: 2500,
      // node_args: "--expose-gc",
    },
    {
      name: "fire-beta",
      script: "dist/src/index.js",
      exec_mode: "cluster",
      instances: 1,
      wait_ready: true,
      kill_timeout: 3000,
      post_update: ["yarn compile"],
      automation: false,
      env: {
        NODE_ENV: "development",
      },
      max_restarts: 5,
      max_memory_restart: "1G",
      exp_backoff_restart_delay: 2500,
      // node_args: "--expose-gc",
    },
  ],
};
