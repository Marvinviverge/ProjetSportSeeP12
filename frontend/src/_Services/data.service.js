import Activity from "@/Assets/data/mock/mock_USER_ACTIVITY.json"
import Sessions from "@/Assets/data/mock/mock_USER_AVERAGE_SESSIONS.json"
import Maindata from "@/Assets/data/mock/mock_USER_MAIN_DATA.json"
import Performance from "@/Assets/data/mock/mock_USER_PERFORMANCE.json"

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
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.error('Error fetching data:', error);

        // Utilisation des données fictives (mock)
        const newData = Activity.find((user) => user.userId === currentUserId);
        return new BarChartModel(newData);
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
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.error('Error fetching data:', error);

        // Utilisation des données fictives (mock)
        const newData = Sessions.find((user) => user.userId === currentUserId);
        return new LineChartModel(newData);
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
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.error('Error fetching data:', error);

        // Utilisation des données fictives (mock)
        const newData = Performance.find((user) => user.userId === currentUserId);
        return new RadarChartModel(newData);
    }
};

let GetMaindata = async (currentUserId) => {
    try {
        const response = await fetch(`http://localhost:3000/user/${currentUserId}`);

        if (response.ok) {
            const data = await response.json();
            if (data) {
                console.log("Vous êtes sur les données de l'API");
                return new RadialChartModel(data.data);
            }
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.error('Error fetching data:', error);

        // Utilisation des données fictives (mock)
        const newData = Maindata.find((user) => user.id === currentUserId);
        console.log('Vous êtes sur les données du MOCK');
        return new RadialChartModel(newData);
    }
};

let GetAllUsers = () => {
    return Maindata
}

const DataService = {
    GetActivity,
    GetSessions,
    GetMaindata,
    GetPerformance,
    GetAllUsers
}

export default DataService