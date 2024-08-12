const projects = [
    { title: 'Kanthariya Technologies', link: 'https://Kanthariyatechnologies.in' },
    { title: 'Campus2Career', link: 'https://Campus2carrer.in' },
    { title: 'Whea', link: 'https://Whea.in' },
    { title: 'Future Intern', link: 'https://Futureintern.in' }
];

function ProjectCard({ title, link }) {
    return (
        <div className="col-md-3 animate__animated animate__fadeIn">
            <div className="project bg-white shadow-sm p-4">
                <h3><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h3>
            </div>
        </div>
    );
}

function App() {
    return (
        <div>
            <h2 className="text-center">Projects</h2>
            <div className="row">
                {projects.map((project, index) => (
                    <ProjectCard key={index} title={project.title} link={project.link} />
                ))}
            </div>
        </div>
    );
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('projects-container');
    ReactDOM.render(<App />, root);
});
