import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartButton, TaskInput } from "./styles"
export function Home(){
    return (
       <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">I will work on </label>
                    <TaskInput id="task" list="task-suggestions" placeholder="name your project" />
                    <datalist id="task-suggestions">
                        <option value="Project 1" />
                        <option value="Project 2" />
                        <option value="Project 3" />
                    </datalist>

                    <label htmlFor="minuteAmount">for</label>
                    <MinutesAmountInput 
                        type="number" 
                        id="minuteAmount" 
                        placeholder="00" 
                        step={5}
                        min={5}
                        max={60}
                    />
                    <span>minutes</span>
                </FormContainer>
                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartButton type="submit" disabled>
                    <Play size={24} />
                    Start
                </StartButton>
            </form>

       </HomeContainer>
    )
}