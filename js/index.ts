import * as member from "./member";
import * as room from "./room";
import * as record from "./record";
import {getYourId as getYourIdInner} from "./yourid";

export function syncMember(roomid:string,callback: (json:string) => void,onError: () => void) : () => void {
    return member.syncMember(roomid,callback,onError);
}

export function registerMember(roomid:string,name:string,onError: () => void) {
    member.registerMember(roomid,name).catch(onError);
}

export function fetchMembers(roomid:string,callback: (json:string) => void,onError: () => void) {
    member.fetchMembers(roomid,callback,onError);
}

export async function createRoom(roomId:string,hostUserName:string,callback:(callback:string) => void,onError: () => void) {
    room.createRoom(roomId,hostUserName).then(() => callback(roomId)).catch(onError)
}

export function syncRoom(roomId:string,callback:(id:string | null) => void,onError: () => void) : () => void {
    return room.syncRoom(roomId,callback,onError)
}

export function startRoom(roomId:string,onError: () => void) {
    room.startRoom(roomId).catch(onError);
}

export const pushRecord = (roomId:string,recordId:string,commandJson:string,resultJson:string,onError: () => void)=> {
    return record.pushRecord(roomId,recordId,commandJson,resultJson).catch(onError);
}

export const syncRecordUpdate = (roomId:string,listener: (json:string) => void,onError: () => void) : () => void => {
    return record.syncRecordUpdate(roomId,listener,onError);
}

export const getYourId = (roomid: string) => getYourIdInner(roomid) 