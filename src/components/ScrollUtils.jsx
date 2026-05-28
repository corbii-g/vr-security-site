import { useState, useEffect } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    function onScroll() {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, height: '2px',
      width: `${progress}%`, background: 'var(--cyan)',
      boxShadow: '0 0 8px var(--cyan)', zIndex: 300,
      transition: 'width 0.1s linear', pointerEvents: 'none',
    }} />
  )
}

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    function onScroll() { setVisible(window.scrollY > 500) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!visible) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 16px var(--cyan-glow)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
      aria-label="Torna in cima"
      style={{
        position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 200,
        width: '44px', height: '44px', background: 'var(--bg-card)',
        border: '1px solid var(--border-soft)', color: 'var(--cyan)',
        fontSize: '1.1rem', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'box-shadow 0.2s',
      }}
    >↑</button>
  )
}
