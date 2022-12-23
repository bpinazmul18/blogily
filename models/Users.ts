interface UserCompany {
    
        name: string,
        catchPhrase: string,
        bs: string
    
}

interface UserAddressGeoLocation {
    lat:  string,
    lng: string
}

interface UserAddress {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo:  UserAddressGeoLocation
}

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: UserAddress,
    phone: string,
    website: string,
    company: UserCompany
  }
  
  export interface UsersInitialStateProps {
    loading: boolean
    list: User[]
    lastFetch: number
  }
  