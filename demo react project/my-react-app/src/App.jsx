import { useState, useEffect } from 'react'

/* ---------------- DATA ---------------- */

const books = [
  {
    title: 'The Silent Code',
    author: 'Aarav Mehta',
    tag: 'Technology',
    pages: 320,
    price: '₹299',
    color: 'linear-gradient(135deg,#6d28d9,#2563eb)',
    blurb: 'A gripping journey into the hidden logic that runs our digital world.',
    inside: 'Aarav writes on software, AI and the future of work.',
  },
  {
    title: 'Mind Over Habit',
    author: 'Neha Sharma',
    tag: 'Self Growth',
    pages: 240,
    price: '₹249',
    color: 'linear-gradient(135deg,#059669,#0ea5e9)',
    blurb: 'Simple science-backed steps to build habits that actually stick.',
    inside: 'Neha is a psychologist and habit coach with 10+ years of practice.',
  },
  {
    title: 'Desert Echoes',
    author: 'Rohit Chauhan',
    tag: 'Fiction',
    pages: 410,
    price: '₹349',
    color: 'linear-gradient(135deg,#ea580c,#be123c)',
    blurb: 'A haunting novel set in the golden dunes of Rajasthan.',
    inside: 'Rohit is an award-winning storyteller from Jodhpur.',
  },
  {
    title: 'Money Made Simple',
    author: 'Kavita Rao',
    tag: 'Finance',
    pages: 280,
    price: '₹399',
    color: 'linear-gradient(135deg,#ca8a04,#16a34a)',
    blurb: 'Budgeting, saving and investing explained in plain language.',
    inside: 'Kavita is a certified planner who loves making money easy.',
  },
  {
    title: 'Startup Sketchbook',
    author: 'Imran Khan',
    tag: 'Business',
    pages: 300,
    price: '₹329',
    color: 'linear-gradient(135deg,#db2777,#7c3aed)',
    blurb: 'Real stories and playbooks from founders who built from zero.',
    inside: 'Imran has helped launch over 40 startups across India.',
  },
  {
    title: 'Little Stars',
    author: 'Pooja Verma',
    tag: 'Kids',
    pages: 120,
    price: '₹149',
    color: 'linear-gradient(135deg,#0891b2,#4f46e5)',
    blurb: 'Colourful bedtime tales that spark curiosity in young readers.',
    inside: 'Pooja writes and illustrates stories for children.',
  },
]

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Collection', href: '#collection' },
  { label: 'Pros & Cons', href: '#why' },
  { label: 'How to Download', href: '#download' },
  { label: 'Pricing', href: '#pricing' },
]

const rotatingWords = ['Browse', 'Buy', 'Download', 'Read', 'Highlight', 'Repeat']

const trustedFormats = ['PDF', 'EPUB', 'MOBI', 'Kindle', 'Kobo', 'Apple Books', 'Google Play Books', 'Adobe Reader']

const features = [
  {
    key: 'Browse',
    title: 'Discover your next book in seconds',
    text: 'Describe what you feel like reading in one sentence, and we show you books that match your taste, mood and goals.',
    query: '🔎  Short books about building habits',
    rows: [
      ['Mind Over Habit', 'Self Growth · 240 pages'],
      ['The Silent Code', 'Technology · 320 pages'],
      ['Money Made Simple', 'Finance · 280 pages'],
    ],
  },
  {
    key: 'Buy',
    title: 'Pay once, own it forever',
    text: 'Secure checkout with UPI, cards and net banking. No subscriptions needed. Your book stays in your library for life.',
    query: '🔒  Secure checkout',
    rows: [
      ['Desert Echoes (eBook)', '₹349'],
      ['GST & taxes', 'Included'],
      ['Payment method', 'UPI · Card · Net banking'],
    ],
  },
  {
    key: 'Download',
    title: 'Instant downloads in every format',
    text: 'Get PDF, EPUB and MOBI together. Your link arrives by email and also waits for you in My Library.',
    query: '⬇️  Choose your format',
    rows: [
      ['PDF', 'Phones, laptops and printing'],
      ['EPUB', 'Reading apps and tablets'],
      ['MOBI', 'Kindle devices'],
    ],
  },
  {
    key: 'Read',
    title: 'Read comfortably, even offline',
    text: 'Adjust font size, theme and brightness. Highlight, bookmark and search any word, with or without internet.',
    query: '📖  Reading settings',
    rows: [
      ['Font size', 'Medium'],
      ['Theme', 'Warm paper'],
      ['Offline mode', 'On'],
    ],
  },
]

const bento = [
  { icon: '🔎', title: 'Smart book search', text: 'Find the right book faster.' },
  { icon: '📱', title: 'Works on every device', text: 'Phone, tablet, laptop or Kindle.' },
  { icon: '🖍️', title: 'Highlights and notes', text: 'Save ideas as you read.' },
  { icon: '🔄', title: 'Free updates', text: 'New editions at no extra cost.' },
  { icon: '📴', title: 'Offline reading', text: 'Download once, read anywhere.' },
  { icon: '🛡️', title: 'Secure payments', text: 'Encrypted checkout, every time.' },
]

const pros = [
  { icon: '⚡', title: 'Instant delivery', text: 'Buy and start reading within a minute. No waiting for shipping.' },
  { icon: '🎒', title: 'Carry a whole library', text: 'Thousands of books on one phone, tablet or laptop.' },
  { icon: '💸', title: 'Cheaper than print', text: 'Digital books usually cost much less than paperback copies.' },
  { icon: '🔎', title: 'Search and highlight', text: 'Find any word instantly, add notes, bookmarks and highlights.' },
  { icon: '🔤', title: 'Adjustable text', text: 'Change font size, theme and brightness for comfortable reading.' },
  { icon: '🌱', title: 'Eco friendly', text: 'No paper, no printing and no transport emissions.' },
]

const cons = [
  { icon: '🔋', title: 'Needs a device', text: 'You need a charged phone, tablet, e-reader or computer.' },
  { icon: '👀', title: 'Screen fatigue', text: 'Long sessions on bright screens can tire your eyes.' },
  { icon: '🤝', title: 'Limited sharing', text: 'Licensed books cannot be freely lent or resold like paper books.' },
  { icon: '📶', title: 'Internet for first download', text: 'You need internet once to download, then you can read offline.' },
]

