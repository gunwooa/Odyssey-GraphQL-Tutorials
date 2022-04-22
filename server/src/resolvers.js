const resolvers = {
  Query: {
    /**
     *
     * @param {*} parent
     * parent는 이 필드의 부모에 대한 해결사의 반환된 값입니다. 이것은 리졸바 체인을 다룰 때 유용합니다.
     * @param {*} args
     * args는 GraphQL 작업에 의해 필드에 제공된 모든 GraphQL 인수를 포함하는 개체입니다.
     * 특정 항목(예: 모든 트랙 대신 특정 트랙)을 쿼리할 때 클라이언트-랜드에서 id 인수로 쿼리를 만들고 서버-랜드의 이 args 매개 변수를 통해 액세스할 수 있습니다.
     * @param {*} context
     * context는 특정 작업에 대해 실행 중인 모든 해결사에서 공유되는 개체입니다.
     * 확인자는 인증 정보, 데이터베이스 연결 또는 REST DataSource와 같은 상태를 공유하기 위해 이 컨텍스트 인수가 필요합니다.
     * @param {*} info
     * 정보에는 필드 이름, 루트에서 필드의 경로 등을 포함하여 작업의 실행 상태에 대한 정보가 포함되어 있습니다.
     * 이 기능은 다른 기능만큼 자주 사용되지는 않지만 캐시 정책을 해결사 수준에서 설정하는 것과 같은 고급 작업에 유용할 수 있습니다.
     */
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },

    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },

  Track: {
    author: async ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};

module.exports = resolvers;
