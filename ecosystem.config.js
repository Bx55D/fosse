module.exports = {
apps: [{
 name: 'fosse-creative',
 script: 'pnpm',
 args: 'start',
 cwd: '/home/bud/fosse',
 env: {
   NODE_ENV: 'production',
   PORT: 3001
 },
 instances: 1,
 autorestart: true,
 watch: false,
 max_memory_restart: '1G'
}]
}

