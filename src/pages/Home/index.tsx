import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartButton, TaskInput } from "./styles"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"


const newCycleFormSchema = zod.object({
    task: zod.string().min(1, 'Inform the task name'),
    minutesAmount: zod.number().min(1).max(60)
})

type NewCycleFormData = zod.infer<typeof newCycleFormSchema>

export function Home(){
    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    })

    function handleCreateNewCycle(data: NewCycleFormData){
        console.log(data)
        reset()
    }

    const task = watch('task')
    const isSubmitDisabled = !task
    return (
       <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
                <FormContainer>
                    <label htmlFor="task">I will work on </label>
                    <TaskInput 
                    id="task" 
                    list="task-suggestions" 
                    placeholder="name your project"
                    {...register('task')}
                    />

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
                        min={1}
                        max={60}
                        {...register('minutesAmount', { valueAsNumber: true })}
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

                <StartButton type="submit" disabled={isSubmitDisabled} >
                    <Play size={24} />
                    Start
                </StartButton>
            </form>

       </HomeContainer>
    )
}