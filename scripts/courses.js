const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals. Students will focus on user experience, accessibility, and performance.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

function displayCourses(filter = 'all') {
    const container = document.querySelector('#course-list');
    const creditSpan = document.querySelector('#total-credits');

    document.querySelectorAll('.filters button').forEach(btn => {
        btn.classList.toggle('active', btn.id === filter.toLowerCase());
    });
    
    container.innerHTML = ''; 

    const filtered = filter === 'all' 
        ? courses 
        : courses.filter(c => c.subject === filter);

    filtered.forEach(course => {
        const div = document.createElement('div');
        div.className = `course-card ${course.completed ? 'completed' : ''}`;
        div.innerHTML = `<strong>${course.subject} ${course.number}</strong>`;
        
        div.onclick = () => alert(`${course.title}\n\n${course.description}\n\nTechnology: ${course.technology.join(', ')}`);
        
        container.appendChild(div);
    });

    const total = filtered.reduce((sum, course) => sum + course.credits, 0);
    creditSpan.textContent = total;
}

document.querySelector('#all').onclick = () => displayCourses('all');
document.querySelector('#cse').onclick = () => displayCourses('CSE');
document.querySelector('#wdd').onclick = () => displayCourses('WDD');

displayCourses();