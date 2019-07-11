import {ISession} from './ISession';

export interface IEvent {
  id: number;
  name: string;
  date: Date;
  time: string;
  price: number;
  imageUrl: string;
  location?: {
    address: string;
    city: string;
    country: string;
  };
  online?: string;
  sessions: ISession[];
}



