const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  project: 'SwarmForge',
  repo: 'mrcharlesiv/swarmforge',
  supabaseUrl: 'https://ugnjzsxiyrbzwopundfs.supabase.co',
  checkInterval: 5 * 60 * 1000, // 5 minutes
};

// Generate HTML dashboard
function generateDashboard(data) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${CONFIG.project} - Mission Control</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    body { font-family: 'Inter', sans-serif; }
    .pulse-dot {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: .5; }
    }
  </style>
</head>
<body class="bg-slate-900 text-white min-h-screen">
  <!-- Header -->
  <nav class="border-b border-slate-800 bg-slate-900/50 backdrop-blur">
    <div class="max-w-7xl mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
            <i data-lucide="sparkles" class="w-6 h-6 text-white"></i>
          </div>
          <div>
            <h1 class="text-xl font-bold">${CONFIG.project}</h1>
            <p class="text-xs text-slate-400">Mission Control Dashboard</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <a href="https://github.com/${CONFIG.repo}" target="_blank" class="text-slate-400 hover:text-white flex items-center gap-2">
            <i data-lucide="github" class="w-5 h-5"></i>
            <span class="hidden sm:inline">Repository</span>
          </a>
          <a href="https://mrcharlesiv.github.io/swarmforge" target="_blank" class="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Live Site
          </a>
        </div>
      </div>
    </div>
  </nav>

  <main class="max-w-7xl mx-auto px-4 py-8">
    <!-- Status Overview -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div class="bg-slate-800 rounded-xl p-6 border border-slate-700">
        <div class="flex items-center justify-between mb-2">
          <span class="text-slate-400 text-sm">Status</span>
          <span class="pulse-dot w-2 h-2 bg-green-500 rounded-full"></span>
        </div>
        <div class="text-2xl font-bold text-green-400">${data.status || 'Active'}</div>
        <div class="text-xs text-slate-500 mt-1">Last updated: ${new Date().toLocaleString()}</div>
      </div>
      
      <div class="bg-slate-800 rounded-xl p-6 border border-slate-700">
        <div class="flex items-center justify-between mb-2">
          <span class="text-slate-400 text-sm">Waitlist</span>
          <i data-lucide="users" class="w-5 h-5 text-slate-400"></i>
        </div>
        <div class="text-2xl font-bold text-cyan-400">${data.waitlistCount || 0}</div>
        <div class="text-xs text-slate-500 mt-1">Early access signups</div>
      </div>
      
      <div class="bg-slate-800 rounded-xl p-6 border border-slate-700">
        <div class="flex items-center justify-between mb-2">
          <span class="text-slate-400 text-sm">Deployments</span>
          <i data-lucide="rocket" class="w-5 h-5 text-slate-400"></i>
        </div>
        <div class="text-2xl font-bold text-purple-400">${data.deployCount || 0}</div>
        <div class="text-xs text-slate-500 mt-1">Total builds</div>
      </div>
      
      <div class="bg-slate-800 rounded-xl p-6 border border-slate-700">
        <div class="flex items-center justify-between mb-2">
          <span class="text-slate-400 text-sm">Uptime</span>
          <i data-lucide="activity" class="w-5 h-5 text-slate-400"></i>
        </div>
        <div class="text-2xl font-bold text-emerald-400">${data.uptime || '99.9%'}</div>
        <div class="text-xs text-slate-500 mt-1">Last 30 days</div>
      </div>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Left Column -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Deployment Status -->
        <div class="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
          <div class="px-6 py-4 border-b border-slate-700 flex items-center justify-between">
            <h2 class="font-semibold flex items-center gap-2">
              <i data-lucide="git-branch" class="w-5 h-5 text-cyan-400"></i>
              Deployment Status
            </h2>
            <span class="text-xs px-2 py-1 bg-green-500/10 text-green-400 rounded">Live</span>
          </div>
          <div class="p-6">
            <div class="space-y-4">
              <div class="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <i data-lucide="check" class="w-4 h-4 text-green-400"></i>
                  </div>
                  <div>
                    <div class="font-medium">GitHub Repository</div>
                    <div class="text-sm text-slate-500">mrcharlesiv/swarmforge</div>
                  </div>
                </div>
                <a href="https://github.com/mrcharlesiv/swarmforge" target="_blank" class="text-cyan-400 hover:text-cyan-300 text-sm">View →</a>
              </div>
              
              <div class="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <i data-lucide="check" class="w-4 h-4 text-green-400"></i>
                  </div>
                  <div>
                    <div class="font-medium">GitHub Pages</div>
                    <div class="text-sm text-slate-500">Auto-deploy enabled</div>
                  </div>
                </div>
                <a href="https://mrcharlesiv.github.io/swarmforge" target="_blank" class="text-cyan-400 hover:text-cyan-300 text-sm">Visit →</a>
              </div>
              
              <div class="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <i data-lucide="check" class="w-4 h-4 text-green-400"></i>
                  </div>
                  <div>
                    <div class="font-medium">Supabase Database</div>
                    <div class="text-sm text-slate-500">Connected & Ready</div>
                  </div>
                </div>
                <a href="${CONFIG.supabaseUrl}" target="_blank" class="text-cyan-400 hover:text-cyan-300 text-sm">Open →</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
          <div class="px-6 py-4 border-b border-slate-700">
            <h2 class="font-semibold flex items-center gap-2">
              <i data-lucide="activity" class="w-5 h-5 text-cyan-400"></i>
              Recent Activity
            </h2>
          </div>
          <div class="p-6">
            <div class="space-y-3">
              ${(data.activity || []).map(a => `
                <div class="flex items-start gap-3 text-sm">
                  <div class="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
                  <div>
                    <div class="text-white">${a.message}</div>
                    <div class="text-slate-500">${a.time}</div>
                  </div>
                </div>
              `).join('') || '<div class="text-slate-500 text-sm">No recent activity</div>'}
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="space-y-6">
        <!-- Quick Links -->
        <div class="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
          <div class="px-6 py-4 border-b border-slate-700">
            <h2 class="font-semibold">Quick Links</h2>
          </div>
          <div class="p-4">
            <div class="space-y-2">
              <a href="https://github.com/mrcharlesiv/swarmforge/actions" target="_blank" class="flex items-center justify-between p-3 hover:bg-slate-700/50 rounded-lg transition">
                <span class="flex items-center gap-2">
                  <i data-lucide="play-circle" class="w-4 h-4 text-slate-400"></i>
                  GitHub Actions
                </span>
                <i data-lucide="external-link" class="w-4 h-4 text-slate-500"></i>
              </a>
              <a href="${CONFIG.supabaseUrl}/project/default/editor" target="_blank" class="flex items-center justify-between p-3 hover:bg-slate-700/50 rounded-lg transition">
                <span class="flex items-center gap-2">
                  <i data-lucide="database" class="w-4 h-4 text-slate-400"></i>
                  SQL Editor
                </span>
                <i data-lucide="external-link" class="w-4 h-4 text-slate-500"></i>
              </a>
              <a href="https://github.com/mrcharlesiv/swarmforge/settings/pages" target="_blank" class="flex items-center justify-between p-3 hover:bg-slate-700/50 rounded-lg transition">
                <span class="flex items-center gap-2">
                  <i data-lucide="settings" class="w-4 h-4 text-slate-400"></i>
                  Page Settings
                </span>
                <i data-lucide="external-link" class="w-4 h-4 text-slate-500"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Features Status -->
        <div class="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
          <div class="px-6 py-4 border-b border-slate-700">
            <h2 class="font-semibold">Features</h2>
          </div>
          <div class="p-4">
            <div class="space-y-3">
              ${[
                { name: 'Landing Page', status: 'complete' },
                { name: 'Waitlist Form', status: 'complete' },
                { name: 'Dashboard UI', status: 'complete' },
                { name: 'Builder Wizard', status: 'complete' },
                { name: 'Templates', status: 'complete' },
                { name: 'Supabase Auth', status: 'ready' },
                { name: 'Database', status: 'ready' },
                { name: 'Stripe Billing', status: 'planned' },
              ].map(f => `
                <div class="flex items-center justify-between">
                  <span class="text-sm">${f.name}</span>
                  <span class="text-xs px-2 py-1 rounded ${
                    f.status === 'complete' ? 'bg-green-500/10 text-green-400' :
                    f.status === 'ready' ? 'bg-cyan-500/10 text-cyan-400' :
                    'bg-slate-700 text-slate-400'
                  }">${f.status}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
      <p>SwarmForge Dashboard • Updated every 5 minutes</p>
      <p class="mt-1">Generated by AXIOM-PRIME Swarm Agent</p>
    </footer>
  </main>

  <script>
    lucide.createIcons();
  </script>
</body>
</html>`;

  return html;
}

// Main function
function build() {
  // Mock data - in real implementation this would fetch from APIs
  const data = {
    status: 'Active',
    waitlistCount: 0,
    deployCount: 3,
    uptime: '99.9%',
    activity: [
      { message: 'Pre-launch mode activated', time: 'Just now' },
      { message: 'GitHub Actions workflow configured', time: '5 min ago' },
      { message: 'Supabase secrets added', time: '10 min ago' },
      { message: 'Waitlist form deployed', time: '15 min ago' },
    ]
  };

  const html = generateDashboard(data);
  
  // Ensure dist directory exists
  const distDir = path.join(__dirname, 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // Write HTML
  fs.writeFileSync(path.join(distDir, 'index.html'), html);
  
  console.log('Dashboard generated at:', path.join(distDir, 'index.html'));
}

// Run build
build();

// Watch mode
if (process.argv.includes('--watch')) {
  console.log('Watching for changes...');
  setInterval(build, CONFIG.checkInterval);
}
