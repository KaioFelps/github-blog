import {
  AuthorBio,
  AuthorInfoContainer,
  AuthorInfoContent,
  AuthorInfoHeader,
  Layout,
  ProfilePicture,
} from "./style";
import { FaGithub, FaBuilding, FaUserFriends } from "react-icons/fa";

export function AuthorCard() {
  return (
    <Layout>
      <ProfilePicture src="" alt="" />

      <AuthorInfoContainer>
        <AuthorInfoHeader>
          <h1>Kaio Felipe</h1>

          <a href="" target="_blank">
            GITHUB
          </a>
        </AuthorInfoHeader>

        <AuthorBio>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </AuthorBio>

        <AuthorInfoContent>
          <span>
            <FaGithub size={18} />
            github user
          </span>
          <span>
            <FaBuilding size={18} />
            working company
          </span>
          <span>
            <FaUserFriends size={18} />
            followers amount
          </span>
        </AuthorInfoContent>
      </AuthorInfoContainer>
    </Layout>
  );
}
