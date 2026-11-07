import { createFileRoute } from '@tanstack/react-router';
import { ContributeScreen } from '@/components/app/ContributeScreen';
export const Route=createFileRoute('/app/contribute')({
 head:()=>({meta:[{title:'Contribute — SlashCompute app preview'},{name:'description',content:'Interactive SlashCompute contribute workspace preview in the dark mechanical app style.'},{property:'og:title',content:'SlashCompute Contribute app preview'},{property:'og:description',content:'Explore the contribute screen in an interactive, simulated SlashCompute app.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:ContributeScreen,
});