const steps = [
  { title: 'Choose your book', text: 'Browse the collection and tap Get this book on the one you like.' },
  { title: 'Pay securely', text: 'Pay with UPI, card or net banking. Your payment is encrypted.' },
  { title: 'Receive your link', text: 'A download link arrives by email and also appears in My Library.' },
  { title: 'Download and read', text: 'Pick PDF, EPUB or MOBI, save it, and read offline anytime.' },
]

const formats = [
  { name: 'PDF', note: 'Best for phones, laptops and printing' },
  { name: 'EPUB', note: 'Best for reading apps and tablets' },
  { name: 'MOBI', note: 'Best for Kindle devices' },
]

const featuredQuote = {
  text: 'I used to spend hours hunting for the right book. PageTurn made finding and reading one feel instant.',
  name: 'Luke Foster',
  role: 'Avid reader and book club host',
}

const reviews = [
  { name: 'Grace Lee', role: 'Teacher', text: 'PageTurn might literally change my reading life.' },
  { name: 'Gaynor Blackmon', role: 'Designer', text: 'Every format in one place. I download once and read on every device.' },
  { name: 'Veronica Unadkatt', role: 'Student', text: 'Going back to paper books and scattered PDFs feels terrible now.' },
  { name: 'Mark Moore', role: 'Manager', text: 'I finished three business books in a month, all on my phone.' },
  { name: 'Chris Montoya', role: 'Founder', text: 'I wish this existed 12 years ago. It would have saved me a fortune.' },
  { name: 'Cathy Rogers', role: 'Writer', text: 'The offline mode is perfect for my long train journeys.' },
]

const integrations = [
  'PDF', 'EPUB', 'MOBI', 'Kindle', 'Kobo', 'Apple Books',
  'iPhone', 'Android', 'Windows', 'Mac', 'iPad', 'Chrome',
]

const plans = [
  {
    name: 'Single Book',
    price: '₹299',
    per: 'per book',
    perks: ['Lifetime access', 'PDF, EPUB and MOBI', '3 device downloads', 'Free updates'],
  },
  {
    name: 'Monthly Reader',
    price: '₹499',
    per: 'per month',
    perks: ['Unlimited reading', 'New books every week', '5 devices', 'Cancel anytime'],
    featured: true,
  },
  {
    name: 'Yearly Library',
    price: '₹3,999',
    per: 'per year',
    perks: ['Everything in Monthly', 'Save 33%', 'Early access titles', 'Priority support'],
  },
]

const faqs = [
  {
    q: 'In which format will I get the book?',
    a: 'Every book comes in PDF, EPUB and MOBI. You can download whichever works best for your device.',
  },
  {
    q: 'Can I read offline?',
    a: 'Yes. Once the file is downloaded you can read it without internet at any time.',
  },
  {
    q: 'How many devices can I use?',
    a: 'Single books work on up to 3 devices. Subscription plans allow up to 5 devices.',
  },
  {
    q: 'What if the download link does not work?',
    a: 'Open My Library after login and download again, or contact support. We reply within 24 hours.',
  },
]

