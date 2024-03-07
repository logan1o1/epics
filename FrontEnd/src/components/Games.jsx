import React from 'react';

const Games = () => {
  return (
    <div className="container mx-auto mt-24 bg-cyan-100 p-8 rounded-md">
      <h1 className="text-4xl font-bold text-center mb-8 text-black-500">Games</h1>

      <div className="flex flex-wrap justify-center">
        {/* Game 1 */}
        <div className="w-1/2 p-4 border border-cyan-500 rounded-md mb-4">
          <a
            href="https://tanishq9tsj.itch.io/asteroid-game"
            target="_blank"
            rel="Error"
            className="block relative"
          >
            <div className="h-64 w-full mx-auto mb-2 overflow-hidden rounded-md">
              <img
                src="/Images/Game1.png"
                className="h-full w-full object-cover"
                alt="Asteroid Game"
              />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
                Play
              </button>
            </div>
            <p className="text-center mt-2 text-lg font-semibold text-black">Asteroid Game</p>
          </a>
        </div>

        {/* Game 2 */}
        <div className="w-1/2 p-4 border border-cyan-500 rounded-md mb-4">
          <a
            href="https://tanishq9tsj.itch.io/ping-pong-2d-game"
            target="_blank"
            rel="Error"
            className="block relative"
          >
            <div className="h-64 w-full mx-auto mb-2 overflow-hidden rounded-md">
              <img
                src="/Images/Game2.png"
                className="h-full w-full object-cover"
                alt="Game 2"
              />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
                Play
              </button>
            </div>
            <p className="text-center mt-2 text-lg font-semibold text-black">Ping Pong 2D</p>
          </a>
        </div>

        {/* Game 3 */}
        <div className="w-1/2 p-4 border border-cyan-500 rounded-md mb-4">
          <a
            href="https://tanishq9tsj.itch.io/dino-game"
            target="_blank"
            rel="Error"
            className="block relative"
          >
            <div className="h-64 w-full mx-auto mb-2 overflow-hidden rounded-md">
              <img
                src="/Images/Game3.png"
                className="h-full w-full object-cover"
                alt="Game 3"
              />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
                Play
              </button>
            </div>
            <p className="text-center mt-2 text-lg font-semibold text-black">Fruit Ninja</p>
          </a>
        </div>

        {/* Game 4 */}
        <div className="w-1/2 p-4 border border-cyan-500 rounded-md mb-4">
          <a
            href="https://tanishq9tsj.itch.io/fruit-ninja"
            target="_blank"
            rel="Error"
            className="block relative"
          >
            <div className="h-64 w-full mx-auto mb-2 overflow-hidden rounded-md">
              <img
                src="/Images/Game4.png"
                className="h-full w-full object-cover"
                alt="Game 4"
              />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
                Play
              </button>
            </div>
            <p className="text-center mt-2 text-lg font-semibold text-black">Dino Game</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Games;
