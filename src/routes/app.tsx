import { createFileRoute, redirect, Outlet } from '@tanstack/react-router';
export const Route=createFileRoute('/app')({beforeLoad:({location})=>{if(location.pathname !== '/app' && location.pathname !== '/app/') throw redirect({to:'/app'});},component:Outlet});
