// Theme Toggle
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Initialize theme before page renders
initTheme();

// Experience Data
const experiences = [
    {
        company: "Tekion Corp",
        type: "B2B",
        role: "Lead Software Engineer",
        date: "May 2025 - Present",
        stack: "Java, Spring, AWS, Kubernetes, Kafka, MongoDB, Redis",
        highlights: [
            "Built foundational infra for AI-Desking MCP Server: STDIO transport & streaming HTTP integration delivered within a week",
            "Delivered Build Vehicle V2, integrating backend systems across Deals, CRM & Vehicle Integration",
            "Architected CI/CD automation pipeline reducing P0 deployment failures with proper alerting systems",
            "Built API Configurator automation suite, reducing manual work from 0.5 day to < 5 minutes",
            "Led QA backlog reduction initiative: 80 → 20 issues in 3 days"
        ]
    },
    {
        company: "Osfin.ai",
        type: "B2B",
        role: "Engineering Manager - Backend (Hands-On)",
        date: "Oct 2023 - May 2025",
        stack: "Java, Spring, AWS, Azure, Kubernetes, Kafka, Spark",
        highlights: [
            "Engineered Unified Dispute Management System reducing client action time from 2 hours to under 2 mins",
            "Integrated SSO with enterprise-grade SAML and LDAP authentication",
            "Spearheaded scalable ETL pipelines for up to 250M records with 3x increase in processing speed",
            "Managed and mentored team of 6 engineers; promoted 3 to SDE2"
        ]
    },
    {
        company: "Kognitos",
        type: "B2B",
        role: "Senior Software Engineer (SDE3)",
        date: "Apr 2023 - Oct 2023",
        stack: "Python, AWS (AppSync, Lambda, Textract, S3, DynamoDB), LLMs, Terraform, GraphQL",
        highlights: [
            "Built AI-powered automation agents using AWS Textract and LLMs, reducing manual processing by 40%",
            "Re-architected API infrastructure with AWS AppSync and Lambda handling 1K+ requests/sec",
            "Drove cost optimization initiative cutting AWS bills by 65% in 3 months"
        ]
    },
    {
        company: "Vahak",
        type: "B2C",
        role: "Senior Backend Developer (SDE2)",
        date: "Jan 2022 - Apr 2023",
        stack: "Golang, AWS, MySQL, ElasticSearch, SQS, SNS, Docker, gRPC",
        highlights: [
            "Developed RBAC and JWT-based authentication, reducing unauthorized access by 50%",
            "Optimized ElasticSearch queries improving system performance by 35%",
            "Built WhatsApp chatbot reducing response time from 3 hours to 2 mins",
            "Optimized SQL queries from 500ms to under 100ms, increasing throughput by 50%"
        ]
    },
    {
        company: "Airbus",
        type: "",
        role: "Software Engineer (E2) & Project Manager",
        date: "Aug 2019 - Jan 2022",
        stack: "C++, Java, Spring, Azure, Docker, WebSockets",
        highlights: [
            "Optimized PRA analysis using Shortest Path Algorithm, saving 3 hours per task",
            "Led team of 4 engineers delivering sophisticated engineering models"
        ]
    },
    {
        company: "Bosch",
        type: "",
        role: "Software Developer (SDE1)",
        date: "July 2016 - Aug 2019",
        stack: "C++, RTOS, Networking",
        highlights: [
            "Designed microcontroller software using Design Patterns, increasing reliability by 30%",
            "Developed data management system for CAN, Ethernet, SPI protocols, improving efficiency by 40%"
        ]
    }
];

