type Scooter =  {
    id: number;
    isBusy: number;
    registrationCode: string;
    lastUseTime: string|null;
    totalRide: number;
    rideTariffPerKm: number;
    leaseTariffPerMin: number;
}

type Post = {
    id: number;
    title: string;
    description: string;
}