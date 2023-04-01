export interface ITechStack {
  name: string;
}

export interface IProjectUser {
  project_id: string;
  project_image: string;
  project_name: string;
  public_link?: string;
  github_link?: string;
  project_desc: string;
  techstacks: ITechStack[];
}

export interface IUser {
  uid: string;
  name: string;
  image: string;
  email: string;
  college?: string;
  graduation_year?: number;
  github_link?: string;
  linkedIn_link?: string;
  twitter_link?: string;
  about?: string;
  techstack?: ITechStack[];
  projects?: IProjectUser[];
}
