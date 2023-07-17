export interface StudentTypes {
  id: string
  firstName: string
  lastName: string
  dateOfBirth: any
  email: string
  mobile: number
  profileImageUrl: string
  genderId: string
  gender: Gender
  address:  Address
}

export interface Gender {
  id: string
  description: string
}

export interface Address {
  id: string,
  physicalAddress: string,
  postalAddress: string
  studentId: any
}
