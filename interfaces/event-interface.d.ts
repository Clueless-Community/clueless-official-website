export interface IEvent {
    event_name: string,
    event_banner_image: string,
    event_icon_image: string,
    venue_name: string,
    speakers_info: {
        profileURL: string;
    }[],
    date: Date | null,
    time_period: string,
    agenda: {
        time: string;
        description: string;
    }[]
}
