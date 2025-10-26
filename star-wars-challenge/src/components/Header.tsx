import { Link, useLocation } from 'react-router-dom'
import TeamRail from './team/TeamRail'

export default function Header() {
    const { pathname } = useLocation()
    return (
        <header className="sticky top-0 z-20 border-b bg-neutral-950/80 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-black">⚔️ Rebel Recruiter</span>
                    <span className="rounded-full border px-2 py-0.5 text-xs">No Sith</span>
                    <span className="rounded-full border px-2 py-0.5 text-xs">No Darth</span>
                </div>
                <nav className="flex items-center gap-2">
                    <Link className={`rounded-lg px-3 py-1.5 text-sm hover:bg-neutral-800 ${pathname === "/" ?
                    'bg-neutral-800' : ''}`} to="/">Characters</Link>
                    <Link className={`rounded-lg px-3 py-1.5 text-sm hover:bg-neutral-800 ${pathname === '/team' ? 'bg-neutral-800' : ''}`} to="/team">Team</Link>
                </nav>
            </div>
            <div className="mx-auto max-w-7xl px-4 pb-2">
                <TeamRail />
            </div>
        </header>
    )
}