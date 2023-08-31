import { BarChartModel } from "@/Components/Models/BarChart_Model.js"
import { LineChartModel } from "@/Components/Models/LineChart_Model.js"
import { RadarChartModel } from "@/Components/Models/RadarChart_Model.js"
import { RadialChartModel } from "@/Components/Models/RadialChart_Model.js"

let GetActivity = async (currentUserId) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${currentUserId}/activity`);

        if (response.ok) {
            const data = await response.json();
            if (data) {
                return new BarChartModel(data.data);
            }
        } else {
            throw new Error('true');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

let GetSessions = async (currentUserId) => {
    try {
        const response = await fetch(
            `http://localhost:3000/user/${currentUserId}/average-sessions`
        );

        if (response.ok) {
            const data = await response.json();
            if (data) {
                return new LineChartModel(data.data);
            }
        } else {
            throw new Error('true');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

let GetPerformance = async (currentUserId) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${currentUserId}/performance`);

        if (response.ok) {
            const data = await response.json();
            if (data) {
                return new RadarChartModel(data.data);
            }
        } else {
            throw new Error('true');
        }
    } catch (error) {
        return false
    }
};

let GetMaindata = async (currentUserId) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${currentUserId}`);

        if (response.ok) {
            const data = await response.json();
            if (data) {
                return new RadialChartModel(data.data);
            }
        } else {
            throw new Error('true');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const DataService = {
    GetActivity,
    GetSessions,
    GetMaindata,
    GetPerformance
}

export default DataService