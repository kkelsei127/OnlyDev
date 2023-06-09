import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
mutation RegisterUser($firstName: String!, $lastName: String!, $username: String!, $password: String!) {
  registerUser(firstName: $firstName, lastName: $lastName, username: $username, password: $password) {
    user {
      firstName
    }
    token
  }
}
`;

export const LOGIN_USER = gql`
mutation loginUser($username: String!, $password: String!) {
  loginUser(username: $username, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const EDIT_PROFILE = gql`
mutation Mutation($username: String!, $location: String!, $jobTitle: String!, $skills: String!, $contact: String!) {
  editUser(username: $username, location: $location, jobTitle: $jobTitle, skills: $skills, contact: $contact) {
    contact
    firstName
    jobTitle
    lastName
    location
    skills
    username
  }
}
`;

export const HELP_POST = gql`
mutation createHelpPost($title: String!, $languages: String!, $timeline: String!, $description: String!, $contact: String!) {
  createHelpPost(title: $title, languages: $languages, timeline: $timeline, description: $description, contact: $contact) {
      _id
      title
      languages
      timeline
      description
      contact
  }
}
`;

