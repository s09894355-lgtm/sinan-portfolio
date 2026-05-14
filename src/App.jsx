import React from "react"

export default function App() {

  const [display, setDisplay] = React.useState("")

  React.useEffect(() => {
    let text = "SINAN U"
    let i = 0

    const interval = setInterval(() => {
      setDisplay(text.slice(0, i))
      i++
      if (i > text.length) clearInterval(interval)
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#020617,#0f172a,#172554)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px"
      }}
    >

      {/* ANIMATIONS */}
      <style>
        {`
          .fade {
            opacity: 0;
            transform: translateY(40px);
            transition: all 0.8s ease;
          }

          .fade.show {
            opacity: 1;
            transform: translateY(0);
          }

          .cursor {
            display: inline-block;
            margin-left: 5px;
            color: #22d3ee;
            animation: blink 0.7s infinite;
          }

          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>

      <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>

        {/* PHOTO */}
        <img
          src="/photo.jpg"
          className="fade"
          alt="Sinan"
          style={{
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "6px solid #22d3ee",
            boxShadow: "0 0 40px rgba(34,211,238,0.5)",
            marginBottom: "25px"
          }}
        />

        {/* NAME WITH TYPE + CURSOR */}
        <h1
          className="fade"
          style={{
            fontSize: "70px",
            color: "#22d3ee",
            fontWeight: "900",
            minHeight: "90px"
          }}
        >
          {display}
          <span className="cursor">|</span>
        </h1>

        {/* INTRO */}
        <p
          className="fade"
          style={{
            fontSize: "24px",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: "1.8"
          }}
        >
          Creative web developer from Kerala creating modern portfolio websites,
          wedding invitation websites, business websites, and premium digital experiences.
        </p>

        {/* WHATSAPP BUTTON */}
        <a
          className="fade"
          href="https://wa.me/918590594972"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "35px",
            padding: "16px 40px",
            borderRadius: "18px",
            background: "#22d3ee",
            color: "#020617",
            fontWeight: "bold",
            fontSize: "18px",
            textDecoration: "none",
            boxShadow: "0 10px 30px rgba(34,211,238,0.4)"
          }}
        >
          Send Message
        </a>

        {/* WEDDING PROJECT */}
        <div
          className="fade"
          style={{
            marginTop: "80px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(34,211,238,0.2)",
            padding: "35px",
            borderRadius: "25px",
            maxWidth: "850px",
            marginLeft: "auto",
            marginRight: "auto",
            backdropFilter: "blur(10px)"
          }}
        >
          <h2 style={{ color: "#22d3ee", fontSize: "36px" }}>
            Featured Wedding Project
          </h2>

          <p style={{ color: "#cbd5e1", margin: "20px 0", fontSize: "18px" }}>
            Premium cinematic wedding invitation website with animations, music, and luxury design.
          </p>

          <a
            href="https://s09894355-lgtm.github.io/shiamasheri-junaid/"
            target="_blank"
            style={{
              display: "inline-block",
              padding: "15px 35px",
              background: "#22d3ee",
              color: "#020617",
              borderRadius: "15px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Open Wedding Website
          </a>
        </div>

      </div>
    </div>
  )
}
