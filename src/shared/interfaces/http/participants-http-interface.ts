import { IAddedParticipant } from "../participant-interface";
import { IUser } from "../user-interface";

export interface IGetUsersResponse {
  users: IUser[];
}

export interface IAddParticipantsRequest {
  participantsIds: string[];
}

export interface IAddParticipantsResponse {
  acitivityId: string;
  message: string;
  addedParticipants: IAddedParticipant[];
}

export interface IRemoveParticipantResponse {
  removedUserId: string;
  activityId: string;
  message: string;
  removedUserName: string;
}
