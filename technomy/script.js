document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById('contentSelector');
    const contentArea = document.getElementById('contentArea');

    dropdown.addEventListener('change', function() {
        const selectedOption = dropdown.value;

        switch (selectedOption) {
            case 'option1':
                contentArea.innerHTML = `
                    <div class="main-content">
                        <div class="content-item">
                            <img src="html2.png" alt="">
                            <h2>HTML</h2>
                            <p>HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).
                            "Hypertext" refers to links that connect web pages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web. By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web.</p>
                        </div>
                        <div class="content-item">
                            <img src="CSS-Logo.png" alt="">
                            <h2>CSS</h2>
                            <p>CSS stands for Cascading style sheets. It describes to the user how to display HTML elements on the screen in a proper format. CSS is the language that is used to style HTML documents. In simple words, cascading style sheets are a language used to simplify the process of making a webpage.
                            CSS is used to handle some parts of the webpage. With the help of CSS, we can control the colour of text and style of fonts, and we can control the spacing between the paragraph and many more things. CSS is easy to understand but provides strong control on the Html documents.CSS is combined with HTML.</p>
                        </div>
                        <div class="content-item">
                            <img src="javascript-Symbol.png" alt="">
                            <h2>JavaScript</h2>
                            <p>JavaScript is a lightweight programming language commonly used by web developers to add dynamic interactions to web pages, applications, servers, and even games.
                            It works seamlessly alongside HTML and CSS, complementing CSS in formatting HTML elements while providing user interaction, a capability that CSS alone lacks.
                            JavaScript’s widespread applications in web, mobile app, and game development make it a valuable language to learn.</p>
                        </div>
                        <div class="content-item">
                            <img src="reactjs.jpg" alt="Mobile Analytics">
                            <h2>ReactJS</h2>
                            <p>React is a framework that employs Webpack to automatically compile React, JSX, and ES6 code while handling CSS file prefixes. React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.
                            React offers various extensions for entire application architectural support, such as Flux and React Native, beyond mere UI.</p>
                        </div>
                        <div class="content-item">
                            <img src="angular1.png" alt="Cloud Solutions">
                            <h2>Angular</h2>
                            <p>Angular is an open-source JavaScript framework, developed and maintained by Google, that provides a standard structure and additional features to simplify web and mobile application development. One of the defining characteristics of Angular is its use of the regular Document Object Model (DOM) coupled with TypeScript - a statically typed superset of JavaScript - to enhance code readability and maintainability</p>
                        </div>
                    
                    </div>
                `;
                break;
                case 'option2':
                    contentArea.innerHTML=`<div class="main-content">
                        <div class="content-item">
                            <img src="java.webp" alt="">
                            <h2>Java</h2>
                            <p>Java is a programming language and a platform. Java is a high level, robust, object-oriented and secure programming language.
                            Java was developed by Sun Microsystems (which is now the subsidiary of Oracle) in the year 1995. James Gosling is known as the father of Java. Before Java, its name was Oak. Since Oak was already a registered company, so James Gosling and his team changed the name from Oak to Java.</p>
                        </div>
                        <div class="content-item">
                            <img src="python.png" alt="">
                            <h2>Python</h2>
                            <p>Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.</p>
                        </div>
                        <div class="content-item">
                            <img src="nodejs.png" alt="">
                            <h2>nodeJS</h2>
                            <p>Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project! A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.</p>
                        </div>
                        <div class="content-item">
                            <img src="c.png" alt="">
                            <h2>c#</h2>
                            <p>C# is a general-purpose, modern and object-oriented programming language pronounced as “C sharp”. It was developed by Microsoft led by Anders Hejlsberg and his team within the .Net initiative and was approved by the European Computer Manufacturers Association (ECMA) and International Standards Organization (ISO). C# is among the languages for Common Language Infrastructure and the current version of C# is version 7.2. C# is a lot similar to Java syntactically and is easy for the users who have knowledge of C, C++ or Java. A bit about .Net Framework .Net applications are multi-platform applications and framework can be used from languages like C++, C#, Visual Basic, COBOL etc. It is designed in a manner so that other languages can use it</p>
                        </div>
                        <div class="content-item">
                            <img src="express.png" alt="">
                            <h2>ExpressJS</h2>
                            <p>Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.
                            Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks.</p>
                        </div>
                    
                    </div>
                `
                    break;
                    case 'option3':
                        contentArea.innerHTML=`<div class="main-content">
                        <div class="content-item">
                            <img src="mysql.png" alt="">
                            <h2>MySQL</h2>
                            <p>A relational database stores data in separate tables rather than putting all the data in one big storeroom. The database structure is organized into physical files optimized for speed. The logical data model, with objects such as data tables, views, rows, and columns, offers a flexible programming environment. You set up rules governing the relationships between different data fields, such as one to one, one to many, unique, required, or optional, and “pointers” between different tables. The database enforces these rules so that with a well-designed database your application never sees data that’s inconsistent, duplicated, orphaned, out of date, or missing.</p>
                        </div>
                        <div class="content-item">
                            <img src="Mongodb.png" alt="">
                            <h2>mongoDB</h2>
                            <p>MongoDB’s document model is simple for developers to learn and use, while still providing all the capabilities needed to meet the most complex requirements at any scale. We provide drivers for 10+ languages, and the community has built dozens more. MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time  MongoDB is a distributed database at its core, so high availability, horizontal scaling, and geographic distribution are built in and easy to use</p>
                        </div>
                        <div class="content-item">
                            <img src="postgreSQL.png" alt="">
                            <h2>PostgreSQL</h2>
                            <p>PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads. The origins of PostgreSQL date back to 1986 as part of the POSTGRES project at the University of California at Berkeley and has more than 35 years of active development on the core platform.
                            PostgreSQL has earned a strong reputation for its proven architecture, reliability, data integrity, robust feature set, extensibility, and the dedication of the open source community behind the software to consistently deliver performant and innovative solutions. PostgreSQL runs on all major operating systems, has been ACID-compliant since 2001, and has powerful add-ons such as the popular PostGIS geospatial database extender.</p>
                        </div>
                        </div>`
                        break;
            // Add cases for other options if needed
            default:
                contentArea.innerHTML = `<h2>details about full-stack development</h2>`;
        }
    });
});
