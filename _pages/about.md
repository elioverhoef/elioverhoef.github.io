---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div id="custom-cursor"></div>

<header>
    <div class="container">
        <h1><span class="highlight">Elio Verhoef</span></h1>
        <nav>
            <ul>
                <li class="current"><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </div>
</header>

<section id="showcase">
    <div class="container">
        <h1>Innovating with AI & Programming</h1>
        <p>Let your ideas be created, instead of spending hours programming: ProjectCodr.AI</p>
    </div>
</section>

<section id="about">
    <div class="container">
        <h2>About Me</h2>
        <p>Hi, I'm Elio</p>
        <ol>
            <li>I love <a href="https://www.strava.com/athletes/31835033">running</a></li>
            <li>I am focused on optimizing my own and others' health and well-being</li>
            <li>I've worked on several programming <a href="/projects">projects</a></li>
            <li>I make interesting videos about health on <a href="https://www.youtube.com/c/ElioVerhoef">YouTube</a></li>
        </ol>
    </div>
</section>

<section id="projects">
    <div class="container">
        <h2>Projects</h2>
        <div class="project-box">
            <img src="/images/mindmappr.png" alt="Mindmappr Logo">
            <h3>Mindmappr</h3>
            <p>Create automatic mindmaps to inspire creativity, using AI.</p>
        </div>
        <div class="project-box">
            <img src="/images/projectcodr.png" alt="Projectcodr Logo">
            <h3>Projectcodr</h3>
            <p>AI-powered code generation for entire projects in seconds</p>
        </div>
        <div class="project-box tooltip">
            <img src="/images/health-icon.png" alt="Health Icon">
            <h3>Longevity</h3>
            <p>Exploring the frontiers of health and longevity</p>
            <span class="tooltiptext">Tip: Regular exercise and a balanced diet are key to longevity!</span>
        </div>
    </div>
</section>

<script>
    // Custom cursor
    const cursor = document.getElementById('custom-cursor');
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Easter egg: Konami code
    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiCodePosition = 0;

    document.addEventListener('keydown', function(e) {
        if (e.key === konamiCode[konamiCodePosition]) {
            konamiCodePosition++;
            if (konamiCodePosition === konamiCode.length) {
                alert('You found the easter egg! Here\'s a health tip: Stay hydrated for better cognitive function!');
                konamiCodePosition = 0;
            }
        } else {
            konamiCodePosition = 0;
        }
    });
</script>