const footerCols = [
  {
    title: 'Features',
    links: [
      ['Browse', '#features'],
      ['Collection', '#collection'],
      ['Formats', '#works'],
      ['Pricing', '#pricing'],
    ],
  },
  {
    title: 'Products',
    links: [
      ['eBooks', '#collection'],
      ['Audio Summaries', '#home'],
      ['Kids Library', '#home'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About', '#home'],
      ['Careers', '#home'],
      ['Readers', '#reviews'],
      ['Contact', 'mailto:support@pageturn.com'],
    ],
  },
  {
    title: 'Resources',
    links: [
      ['How to Download', '#download'],
      ['FAQ', '#faq'],
      ['Blog', '#home'],
      ['Help Center', '#faq'],
    ],
  },
]

/* ---------------- SMALL COMPONENTS ---------------- */

function Marquee({ children, slow }) {
  return (
    <div className="marquee">
      <div className={'mq-track' + (slow ? ' slow' : '')}>
        {children}
        {children}
      </div>
    </div>
  )
}

function Book({ book, open, onClick }) {
  return (
    <div
      className={'book3d' + (open ? ' open' : '')}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={(open ? 'Close ' : 'Open ') + book.title}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
    >
      <div className="bk-rear" style={{ background: book.color }} />
      <div className="bk-page">
        <h4>About this book</h4>
        <p>{book.blurb}</p>
        <span>
          {book.pages} pages · {book.tag}
        </span>
        <b>{book.price}</b>
      </div>
      <div className="bk-cover">
        <div className="bk-front" style={{ background: book.color }}>
          <small>E-BOOK</small>
          <strong>{book.title}</strong>
          <em>{book.author}</em>
        </div>
        <div className="bk-inside">
          <h4>Inside</h4>
          <p>{book.inside}</p>
        </div>
      </div>
    </div>
  )
}

/* ---------------- STYLES ---------------- */

const css = `
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0 !important; display: block !important; place-items: unset !important; min-width: 0 !important; background: #fff !important; }
#root { width: 100% !important; max-width: none !important; margin: 0 !important; padding: 0 !important; border: 0 !important; text-align: left !important; display: block !important; }

.lp {
  --bg: #ffffff;
  --soft: #f6f7fb;
  --ink: #0b0d17;
  --muted: #5d6475;
  --line: #e7e9f1;
  --primary: #4f46e5;
  --primary-2: #7c3aed;
  --accent: #f59e0b;
  --dark: #0b0d17;
  font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif;
  color: var(--ink);
  background: var(--bg);
  line-height: 1.6;
  text-align: left;
  overflow-x: hidden;
}
.lp h1, .lp h2, .lp h3, .lp h4, .lp p { margin: 0; letter-spacing: normal; }
.lp a { text-decoration: none; color: inherit; }
.lp ul { list-style: none; margin: 0; padding: 0; }
.lp button { font-family: inherit; cursor: pointer; }
.container { width: 100%; max-width: 1180px; margin: 0 auto; padding: 0 22px; }

/* Buttons */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; border: 1px solid transparent; border-radius: 999px; padding: 12px 26px; font-weight: 600; font-size: .98rem; transition: transform .2s, box-shadow .2s, background .2s, border-color .2s; }
.btn:hover { transform: translateY(-2px); }
.btn-dark { background: var(--ink); color: #fff; }
.btn-dark:hover { background: #20233a; box-shadow: 0 10px 24px rgba(11,13,23,.22); }
.btn-light { background: #fff; color: var(--ink); border-color: var(--line); }
.btn-light:hover { border-color: #c9cde0; box-shadow: 0 8px 20px rgba(11,13,23,.08); }
.btn-primary { background: linear-gradient(135deg, var(--primary), var(--primary-2)); color: #fff; }
.btn-primary:hover { box-shadow: 0 12px 26px rgba(79,70,229,.35); }
.btn-white { background: #fff; color: var(--ink); }
.btn-white:hover { box-shadow: 0 12px 26px rgba(0,0,0,.25); }
.btn-ghost-w { background: transparent; color: #fff; border-color: rgba(255,255,255,.45); }
.btn-ghost-w:hover { border-color: #fff; }
.btn-sm { padding: 9px 18px; font-size: .9rem; }

/* Header (floating pill) */
.header { position: sticky; top: 0; z-index: 100; padding: 14px 0; background: linear-gradient(#fff 55%, rgba(255,255,255,0)); }
.header-in { display: flex; align-items: center; justify-content: space-between; gap: 16px; height: 62px; padding: 0 12px 0 22px; background: rgba(255,255,255,.9); backdrop-filter: blur(12px); border: 1px solid var(--line); border-radius: 999px; box-shadow: 0 6px 24px rgba(11,13,23,.06); position: relative; }
.logo { font-size: 1.3rem; font-weight: 800; display: flex; align-items: center; gap: 8px; color: var(--ink); }
.logo span { color: var(--primary); }
.nav { display: flex; gap: 6px; align-items: center; }
.nav a.lnk { padding: 8px 14px; border-radius: 999px; color: var(--muted); font-size: .93rem; font-weight: 500; transition: background .2s, color .2s; }
.nav a.lnk:hover { background: var(--soft); color: var(--ink); }
.nav-cta { display: flex; gap: 8px; align-items: center; }
.burger { display: none; background: none; border: 0; font-size: 1.5rem; color: var(--ink); padding: 6px 12px; }

/* Hero */
.hero { padding: 56px 0 30px; text-align: center; background: radial-gradient(60% 50% at 50% 0%, #eceaff 0%, rgba(255,255,255,0) 70%); }
.pill { display: inline-flex; align-items: center; gap: 8px; border: 1px solid var(--line); background: #fff; padding: 6px 14px; border-radius: 999px; font-size: .85rem; color: var(--muted); font-weight: 500; margin-bottom: 22px; }
.pill i { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 0 4px rgba(34,197,94,.2); }
.hero h1 { font-size: clamp(2.4rem, 6.4vw, 4.8rem); line-height: 1.05; font-weight: 800; letter-spacing: -.03em !important; max-width: 900px; margin: 0 auto 20px; }
.grad { background: linear-gradient(120deg, var(--primary), var(--primary-2) 55%, #db2777); -webkit-background-clip: text; background-clip: text; color: transparent; }
.hero .lead { color: var(--muted); font-size: 1.2rem; max-width: 600px; margin: 0 auto 30px; }
.hero-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 38px; }

.words { margin-bottom: 40px; }
.marquee { overflow: hidden; width: 100%; -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent); mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent); }
.mq-track { display: flex; width: max-content; gap: 14px; animation: scroll 28s linear infinite; padding: 4px 0; }
.mq-track.slow { animation-duration: 45s; }
.marquee:hover .mq-track { animation-play-state: paused; }
@keyframes scroll { to { transform: translateX(-50%); } }
.word { border: 1px solid var(--line); background: #fff; border-radius: 999px; padding: 8px 22px; font-weight: 600; font-size: .95rem; color: var(--ink); white-space: nowrap; }
.word::before { content: '✦ '; color: var(--primary); }

/* Browser-like frame holding the 3D book */
.frame { max-width: 1020px; margin: 0 auto; border: 1px solid var(--line); border-radius: 26px; background: #fff; box-shadow: 0 30px 80px rgba(79,70,229,.15); overflow: hidden; text-align: left; }
.frame-bar { display: flex; align-items: center; gap: 8px; padding: 14px 18px; border-bottom: 1px solid var(--line); background: var(--soft); }
.frame-bar i { width: 11px; height: 11px; border-radius: 50%; background: #d5d8e6; }
.frame-bar span { margin-left: 10px; font-size: .82rem; color: var(--muted); background: #fff; border: 1px solid var(--line); border-radius: 999px; padding: 3px 16px; }
.frame-body { display: grid; grid-template-columns: 1fr 1.1fr 1fr; align-items: center; gap: 10px; padding: 30px; background: linear-gradient(180deg, #f6f5ff, #fff); min-height: 430px; }
.side { display: flex; flex-direction: column; gap: 14px; }
.chip { background: #fff; border: 1px solid var(--line); border-radius: 16px; padding: 14px 16px; box-shadow: 0 8px 22px rgba(11,13,23,.06); font-size: .88rem; color: var(--muted); }
.chip b { display: block; color: var(--ink); font-size: 1.15rem; }
.hero-stage { --bw: 230px; --bh: 318px; perspective: 1400px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.float { transform-style: preserve-3d; animation: floaty 5s ease-in-out infinite; }
.tilt { width: var(--bw); height: var(--bh); transform-style: preserve-3d; transform: rotateX(6deg) rotateY(-24deg); transition: transform 1s ease; }
.tilt.is-open { transform: rotateX(4deg) rotateY(-6deg); }
.hero-hint { color: var(--muted); font-size: .82rem; margin-top: 24px; }
@keyframes floaty { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }

/* Trusted strip */
.trusted { padding: 54px 0 20px; text-align: center; }
.trusted p { color: var(--muted); font-size: .98rem; margin-bottom: 22px; }
.logo-item { font-weight: 800; font-size: 1.25rem; color: #9aa1b8; white-space: nowrap; padding: 0 18px; }

/* 3D Book */
.book3d { position: relative; width: var(--bw); height: var(--bh); font-size: calc(var(--bw) / 14); transform-style: preserve-3d; transition: transform .9s ease; cursor: pointer; outline: none; text-align: left; }
.book3d.open { transform: translateX(calc(var(--bw) / 2)); }
.book3d:focus-visible { outline: 3px solid var(--primary); outline-offset: 6px; }
.bk-rear, .bk-page, .bk-front, .bk-inside { position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden; }
.bk-rear { transform: rotateY(180deg) translateZ(4px); border-radius: 6px 0 0 6px; box-shadow: 0 20px 40px rgba(0,0,0,.3); }
.bk-page { transform: translateZ(-2px); background: #fdf8ee; color: #2b2b2b; border-radius: 0 8px 8px 0; padding: 1.6em 1.3em; display: flex; flex-direction: column; gap: .7em; box-shadow: .4em 0 0 #e9dfc8, .8em 0 0 #d8cdb3, 0 20px 40px rgba(0,0,0,.25); }
.bk-page h4 { font-size: 1.15em; color: #4338ca; }
.bk-page p { font-size: .95em; line-height: 1.45; }
.bk-page span { font-size: .8em; color: #6b6b6b; margin-top: auto; }
.bk-page b { font-size: 1.3em; color: #b45309; }
.bk-cover { position: absolute; inset: 0; transform-origin: left center; transform-style: preserve-3d; transition: transform 1s ease; }
.book3d.open .bk-cover { transform: rotateY(-165deg); }
.bk-front { border-radius: 4px 10px 10px 4px; color: #fff; padding: 1.8em 1.3em 1.4em 1.8em; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 20px 40px rgba(0,0,0,.3); }
.bk-front::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 9%; border-radius: 4px 0 0 4px; background: linear-gradient(90deg, rgba(0,0,0,.4), rgba(255,255,255,.14) 70%, transparent); }
.bk-front::after { content: ''; position: absolute; right: -25%; bottom: -12%; width: 70%; aspect-ratio: 1; border-radius: 50%; background: rgba(255,255,255,.12); }
.bk-front small { letter-spacing: .25em; font-size: .7em; opacity: .85; font-weight: 700; }
.bk-front strong { font-size: 1.7em; line-height: 1.15; text-shadow: 0 2px 8px rgba(0,0,0,.3); }
.bk-front em { font-style: normal; font-size: .95em; opacity: .9; z-index: 1; }
.bk-inside { transform: rotateY(180deg) translateZ(1px); background: #f3ead7; color: #333; border-radius: 8px 0 0 8px; padding: 1.6em 1.3em; display: flex; flex-direction: column; gap: .7em; box-shadow: inset -1.2em 0 1.6em rgba(0,0,0,.08); }
.bk-inside h4 { font-size: 1.15em; color: #4338ca; }
.bk-inside p { font-size: .95em; line-height: 1.45; }

/* Sections */
.section { padding: 90px 0; }
.sec-head { text-align: center; max-width: 680px; margin: 0 auto 48px; }
.eyebrow { display: inline-block; color: var(--primary); font-weight: 700; font-size: .82rem; letter-spacing: .12em; text-transform: uppercase; background: #eeedff; padding: 5px 14px; border-radius: 999px; }
.sec-head h2 { font-size: clamp(1.9rem, 4vw, 2.8rem); line-height: 1.12; letter-spacing: -.02em !important; margin: 14px 0 12px; font-weight: 800; }
.sec-head p { color: var(--muted); font-size: 1.05rem; }

/* Tabs / features */
.tabs { display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin-bottom: 30px; }
.tab { border: 1px solid var(--line); background: #fff; border-radius: 999px; padding: 10px 24px; font-weight: 600; font-size: .95rem; color: var(--muted); transition: all .2s; }
.tab:hover { color: var(--ink); border-color: #c9cde0; }
.tab.on { background: var(--ink); color: #fff; border-color: var(--ink); }
.feat { display: grid; grid-template-columns: 1fr 1.1fr; gap: 40px; align-items: center; background: var(--soft); border: 1px solid var(--line); border-radius: 28px; padding: 44px; }
.feat h3 { font-size: 1.9rem; line-height: 1.2; letter-spacing: -.02em !important; margin-bottom: 14px; }
.feat p { color: var(--muted); margin-bottom: 24px; font-size: 1.05rem; }
.mock { background: #fff; border: 1px solid var(--line); border-radius: 20px; padding: 18px; box-shadow: 0 18px 44px rgba(79,70,229,.12); }
.mock-q { background: var(--soft); border: 1px solid var(--line); border-radius: 12px; padding: 12px 16px; font-size: .95rem; color: var(--muted); margin-bottom: 12px; }
.mock-row { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 13px 8px; border-bottom: 1px solid var(--line); font-size: .93rem; }
.mock-row:last-child { border-bottom: 0; }
.mock-row b { font-weight: 600; }
.mock-row span { color: var(--muted); text-align: right; }

/* Collection (ring) */
.collection { background: var(--dark); color: #fff; border-radius: 40px; margin: 0 14px; }
.collection .sec-head h2 { color: #fff; }
.collection .sec-head p { color: #b5badf; }
.collection .eyebrow { background: rgba(255,255,255,.1); color: #fcd34d; }
.scene { --bw: 170px; --bh: 240px; --R: 300px; perspective: 1500px; height: 360px; display: flex; align-items: center; justify-content: center; }
.ring { position: relative; width: var(--bw); height: var(--bh); transform-style: preserve-3d; transition: transform 1.1s cubic-bezier(.4,.1,.2,1); }
.ring-item { position: absolute; inset: 0; transform-style: preserve-3d; }
.ring-controls { display: flex; align-items: center; justify-content: center; gap: 18px; margin-top: 18px; }
.ring-controls button { width: 46px; height: 46px; border-radius: 50%; border: 1px solid rgba(255,255,255,.3); background: transparent; color: #fff; font-size: 1.2rem; transition: background .2s; }
.ring-controls button:hover { background: rgba(255,255,255,.15); }
.dots { display: flex; gap: 8px; }
.dot { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,.3); border: 0; padding: 0; }
.dot.on { background: var(--accent); width: 26px; border-radius: 999px; }
.caption { text-align: center; margin-top: 26px; }
.caption h3 { font-size: 1.5rem; }
.caption p { color: #b5badf; margin: 4px 0 16px; }
.caption .hint { font-size: .85rem; margin-top: 14px; color: #8c91bd; }

/* Pros & cons */
.pc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.pc-card { background: #fff; border: 1px solid var(--line); border-radius: 26px; padding: 32px; }
.pc-card.pro { background: linear-gradient(180deg, #f0fdf4, #fff 40%); }
.pc-card.con { background: linear-gradient(180deg, #fef2f2, #fff 40%); }
.pc-card > h3 { font-size: 1.5rem; margin-bottom: 22px; }
.pc-card.pro > h3 { color: #15803d; }
.pc-card.con > h3 { color: #b91c1c; }
.pc-item { display: flex; gap: 14px; margin-bottom: 18px; }
.pc-item:last-child { margin-bottom: 0; }
.pc-icon { flex: 0 0 44px; height: 44px; border-radius: 12px; background: #fff; border: 1px solid var(--line); display: grid; place-items: center; font-size: 1.25rem; }
.pc-item h4 { font-size: 1.02rem; }
.pc-item p { color: var(--muted); font-size: .93rem; }

/* Testimonials */
.quote { display: grid; grid-template-columns: 300px 1fr; gap: 0; border: 1px solid var(--line); border-radius: 28px; overflow: hidden; background: var(--soft); margin-bottom: 70px; }
.quote-photo { background: linear-gradient(160deg, var(--primary), var(--primary-2)); display: grid; place-items: center; font-size: 5rem; min-height: 250px; }
.quote-body { padding: 42px; }
.quote-body blockquote { margin: 0 0 22px; font-size: 1.6rem; line-height: 1.35; font-weight: 600; letter-spacing: -.01em; }
.quote-body strong { display: block; }
.quote-body span { color: var(--muted); font-size: .92rem; display: block; margin-bottom: 20px; }
.rev-head { display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; margin-bottom: 26px; }
.rev-head h2 { font-size: clamp(1.7rem, 3.4vw, 2.4rem); letter-spacing: -.02em !important; font-weight: 800; }
.rev-card { width: 320px; flex: 0 0 auto; border: 1px solid var(--line); border-radius: 20px; padding: 22px; background: #fff; white-space: normal; }
.rev-card p { font-size: .98rem; margin-bottom: 18px; }
.rev-user { display: flex; align-items: center; gap: 10px; }
.avatar { width: 38px; height: 38px; border-radius: 50%; background: linear-gradient(135deg, var(--primary), var(--primary-2)); color: #fff; display: grid; place-items: center; font-weight: 700; }
.rev-user b { display: block; font-size: .92rem; line-height: 1.2; }
.rev-user span { color: var(--muted); font-size: .8rem; }

/* Works with (integration tiles) */
.works { background: var(--soft); border: 1px solid var(--line); border-radius: 32px; padding: 56px 30px; margin: 0 14px; text-align: center; }
.tiles { display: grid; grid-template-columns: repeat(6, 1fr); gap: 14px; max-width: 900px; margin: 0 auto 36px; }
.tile { aspect-ratio: 1.3; background: #fff; border: 1px solid var(--line); border-radius: 18px; display: grid; place-items: center; font-weight: 700; color: var(--ink); box-shadow: 0 6px 18px rgba(11,13,23,.05); transition: transform .25s, box-shadow .25s; }
.tile:hover { transform: translateY(-4px); box-shadow: 0 16px 30px rgba(79,70,229,.15); }

/* Bento */
.bento { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.bento-card { border: 1px solid var(--line); border-radius: 24px; padding: 28px; background: #fff; transition: transform .25s, box-shadow .25s; }
.bento-card:hover { transform: translateY(-4px); box-shadow: 0 18px 40px rgba(11,13,23,.08); }
.bento-card:nth-child(1), .bento-card:nth-child(6) { background: linear-gradient(160deg, #eeedff, #fff); }
.bento-icon { width: 52px; height: 52px; border-radius: 14px; background: var(--soft); border: 1px solid var(--line); display: grid; place-items: center; font-size: 1.5rem; margin-bottom: 40px; }
.bento-card h3 { font-size: 1.2rem; margin-bottom: 4px; }
.bento-card p { color: var(--muted); font-size: .95rem; }
.center-btn { text-align: center; margin-top: 34px; }

/* Download */
.steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px; counter-reset: step; padding-top: 20px; }
.step { position: relative; background: var(--soft); border: 1px solid var(--line); border-radius: 22px; padding: 56px 22px 26px; text-align: center; }
.step::before { counter-increment: step; content: counter(step); position: absolute; top: -20px; left: 50%; transform: translateX(-50%); width: 46px; height: 46px; border-radius: 50%; background: var(--ink); color: #fff; display: grid; place-items: center; font-weight: 800; font-size: 1.15rem; }
.step h3 { font-size: 1.1rem; margin-bottom: 8px; }
.step p { color: var(--muted); font-size: .92rem; }
.formats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 40px; }
.format { border: 1px dashed #c7cbe6; border-radius: 18px; padding: 22px; text-align: center; background: #fff; }
.format strong { display: block; font-size: 1.5rem; color: var(--primary); }
.format span { color: var(--muted); font-size: .9rem; }
.devices { text-align: center; margin-top: 26px; color: var(--muted); }

/* Pricing */
.plans { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; align-items: stretch; }
.plan { background: #fff; border: 1px solid var(--line); border-radius: 26px; padding: 34px 30px; display: flex; flex-direction: column; position: relative; }
.plan.featured { background: var(--dark); color: #fff; border-color: var(--dark); transform: translateY(-10px); box-shadow: 0 28px 60px rgba(79,70,229,.3); }
.plan .tagline { position: absolute; top: -13px; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg, var(--primary), var(--primary-2)); color: #fff; font-size: .75rem; font-weight: 800; padding: 5px 14px; border-radius: 999px; }
.plan h3 { font-size: 1.15rem; }
.plan .price { font-size: 2.7rem; font-weight: 800; letter-spacing: -.02em; margin-top: 10px; }
.plan .per { opacity: .65; font-size: .9rem; margin-bottom: 22px; }
.plan ul { margin-bottom: 28px; flex: 1; }
.plan li { padding: 7px 0 7px 28px; position: relative; font-size: .95rem; }
.plan li::before { content: '✓'; position: absolute; left: 0; color: #16a34a; font-weight: 800; }
.plan.featured li::before { color: #a5b4fc; }

/* FAQ */
.faq-list { max-width: 780px; margin: 0 auto; }
.faq-item { border: 1px solid var(--line); border-radius: 18px; margin-bottom: 12px; overflow: hidden; background: #fff; }
.faq-q { width: 100%; background: none; border: 0; text-align: left; padding: 20px 24px; font-size: 1.02rem; font-weight: 600; color: var(--ink); display: flex; justify-content: space-between; align-items: center; gap: 14px; }
.faq-q span { color: var(--primary); font-size: 1.5rem; transition: transform .3s; }
.faq-item.open .faq-q span { transform: rotate(45deg); }
.faq-a { max-height: 0; overflow: hidden; transition: max-height .35s ease; padding: 0 24px; color: var(--muted); }
.faq-item.open .faq-a { max-height: 160px; padding-bottom: 20px; }

/* CTA */
.cta-wrap { padding: 0 14px 90px; }
.cta { position: relative; overflow: hidden; border-radius: 36px; padding: 90px 24px; text-align: center; color: #fff; background: radial-gradient(70% 90% at 80% 0%, #7c3aed 0%, transparent 60%), radial-gradient(70% 90% at 10% 100%, #2563eb 0%, transparent 60%), #0b0d17; }
.cta h2 { font-size: clamp(2rem, 5vw, 3.4rem); line-height: 1.1; letter-spacing: -.02em !important; font-weight: 800; max-width: 700px; margin: 0 auto 14px; }
.cta p { color: #cfd3f5; margin-bottom: 28px; font-size: 1.1rem; }
.cta .hero-btns { margin-bottom: 40px; }
.cta .words .word { background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.2); color: #fff; }
.cta .words .word::before { color: #fcd34d; }
.cta .words { margin: 0; }

/* Footer */
.footer { border-top: 1px solid var(--line); padding: 64px 0 26px; background: #fff; }
.foot-grid { display: grid; grid-template-columns: 1.5fr repeat(4, 1fr); gap: 30px; margin-bottom: 44px; }
.footer h4 { font-size: .95rem; margin-bottom: 14px; }
.footer li { margin-bottom: 9px; font-size: .92rem; color: var(--muted); }
.footer li a:hover { color: var(--ink); }
.footer .about p { color: var(--muted); font-size: .92rem; max-width: 260px; margin-top: 12px; }
.askai { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; border: 1px solid var(--line); border-radius: 18px; padding: 16px 20px; margin-bottom: 30px; background: var(--soft); font-size: .93rem; color: var(--muted); }
.askai a { border: 1px solid var(--line); background: #fff; border-radius: 999px; padding: 6px 14px; font-size: .84rem; font-weight: 600; color: var(--ink); }
.askai a:hover { border-color: #c9cde0; }
.foot-bottom { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 14px; border-top: 1px solid var(--line); padding-top: 22px; font-size: .86rem; color: var(--muted); }
.foot-bottom div { display: flex; gap: 18px; flex-wrap: wrap; }
.foot-bottom a:hover { color: var(--ink); }

/* Responsive */
@media (max-width: 980px) {
  .frame-body { grid-template-columns: 1fr; }
  .side { flex-direction: row; justify-content: center; flex-wrap: wrap; }
  .feat { grid-template-columns: 1fr; padding: 30px; }
  .quote { grid-template-columns: 1fr; }
  .quote-photo { min-height: 160px; }
  .pc-grid, .plans, .bento { grid-template-columns: 1fr; }
  .bento { grid-template-columns: 1fr 1fr; }
  .steps { grid-template-columns: repeat(2, 1fr); gap: 40px 22px; }
  .plan.featured { transform: none; }
  .foot-grid { grid-template-columns: 1fr 1fr; }
  .tiles { grid-template-columns: repeat(4, 1fr); }
}
@media (max-width: 860px) {
  .burger { display: block; }
  .nav-cta .btn-light { display: none; }
  .nav { display: none; position: absolute; top: 72px; left: 0; right: 0; background: #fff; border: 1px solid var(--line); border-radius: 24px; flex-direction: column; align-items: stretch; padding: 14px; box-shadow: 0 20px 40px rgba(11,13,23,.12); }
  .nav.show { display: flex; }
  .nav a.lnk { padding: 12px 16px; }
}
@media (max-width: 640px) {
  .section { padding: 60px 0; }
  .hero { padding-top: 30px; }
  .hero .lead { font-size: 1.05rem; }
  .hero-stage { --bw: 170px; --bh: 235px; }
  .frame-body { padding: 20px 14px; min-height: 0; }
  .scene { --bw: 120px; --bh: 170px; --R: 200px; height: 290px; }
  .collection, .works { border-radius: 28px; }
  .steps, .formats, .bento { grid-template-columns: 1fr; }
  .foot-grid { grid-template-columns: 1fr 1fr; }
  .tiles { grid-template-columns: repeat(3, 1fr); }
  .quote-body { padding: 26px; }
  .quote-body blockquote { font-size: 1.25rem; }
  .rev-card { width: 260px; }
  .nav-cta .btn-dark { padding: 8px 14px; font-size: .82rem; }
}
`

/* ---------------- APP ---------------- */

function App() {
  const n = books.length
  const step = 360 / n

  const [menuOpen, setMenuOpen] = useState(false)
  const [heroOpen, setHeroOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [openIdx, setOpenIdx] = useState(null)
  const [paused, setPaused] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [tab, setTab] = useState(0)

  const activeIdx = ((active % n) + n) % n
  const feat = features[tab]

  // Hero book opens and closes automatically
  useEffect(() => {
    const t = setInterval(() => setHeroOpen((o) => !o), 3500)
    return () => clearInterval(t)
  }, [])

  // Ring rotates automatically (pauses on hover or when a book is open)
  useEffect(() => {
    if (paused || openIdx !== null) return
    const t = setInterval(() => setActive((a) => a + 1), 3500)
    return () => clearInterval(t)
  }, [paused, openIdx])

  const move = (dir) => {
    setActive((a) => a + dir)
    setOpenIdx(null)
  }

  const selectBook = (i) => {
    if (i === activeIdx) {
      setOpenIdx(openIdx === i ? null : i)
    } else {
      let diff = (((i - activeIdx) % n) + n) % n
      if (diff > n / 2) diff -= n
      setActive(active + diff)
      setOpenIdx(null)
    }
  }

  return (
    <>
      <style>{css}</style>

      <div className="lp">
        {/* ============ HEADER ============ */}
        <header className="header">
          <div className="container">
            <div className="header-in">
              <a href="#home" className="logo">
                📚 Page<span>Turn</span>
              </a>
              <nav className={'nav' + (menuOpen ? ' show' : '')}>
                {navLinks.map((l) => (
                  <a key={l.href} href={l.href} className="lnk" onClick={() => setMenuOpen(false)}>
                    {l.label}
                  </a>
                ))}
              </nav>
              <div className="nav-cta">
                <a href="#faq" className="btn btn-light btn-sm">
                  Sign In
                </a>
                <a href="#pricing" className="btn btn-dark btn-sm">
                  Try for Free
                </a>
                <button className="burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                  {menuOpen ? '✕' : '☰'}
                </button>
              </div>
            </div>
          </div>
        </header>

        <main>
          {/* ============ HERO ============ */}
          <section id="home" className="hero">
            <div className="container">
              <span className="pill">
                <i /> 1,000+ digital books · Instant download
              </span>
              <h1>
                Read Effortlessly.
                <br />
                <span className="grad">Read Anywhere.</span>
              </h1>
              <p className="lead">
                10x faster than hunting through stores. Cheaper than print. Same great stories, delivered to your
                phone, tablet or laptop in a minute.
              </p>
              <div className="hero-btns">
                <a href="#pricing" className="btn btn-dark">
                  Try for Free
                </a>
                <a href="#collection" className="btn btn-light">
                  Explore Books
                </a>
              </div>

              <div className="words">
                <Marquee>
                  {rotatingWords.concat(rotatingWords).map((w, i) => (
                    <span className="word" key={w + i}>
                      {w}
                    </span>
                  ))}
                </Marquee>
              </div>

              <div className="frame">
                <div className="frame-bar">
                  <i />
                  <i />
                  <i />
                  <span>pageturn.com/my-library</span>
                </div>
                <div className="frame-body">
                  <div className="side">
                    <div className="chip">
                      <b>📥 PDF · EPUB · MOBI</b>
                      Included with every book
                    </div>
                    <div className="chip">
                      <b>⚡ Under 60 sec</b>
                      From payment to reading
                    </div>
                  </div>
                  <div className="hero-stage">
                    <div className="float">
                      <div className={'tilt' + (heroOpen ? ' is-open' : '')}>
                        <Book book={books[0]} open={heroOpen} onClick={() => setHeroOpen(!heroOpen)} />
                      </div>
                    </div>
                    <p className="hero-hint">Click the book to open or close it</p>
                  </div>
                  <div className="side">
                    <div className="chip">
                      <b>⭐ 4.8 / 5</b>
                      Loved by 25,000+ readers
                    </div>
                    <div className="chip">
                      <b>📴 Offline mode</b>
                      Read without internet
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ============ TRUSTED STRIP ============ */}
          <section className="trusted">
            <div className="container">
              <p>Join the next generation of readers who read smarter, faster and anywhere with PageTurn.</p>
            </div>
            <Marquee slow>
              {trustedFormats.map((f) => (
                <span className="logo-item" key={f}>
                  {f}
                </span>
              ))}
            </Marquee>
          </section>

          {/* ============ INTRODUCING (TABS) ============ */}
          <section id="features" className="section">
            <div className="container">
              <div className="sec-head">
                <span className="eyebrow">Introducing PageTurn</span>
                <h2>Your reading life's new secret weapon.</h2>
                <p>PageTurn streamlines browsing, buying, downloading and reading so you can focus on the story.</p>
              </div>

              <div className="tabs">
                {features.map((f, i) => (
                  <button key={f.key} className={'tab' + (i === tab ? ' on' : '')} onClick={() => setTab(i)}>
                    {f.key}
                  </button>
                ))}
              </div>

              <div className="feat">
                <div>
                  <h3>{feat.title}</h3>
                  <p>{feat.text}</p>
                  <a href="#download" className="btn btn-dark btn-sm">
                    Learn More
                  </a>
                </div>
                <div className="mock">
                  <div className="mock-q">{feat.query}</div>
                  {feat.rows.map((r) => (
                    <div className="mock-row" key={r[0]}>
                      <b>{r[0]}</b>
                      <span>{r[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ============ 3D COLLECTION ============ */}
          <section id="collection" className="section collection">
            <div className="container">
              <div className="sec-head">
                <span className="eyebrow">Our Collection</span>
                <h2>Spin the shelf, open a book</h2>
                <p>Our books rotate in a circle. Click the front book to open it and peek inside.</p>
              </div>

              <div
                className="scene"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div
                  className="ring"
                  style={{
                    transform: `translateZ(calc(var(--R) * -1)) rotateY(${-active * step}deg)`,
                  }}
                >
                  {books.map((b, i) => (
                    <div
                      className="ring-item"
                      key={b.title}
                      style={{ transform: `rotateY(${i * step}deg) translateZ(var(--R))` }}
                    >
                      <Book book={b} open={openIdx === i} onClick={() => selectBook(i)} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="ring-controls">
                <button onClick={() => move(-1)} aria-label="Previous book">
                  ←
                </button>
                <div className="dots">
                  {books.map((b, i) => (
                    <button
                      key={b.title}
                      className={'dot' + (i === activeIdx ? ' on' : '')}
                      onClick={() => selectBook(i)}
                      aria-label={'Show ' + b.title}
                    />
                  ))}
                </div>
                <button onClick={() => move(1)} aria-label="Next book">
                  →
                </button>
              </div>

              <div className="caption">
                <h3>{books[activeIdx].title}</h3>
                <p>
                  by {books[activeIdx].author} · {books[activeIdx].tag} · {books[activeIdx].price}
                </p>
                <a href="#pricing" className="btn btn-white">
                  Get this book
                </a>
                <p className="hint">Tip: hover to pause the rotation</p>
              </div>
            </div>
          </section>

          {/* ============ PROS & CONS ============ */}
          <section id="why" className="section">
            <div className="container">
              <div className="sec-head">
                <span className="eyebrow">Honest Comparison</span>
                <h2>Pros and cons of digital books</h2>
                <p>We believe in being transparent, so here is the good and the not-so-good.</p>
              </div>
              <div className="pc-grid">
                <div className="pc-card pro">
                  <h3>✅ Pros</h3>
                  {pros.map((p) => (
                    <div className="pc-item" key={p.title}>
                      <div className="pc-icon">{p.icon}</div>
                      <div>
                        <h4>{p.title}</h4>
                        <p>{p.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pc-card con">
                  <h3>⚠️ Cons</h3>
                  {cons.map((c) => (
                    <div className="pc-item" key={c.title}>
                      <div className="pc-icon">{c.icon}</div>
                      <div>
                        <h4>{c.title}</h4>
                        <p>{c.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ============ TESTIMONIALS ============ */}
          <section id="reviews" className="section" style={{ paddingTop: 10 }}>
            <div className="container">
              <div className="quote">
                <div className="quote-photo">🧑‍💻</div>
                <div className="quote-body">
                  <blockquote>“{featuredQuote.text}”</blockquote>
                  <strong>{featuredQuote.name}</strong>
                  <span>{featuredQuote.role}</span>
                  <a href="#pricing" className="btn btn-dark btn-sm">
                    Start Reading
                  </a>
                </div>
              </div>

              <div className="rev-head">
                <h2>Don't just take our word for it</h2>
                <a href="#pricing" className="btn btn-light btn-sm">
                  Try for Free
                </a>
              </div>
            </div>
            <Marquee slow>
              {reviews.map((r) => (
                <div className="rev-card" key={r.name}>
                  <p>{r.text}</p>
                  <div className="rev-user">
                    <div className="avatar">{r.name[0]}</div>
                    <div>
                      <b>{r.name}</b>
                      <span>{r.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </section>

          {/* ============ WORKS WITH (TILES) ============ */}
          <section id="works" className="works">
            <div className="container">
              <div className="tiles">
                {integrations.map((t) => (
                  <div className="tile" key={t}>
                    {t}
                  </div>
                ))}
              </div>
              <div className="sec-head" style={{ marginBottom: 24 }}>
                <h2>PageTurn works with the devices you already use.</h2>
                <p>Download once and read on 12+ formats, apps and devices with no extra setup.</p>
              </div>
              <a href="#download" className="btn btn-dark">
                See How It Works
              </a>
            </div>
          </section>

          {/* ============ BENTO ============ */}
          <section className="section">
            <div className="container">
              <div className="sec-head">
                <h2>Read smarter, not harder</h2>
                <p>Remove the hassle, find the books you love and spend more time actually reading.</p>
              </div>
              <div className="bento">
                {bento.map((b) => (
                  <div className="bento-card" key={b.title}>
                    <div className="bento-icon">{b.icon}</div>
                    <h3>{b.title}</h3>
                    <p>{b.text}</p>
                  </div>
                ))}
              </div>
              <div className="center-btn">
                <a href="#pricing" className="btn btn-dark">
                  Try for Free
                </a>
              </div>
            </div>
          </section>

          {/* ============ HOW TO DOWNLOAD ============ */}
          <section id="download" className="section" style={{ background: 'var(--soft)' }}>
            <div className="container">
              <div className="sec-head">
                <span className="eyebrow">How to Download</span>
                <h2>Get your book in 4 easy steps</h2>
                <p>From choosing to reading takes less than two minutes.</p>
              </div>
              <div className="steps">
                {steps.map((s) => (
                  <div className="step" key={s.title}>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                ))}
              </div>

              <div className="formats">
                {formats.map((f) => (
                  <div className="format" key={f.name}>
                    <strong>{f.name}</strong>
                    <span>{f.note}</span>
                  </div>
                ))}
              </div>
              <p className="devices">
                📱 Phone &nbsp;·&nbsp; 💻 Laptop &nbsp;·&nbsp; 📟 Tablet &nbsp;·&nbsp; 📖 Kindle &nbsp;·&nbsp; Works offline
                after download
              </p>
            </div>
          </section>

          {/* ============ PRICING / DETAILS ============ */}
          <section id="pricing" className="section">
            <div className="container">
              <div className="sec-head">
                <span className="eyebrow">Pricing & Details</span>
                <h2>Choose the plan that fits you</h2>
                <p>Simple pricing with no hidden charges. Secure payment with UPI, cards and net banking.</p>
              </div>
              <div className="plans">
                {plans.map((p) => (
                  <div className={'plan' + (p.featured ? ' featured' : '')} key={p.name}>
                    {p.featured && <span className="tagline">MOST POPULAR</span>}
                    <h3>{p.name}</h3>
                    <div className="price">{p.price}</div>
                    <div className="per">{p.per}</div>
                    <ul>
                      {p.perks.map((perk) => (
                        <li key={perk}>{perk}</li>
                      ))}
                    </ul>
                    <a href="#download" className={'btn ' + (p.featured ? 'btn-white' : 'btn-dark')}>
                      Choose {p.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============ FAQ ============ */}
          <section id="faq" className="section" style={{ paddingTop: 10 }}>
            <div className="container">
              <div className="sec-head">
                <span className="eyebrow">FAQ</span>
                <h2>Questions readers ask</h2>
              </div>
              <div className="faq-list">
                {faqs.map((f, i) => (
                  <div className={'faq-item' + (openFaq === i ? ' open' : '')} key={f.q}>
                    <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                      {f.q}
                      <span>+</span>
                    </button>
                    <div className="faq-a">{f.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ============ CTA ============ */}
          <section className="cta-wrap">
            <div className="cta">
              <div className="container">
                <h2>The future of reading is here.</h2>
                <p>Join thousands of readers who carry their whole library everywhere.</p>
                <div className="hero-btns">
                  <a href="#pricing" className="btn btn-white">
                    Get Started
                  </a>
                  <a href="#collection" className="btn btn-ghost-w">
                    Explore Books
                  </a>
                </div>
                <div className="words">
                  <Marquee>
                    {rotatingWords.concat(rotatingWords).map((w, i) => (
                      <span className="word" key={w + i}>
                        {w}
                      </span>
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* ============ FOOTER ============ */}
        <footer className="footer">
          <div className="container">
            <div className="foot-grid">
              <div className="about">
                <a href="#home" className="logo">
                  📚 Page<span>Turn</span>
                </a>
                <p>Your home for digital books. Buy once, download instantly and read anywhere.</p>
              </div>
              {footerCols.map((c) => (
                <div key={c.title}>
                  <h4>{c.title}</h4>
                  <ul>
                    {c.links.map((l) => (
                      <li key={l[0]}>
                        <a href={l[1]}>{l[0]}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="askai">
              <span>Ask AI about PageTurn</span>
              <a href="https://claude.ai/new" target="_blank" rel="noreferrer">
                Claude
              </a>
              <a href="https://chatgpt.com/" target="_blank" rel="noreferrer">
                ChatGPT
              </a>
              <a href="https://www.perplexity.ai/" target="_blank" rel="noreferrer">
                Perplexity
              </a>
            </div>

            <div className="foot-bottom">
              <span>© {new Date().getFullYear()} PageTurn</span>
              <div>
                <a href="#home">Privacy Policy</a>
                <a href="#home">Terms & Conditions</a>
                <a href="#home">Cookie Policy</a>
                <a href="#home">Instagram</a>
                <a href="#home">YouTube</a>
                <a href="#home">X.com</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App