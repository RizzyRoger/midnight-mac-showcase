import { createFileRoute } from '@tanstack/react-router';
import { LeaderboardScreen } from '@/components/app/LeaderboardScreen';
export const Route=createFileRoute('/app/leaderboard')({
 head:()=>({meta:[{title:'Leaderboard — SlashCompute app preview'},{name:'description',content:'Interactive SlashCompute leaderboard workspace preview in the dark mechanical app style.'},{property:'og:title',content:'SlashCompute Leaderboard app preview'},{property:'og:description',content:'Explore the leaderboard screen in an interactive, simulated SlashCompute app.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:LeaderboardScreen,
});
