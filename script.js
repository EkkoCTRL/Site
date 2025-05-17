const lines = [
    '<span class="prompt-user">echo@localhost:~<span class="prompt-dollar">$</span></span> whoami',
    'Echo',
    '<span class="prompt-user">echo@localhost:~<span class="prompt-dollar">$</span></span> nmap -A target.com',
    '[+] Open ports: 21, 22, 80, 443',
    '<span class="prompt-user">echo@localhost:~<span class="prompt-dollar">$</span></span> id',
    'uid=1337(Echo) gid=1337(hackers)',
    'echo@localhost:~$ cat /etc/passwd | grep root',
    'root:x:0:0:root:/root:/bin/bash'
];

const typingSpeed = 32; // ms per character
const lineDelay = 440;  // ms between lines

const terminal = document.getElementById('terminal-content');
let lineIdx = 0;

function typeLine(line, callback) {
    let n = 0;
    let span = document.createElement('span');
    span.className = 'terminal-line';
    terminal.appendChild(span);

    function typeChar() {
        if (n <= line.length) {
            span.innerHTML = line.slice(0, n) + '<span class="terminal-cursor"></span>';
            n++;
            setTimeout(typeChar, typingSpeed);
        } else {
            span.innerHTML = line;
            callback();
        }
    }
    typeChar();
}

function typeLines() {
    if (lineIdx < lines.length) {
        typeLine(lines[lineIdx], function() {
            lineIdx++;
            setTimeout(typeLines, lineDelay);
        });
    } else {
        // Add blinking cursor after all lines
        let cursor = document.createElement('span');
        cursor.className = 'terminal-cursor';
        terminal.appendChild(cursor);
    }
}

terminal.innerHTML = '';
typeLines();
