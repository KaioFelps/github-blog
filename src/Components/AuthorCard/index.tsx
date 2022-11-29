import {
  AuthorBio,
  AuthorInfoContainer,
  AuthorInfoContent,
  AuthorInfoHeader,
  Layout,
  ProfilePicture,
} from "./style";
import { FaGithub, FaBuilding, FaUserFriends } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

type userInfo = {
  name: string;
  bio: string;
  profilePictureUrl: string;
  githubUrl: string;
  githubUserName: string;
  companyName: string | null;
  followersAmount: number;
};

export function AuthorCard() {
  const [userInfos, setUserInfos] = useState({} as userInfo);

  const fetchUsersData = useCallback(async () => {
    const response = await axios.get("https://api.github.com/users/kaiofelps");
    const data = await response.data;

    setUserInfos({
      githubUserName: data.login,
      name: data.name,
      bio: data.bio,
      followersAmount: data.followers,
      profilePictureUrl: data.avatar_url,
      githubUrl: data.html_url,
      companyName: data.company,
    });
  }, []);

  useEffect(() => {
    fetchUsersData();
  }, [fetchUsersData]);

  return (
    <Layout>
      <ProfilePicture src={userInfos.profilePictureUrl} alt="" />

      <AuthorInfoContainer>
        <AuthorInfoHeader>
          <h1>{userInfos.name}</h1>

          <a href={userInfos.githubUrl} target="_blank" rel="noreferrer">
            GITHUB
            <BsBoxArrowUpRight size={12} />
          </a>
        </AuthorInfoHeader>

        <AuthorBio>{userInfos.bio}</AuthorBio>

        <AuthorInfoContent>
          <span>
            <FaGithub size={18} />
            {userInfos.githubUserName}
          </span>
          {userInfos.companyName !== null ? (
            <span>
              <FaBuilding size={18} />
              {userInfos.companyName}
            </span>
          ) : null}
          <span>
            <FaUserFriends size={18} />
            {userInfos.followersAmount}
            {userInfos.followersAmount === 1 ? " seguidor" : " seguidores"}
          </span>
        </AuthorInfoContent>
      </AuthorInfoContainer>
    </Layout>
  );
}
