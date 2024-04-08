const copies:{[key:string]:string} = {

    'cta.tent': "Academic Background",
    'cta.campfire': 'Want hot cocoa with churros?',
    'cta.fox': 'Aside Projects',
    'cta.box': 'Currently working at Cober.io',
    // 'cta.boat': "Success & Failure Stories",
    'cta.boat': "Hire me",

    'title.box': 'Professional Experience', 
    'title.boat': "Failures & Victories",
    
    'title.academic': "Education",
    'intro.academic': "I started my academic education journey at the Higher Technical School of Computer Engineering in Málaga (UMA). After that, I ventured to Finland, where I pursued my academic aspirations at the University of Applied Sciences in Mikkeli where finally graduated in Systems Engineering and Information Technology in the year 2012.",
    "intro.results.academic": "Throughout my academic tenure, I developed a solid background in computational calculus and software engineering, achieving distinction in subjects such as Abstract Data Types, Numerical Methods, Functional Programming, and Algebra.",
    'intership.academic': 'During the final stage of my academic training, I undertook a 6-month internship at <a class="link" href="https://www.generanet.com/" target="_blank">Generanet</a>. This experience provided me with a closer insight into professional software development and teamwork.',
    'intership.tools.academic': "I learned to manage version control tools such as Subversion and Mercurial. Additionally, I worked on various utilities and command-line applications to support maintenance tasks like database migrations. I also completed, with the guidance of senior colleagues, the design and implementation of core production projects tasks",
    'intership.projects.academic': 'Being the most relevant one the implementation of the advertising banner system for the landing pages of <a class="link" href="https://www.lasexta.com/" target="_blank">laSexta</a>, a well-known TV channel in Spain. In these projects, I also gained experience about managing infrastructure and production deployments. It was here that I first heard of things like secure shell (ssh) or a load balancer ;)',
    'thesis.description.academic': "Regarding my final thesis project, I worked on the development of a desktop environment and window manager inspired by GNOME and based on web technologies. This project allowed me to learn important concepts about operating systems and virtualization. I developed a small kernel responsible for managing resources and providing an interface for the window tile manager.",
    'thesis.tools.academic': 'Regarding the technology stack, I mostly focused on vanilla JavaScript and some supporting libraries as <a class="link" href="https://jquery.com/" target="_blank">jQuery</a> for DOM manipulation and <a class="link" href="https://knockoutjs.com/" target="_blank">Knockout</a> for observables and signal simulation. Have a look to my <a class="link" href="https://zuripabon.es/thesis" target="_blank">final thesis demo</a> project',
    
    'title.about': "About me",
    'intro.about': 'According to <a class="link" href="https://www.biblegateway.com/passage/?search=Genesis+25%3A27&version=KJ21" target="_blank">biblical</a> history, Ya\'akov was a calm man who preferred staying home, while his brother, Esav, was a cunning hunter always in pursuit of new prey. I think I resemble Ya\'akov more than Esav.',
    'hobbies.about': 'This is me, taking a nice bike ride through the countryside, eating churros dipped in delicious hot cocoa, and watching anime shows. My best top 3 ever:',
    'write.about': 'My favorite hobbies are simple. I enjoy good talks and writing light novels. Currently, I\'m working on <a class="link" href="https://zuripabon.es/blog/light%20novels/2021/07/18/my-life-prenatal-contract.html" target="_blank">"My Prenatal Life Contract"</a> and <a class="link" href="https://zuripabon.es/blog/light%20novels/2019/02/23/anane-the-volunteer.html" target="_blank">"Anane the Volunteer"</a>',

    'title.experiments': "Aside Projects",
    'intro.experiments': "Below you can find a collection of some experiments and weekend projects I work on as personal free time pet-projects or for a hackathon. Most of them are quite old and inactive, so it is a time machine for my coding skills. You have links below to demo each one of them",
    'experiments.title.webvtt': 'YouTube Subtitles',
    'experiments.desc.webvtt': 'A <a class="link" href="https://tsur.github.io/webvtt/" target="_blank">WebVTT</a> experiment for setting up subtitles to your videos on the fly without having to install third party software for specific platforms and learning about them. It is also possible to share your work with others. This is great for making small parodies.',
    'experiments.title.octoql': "Octo Query Language",
    'experiments.desc.octoql': '<a class="link" href="https://tsur.github.io/octoql/" target="_blank">OctoQL</a> is an sql-like query language to help you fetch Github resources easier from an interactive run notebook. The main purpose was to learn and share with others a real case scenario example about how to craft a Domain Specific Language (DSL) from scratch and the different steps involved in the process.',
    'experiments.title.shipped': "Ship it Game",
    'experiments.desc.shipped': 'A <a class="link" href="https://tsur.github.io/shipped/" target="_blank">2D Puzzle Game</a>. Pieces can only move left and right if it\'s a horizontal piece or up and down if it\'s a vertical piece. You gain the game when you ship the red horizontal box to production. I must warn you: it is very addictive!',
    'experiments.title.gameoflife': "Game of life",
    'experiments.desc.gameoflife': '<a class="link" href="https://tsur.github.io/gamelife/" target="_blank">Game of life</a>, a classic cellular automaton devised by mathematician John Conway. It consists of a grid of cells, each of which can be in one of two states, either alive or dead. The state of each cell evolves over time based on a set of fixed predefined rules',

    // 'experiments.title.canvas': "CanvasJS",
    // 'experiments.desc.canvas': "Open source contribution to canvasjs charting library",

    'experiments.title.sword': "NODE Sword",
    'experiments.desc.sword': '<a class="link" href="https://github.com/tsur/node-sword" target="_blank">node-sword</a> is a C++  binding for the Sword API Engine which makes it possible to use it from your NodeJS based project.',

    'experiments.title.rae': "NODE RAE",
    'experiments.desc.rae': '<a class="link" href="https://github.com/tsur/node-rae" target="_blank">node-rae</a> is a node library to fetch the spanish RAE dictionary programmatically. It exposes an API for fetching words and a command line utility for looking up words in the official RAE dictionary.',

    'experiments.title.vtt': "VTT to SRT",
    'experiments.desc.vtt': '<a class="link" href="https://github.com/tsur/vtt-to-srt" target="_blank">vtt-to-str</a> is a node library to convert VTT files to SubRip SRT as data stream or from blob',
    
    'experiments.title.unicode': "Unicode replacer",
    'experiments.desc.unicode': '<a class="link" href="https://github.com/tsur/unicode-wtf" target="_blank">unicode-wtf</a>, an evil command line toy for having fun with your workmates. You can use it to replace unicode chars on files like replacing normal semicolon by unicode greek semicolon which makes the compiler/transpiler to fail. Look at their faces after opening its code editor! Do not forget to restore it back ;)',
    
    'experiments.title.tabita': "Tabita",
    'experiments.desc.tabita': '<a class="link" href="https://github.com/tsur/tabita" target="_blank">Tabita</a> is a canvas based table alternative to DOM for big data and realtime analytics. Having a DOM table is not an option when DOM start stuttering with high data overload',

    'experiments.title.bigmouse': "Big Mouse",
    'experiments.desc.bigmouse': '<a class="link" href="https://big-mouse.github.io/examples/" target="_blank">Big Mouse</a> is a browser library aimed to extend the mouse cursor capabilities with data-centric visualizations. <a class="link" href="https://big-mouse.github.io/examples/" target="_blank">Big Mouse</a> allow websites to render contextual information in the form of data viz so users can make better choices and have better experience when interacting with links or other interactive DOM elements.',
    // https://github.com/big-mouse

    'title.jobs': "Career Path",
    'cober.role': "Principal Software Engineer",
    'cober.desc': 'At <a class="link" href="https://www.cober.io/" target="_blank">Cober</a> we have the mission of making accessible the insurance sector to iGen, helping businesses to reduce time and cost intensive operatives by improving their bottom line reducing churn and rejection rates, increasing conversion and average ticket size through innovative proposals related to AI bot assistance',
    'cober.challenges': 'As an innovative startup, challenges arise everywhere. From technical point of view, we research on LLMs for insurances to get cheaper and quicker response ratios, leveraging a hybrid model in which we use LLMs to classify user requirements and non-AI tasks to work out usable and intuitive user funnels. Building a market of plug & play customizable components to augment AI capabilities and working on alert notifications based on complex behavior such as "Ask for human interaction when user request an insurance quote and a negative emotion is detected" has been the most attractive and cool challenges we are facing at Cober',

    'spotahome.role': "Senior Software Engineer",
    'spotahome.desc': '<a class="link" href="https://www.spotahome.com/" target="_blank">Spotahome</a> follows a similar business model to online holiday rentals, but  focuses on long-term stays, with a minimum of 30 days, offering a 100% online booking process.',
    'spotahome.challenges': 'I worked as senior frontend engineer as part of the landlord\'s experience and lead multiple projects for the landlord\'s platform and backoffice systems, including main customer funnels as the listing creation, edition and publication funnels. With about 50K active users per day, becoming fully available and providing a good experience by maintaining our design system, optimizing data fetching with GQL and optimistic strategies, working on queries performance, cache validations or bundle and assets optimization were part of my key contributions to the company. How to approach A/B testing, dealing with data noise and false negatives, flaky e2e, third party code integrations or debugging performance issues happening client-side but having its roots in a slow query operation in a RabbitMQ consumer queue in some microservice were some of the common challenges I faced at spotahome',

    'valo.role': "Mid/Senior Software Engineer",
    'valo.desc': 'Valo was an amazing piece of engineering focused on a Big Data engine for real-time analytics. The project was merged into <a class="link" href="https://www.itrsgroup.com/" target="_blank">ITRS Group</a> Geneos in February 2018.',
    'valo.challenges': 'I started working as a mid senior software engineer and later promoted to lead some projects in the frontend as the main VALO UI with interactive notebooks. I extensively worked on the development of the Valo JavaScript SDK to manage the pool of SSE connections with the Valo engine in a non-blocking way by using web workers and also contributed to the development of canvas and DOM based chart visualizations',

    'gsr.role': "Mid Software Engineer",
    'gsr.desc': '<a class="link" href="https://www.gsr.io/" target="_blank">GSR</a> started on as a liquidity provider focused on bulk trading operations.',
    'gsr.challenges': 'The main role I played on GSR was to support the team with the creation of automated trading bots and P&L report generation by using nodejs agents connecting to the Ripple protocol',

    'ebury.role': "Junior Software Engineer",
    'ebury.desc': '<a class="link" href="https://www.ebury.com/" target="_blank">Ebury</a> specializes in simplifying international forex trading offering competitive rates',
    'ebury.challenges': "I started my journey as software engineer at Ebury, working with Python and Django. As a Junior developer, I mainly worked with minor projects in the Ebury\'s backoffice and the Django admin panel. Documenting and maintaining unit and e2e test scenarios. The most challenge project I worked on was a major migration of Django from a very outdated version going through multiple minor and major version updates making sure the system was stable on each new update until migration process was over",

    'title.companies': "Logbook",
    'desc.companies': "Welcome brave adventure!, exciting experiences of failed attempts into becoming a successful entrepreneur awaits you ahead. Hope this can be somewhat useful to your noble and worthy goal of discovering new lands of abundance.",
    
    'title.shop': "Hire me",
    'desc.shop': "I can help you start to materialize your business idea end-to-end and production ready",

    'title.legal': 'Legal Notice',
    'intro.legal': 'This website, zuipabon.es, is provided for informational purposes only. Any reliance you place on the provided  information is therefore strictly at your own risk.',
    'terms-1.legal': 'No Warranty: While I endeavor to keep the information up to date and correct, the owner of this website, zuripabon.es, makes no representations or warranties in relation to the accuracy, completeness, or reliability with respect to the website, services, or related graphics contained on the website for any purpose.',
    'terms-2.legal': 'No Liability: Under no circumstances shall the owner of this website be liable for any direct, indirect, special, incidental, or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this website.',
    'terms-3.legal': 'Professional Advice: The information provided on this website is not intended to constitute professional advice. It is provided for general informational purposes only and should not be relied upon as a substitute for professional advice. You should consult with a qualified professional before making any decisions based on the information provided on this website.',
    'terms-4.legal': 'Third-party Links: This website may contain links to third-party websites that are not owned or controlled by the owner of this website. The owner of this website has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites.',
    'terms-5.legal': 'Changes to Terms: The owner of this website reserves the right to modify these terms and conditions at any time without prior notice. By continuing to access or use this website after any changes are made, you agree to be bound by the revised terms and conditions.',
    'terms-6.legal': 'By using this website, you acknowledge and agree to the terms and conditions outlined above. If you do not agree with these terms and conditions, you should not access or use this website.',
    'terms-7.legal': 'For any question about this legal disclaimer notice, please contact me by email at hola@zuripabon.es',
    'game.controls': 'hover or touch to discover'

}

export default copies;