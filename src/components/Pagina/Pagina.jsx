import Imagem from '../../assets/user.jpg'

const Pagina =()=>{


    return (
        <>
        <h1 className="text-3xl font-bold underline text-center text-red-600">Perfil Dev</h1>

        <div className="relative w-96 m-3 cursor-pointer border-2 shadow-lg rounded-xl items-center">
            <div className="flex h-28 bg-blue-700 rounded-xl items-center justify-center">
                <h1 className="absolute mx-auto text-center text-2xl text-yellow-100">
                    Meu Post
                </h1>
            </div>
            <div className="p-2 border-b-2">
                <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quisquam optio aspernatur facere, nulla libero eos voluptatum cumque aliquam a. Harum exercitationem, aliquid doloremque illo laboriosam iste ipsa doloribus iusto.
                </h6>
                <div className=" flex flex-wrap items-center m-2">
                    <span className="border border-blue-500 rounded-2xl px-2 my-1 mx-1">
                        #HTML
                    </span>
                    <span className="border border-blue-500 rounded-2xl px-2 my-1 mx-1">
                        #React
                    </span>
                    <span className="border border-blue-500 rounded-2xl px-2 my-1 mx-1">
                        #JavaScript
                    </span>          
                </div>
                <div className=" flex flex-wrap items-center rounded-b-xl border-t-2 bg-white">
                    <button className="border rounded-2xl bg-red-400 text-black shadow-sm p-1 px-2 m-2" >
                        Projetos
                    </button>
                    <button className="border rounded-2xl bg-red-400 text-black shadow-sm p-1 px-2 m-2 hover:bg-green-500">
                        Comunidade Dev
                    </button>
                </div>
            </div>
        </div>

        <div className="py-8 px-8 max-w-sm mx-auto bg-slate-100 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img className=" block mx-auto h-24  rounded-full sm:mx-0" src={Imagem} alt="imagem" />
        <div className='text-center space-y-2 sm:text-left'>
            <div className='space-y-0.5'>
                <p className='text-lg text-black font-semibold'>
                    Wellington
                </p>
                <p className='text-slate-500 font-medium'>
                    Engenheiro de Software
                </p>
            </div>

        </div>
        </div>

        </>
    )
}
export default Pagina