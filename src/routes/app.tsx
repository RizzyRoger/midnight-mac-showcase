import { createFileRoute, redirect, Outlet } from '@tanstack/react-router';
export const Route=createFileRoute('/app')({beforeLoad:()=>{throw redirect({to:'/compare'});},component:Outlet});
