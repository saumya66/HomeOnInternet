import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Dial from './Dial'
import CaseStudy from './CaseStudy'
import { useDial } from '../hooks/useDial'
import { CASE_DATA } from '../data/siteData'

export const SiteContext = createContext({
  navigateTo: () => {},
  currentMode: 'home',
  openCase: () => {},
})

export default function SiteLayout({ children }) {
  const router = useRouter()
  const {
    currentMode,
    activeIdx,
    rotation,
    isDragging,
    nudge,
    dialRef,
    discRef,
    navigateTo,
    onPointerDown,
    onPointerMove,
    onPointerUp,
  } = useDial()

  const [caseKey, setCaseKey] = useState(null)

  /* keep body data-mode in sync with the current route */
  useEffect(() => {
    document.body.setAttribute('data-mode', currentMode)
  }, [currentMode])

  /* add js class to html so css :not(.js) fallbacks don't fire */
  useEffect(() => {
    document.documentElement.classList.add('js')
  }, [])

  function openCase(key) {
    if (CASE_DATA[key]) setCaseKey(key)
  }

  return (
    <SiteContext.Provider value={{ navigateTo, currentMode, openCase }}>
      <div id="shell">
        <header className="topbar">
          <div className="topbar-inner">
            <button
              className="brand"
              onClick={() => navigateTo('home')}
              aria-label="Saumya Nayak — home"
            >
              <span className="sig hand">Saumya Nayak</span>
            </button>
          </div>
        </header>

        <Dial
          currentMode={currentMode}
          activeIdx={activeIdx}
          rotation={rotation}
          isDragging={isDragging}
          nudge={nudge}
          dialRef={dialRef}
          discRef={discRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onNavigate={navigateTo}
        />

        <main className="stage">
          {children}
        </main>
      </div>

      <CaseStudy
        data={caseKey ? CASE_DATA[caseKey] : null}
        onClose={() => setCaseKey(null)}
      />
    </SiteContext.Provider>
  )
}
