import { HistoryContainer, HistoryList, Status } from "./styles"


export function History() {
    return (
        <HistoryContainer>
            <h1>My History</h1>
            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Duration</th>
                            <th>Start</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Test</td>
                            <td>20 minutos</td>
                            <td>Há 1 hora</td>
                            <td>
                                <Status statusColor={"green"}>Sucess</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td>20 minutos</td>
                            <td>Há 1 hora</td>
                            <td>
                                <Status statusColor={"green"}>Sucess</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td>20 minutos</td>
                            <td>Há 1 hora</td>
                            <td>
                                <Status statusColor={"green"}>Sucess</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td>20 minutos</td>
                            <td>Há 1 hora</td>
                            <td>
                                <Status statusColor={"yellow"}>Ongoing</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td>20 minutos</td>
                            <td>Há 1 hora</td>
                            <td>
                                <Status statusColor={"green"}>Sucess</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td>20 minutos</td>
                            <td>Há 1 hora</td>
                            <td>
                                <Status statusColor={"red"}>Interrupted</Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}