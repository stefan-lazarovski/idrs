window.addEventListener('DOMContentLoaded', function () {

    const navBtn = document.querySelector('#navBtn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const header = document.querySelector('.site-header');
    console.log(header.offsetHeight);
    const CLOSE_MS = 300; // keep in sync with the CSS transition

    // Single source of truth — button, Escape, and links all route through this
    function setMenu(open) {
        navBtn.classList.toggle('open', open);        // 2-arg toggle = force on/off
        mobileMenu.classList.toggle('open', open);
        navBtn.setAttribute('aria-expanded', String(open));
        mobileMenu.setAttribute('aria-hidden', String(!open));
        if (open) window.lenis?.stop();               // lock background scroll
        else window.lenis?.start();                   // resume Lenis
    }

    const closeMenu = () => setMenu(false);

    // One button toggles: next state is the opposite of the current one
    navBtn.addEventListener('click', () => {
        setMenu(!mobileMenu.classList.contains('open'));
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
    });

    mobileMenu.querySelectorAll('.drawer-link').forEach((link) => {
        link.addEventListener('click', (e) => {
            const hash = link.getAttribute('href').split('#')[1];
            const target = document.getElementById(hash);

            if (target) {
                // Section is on THIS page → hijack: close menu, then smooth-scroll
                e.preventDefault();
                e.stopPropagation();
                const offset = -((header?.offsetHeight ?? 0) + 8);
                closeMenu();
                setTimeout(() => {
                    window.lenis
                        ? window.lenis.scrollTo(target, { offset, duration: 1.2 })
                        : target.scrollIntoView({ behavior: 'smooth' });
                }, CLOSE_MS);
            } else {
                // Section is NOT here (e.g. project page) → let the link navigate to /#hash
                closeMenu();
                // no preventDefault — browser follows href to the home page
            }
        });
    });
})