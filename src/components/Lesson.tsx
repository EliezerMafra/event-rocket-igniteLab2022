import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";

interface LessonProps{
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps){
    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR,
    })
    return(
    <>
        {isLessonAvailable?(
            <Link to={`/event/lesson/${props.slug}`} className="group">
                <span className="text-grey-300">
                    {availableDateFormatted}
                </span>

                <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
                    <header className="flex items-center justify-between">
                            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                                <CheckCircle size={20}/> 
                                Conteúdo liberado
                            </span>
                        <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
                            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                        </span>
                    </header>

                    <strong className="text-gray-200 mt-5 block">
                        {props.title}
                    </strong>
                </div>
            </Link>
        ):(
            <div className="group">
                <span className="text-grey-300">
                    {availableDateFormatted}
                </span>

                <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
                    <header className="flex items-center justify-between">
                            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                                <Lock size={20}/>
                                Em breve
                            </span>
                        <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold">
                            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                        </span>
                    </header>

                    <strong className="text-gray-200 mt-5 block">
                        {props.title}
                    </strong>
                </div>
            </div>
        )
        
        }
        
    </>
        
    )
}