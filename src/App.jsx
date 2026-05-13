export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg,#020617,#0f172a,#172554)',
      color: 'white',
      fontFamily: 'Arial',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '30px'
    }}>
      <div>
        <img
          src="/photo.jpg"
          alt="Sinan"
          style={{
            width: '220px',
            height: '220px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '5px solid #22d3ee',
            marginBottom: '25px'
          }}
        />

        <h1 style={{
          fontSize: '70px',
          color: '#22d3ee',
          marginBottom: '20px'
        }}>
          SINAN U
        </h1>

        <p style={{
          fontSize: '24px',
          color: '#cbd5e1',
          maxWidth: '700px',
          lineHeight: '1.8'
        }}>
          Creative web developer from Kerala creating
          modern websites and premium digital experiences.
        </p>
      </div>
    </div>
  )
}
