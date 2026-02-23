document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.contact-tab-btn');
    const panes = document.querySelectorAll('.contact-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-target');

            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
});