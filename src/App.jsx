export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg,#020617,#0f172a,#172554)',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        padding: '40px 20px'
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        {/* PROFILE IMAGE */}
        <img
          src="/photo.jpg"
          alt="Sinan U"
          style={{
            width: '220px',
            height: '220px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '6px solid #22d3ee',
            boxShadow: '0 0 40px rgba(34,211,238,0.5)',
            marginBottom: '30px'
          }}
        />

        {/* NAME */}
        <h1
          style={{
            fontSize: '70px',
            marginBottom: '15px',
            color: '#22d3ee',
            fontWeight: '900'
          }}
        >
          SINAN U
        </h1>

        {/* INTRO */}
        <p
          style={{
            fontSize: '24px',
            color: '#cbd5e1',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}
        >
          Creative web developer from Kerala creating
          modern portfolio websites, wedding invitation
          websites, business websites, and premium digital
          experiences.
        </p>

        {/* BUTTON */}
        <button
          style={{
            marginTop: '35px',
            padding: '16px 40px',
            border: 'none',
            borderRadius: '18px',
            background: '#22d3ee',
            color: '#020617',
            fontWeight: 'bold',
            fontSize: '18px',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(34,211,238,0.4)'
          }}
        >
          Explore My Work
        </button>

        {/* WEDDING PROJECT */}
        <div
          style={{
            marginTop: '80px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(34,211,238,0.2)',
            padding: '35px',
            borderRadius: '25px',
            maxWidth: '850px',
            marginLeft: 'auto',
            marginRight: 'auto',
            backdropFilter: 'blur(10px)'
          }}
        >
          <h2
            style={{
              color: '#22d3ee',
              fontSize: '36px',
              marginBottom: '20px'
            }}
          >
            Featured Wedding Project
          </h2>

          <p
            style={{
              color: '#cbd5e1',
              lineHeight: '1.8',
              fontSize: '18px',
              marginBottom: '30px'
            }}
          >
            Premium cinematic wedding invitation website
            featuring elegant animations, romantic visuals,
            music, countdown timer, and luxury design experience.
          </p>

          <a
            href="https://s09894355-lgtm.github.io/shiamasheri-junaid/"
            target="_blank"
            style={{
              display: 'inline-block',
              padding: '15px 35px',
              background: '#22d3ee',
              color: '#020617',
              borderRadius: '15px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '17px'
            }}
          >
            Open Wedding Website
          </a>
        </div>

        {/* SERVICES */}
        <div
          style={{
            marginTop: '90px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '25px'
          }}
        >
          {[
            {
              title: 'Wedding Websites',
              desc: 'Luxury invitation websites with music, countdowns, animations, and galleries.'
            },
            {
              title: 'Portfolio Websites',
              desc: 'Modern and responsive portfolio websites with premium UI design.'
            },
            {
              title: 'Business Websites',
              desc: 'Professional websites for brands, startups, and businesses.'
            }
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(34,211,238,0.2)',
                padding: '35px',
                borderRadius: '25px',
                backdropFilter: 'blur(10px)',
                textAlign: 'left'
              }}
            >
              <h2
                style={{
                  color: '#22d3ee',
                  marginBottom: '15px',
                  fontSize: '28px'
                }}
              >
                {item.title}
              </h2>

              <p
                style={{
                  color: '#cbd5e1',
                  lineHeight: '1.7',
                  fontSize: '17px'
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
