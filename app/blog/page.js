export const metadata = {
  title: 'Blog',
  description: 'Generated by create next app',
};

export default function BlogPage() {
  return (
    <>
      <div className="xLarge">
        <h1>Our Coffee Journey</h1>
        <br />
        <p style={{ fontSize: '18px', color: '#666', marginTop: '10px' }}>"</p>
      </div>
      <div className="container">
        <div style={{ display: 'grid', margin: '15px' }} className="large">
          <h4>"Brewing Memories: My Coffee Journey"</h4>
          {/*  <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris. Nisi ut
            aliquip ex ea commodo consequat."
          </p> */}
        </div>
        {/*  <div style={{ display: 'flex' }} className="small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div> */}
        <div className="xSmall">
          Profile
          <div className="profilePic">Pic</div>
        </div>
        <div className="long">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris. Nisi ut
          aliquip ex ea commodo consequat."
        </div>
        <div className="xSmall">
          Profile
          <div className="profilePic">Pic</div>
        </div>
        <div className="long">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris. Nisi ut
          aliquip ex ea commodo consequat."
        </div>
        <div className="xSmall">
          Profile
          <div className="profilePic">Pic</div>
        </div>
        <div className="long">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris. Nisi ut
          aliquip ex ea commodo consequat."
        </div>
      </div>
    </>
  );
}
