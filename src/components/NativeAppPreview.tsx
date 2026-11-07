import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const screens = ['connect', 'account', 'contribute', 'chat', 'code', 'wallet', 'leaderboard'] as const;

export function NativeAppPreview() {
  const [screen, setScreen] = useState<typeof screens[number]>('connect');
  return <div className="preview-comparison native-final-preview">
    <header className="comparison-topbar">
      <Link to="/app" className="preview-brand"><span>/</span>COMPUTE <small>MAC APP</small></Link>
      <Button asChild variant="brutOutline"><Link to="/website">Website <ArrowUpRight /></Link></Button>
    </header>
    <nav className="comparison-screen-nav" aria-label="App screens">
      {screens.map(s => <Button key={s} variant="ghost" className={screen === s ? 'is-active' : ''} aria-pressed={screen === s} onClick={() => setScreen(s)}>{s.charAt(0).toUpperCase() + s.slice(1)}</Button>)}
    </nav>
    <iframe key={screen} className="native-final-frame" title="Final styled Mac app" src={`/reference/restyled-native-app.html#${screen}`} sandbox="allow-same-origin" />
    <footer className="preview-statusbar">Visual preview · native operations run in the Mac app</footer>
  </div>;
}