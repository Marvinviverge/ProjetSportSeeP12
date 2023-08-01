import Activity from "@/Assets/data/mock/mock_USER_ACTIVITY.json"
import Sessions from "@/Assets/data/mock/mock_USER_AVERAGE_SESSIONS.json"
import Maindata from "@/Assets/data/mock/mock_USER_MAIN_DATA.json"
import Performance from "@/Assets/data/mock/mock_USER_PERFORMANCE.json"

import { BarChartModel } from "@/Components/Models/BarChart_Model.js"
import { LineChartModel } from "@/Components/Models/LineChart_Model.js"
import { RadarChartModel } from "@/Components/Models/RadarChart_Model.js"
import { RadialChartModel } from "@/Components/Models/RadialChart_Model.js"

let GetAllActivity = () => {
    return new BarChartModel(Activity[0].sessions);
}

let GetAllSessions = () => {
    return new LineChartModel(Sessions[0].sessions);
}

let GetAllMaindata = () => {
    return new RadialChartModel(Maindata[0]);
}

let GetAllPerformance = () => {
    return new RadarChartModel(Performance[0]).dataPerformance;
}


const DataService = {
    GetAllActivity,
    GetAllSessions,
    GetAllMaindata,
    GetAllPerformance
}

export default DataService