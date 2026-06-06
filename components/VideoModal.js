import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

export default function VideoModal({ videoId, onClose }) {
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    if (!videoId) return
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [videoId, handleKey])

  if (!videoId) return null

  return createPortal(
    <div
      className="vmodal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
    >
      <div className="vmodal-box" onClick={(e) => e.stopPropagation()}>
        <button className="vmodal-close" onClick={onClose} aria-label="Close video">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <div className="vmodal-player">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Video"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            frameBorder="0"
          />
        </div>
      </div>
    </div>,
    document.body
  )
}
