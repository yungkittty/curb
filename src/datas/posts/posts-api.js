import axios from "axios";

const postsApi = {
  getPosts: ({ groupId, page, count }) =>
    axios.get(`/contents/posts/list/${groupId}?page=${page}&count=${count}`)

  /* ({ groupId, count, page }) => ({
    count,
    page,
    data: [
      {
        id: "5d7f8af330243d00300c79ec",
        creatorId: "5d499299e1fa4b002a207a06",
        groupId: "5d7f8aed4244b60030c9a8e0",
        pinned: false,
        reaction: {
          number: 0,
          ids: []
        },
        createdAt: "2019-09-16T13:15:31.182Z",
        updatedAt: "2019-09-16T13:15:55.866Z",
        medias: [
          {
            id: "5d7f8af930243d00300c79ed",
            postId: "5d7f8af330243d00300c79ec",
            type: "text",
            data: "aze",
            createdAt: "2019-09-16T13:15:37.303Z",
            updatedAt: "2019-09-16T13:15:37.303Z"
          },
          {
            id: "5d7f8afe30243d00300c79ee",
            postId: "5d7f8af330243d00300c79ec",
            type: "location",
            data: "l:10;l:20",
            createdAt: "2019-09-16T13:15:42.159Z",
            updatedAt: "2019-09-16T13:15:42.159Z"
          },
          {
            id: "5d7f8b0130243d00300c79ef",
            postId: "5d7f8af330243d00300c79ec",
            type: "text",
            data: "aze",
            createdAt: "2019-09-16T13:15:45.860Z",
            updatedAt: "2019-09-16T13:15:45.860Z"
          },
          {
            id: "5d7f8b0530243d00300c79f0",
            postId: "5d7f8af330243d00300c79ec",
            type: "image",
            data: "/contents/uploads/groups/5d7f8ae/.../f6-a600-ca5bf3e75e7d.jpeg",
            createdAt: "2019-09-16T13:15:49.726Z",
            updatedAt: "2019-09-16T13:15:49.726Z"
          },
          {
            id: "5d7f8b0b30243d00300c79f1",
            postId: "5d7f8af330243d00300c79ec",
            type: "video",
            data: "/contents/uploads/groups/5d7f8ae/.../51-a7e7-ff3a51e324d2.mp4",
            createdAt: "2019-09-16T13:15:55.861Z",
            updatedAt: "2019-09-16T13:15:55.861Z"
          }
        ]
      },
      {
        id: "5d7fdfd5e5eb76010d978007",
        creatorId: "5d499299e1fa4b002a207a06",
        groupId: "5d7f8aed4244b60030c9a8e0",
        pinned: false,
        reaction: {
          number: 0,
          ids: []
        },
        createdAt: "2019-09-16T19:17:41.986Z",
        updatedAt: "2019-09-16T19:17:54.722Z",
        medias: [
          {
            id: "5d7fdfdee5eb76010d978008",
            postId: "5d7fdfd5e5eb76010d978007",
            type: "text",
            data: "aze",
            createdAt: "2019-09-16T19:17:50.579Z",
            updatedAt: "2019-09-16T19:17:50.579Z"
          },
          {
            id: "5d7fdfe2e5eb76010d978009",
            postId: "5d7fdfd5e5eb76010d978007",
            type: "location",
            data: "l:10;l:20",
            createdAt: "2019-09-16T19:17:54.711Z",
            updatedAt: "2019-09-16T19:17:54.711Z"
          }
        ]
      }
    ]
  }) */

  //
};

export default postsApi;
