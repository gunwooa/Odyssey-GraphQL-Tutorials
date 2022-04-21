import React from "react";
import { gql, useQuery } from "@apollo/client";

import { Layout } from "../components";
import TrackCard from "../containers/track-card";
import { QueryResult } from "../components";

export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;

const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult loading={loading} error={error} data={data}>
        {data?.tracksForHome?.map((track) => {
          return <TrackCard key={track.id} track={track} />;
        })}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
