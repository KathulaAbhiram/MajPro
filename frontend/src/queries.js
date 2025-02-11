import { gql } from '@apollo/client';

var Get = gql`
  query GotAll {
    users {
      id
      name
      email
    }
  }
`;

var Get_User = gql`
  query GetHIm($id: ID!) {
    userfromid(id: $id) {
      name
      email
    }
  }
`;


export var Get,Get_User;