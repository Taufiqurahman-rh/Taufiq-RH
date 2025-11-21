const skillData = {
    ethical: {
        title: "Ethical Hacking",
        desc: `Mempraktikkan teknik peretasan secara etis untuk memahami bagaimana serangan bekerja,
        bagaimana celah dieksploitasi, dan bagaimana sistem dapat diperkuat. Fokus pada mindset penyerang
        untuk meningkatkan pertahanan keamanan.`
    },
    ctf: {
        title: "CTF (Capture The Flag)",
        desc: `Sering mengikuti berbagai jenis CTF untuk meningkatkan kemampuan eksploitasi, analisis,
        debugging, dan problem solving. Terbiasa dengan kategori Web Exploitation, Forensic, Cryptography,
        hingga Network Analysis.`
    },
    pentest: {
        title: "Pentesting",
        desc: `Menguasai proses pentest mulai dari reconnaissance, scanning, enumeration, exploitation,
        privilege escalation, hingga reporting untuk menemukan serta menilai kerentanan pada sistem.`
    },
    nmap: {
        title: "Nmap",
        desc: `Berpengalaman menggunakan Nmap untuk scanning port, service detection, OS fingerprinting,
        network mapping, dan menemukan potensi kerentanan pada sebuah jaringan.`
    },
    wireshark: {
        title: "Wireshark",
        desc: `Mampu melakukan analisis paket jaringan untuk troubleshooting, investigasi aktivitas mencurigakan,
        hingga memahami pola komunikasi antar host secara mendalam.`
    },
    networking: {
        title: "Networking",
        desc: `Memahami konsep jaringan seperti VLAN, routing, ACL, subnetting, switching, hingga keamanan jaringan.
        Mampu mengkonfigurasi router dan switch (terutama Cisco).`
    },
    linux: {
        title: "Linux & Tools Keamanan",
        desc: `Terbiasa menggunakan Linux (terutama Kali Linux) sebagai sistem utama untuk analisis keamanan.
        Menguasai tools seperti Metasploit, Burp Suite, Nmap, Hydra, dan Wireshark.`
    }
};

function openSkill(key) {
    const detail = document.getElementById("detail");
    const data = skillData[key];

    detail.innerHTML = `
        <div class="detail-card">
            <h2>${data.title}</h2>
            <p>${data.desc}</p>
        </div>
    `;

    detail.scrollIntoView({ behavior: "smooth" });
}
