export interface LoginResponse {
  accessToken: string;
}

export enum UserRole {
  user="UserRole::User", 
  admin="UserRole::SystemAdmin", 
}

export class User {
  username: string; 
  email: string; 
  roles: string[]; 
  displayName: string; 
  avatar: string;
}

export class Activity {
  title: string; 
  decs: string; 
  credit: number; 
  author: string;
}


export enum TodoStatus {
  done='TODO::STATUS::DONE',
  processing='TODO::STATUS::PROCESSING',
  archive='TODO::STATUS::ARCHIVE',
}

export class Todo {
  title: string;
  desc: string;
  userId: string;
  status: string;
}


export enum TransferType {
  buyItem = 'TRANSFERTYPE::BUYITEM',
  reward = 'TRANSFERTYPE::REWARD',
}

export class TransferAuditLog {
  from: string;
  to: string;
  type: string;
  amount: number;
}

export enum HashingAlgorithm {
  BCrypt=10,
}

export type PasswordCredential = {
  password: string; 
  algorithm: HashingAlgorithm;
}

export class Auth {
  public userId: string; 
  public credential: PasswordCredential;
}

export enum ActivityAuditLogStatus {
  joining = 'AUDITLOG::STATUS::JOINING',
  done = 'AUDITLOG::STATUS::DONE',
}
export class ActivityAuditLog {
  activityId: string;
  userId: string;
}