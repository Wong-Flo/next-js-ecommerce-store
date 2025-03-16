export default function HomePage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '70px', fontWeight: 'bold', color: '#333' }}>
          Just Brew It!
        </h1>
        <p style={{ fontSize: '24px', color: '#666' }}>
          It's not just coffee, it's a lifestyle.
        </p>
      </div>
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'left',
          fontSize: '18px',
          lineHeight: '1.6',
          color: '#444',
        }}
      >
        <div
          style={{
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
          }}
        >
          <p>
            Welcome to our coffee shop! We believe that coffee is more than just
            a drink; it's an experience. Our mission is to provide you with the
            best coffee experience possible, from the moment you walk through
            our doors to the last sip of your favorite brew.
          </p>
          <p>
            Whether you're a coffee aficionado or just looking for a cozy place
            to relax, we have something for everyone. Our menu features a wide
            variety of coffee drinks, teas, and pastries, all made with the
            finest ingredients.
          </p>
          <p>
            Join us for a cup of coffee and discover why we say, "Just Brew It!"
          </p>
        </div>
      </div>
    </div>
  );
}
