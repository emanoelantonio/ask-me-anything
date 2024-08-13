import { LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/ama-logo.svg";


export function CreateRoom() {

  const navigate = useNavigate()
  // function handleCreateRoom(data: FormData) {
  //   const theme = data.get('theme')?.toString()
  //   console.log(theme)
  //   navigate('/room/12893uqwu8fhsdaf')
  // }
  function handleCreateRoom(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const theme = data.get('theme')?.toString();
    
    console.log(theme);
    navigate('/room/12893uqwu8fhsdaf');
  }
  

  return (
    <main className="h-screen flex items-center justify-center px-4">
      <div className="max-w-[450px] flex flex-col gap-6">
        <img className="h-10" src={logo} alt="AMA logo laranja" />
        <p className="leading-relaxed text-zinc-300 text-center">
          Crie uma sala pública de AMA (Ask me anything) e priorize as perguntas
          mais importantes para a comunidade.
        </p>
        <form
          onSubmit={handleCreateRoom}
          // action={handleCreateRoom}
          className='flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 ring-orange-400 ring-offset-2 ring-offset-zinc-950 focus-within:ring-1'
        >
          <input 
            className='flex-1 text-sm bg-transparent mx-2 outline-none text-zinc-100 placeholder:text-zinc-500'
            type="text"
            name="theme"
            autoComplete='off'
            placeholder="Nome da sala"
          />
          <button
            className='bg-orange-400 text-orange-950 px-3 py-1.5 gap-1.5 flex items-center rounded-lg font-medium text-sm transition-colors hover:bg-orange-500 hover:text-white'
            type='submit'
          >
            Criar sala
            <LogIn className='size-4'/>
          </button>
        </form>
      </div>
    </main>
  );
}
