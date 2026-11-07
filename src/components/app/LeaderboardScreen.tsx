import { useState } from 'react';
import { Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScreenTitle, Refresh, StatusLine } from './Controls';
import { usePreview } from './PreviewContext';
export function LeaderboardScreen(){const p=usePreview();const [period,setPeriod]=useState('All time');return <><ScreenTitle number="07" title="Leaderboard" status="No live network data"><Refresh onClick={()=>p.setNotice('Leaderboard checked. No live coordinator connected.')}/></ScreenTitle><div className="preview-segments">{['All time','This week'].map(t=><Button key={t} variant="ghost" className={period===t?'is-active':''} aria-pressed={period===t} onClick={()=>setPeriod(t)}>{t}</Button>)}</div><div className="preview-board"><table><thead><tr><th>Rank</th><th>Contributor</th><th>Work (PFLOPs)</th></tr></thead><tbody><tr><td colSpan={3}><div className="preview-board-empty"><Trophy size={46} strokeWidth={1}/><h2>No rankings available.</h2><p>{period} · A live coordinator supplies contributor rankings.</p></div></td></tr></tbody></table></div><StatusLine>No fabricated contributor names, rankings or network statistics.</StatusLine></>}
