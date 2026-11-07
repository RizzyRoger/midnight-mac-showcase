import { createFileRoute } from '@tanstack/react-router';
import { CodeScreen } from '@/components/app/CodeScreen';
export const Route=createFileRoute('/app/code')({
 head:()=>({meta:[{title:'Code — SlashCompute app preview'},{name:'description',content:'Interactive SlashCompute code workspace preview in the dark mechanical app style.'},{property:'og:title',content:'SlashCompute Code app preview'},{property:'og:description',content:'Explore the code screen in an interactive, simulated SlashCompute app.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:CodeScreen,
});
