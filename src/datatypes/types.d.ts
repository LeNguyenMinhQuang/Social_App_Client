export interface IUserData {
  _id?: string;
  userName?: string;
  email?: string;
  role?: {
    _id: string;
    name: string;
  };
  fullName?: string | null;
  phone?: string | null;
  dateOfBirth?: string | null;
  address?: string | null;
  bio?: string | null;
  gender?: "dog" | "cat" | "male" | "female";
  avatar?: string | null;
  isActive?: boolean;
  isPrivate?: boolean;
  following?: string[];
  follower?: string[];
  followingCount?: number;
  followedCount?: number;
}

export interface UploadFilePayload {
  formData: FormData;
  folderType: string;
}

export interface IPost {
  _id?: string;
  userId?: IUserData;
  content: string;
  emotion?: string | null;
  images?: string[];
  isPublic?: string;
  location?: string;
  mentions?: string[];
  likeBy?: string[];
  likesCount?: number;
  comments?: string[];
  commentsCount?: number;
  sharesCount?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IResponsePostApi {
  meta: {
    page: number;
    limit: number;
    pages: number;
    total: number;
  };
  data: IPost[];
}

export interface IPostQuery {
  page?: number;
  isPublic?: "public" | "onlyFans" | "onlyMe";
}
