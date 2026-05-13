export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #020617, #0f172a, #172554)',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div>
        <h1 style={{
          fontSize: '60px',
          marginBottom: '20px',
          color: '#22d3ee'
        }}>
          SINAN U
        </h1>

        <p style={{
          fontSize: '22px',
          color: '#cbd5e1',
          maxWidth: '700px',
          lineHeight: '1.8'
        }}>
          Creative Web Developer from Kerala creating
          modern websites, wedding invitation websites,
          portfolio websites, and premium digital experiences.
        </p>

        <button style={{
          marginTop: '30px',
          padding: '15px 35px',
          border: 'none',
          borderRadius: '15px',
          background: '#22d3ee',
          color: '#020617',
          fontWeight: 'bold',
          fontSize: '18px',
          cursor: 'pointer'
        }}>
          Explore My Work
        </button>
      </div>
    </div>
  )
}
