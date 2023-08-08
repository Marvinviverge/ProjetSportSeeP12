class LineChartModel {
    constructor(data) {
        this.dataModel = data.sessions.map((item) => {
            return {
                day: this.convertDayWeek(item.day),
                sessionLength: item.sessionLength,
            }
        })
    }

    convertDayWeek(day) {
        const dayWeek = [
            'L',
            'M',
            'M',
            'J',
            'V',
            'S',
            'D'
        ];
        return dayWeek[day - 1];
    }
}

export { LineChartModel };  