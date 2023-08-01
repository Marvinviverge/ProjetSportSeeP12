class RadialChartModel {
    constructor(data) {
        this.firstName = data.userInfos.firstName
        this.lastName = data.userInfos.lastName
        this.age = data.userInfos.age
        this.todayScore = data.todayScore ? data.todayScore * 100 : data.score * 100
        this.calorieCount = data.keyData.calorieCount
        this.carbohydrateCount = data.keyData.carbohydrateCount
        this.lipidCount = data.keyData.lipidCount
        this.proteinCount = data.keyData.proteinCount
    }

}

export { RadialChartModel };  