class UserPerformanceModel {
    constructor(data) {
        this.dataPerformance = data.data.map((item) => {
            return {
                kind: this.convertKind(item.kind),
                value: item.value,
            }
        })
        this.changeOrder()
    }

    changeOrder() {
        let newItemOrder = [{ kind: 'Intensité' }, { kind: 'Vitesse' }, { kind: 'Force' }, { kind: 'Endurance' }, { kind: 'Energie' }, { kind: 'Cardio' }]

        this.dataPerformance = newItemOrder.map((item) => ({ ...item, ...this.dataPerformance.filter((d) => d.kind == item.kind)[0] }))
    }

    convertKind(kind) {
        const categories = [
            'Cardio',
            'Energie',
            'Endurance',
            'Force',
            'Vitesse',
            'Intensité',
        ];
        return categories[kind - 1];
    }
}

export { UserPerformanceModel };  