import { createFileRoute } from '@tanstack/react-router';
import { WalletScreen } from '@/components/app/WalletScreen';
export const Route=createFileRoute('/app/wallet')({
 head:()=>({meta:[{title:'Wallet — SlashCompute app preview'},{name:'description',content:'Interactive SlashCompute wallet workspace preview in the dark mechanical app style.'},{property:'og:title',content:'SlashCompute Wallet app preview'},{property:'og:description',content:'Explore the wallet screen in an interactive, simulated SlashCompute app.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
 component:WalletScreen,
});
