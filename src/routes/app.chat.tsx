import { createFileRoute } from '@tanstack/react-router';
import { ChatScreen } from '@/components/app/ChatScreen';
export const Route=createFileRoute('/app/chat')({
 head:()=>({meta:[{title:'Chat — SlashCompute app preview'},{name:'description',content:'Interactive SlashCompute chat workspace preview in the dark mechanical app style.'},{property:'og:title',content:'SlashCompute Chat app preview'},{property:'og:description',content:'Explore the chat screen in an interactive, simulated SlashCompute app.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:ChatScreen,
});
