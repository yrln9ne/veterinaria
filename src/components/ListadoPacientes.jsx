 import Paciente from "./Paciente"
 
 const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 text-blue-300 lg:w-3/5 ml-4 md:h-screen overflow-y-auto">
        <h2 className="text-2xl font-black text-center">Listado Pacientes</h2>
        <p className="text-lg mt-10 text-center mb-10 text-blue-300">
          Administra tus {""}
          <span className="text-indigo-500 font-bold">pacientes y citas</span>
        </p>
        <Paciente/>
        <Paciente/>
        <Paciente/>
        <Paciente/>
        <Paciente/>
            
    </div>
  )
}

export default ListadoPacientes