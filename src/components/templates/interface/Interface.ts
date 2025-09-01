export interface FormData {
  email: string;
  password: string;
  rePassword?: string;
}

export interface FormValues {
  title: string;
  description: string;
  location: string;
  phone: string;
  price: string;
  realState: string;
  constructionDate: Date;
  category: string;
  rules: string[];
  amenities: string[];
}

export interface ProfileResponse extends FormValues {
  _id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  message: string;
  error: string;
  data: object
}
