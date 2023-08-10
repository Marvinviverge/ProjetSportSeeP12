import Activity from "@/Assets/data/mock/mock_USER_ACTIVITY.json"
import Sessions from "@/Assets/data/mock/mock_USER_AVERAGE_SESSIONS.json"
import Maindata from "@/Assets/data/mock/mock_USER_MAIN_DATA.json"
import Performance from "@/Assets/data/mock/mock_USER_PERFORMANCE.json"

import { BarChartModel } from "@/Components/Models/BarChart_Model.js"
import { LineChartModel } from "@/Components/Models/LineChart_Model.js"
import { RadarChartModel } from "@/Components/Models/RadarChart_Model.js"
import { RadialChartModel } from "@/Components/Models/RadialChart_Model.js"

let GetPerformanceMock = async (currentUserId) => {
    // Utilisation des données fictives (mock)
    const newData = Performance.find((user) => user.userId === currentUserId);
    return new RadarChartModel(newData);
}

let GetMaindataMock = async (currentUserId) => {
    // Utilisation des données fictives (mock)
    const newData = Maindata.find((user) => user.id === currentUserId);
    return new RadialChartModel(newData);
}

let GetActivityMock = async (currentUserId) => {
    const newData = Activity.find((user) => user.userId === currentUserId);
    return new BarChartModel(newData);
}

let GetSessionsMock = async (currentUserId) => {
    // Utilisation des données fictives (mock)
    const newData = Sessions.find((user) => user.userId === currentUserId);
    return new LineChartModel(newData);
}

let GetAllUsers = () => {
    return Maindata
}

const MockService = {
    GetMaindataMock,
    GetSessionsMock,
    GetActivityMock,
    GetPerformanceMock,
    GetAllUsers
}

export default MockService