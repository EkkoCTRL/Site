const posts = [
    {
        title: "Test Post",
        date: "2025-07-01",
        summary: "A new cyber-inspired blog for hacking, security, and creative exploits.",
        content: `
        <p>Welcome to my new blog!<br>
        This is where I share my thoughts on hacking, security, and creative exploits.</p>
        <p>In this blog, I'll be posting about:</p>
        <ul>
            <li>Cybersecurity tips and tricks</li>
            <li>Creative coding projects</li>
            <li>Red teaming and pentesting experiences</li>
            <li>Cyberpunk culture and aesthetics</li>
        `
    }
];

// Utility: Render post list
function renderPostList() {
    const blogList = document.getElementById('blogList');
    blogList.innerHTML = '<h2>Blog Posts</h2>';
    if (posts.length === 0) {
        blogList.innerHTML += "<p>No posts yet. Add one!</p>";
        return;
    }
    posts.slice().reverse().forEach((post, idx) => {
        const i = posts.length - 1 - idx; // true index
        const btn = document.createElement('button');
        btn.className = 'post-link';
        btn.innerHTML = `<b>${post.title}</b><br><span class="post-date">${post.date}</span><br><span class="blog-summary">${post.summary}</span>`;
        btn.onclick = () => showPost(i, btn);
        blogList.appendChild(btn);
    });
}
// Utility: Show full post in content panel
function showPost(idx, btn) {
    document.querySelectorAll('.post-link').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const post = posts[idx];
    let html = `<h1>${post.title}</h1>`;
    html += `<div class="blog-date">${post.date}</div>`;
    html += `<div class="blog-summary" style="margin:1.2rem 0 2.2rem 0;">${post.summary}</div>`;
    html += `<div class="blog-post-main">${post.content}</div>`;
    html += `<button class="post-link" style="margin-top:2rem;" onclick="renderPostList();document.getElementById('blogContent').innerHTML='<h1>Welcome 👋</h1><p>Click a post to view its contents here.</p>';">← Back to list</button>`;
    document.getElementById('blogContent').innerHTML = html;
}
// Start
renderPostList();

