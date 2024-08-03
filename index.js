document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.getElementById('project-list');
    const projects = [

        {
            id: 'pokedex',
            title: 'POKEDEX',
            description: 'Explore Pokémon and manage your favorites with our site using the Pokémon API. Engage further with two exciting games: Memory Game and Pokefight.',
            link: 'https://main--pokeapigameproject.netlify.app'
        },
        {
            id: 'to do list',
            title: 'To Do List',
            description: 'This React-App provides a simple and intuitive interface for adding, editing, deleting, and organizing tasks.',
            link: 'https://tasktornado.netlify.app'
        },
         {
        id: 'travel',
        title: 'My Log Travels',
        description: 'This project utilizes a modern tech stack including React, JavaScript, HTML, and Tailwind CSS to create an interactive and visually appealing web experience for users seeking travel information and services.',
        link: 'https://traveltoyourdreams.netlify.app/'
    },

    {
        id: 'diyhub',
        title: 'DIYHUB',
        description: 'DIYHUB is a comprehensive Full Stack Web Development project designed to create a vibrant and collaborative platform for DIY enthusiasts.',
        link: 'https://diyhub.netlify.app'
    }

        // Add more projects here as needed
    ];

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectList.appendChild(projectDiv);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleDarkModeButton = document.querySelector('.toggle-btn');
    const body = document.body;

    // Check if the user has a saved preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        toggleDarkModeButton.classList.add('active');
    }

    toggleDarkModeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        
        // Toggle the button's active state
        toggleDarkModeButton.classList.toggle('active', isDarkMode);

        // Save the user's preference
        if (isDarkMode) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});
