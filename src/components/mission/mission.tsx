'use client';
import Image from 'next/image';

export default function Mission() {
  return (
    <section
      className="relative flex flex-col bg-white mx-auto overflow-hidden"
      style={{
        width: '100%',
        maxWidth: '1537px',
        flexShrink: 0,
        paddingLeft: '172px',
        paddingRight: '172px',
        marginTop: '-60px',
        zIndex: 25,
        position: 'relative',
      }}
    >
      {/* ==================== BAGIAN ATAS ==================== */}
      <div
        className="relative flex justify-between items-start w-full"
        style={{ height: '585px' }}
      >
        {/* Lingkaran kanan atas */}
        <div
          style={{
            position: 'absolute',
            top: '-250px',
            right: '-250px',
            width: '343.737px',
            height: '343.737px',
            transform: 'rotate(1.008deg)',
            borderRadius: '343.737px',
            border: '5px solid rgba(234, 93, 40, 0.38)',
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-300px',
            right: '-300px',
            width: '437.052px',
            height: '437.052px',
            transform: 'rotate(1.008deg)',
            borderRadius: '437.052px',
            border: '5px solid rgba(234, 93, 40, 0.38)',
            zIndex: 1,
          }}
        />

        {/* Polkadot kanan atas */}
        <div
          style={{
            position: 'absolute',
            top: '13px',
            right: '114px',
            width: '143px',
            height: '146px',
            zIndex: 2,
          }}
        >
          <Image
            src="/polkadot-mission.png"
            alt="Polkadot Mission"
            width={143}
            height={146}
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Teks kiri */}
        <div
          style={{
            maxWidth: '534px',
            marginTop: '60px',
            marginLeft: '18px',
            zIndex: 3,
          }}
        >
          <h2
            style={{
              fontFamily: 'Poppins',
              fontSize: '36px',
              fontWeight: 700,
              color: '#444',
              marginBottom: '7px',
            }}
          >
            Our{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F85D1D 12.02%, #F6931C 70.19%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Mission
            </span>
          </h2>

          <p
            style={{
                color: '#000',
                textAlign: 'justify',
                fontFamily: 'Poppins',
                // Mengurangi ukuran font sedikit untuk memberi ruang agar muat 3 baris dengan lebar yang lebih besar
                fontSize: '15px', 
                fontWeight: 400,
                lineHeight: '1.8',
                // Lebar diperbesar (misalnya dari 400px menjadi 550px)
                width: '440px', 
                // Tinggi disesuaikan (96px mungkin terlalu kecil untuk 3 baris dengan lineHeight 1.8; mari kita coba 85px)
                height: '85px', 
                marginTop: '20px',
                // Menambah jarak antar huruf untuk efek "lebih lebar"
                letterSpacing: '0.5px', 
            }}
        >
            To make digital payments accessible, secure, and efficient, enabling businesses and
            individuals to thrive in India&apos;s rapidly growing digital economy.
        </p>
        </div>

        {/* Gambar kanan */}
<div
  style={{
    position: 'absolute',
    top: '70px',
    right: '170px',
    zIndex: 3,
  }}
>
  {/* Gambar utama */}
  <Image
    src="/mission-right.jpg"
    alt="Mission Right"
    width={406}
    height={200}
    style={{
      borderRadius: '8px',
      objectFit: 'cover',
    }}
  />

  {/* Overlay hijau + logo */}
  <div
    style={{
      position: 'absolute',
      top: '90px', // atur posisi sesuai kebutuhan
      right: '220px', // atau bisa pakai 'left' tergantung mau di mana
      width: '68px',
      height: '66px',
      backgroundImage: 'url("/bg-icon-hero.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {/* Logo di tengah background hijau */}
    <Image
      src="/logo-hero-1.jpg"
      alt="Logo Hero"
      width={60.023}
      height={28.32}
      style={{
        objectFit: 'cover',
        aspectRatio: '60.02 / 28.32',
      }}
    />
  </div>
</div>

      </div>

      {/* ==================== BAGIAN BAWAH (Mirror) ==================== */}
      <div
        className="relative flex justify-between items-start w-full"
        style={{
          height: '160px',
          marginTop: '78px',
        }}
      >
        {/* Lingkaran kiri bawah */}
        <div
          style={{
            position: 'absolute',
            bottom: '-250px',
            left: '-250px',
            width: '343.737px',
            height: '343.737px',
            transform: 'rotate(1.008deg)',
            borderRadius: '343.737px',
            border: '5px solid rgba(234, 93, 40, 0.38)',
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-300px',
            left: '-300px',
            width: '437.052px',
            height: '437.052px',
            transform: 'rotate(1.008deg)',
            borderRadius: '437.052px',
            border: '5px solid rgba(234, 93, 40, 0.38)',
            zIndex: 1,
          }}
        />

        {/* Polkadot bawah kiri */}
        <div
          style={{
            position: 'absolute',
            bottom: '350px',
            left: '-10px',
            width: '143px',
            height: '146px',
            zIndex: 2,
          }}
        >
          <Image
            src="/polkadot-mission.png"
            alt="Polkadot Mission Bottom"
            width={143}
            height={146}
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Gambar kiri */}
        <div
          style={{
            position: 'absolute',
            bottom: '170px',
            left: '40px',
            zIndex: 3,
          }}
        >
          <Image
            src="/mission-left.jpg"
            alt="Mission Left"
            width={406}
            height={200}
            style={{
              borderRadius: '8px',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Teks kanan */}
        <div
          style={{
            maxWidth: '534px',
            position: 'absolute',
            bottom: '155px',
            right: '190px',
            zIndex: 3,
            textAlign: 'left',
          }}
        >
          <h2
            style={{
              fontFamily: 'Poppins',
              fontSize: '36px',
              fontWeight: 700,
              color: '#444',
              marginBottom: '7px',
            }}
          >
            Our{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #F85D1D 12.02%, #F6931C 70.19%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Vision
            </span>
          </h2>

         <p
    style={{
        color: '#000',
        textAlign: 'justify',
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '1.8',
        // Mengurangi lebar (dari 560px ke 450px) untuk memaksa teks pecah menjadi 3 baris
        width: '450px', 
        marginTop: '20px',
        // Menambah jarak antar huruf untuk efek "lebih lebar" dan tersebar
        letterSpacing: '0.8px', 
        // Mengatur tinggi agar pas untuk 3 baris (perkiraan)
        height: '96px', 
    }}
>
    To become India’s most trusted and innovative payment gateway, bridging businesses and consumers with world-class financial technology.
</p>
        </div>
      </div>
    </section>
  );
}
