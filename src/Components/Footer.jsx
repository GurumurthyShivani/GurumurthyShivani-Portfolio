import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[color:var(--color-border)] mt-16">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-[color:var(--color-text-muted)]">
          © {year} Shivani Gurumurthy. Built with React &amp; Tailwind.
        </p>
        <div className="flex items-center gap-5 text-[color:var(--color-text-muted)]">
          
          <a  href="https://github.com/GurumurthyShivani"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-[color:var(--color-gold)] transition-colors"
          >
            <FaGithub size={18} />
          </a>
          
           <a href="https://linkedin.com/in/shivanigurumurthy"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[color:var(--color-gold)] transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
          
           <a href="mailto:shivanigurumurthy10@gmail.com"
            aria-label="Email"
            className="hover:text-[color:var(--color-gold)] transition-colors"
          >
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}