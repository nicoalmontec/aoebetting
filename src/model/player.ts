export interface ApiPlayer {
    profileID:    number;
    steamID:      string;
    name:         string;
    clan:         string;
    country:      string;
    slot:         number;
    slotType:     number;
    rating:       number;
    ratingChange: number;
    games:        number;
    wins:         number;
    streak:       number;
    drops:        number;
    color:        number;
    team:         number;
    civ:          number;
    won:          boolean;
}

export class Player {
    constructor(private username: string,
                private elo: Number,
                private country: string,
                private id?: string,
                ) {
    }

    get getUsername(): string {
        return this.username;
    }

    get getElo(): Number {
        return this.elo;
    }

    get getCountry(): string {
        return this.country;
    }

    get getId(): string | undefined {
        return this.id;
    }
}
