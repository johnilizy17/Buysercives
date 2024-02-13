import { instance } from "./axios";
import { UserProfileProps } from "./user.dto";



export const RegisterUser = async ( data:UserProfileProps) => {
	return instance.post(`register`, data);
};

export const UpdateUser = async ( data:any) => {
	return instance.post(`email`, data);
};

export const getNofication = async ( id:string) => {
	return instance.get(`notification/${id}`);
};

export const getLeader = async ( id: any) => {
	return instance.get(`/alltop/user/${id}`);
};

export const getBadge = async () => {
	return instance.get(`admin/badge`);
};

export const getTitle = async () => {
	return instance.get(`admin/title`);
};

export const getLink = async () => {
	return instance.get(`link/notification/`);
};