import { createFileRoute } from '@tanstack/react-router';
import { ConnectScreen } from '@/components/app/ConnectScreen';
export const Route=createFileRoute('/app/connect')({
 head:()=>({meta:[{title:'Connect — SlashCompute app preview'},{name:'description',content:'Interactive SlashCompute connect workspace preview in the dark mechanical app style.'},{property:'og:title',content:'SlashCompute Connect app preview'},{property:'og:description',content:'Explore the connect screen in an interactive, simulated SlashCompute app.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:ConnectScreen,
});
