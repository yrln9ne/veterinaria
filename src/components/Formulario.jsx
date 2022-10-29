const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5 ">
        <h2 className="font-black text-2xl text-center  text-blue-300">Seguimiento Pacientes</h2>

        <p className="text-lg mt-10 text-center mb-10 text-blue-300">
          Añade Pacientes y {""}
          <span className="text-indigo-500 font-bold">Administralos</span>
        </p>

        <form className="bg-white shadow-lg shadow-indigo-500/50 rounded-lg py-10 px-5 mb-24">
          <div className="">
            <label htmlFor="mascota" className="block text-blue-700 uppercase text-sm font-bold">
              Nombre de la Mascota
            </label>
            <input
              id="mascota" 
              type="text"
              placeholder="Escriba nombre de la mascota..."
              className="border-2 w-full p-2 mt-2 placeholder-indigo-300 rounded-md"
            />
          </div>
          <div className="mt-10">
            <label htmlFor="propietario" className="block text-blue-700 uppercase text-sm font-bold">
              Nombre del propietario
            </label>
            <input
              id="propietario" 
              type="text"
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-indigo-300 rounded-md"
            />
          </div>
          <div className="mt-10">
            <label htmlFor="email" className="block text-blue-700 uppercase text-sm font-bold">
              Email del propietario
            </label>
            <input
              id="email" 
              type="email"
              placeholder="Email..."
              className="border-2 w-full p-2 mt-2 placeholder-indigo-300 rounded-md"
            />
          </div>
          <div className="mt-10">
            <label htmlFor="alta" className="block text-blue-700 uppercase text-sm font-bold">
              alta
            </label>
            <input
              id="alta" 
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-indigo-300 rounded-md"
            />
          </div>
          <div className="mt-10">
            <label htmlFor="sintomas" className="block text-blue-700 uppercase text-sm font-bold">
              sintomas
            </label>
            <textarea
              id="sintomas" 
              className="border-2 w-full p-2 mt-2 placeholder-indigo-300 rounded-md"
              placeholder="Descripción de los sintomas"
            />
          </div>

          <input
              value="Agregar paciente" 
              type="submit"
              className="bg-indigo-600 w-full p-3 text-white uppercase font-bold mt-3 text-sm hover:bg-green-700 cursor-pointer"
          />
        </form>
    </div>

    

    
    
    
  )
}

export default Formulario
 