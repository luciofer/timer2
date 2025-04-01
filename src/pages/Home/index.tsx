import { Play } from "phosphor-react";
export function Home(){
    return (
       <div>
        <form action="">
            <div>
                <label htmlFor="task">I will work on </label>
                <input id="task" type="text" />
                <label htmlFor="minuteAmount">for</label>
                <input type="number" id="minuteAmount" />
                <span>minutes</span>
            </div>
            <div>
                <span>0</span>
                <span>0</span>
                <span>:</span>
                <span>0</span>
                <span>0</span>
            </div>

            <button type="submit">
                <Play size={24} />
                Start
            </button>
        </form>
       </div>
    )
}