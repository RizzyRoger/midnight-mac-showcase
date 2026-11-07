import type { ReactNode, InputHTMLAttributes } from 'react';
import { Button } from '@/components/ui/button';
import { previewModels } from '@/lib/app-preview';
export function Field({label,...props}:InputHTMLAttributes<HTMLInputElement> & {label:string}) { return <label className="preview-field"><span>{label}</span><input {...props} /></label>; }
export function ModelSelect({value,onChange}:{value:string;onChange:(s:string)=>void}) {return <label className="preview-field"><span>Model <span className="text-muted-foreground">/ sample catalog</span></span><select value={value} onChange={e=>onChange(e.target.value)}>{previewModels.map(m=><option key={m}>{m}</option>)}</select></label>}
export function ScreenTitle({number,title,status,children}:{number:string;title:string;status?:string;children?:ReactNode}) {return <header className="preview-screen-title"><div><p className="label-mono text-muted-foreground">/{number} · Workspace</p><h1>{title}</h1></div><div className="flex flex-wrap items-center gap-3">{status&&<span className="preview-status">{status}</span>}{children}</div></header>}
export function PanelTitle({children,aside}:{children:ReactNode;aside?:ReactNode}){return <div className="preview-panel-title"><h2>{children}</h2>{aside}</div>}
export function Refresh({onClick}:{onClick:()=>void}) {return <Button variant="ghost" size="icon" className="preview-icon" title="Refresh" aria-label="Refresh" onClick={onClick}>↻</Button>}
export function StatusLine({children}:{children:ReactNode}){return <p className="preview-footnote">{children}</p>}