// Open Source Contributions
const ossContributions = [
    {
        name: "Spring AI",
        icon: "🌱",
        iconClass: "spring",
        desc: "AI integration framework for Spring ecosystem",
        prs: [
            { title: "Add fluent builder for Message types", number: "#5152", url: "https://github.com/spring-projects/spring-ai/pull/5152" },
            { title: "Improve ObservationContext handling", number: "#5153", url: "https://github.com/spring-projects/spring-ai/pull/5153" },
            { title: "Fix ChatClient builder documentation", number: "#5154", url: "https://github.com/spring-projects/spring-ai/pull/5154" },
            { title: "Add missing null checks in ChatModel", number: "#5155", url: "https://github.com/spring-projects/spring-ai/pull/5155" }
        ]
    },
    {
        name: "Testcontainers",
        icon: "🐳",
        iconClass: "testcontainers",
        desc: "Java library for Docker container testing",
        prs: [
            { title: "Ignore container_name in docker-compose", number: "#11376", url: "https://github.com/testcontainers/testcontainers-java/pull/11376" },
            { title: "Add getMappedPort for UDP protocol", number: "#11377", url: "https://github.com/testcontainers/testcontainers-java/pull/11377" }
        ]
    },
    {
        name: "Apache Kafka",
        icon: "📨",
        iconClass: "kafka",
        desc: "Distributed streaming platform",
        prs: [
            { title: "KAFKA-20009: Improve partition assignment", number: "Pending", url: "https://issues.apache.org/jira/browse/KAFKA-20009" }
        ]
    }
];

// Skills Data
const skills = [
    { category: "Languages", icon: "fa-code", items: ["Java", "Golang", "Python", "C++", "TypeScript"] },
    { category: "Frameworks", icon: "fa-cubes", items: ["Spring Boot", "gRPC", "GraphQL", "Terraform"] },
    { category: "Cloud & Infra", icon: "fa-cloud", items: ["AWS", "Azure", "Kubernetes", "Docker"] },
    { category: "Databases", icon: "fa-database", items: ["MongoDB", "MySQL", "Redis", "ElasticSearch", "DynamoDB"] },
    { category: "Messaging", icon: "fa-envelope", items: ["Kafka", "SQS", "SNS", "RabbitMQ"] },
    { category: "Tools", icon: "fa-tools", items: ["Git", "CI/CD", "Jenkins", "Terraform", "Prometheus"] }
];

// Render Experience Timeline
function renderExperience() {
    const timeline = document.getElementById('experience-timeline');
    timeline.innerHTML = experiences.map(exp => `
        <div class="timeline-item">
            <div class="timeline-header">
                <span class="timeline-company">${exp.company}</span>
                ${exp.type ? `<span class="timeline-type">${exp.type}</span>` : ''}
            </div>
            <div class="timeline-role">${exp.role}</div>
            <div class="timeline-date">${exp.date}</div>
            <div class="timeline-stack">${exp.stack}</div>
            <ul class="timeline-highlights">
                ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// Render OSS Contributions
function renderOSS() {
    const container = document.getElementById('oss-contributions');
    container.innerHTML = ossContributions.map(oss => `
        <div class="oss-card">
            <div class="oss-header">
                <div class="oss-icon ${oss.iconClass}">${oss.icon}</div>
                <div class="oss-name">${oss.name}</div>
            </div>
            <div class="oss-desc">${oss.desc}</div>
            <div class="oss-prs">
                ${oss.prs.map(pr => `
                    <a href="${pr.url}" target="_blank" class="oss-pr">
                        <i class="fas fa-code-pull-request oss-pr-icon"></i>
                        <span class="oss-pr-title">${pr.title}</span>
                        <span class="oss-pr-number">${pr.number}</span>
                    </a>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Render Skills
function renderSkills() {
    const container = document.getElementById('skills-container');
    container.innerHTML = skills.map(skill => `
        <div class="skill-category">
            <h3><i class="fas ${skill.icon}"></i> ${skill.category}</h3>
            <div class="skill-tags">
                ${skill.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Mobile Navigation Toggle
document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.remove('active');
    });
});

// Theme toggle buttons
document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderExperience();
    renderOSS();
    renderSkills();
});
