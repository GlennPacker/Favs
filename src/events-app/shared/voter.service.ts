import {ISession} from './ISession';
import {Injectable} from '@angular/core';

@Injectable()
export class VoterService {
  removeVote(session: ISession, user: string) {
    session.voters = session.voters.filter(voter => voter !== user)
  }

  addVote(session : ISession, user: string) {
    session.voters.push(user);
  }

  hasVoted (session : ISession, user: string) {
    return session.voters.some(voter => voter === user);
  }
}
