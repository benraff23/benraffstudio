"use client"
import { useEffect } from 'react'

export default function ClientEffects() {
  useEffect(() => {
    // ── Custom cursor ──
    const cursor = document.getElementById('cursor')
    const follower = document.getElementById('cursorFollower')
    if (cursor && follower) {
      let fX = 0, fY = 0, mX = 0, mY = 0
      const onMove = (e: MouseEvent) => {
        mX = e.clientX; mY = e.clientY
        cursor.style.left = mX + 'px'
        cursor.style.top  = mY + 'px'
      }
      document.addEventListener('mousemove', onMove)
      const animate = () => {
        fX += (mX - fX) * 0.1
        fY += (mY - fY) * 0.1
        follower.style.left = fX + 'px'
        follower.style.top  = fY + 'px'
        requestAnimationFrame(animate)
      }
      animate()

      const hoverSel = 'a, button, .portfolio-item, .service-card, .problem-card, .why-point, .process-step'
      document.addEventListener('mouseover', e => {
        if ((e.target as Element)?.closest(hoverSel)) {
          cursor.classList.add('hover'); follower.classList.add('hover')
        }
      })
      document.addEventListener('mouseout', e => {
        if ((e.target as Element)?.closest(hoverSel)) {
          cursor.classList.remove('hover'); follower.classList.remove('hover')
        }
      })
      document.addEventListener('touchstart', () => {
        cursor.style.display = 'none'; follower.style.display = 'none'
      }, { once: true })
    }

    // ── Scroll reveal ──
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none'
      })
    } else {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target) } })
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
      document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el))
    }

    // ── Nav scroll state ──
    const nav = document.getElementById('nav')
    const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    // ── Hero parallax ──
    const parallax = document.getElementById('heroParallax')
    if (parallax && !reduced) {
      window.addEventListener('scroll', () => {
        if (window.scrollY <= window.innerHeight)
          parallax.style.transform = `translateY(${window.scrollY * 0.3}px)`
      }, { passive: true })
    }

    // ── Hero load animation ──
    const hero = document.querySelector('.hero') as HTMLElement
    if (hero) setTimeout(() => hero.classList.add('loaded'), 100)

    // ── Footer year ──
    const yearEl = document.getElementById('year')
    if (yearEl) yearEl.textContent = String(new Date().getFullYear())

    // ── Mobile menu ──
    const hamburger = document.getElementById('hamburger')
    const mobileMenu = document.getElementById('mobileMenu')
    const mobileClose = document.getElementById('mobileClose')
    if (hamburger && mobileMenu && nav) {
      const openMenu = () => {
        nav.classList.add('menu-open')
        mobileMenu.classList.remove('opacity-0', 'pointer-events-none')
        mobileMenu.classList.add('opacity-100')
        hamburger.setAttribute('aria-expanded', 'true')
        document.body.style.overflow = 'hidden'
      }
      const closeMenu = () => {
        nav.classList.remove('menu-open')
        mobileMenu.classList.add('opacity-0', 'pointer-events-none')
        mobileMenu.classList.remove('opacity-100')
        hamburger.setAttribute('aria-expanded', 'false')
        document.body.style.overflow = ''
      }
      hamburger.addEventListener('click', () => {
        nav.classList.contains('menu-open') ? closeMenu() : openMenu()
      })
      mobileClose?.addEventListener('click', closeMenu)
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu)
      })
    }

    // ── Platform progress fill ──
    const fill = document.getElementById('progressFill') as HTMLElement
    if (fill) {
      fill.style.width = '0%'
      const pObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) { setTimeout(() => { fill.style.width = '68%' }, 400); pObs.unobserve(e.target) }
        })
      }, { threshold: 0.5 })
      const mockup = fill.closest('.platform__mockup')
      if (mockup) pObs.observe(mockup)
    }

    // ── Smooth scroll ──
    document.addEventListener('click', e => {
      const anchor = (e.target as Element)?.closest('a[href^="#"]') as HTMLAnchorElement
      if (!anchor) return
      const target = document.querySelector(anchor.getAttribute('href')!)
      if (!target) return
      e.preventDefault()
      const top = target.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <div className="cursor" id="cursor" aria-hidden="true" />
      <div className="cursor-follower" id="cursorFollower" aria-hidden="true" />
    </>
  )
}
