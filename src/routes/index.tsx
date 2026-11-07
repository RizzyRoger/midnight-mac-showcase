import { createFileRoute, redirect } from '@tanstack/react-router';
export const Route = createFileRoute('/')({
 beforeLoad:()=>{throw redirect({to:'/app/connect'});},
 head:()=>({meta:[{title:'SlashCompute — Interactive app preview'},{name:'description',content:'Preview the SlashCompute Mac app: connect, contribute, chat, code, wallet and leaderboard.'},{property:'og:title',content:'SlashCompute interactive app preview'},{property:'og:description',content:'Explore all SlashCompute app screens in a dark mechanical workspace.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),
});