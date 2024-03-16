import { useNavigate } from "react-router-dom"

export const Header = () => {
    
    const navigate = useNavigate();

    return(
        <div className="flex flex-col justify-center items-center mt-16">
            <div className="mt-8 text-center text-5xl font-medium tracking-tight text-transparent md:text-8xl max-w-3xl">
                <span className="text-white">Linear is a </span><span className="bg-gradient-to-br from-white to-slate-500 py-4 bg-clip-text">better way to build products</span>
            </div>
                <p className="text-slate-300 mt-8 text-2xl max-w-2xl text-center">Meet the new standard for modern software development.</p>
                <p className="text-slate-300 text-2xl text-center">Streamline issues, sprints, and product roadmaps.</p>
            <button onClick={() => navigate('/signup')} className="bg-transparent font-m bg-white text-gray-800  py-1 px-3 rounded-full mt-12 w-32 h-12 font-medium">
                Get started {">"}
            </button>
        </div>
    )
}