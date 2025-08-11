// Script pour les fonctionnalités interactives du portfolio
document.addEventListener('DOMContentLoaded', () => {
    const typingTitleElement = document.getElementById('typing-title');
    // We will ask the user for this data later
    const textsToType = ["Alex Ondo", "Développeur Laravel", "Spécialiste JavaScript"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = textsToType[textIndex];

        if (isDeleting) {
            // Deleting text
            typingTitleElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Typing text
            typingTitleElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === currentText.length) {
            // Pause at end of word
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textsToType.length;
            // Pause before starting new word
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    if (typingTitleElement) {
        // Start the typing effect
        type();
    }

    // --- Skill Tree Logic ---
    const skillTreeContainer = document.querySelector('.skill-tree');
    const skills = [
        // Tier 1
        { id: 'html', name: 'HTML5', tier: 1, dependencies: [] },
        { id: 'css', name: 'CSS3', tier: 1, dependencies: [] },
        { id: 'js', name: 'JavaScript ES6+', tier: 1, dependencies: [] },

        // Tier 2
        { id: 'git', name: 'Git & GitHub', tier: 2, dependencies: ['html', 'css', 'js'] },
        { id: 'react', name: 'React', tier: 2, dependencies: ['js'] },
        { id: 'node', name: 'Node.js', tier: 2, dependencies: ['js'] },

        // Tier 3
        { id: 'ts', name: 'TypeScript', tier: 3, dependencies: ['js'] },
        { id: 'docker', name: 'Docker', tier: 3, dependencies: ['node'] },
    ];

    function createSkillNodes() {
        if (!skillTreeContainer) return;

        const tiers = {};
        skills.forEach(skill => {
            if (!tiers[skill.tier]) tiers[skill.tier] = [];
            tiers[skill.tier].push(skill);
        });

        Object.keys(tiers).forEach(tier => {
            const tierContainer = document.createElement('div');
            tierContainer.classList.add('skill-tier');
            tiers[tier].forEach(skill => {
                const node = document.createElement('div');
                node.classList.add('skill-node');
                node.id = `skill-${skill.id}`;
                node.textContent = skill.name;
                tierContainer.appendChild(node);
            });
            skillTreeContainer.appendChild(tierContainer);
        });
    }

    createSkillNodes();
});

console.log("Portfolio script loaded!");

// --- Konami Code Easter Egg ---
const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
];
let konamiIndex = 0;

window.addEventListener('keyup', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            konamiIndex = 0; // Reset for next time
            activateEasterEgg();
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    document.body.classList.toggle('matrix-mode');
    console.log('Konami code activated! Toggling Matrix Mode.');
}
