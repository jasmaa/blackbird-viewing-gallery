export default function Welcome({ isEntering, enter }) {
  return (
    <div className={isEntering ? 'animate__animated animate__fadeOut' : 'animate__animated animate__fadeIn'}>
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center">
          <p className="text-6xl mt-14 mb-20">Blackbird Viewing Gallery</p>
          <button className="rounded border-2 border-gray-500 text-gray-500 p-2" onClick={enter}>Enter</button>
        </div>
      </div>
    </div>
  )
}