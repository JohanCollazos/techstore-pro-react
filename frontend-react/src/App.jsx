import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function App() {

  return (
    <main className="max-w-6xL mx-auto px-6 py-10 flex flex-col gap-10">

      <Navbar />

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">


        {/* Tarjeta 1 */}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://images.unsplash.com/photo-1707592691247-5c3a1c7ba0e3?w=400&h=300&fit=crop" className="rounded-lg" />
          <h3 className="font-bold text-lg">Mouse Inalambrico</h3>
          <p classhame="text-texto-dim text-sm">Mouse ergonmico, conexión Bluetooth</p>
          <p className="text-verde font-extrabold">$89.980</p>
        </div>

        {/* Tarjeta 2 */}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://images.unsplash.com/photo-1688966861542-600082fc6172?w=400&h=300&fit=crop" className="rounded-lg" />
          <h3 className="font-bold text-lg">Teclado Mecanico</h3>
          <p className="text-texto-dim text-sm">Switches azules, retroiluminado RGB</p>
          <p className="text-verde font-extrabold">$149.900</p>
        </div>

        {/* Tarjeta 3 */}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://images.unsplash.com/photo-1551645120-d70bfe84c826?w=400&h=300&fit=crop" className="rounded-lg" />
          <h3 className="font-bold text-lg">Monitor 24"</h3>
          <p className="text-texto-dim text-sm">Full HD, 75Hz, panel IPS</p>
          <p className="text-verde font-extrabold">$899.980</p>
        </div>

      </section>


      <Footer />
    </main>
  )
}

export default App


