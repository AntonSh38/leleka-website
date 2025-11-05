export interface User {
  email: string;
  password: string;
}

export interface UserData {
  user: {
    _id: string;
    name: string;
    email: string;
    avatarUrl: string;
    dueDate: string;
    babyGender: string;
    theme: string;
  };
}
