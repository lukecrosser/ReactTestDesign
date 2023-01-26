import './App.css';

function App() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Your Website Here</h1>
                    <p className="mb-5">This is a hand coded website that could be your website!</p>
                    <button className="btn btn-primary">Get Started</button>

                </div>

            </div>
        </div>
    );
}

export default App;

