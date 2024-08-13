import { ThumbsUp } from "lucide-react";
import { useState } from "react";

interface MessageProps {
  text: string;
  amountOfReactions: number;
  answered?: boolean;
}


export function Message({ text, amountOfReactions, answered = false }: MessageProps) {
  
  const [hasReacted, setHasReacted] = useState(false)
  
  function handleReactToMessage() {
    setHasReacted(true)
  }

  return (
    <li
      className="ml-4 leading-relaxed text-zinc-100 data-[answared=true]:opacity-50 data-[answered=true]:pointer-events-none"
      data-answared={answered}
    >
      {text}
      {hasReacted ? (
        <button
          className="mt-3 flex items-center gap-2 text-orange-400 text-sm font-medium hover:text-orange-500"
          type="button"
        >
          <ThumbsUp className="size-4"/>
          Curtir pergunta ({amountOfReactions})
        </button>
      ) : (
          <button
            className="mt-3 flex items-center gap-2 text-zinc-400 text-sm font-medium hover:text-zinc-300"
            onClick={handleReactToMessage}
            type="button"
          >
            <ThumbsUp className="size-4"/>
            Curtir pergunta ({amountOfReactions})
          </button>
      )}
    </li>
  )
}
