class CardEntersPlayTracker {
    static forPhase(game) {
        return new CardEntersPlayTracker(game, 'onPhaseEnded');
    }

    constructor(game, endingEvent) {
        this.events = [];

        game.on('onCardEntersPlay', event => this.trackEvent(event));
        game.on(endingEvent, () => this.clearEvents());
    }

    trackEvent(event) {
        this.events.push(event);
    }

    clearEvents() {
        this.events = [];
    }
}

module.exports = CardEntersPlayTracker;
