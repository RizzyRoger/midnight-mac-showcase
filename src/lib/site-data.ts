// Sample data only — all numbers, names and prices are placeholders.
export const leaderboard = [
  { rank: 1, name: "m4max_unit", chip: "M4 Max · 128GB", jobs: 18420, credits: 92410 },
  { rank: 2, name: "studio_rack_02", chip: "M2 Ultra · 192GB", jobs: 16110, credits: 88030 },
  { rank: 3, name: "nightshift.dev", chip: "M3 Pro · 36GB", jobs: 9870, credits: 41250 },
  { rank: 4, name: "lab-mini-cluster", chip: "4× M4 mini", jobs: 9302, credits: 39880 },
  { rank: 5, name: "quietfan", chip: "M3 Max · 64GB", jobs: 7144, credits: 30120 },
  { rank: 6, name: "airbook_hero", chip: "M2 Air · 24GB", jobs: 3021, credits: 11090 },
];

export const models = [
  { name: "Qwen-Coder 32B", input: "0.40", cached: "0.08", output: "1.20", mode: "Single Mac" },
  { name: "DeepSeek-Coder 33B", input: "0.45", cached: "0.09", output: "1.35", mode: "Single Mac" },
  { name: "Llama 3.3 70B", input: "0.90", cached: "0.18", output: "2.70", mode: "Split ×2" },
  { name: "Qwen 2.5 72B", input: "0.95", cached: "0.19", output: "2.85", mode: "Split ×3" },
];

export const demoFiles = [
  "src/",
  "  auth/",
  "    login.ts",
  "    session.ts",
  "  routes/",
  "    index.ts",
  "tests/",
  "  login.test.ts",
  "package.json",
];
