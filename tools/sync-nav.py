#!/usr/bin/env python3
"""
Regenerates the slide-out menu items and the bottom menu on every page from ONE list,
so labels, icons, order and highlight are always identical.

Usage (from the project root):   python3 tools/sync-nav.py
Edit the MENU / BOTTOM lists below to add or rename a page, run the script, done.
"""
import re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent

I = lambda inner: ('<svg width="{s}" height="{s}" viewBox="0 0 24 24" fill="none" stroke="rgba(26,122,76,0.9)" '
                   'stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + inner + '</svg>')
ICON = {
 'home':  '<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/>',
 'users': '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>',
 'book':  '<path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>',
 'file':  '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
 'bell':  '<path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>',
 'check': '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>',
 'award': '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
 'help':  '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
 'shield':'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
}
# (page file, label, icon)
MENU = [
 ('index.html',        'Homepage',                'home'),
 ('members.html',      'Members',                 'users'),
 ('constitution.html', 'Constitution',            'book'),
 ('studyvault.html',   'Study Vault',             'file'),
 ('announcement.html', 'Announcement',            'bell'),
 ('nomination.html',   'Online Nomination Portal','check'),
 ('leadership.html',   'Leadership',              'award'),
 ('faq.html',          'FAQ',                     'help'),
 ('privacy.html',      'Privacy Policy',          'shield'),
]
BOTTOM = [
 ('index.html',        'Home',         'home'),
 ('members.html',      'Members',      'users'),
 ('constitution.html', 'Constitution', 'book'),
 ('studyvault.html',   'Study Vault',  'file'),
]
# pages that use the plain class names (.panel, .menu-item…); all others use .talsu-*
PLAIN = {'index.html', 'members.html'}
PAGES = ['index.html','members.html','constitution.html','faq.html','leadership.html','privacy.html','studyvault.html']

def menu_html(page, p):
    out = []
    for href, label, icon in MENU:
        act = ' active' if href == page else ''
        out.append(f'''      <a href="{href}" class="{p}menu-item{act}">
        <div class="{p}item-icon">{I(ICON[icon]).format(s=18)}</div>
        <span class="{p}item-label">{label}</span>
        <svg class="{p}chevron" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </a>''')
    return '\n'.join(out)

def bottom_html(page, p, nav_id):
    out = [f'<nav class="{p}bottom-nav" id="{nav_id}" aria-label="Main">']
    for href, label, icon in BOTTOM:
        act = ' active' if href == page else ''
        cur = ' aria-current="page"' if act else ''
        out.append(f'''  <a href="{href}" class="{p}nav-item{act}"{cur}>
    <div class="{p}nav-icon">{I(ICON[icon]).format(s=15)}</div>
    <span class="{p}nav-label">{label}</span>
  </a>''')
    out.append('</nav>')
    return '\n'.join(out)

def balanced_end(s, start):
    """index just after the </div> that closes the <div> opening at `start`"""
    depth = 0
    for m in re.finditer(r'<div\b|</div>', s[start:]):
        depth += 1 if m.group(0) != '</div>' else -1
        if depth == 0:
            return start + m.end()
    raise ValueError('unbalanced div')

changed = 0
for page in PAGES:
    path = ROOT / page
    s = path.read_text(encoding='utf-8')
    p = '' if page in PLAIN else 'talsu-'

    # 1) bottom menu  <nav class="…bottom-nav …"> … </nav>
    m = re.search(r'<nav class="(?:talsu-)?bottom-nav"[^>]*>.*?</nav>', s, flags=re.S)
    if not m: sys.exit(f'{page}: bottom nav not found')
    nav_id = re.search(r'id="([^"]+)"', m.group(0)).group(1) if 'id="' in m.group(0)[:80] else ''
    new_nav = bottom_html(page, p, nav_id).replace(' id=""', '')
    s = s[:m.start()] + new_nav + s[m.end():]

    # 2) slide-out menu items  <div class="…menu-list"> … </div>
    m = re.search(r'<div class="(?:talsu-)?menu-list"[^>]*>', s)
    if not m: sys.exit(f'{page}: menu list not found')
    end = balanced_end(s, m.start())
    open_tag = m.group(0)
    s = s[:m.start()] + open_tag + '\n' + menu_html(page, p) + '\n    </div>' + s[end:]

    path.write_text(s, encoding='utf-8')
    changed += 1
print(f'synced {changed} pages')
