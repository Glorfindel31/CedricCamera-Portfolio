import CloudinaryImage from '@/components/Cloudinary-image';

export async function getData() {
  const result = await fetch('http://localhost:3000/searchapi');

  if (!result.ok) {
    throw new Error('Failed to fetch');
  }
  return result.json();
}

export default async function Home() {
  const data = await getData();

  const MAX_COLUMNs = 3;

  function getColumns(colIndex) {
    return data.data.filter((data, idx) => idx % MAX_COLUMNs === colIndex);
  }

  return (
    <div className="flex bg-white h-screen w-screen">
      {/* Left Sidebar */}
      <aside className="fixed top-0 left-0 flex flex-col w-[20%] p-8 h-screen">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4">Cedric Florentin</h1>
        </div>
        <nav>
          <ul className="space-y-4 pl-4">
            <li>
              <a href="#digital-commercial">Digital/Commercial</a>
            </li>
            <li>
              <a href="#digital-other">Digital/Other</a>
            </li>
            <li>
              <a href="#analogue-commercial">Analogue/Commercial</a>
            </li>
            <li>
              <a href="#analogue-other">Analogue/Other</a>
            </li>
            <li>
              <a href="#infos">Infos</a>
            </li>
          </ul>
        </nav>
        <footer className="mt-auto bg-white p-4">
          <small className=" text-xs">Copyright 2023 Cedric Florentin</small>
        </footer>
      </aside>

      {/* Gallery */}

      <main className="ml-[20%] grid grid-cols-3 gap-2 p-4 pr-10">
        {[getColumns(0), getColumns(1), getColumns(2)].map((column, idx) => (
          <div key={idx} className="flex flex-col space-y-2">
            {column.map((data, index) => (
              <CloudinaryImage
                key={data.public_id}
                src={data.public_id}
                height={data.height}
                width={data.width}
                alt={data.public_id}
                format={'webp'}
                // rawTransformations={['c_scale,w_400']}
              />
            ))}
          </div>
        ))}
      </main>
    </div>
  );
}
