export class Student {
  id?: number;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: Date;
  email?: string;
  mobile?: string;
  profileImageUrl?: string;
  genderId?: number;
  gender?: Gender[];
  address?: Adress[];
}

export class Gender {
  id?: number;
  name?: string;
}

export class Adress {
  id?: number;
  street?: string;
  city?: string;
  state?: string;
  country?: string;
}
