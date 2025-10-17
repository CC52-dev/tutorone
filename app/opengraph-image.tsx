import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Tutoropia - Elite Academic Tutoring'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, #e5e5e5 25%, #e5e5e5 26%, transparent 27%, transparent 74%, #e5e5e5 75%, #e5e5e5 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, #e5e5e5 25%, #e5e5e5 26%, transparent 27%, transparent 74%, #e5e5e5 75%, #e5e5e5 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px',
          position: 'relative',
        }}
      >
        {/* Heavy border frame */}
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
            border: '8px solid #000000',
            display: 'flex',
          }}
        />
        
        {/* Inner border */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
            right: 40,
            bottom: 40,
            border: '4px solid #000000',
            display: 'flex',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            zIndex: 10,
            padding: '80px',
          }}
        >
          {/* Logo/T Icon */}
          <div
            style={{
              width: 120,
              height: 120,
              backgroundColor: '#000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 40,
              border: '6px solid #000000',
            }}
          >
            <div
              style={{
                fontSize: 96,
                fontWeight: 900,
                color: '#ffffff',
                fontFamily: 'monospace',
                lineHeight: 1,
              }}
            >
              T
            </div>
          </div>
          
          {/* Main Title */}
          <div
            style={{
              fontSize: 84,
              fontWeight: 900,
              letterSpacing: '-0.03em',
              color: '#000000',
              marginBottom: 30,
              lineHeight: 1,
              fontFamily: 'monospace',
            }}
          >
            [TUTOROPIA]
          </div>
          
          {/* Subtitle */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: '#000000',
              letterSpacing: '0.05em',
              fontFamily: 'monospace',
              textAlign: 'center',
              marginBottom: 20,
            }}
          >
            {'>'} ELITE ACADEMIC TUTORING
          </div>
          
          {/* Bottom text */}
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: '#000000',
              letterSpacing: '0.05em',
              fontFamily: 'monospace',
              textAlign: 'center',
            }}
          >
            {'>'} NO SHORTCUTS. JUST RESULTS.
          </div>
        </div>
        
        {/* Bottom accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            left: 60,
            right: 60,
            height: 12,
            backgroundColor: '#000000',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}

