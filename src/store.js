export default {
    state: {
        goldTotal: 0,
        activity: []
    },
    sumarOro(newOro){
        this.state.goldTotal = this.state.goldTotal + newOro;
    },
    addActivity(newActivity){
        this.state.activity = [...this.state.activity, newActivity];
    },
    resetGold(){
        this.state.goldTotal = 0;
    },
    resetActivities(){
        this.state.activity = [];
    }
}