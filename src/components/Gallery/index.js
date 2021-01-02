import { works } from './works';

/**
 * Gallery
 */
export default function Gallery() {
  return (
    <div className="animate__animated animate__fadeIn">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center">

          <p className="align-center text-4xl mt-14 mb-10">Blackbird Viewing Gallery</p>

          <div className="grid grid-cols-1 gap-4">
            {works.map(({ title, medium, subtitle, url }) => (
              <div key={title} className="my-12">
                <img src={url} className="shadow-lg rounded-lg w-full" />
                <div className="text-gray-500 mt-3">
                  <p className="text-md font-bold text-black">{title}</p>
                  <p className="text-sm">{subtitle}</p>
                  <p className="text-sm">{medium}</p>
                </div>
              </div>
            ))}

            <div className="my-12">
              <iframe className="shadow-lg rounded-lg w-full" src="index.html" height="300"></iframe>
              <div className="text-gray-500 mt-3">
                <p className="text-md font-bold text-black">Blackbird Viewing Gallery</p>
                <p className="text-sm">American, 2021</p>
                <p className="text-sm">Elements in DOM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}